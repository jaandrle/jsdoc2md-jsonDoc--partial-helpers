### **${toComponentName file category}** <a name="nav_${toID category file}"></a>
${partial "partials/description.md" description "loop" "\n"}
${partial "partials/subheadline.md" "Kategorie"} ${category}
${partial "partials/subheadline.md" "Druh"} *HTML template — v průběhu buildu **${isDynamicHTML params depends}*** ([defined@${toFileName file}:${line}](../${file}#L${line}))
${ifPartial depends "partials/subheadline.md" "Využívá"} ${partial "partials/depend_link.md" depends "loop" "\n"}${ifPartial depends "" "\n"} 
${ifPartial params "partials/params_head.md" "při\sbuildu\sje\spotřeba\sspecifikovat\styto\sklíče\sv\s`app._BUILD_`"} ${partial "partials/params.md" params "loop" "\n"} 
___