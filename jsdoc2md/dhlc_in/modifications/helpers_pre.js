/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
/* global gulp_place */
const outLink= name=> `<i><a href="#module_${name}">${name}</a></i>`;
module.exports= {
    pathHelper,
    toLink: function(link){
        return `{@link ${link}}`;
    },
    paramObjectFix: function(name, rest, optional){
        if(!name) return "**Name not specified";
        const nameArr= name.split(".");
        let i= 0, i_length= nameArr.length-1;
        if(i_length) nameArr[i++]= "&nbsp;";
        for(; i<i_length; i++){ nameArr[i]= "&boxv;"; }
        if(rest) nameArr[i]= "…"+nameArr[i];
        nameArr[i]= "<code>"+nameArr[i]+"</code>";
        if(optional) nameArr[i]= "["+nameArr[i]+"]";
        if(i>0) nameArr[i]= "&boxvr;&nbsp;"+nameArr[i];
        return nameArr.join("");
    },
    kategorie: function({ path, filename }, category){
        let out= [];
        const rp= pathHelper(path);
        if(/link_/.test(filename)) out.push(outLink("Link"));
        if(/atoms\//.test(rp)) out.push(outLink("Atom"));
        else if(/molecules\//.test(rp)) out.push(outLink("Molekula"));
        else if(/organisms\//.test(rp)) out.push(outLink("Organismus"));
        if(category) out.push(...category.split(/, ?/g).map(outLink));
        return out.join(", ");
    },
    conditionalTemplate: function(template, ...vals){
        for(let i=0, i_length= vals.length; i<i_length; i++){
            if(!vals[i]) return "";
        }
        return template.replace(/{{(\d+)}}/g, function(m, i){ return vals[+i]; });
    },
    fileLink: function(anchorName, { path, filename, lineno }= {}){
        path= pathHelper(path);
        const name_or_space= anchorName ? ` name="${anchorName}" `: " ";
        return `<a${name_or_space}href="${path}${filename}#L${lineno}" title="${path}${filename} řádek ${lineno}"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;${filename}:${lineno})</small></a>`;
    },
    translate: (function(translate){ return t=> translate[t]; })
    ({ 'Classes': "Třídy", 'Mixins': "Funkcionální třídy", 'Members': "Proměnné", 'Objects': "Jmenné prostory (objekty)", 'Constants': "Konstanty", 'Functions': "Funkce", 'Typedefs': "Definice typů", 'Interfaces': "Rozhraní", "Events": "Události" })
};
function pathHelper(path){
    const folder_part= path.replace(/\\/g, "/").split(new RegExp(gulp_place("app.folderName", "variable")))[1];
    return ".."+folder_part+"/";
}
