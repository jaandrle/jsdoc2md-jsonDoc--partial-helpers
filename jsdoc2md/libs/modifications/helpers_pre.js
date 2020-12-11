/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
/* global gulp_place */
module.exports= {
    pathHelper: function(path){
        const folder_part= path.split(/gulp_place("root_folder_name", "variable")(?:\\|\/)/g)[1];
        return "gulp_place('app.homepage.replace(`#readme`, ``)', 'variable')"+"/blob/master/"+folder_part+"/";
    }
};
