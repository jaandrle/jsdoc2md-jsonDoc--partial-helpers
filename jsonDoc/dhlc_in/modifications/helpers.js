/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= {
    /* HTML PART */
    toID: function(c,f){ return (c+( f ? "/"+this.toComponentName(f) : "" )).replace(/[^\wěščřžýáíéúůĚŠČŘŽÝÁÍÉÚŮťŤňŇ]/g, "-").toLowerCase(); },
    toFileName: file=> file.substring(file.lastIndexOf("/")+1),
    toComponentName: function(file, c){
        const fn= this.toFileName(file), _fn= fn.substring(0, fn.indexOf("."));
        if(_fn==="inc") return fn.substring(fn.indexOf(".")+1, fn.lastIndexOf("."));
        return _fn==="index"&&c ? c : _fn;
    },
    handleLinks: function(text){
        return text.replace(/\{@link ([^\}]*)\}/g, (_, id)=> `[${this.toFileName(id)}](#nav_${this.toID(id)})`);
    },
    isDynamicHTML: (params, depends)=> params||depends ? "dynamické" : "statické",
    /* API PART */
    isRequest: function(file){
        if(/inc\./g.test(file)) return "pomocný script";
        const file_name= this.toFileName(file);
        const action= `action="${file_name.substring(0, file_name.lastIndexOf("."))}"`;
        return `veřejně přístupné přes **POST** jako \`${action}\`.`;
    },
    isDynamicAPI: (params, depends)=> depends ? "dynamické" : "statické",
    typedArray: function([ _type, description ]){
        const type= /\[\]$/.test(_type) ? `\`Array.<${_type.replace("[]", "")}>\``: `\`${_type}\``;
        return `${type} | ${this.joinLines(description, "<br>&nbsp;&nbsp;")}`;
    },
    defaultParams: function(template_main, template, type){
        if(!type) return "";
        const def= {
            user: {
                hash: [ "`String`", "Identifikátor uživatele" ]
            }
        };
        const def_type= def[type];
        const text= type==="function" ? "použít jako argumenty funkce" : ( type==="namespace" ? "dospupné veřejné proměnné/funkce/… v tomto scriptu" : "použít jako **POST** klíče" );
        return this.partial(template_main, text) + ( def_type ? this.partial(template, def_type, "loop", "\n")+"\n" : "" );
    },
    defaultReturns: function(ret, template){
        if(!ret||!Object.keys(ret).length) return "";
        return this.partial(template, { success: [ "`Number`", "Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou)." ] }, "loop", "\n")+"\n";
    },
    /* BOTH */
    toStructure: function(id_synamic_name, data){
        const toCompare= o=> (o.category+"/000"+this.toComponentName(o.file)).toLowerCase();
        const map= data.sort((a, b)=> structureSort(toCompare(a), toCompare(b)));
        let out= "", deep= [], deep_l= 0, indent= "", description= "", target= "";
        for(let i=0, map_i, map_i_file, map_i_link, map_i_arr, map_i_arr_l, map_i_arr_last;(map_i= map[i]); i++){
            [ "category", "description" ].filter(hasNotKey(map_i)).forEach(throwError(map_i.file));
            map_i_file= this.toComponentName(map_i.file);
            map_i_arr= map_i.category.split("/");
            if(map_i_file!=="index") map_i_arr.push(map_i_file);
            map_i_arr_l= map_i_arr.length;
            map_i_arr_last= map_i_arr_l-1;
            map_i_link= this.toID(map_i.category+"/"+map_i_file);
            if(deep_l>map_i_arr_l){
                deep.length= map_i_arr_l;
                deep_l= deep.length;
            }
            for(let j=deep_l-1, map_ij;(map_ij= map_i_arr[j]); j--){
                if(deep[j]!==map_ij) deep.pop();
            }
            deep_l= deep.length;
            for(let j=deep_l, map_ij;(map_ij= map_i_arr[j]); j++){
                deep.push(map_ij);
                indent= "    ".repeat(j);
                target= `<a name="nav_${this.toID(map_i.category)}"></a>`;
                if(j===map_i_arr_last){
                    description= ` *(${this[id_synamic_name](map_i.params,map_i.depends)})*\n\n${indent}    `+this.handleLinks(this.joinLines(map_i.description, " "));
                    out+= `${indent}- **[${map_ij}](#nav_${map_i_link})**${map_i_file==="index" ? target : ""}${description}\n\n`;
                } else {
                    out+= `${indent}- **${map_ij}** ${target}\n\n`;
                }
            }
            deep_l= deep.length;
        }
        return out;
    },
};
function structureSort(ca, cb){
    const [ ia, ib ]= [ ca, cb ].map(c=> c.indexOf("/"));
    const main= cb.substring(0, ib).localeCompare(ca.substring(0, ia));
    if(main) return main;
    return ca.substring(ia).localeCompare(cb.substring(ib));
}
function hasNotKey(o){ return k=> !Reflect.has(o, k); }
function throwError(o){ return k=> { throw new Error(`Chybí klíč '${k}' v souboru '${o.file}'!`); }; }