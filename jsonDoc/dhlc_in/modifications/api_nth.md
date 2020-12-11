### **${toComponentName file category}** <a name="nav_${toID category file}"></a>
${partial "partials/description.md" description "loop" "\n"}
${partial "partials/subheadline.md" "Kategorie"} ${category}
${partial "partials/subheadline.md" "Druh"} *${isRequest file}* ([defined@${toFileName file}:${line}](../${file}#L${line}))
${ifPartial depends "partials/subheadline.md" "Využívá"} ${partial "partials/depend_link.md" depends "loop" "\n"}${ifPartial depends "" "\n"} 
${defaultParams "partials/params_typed_head.md" "partials/params_typed.md" type}${partial "partials/params_typed.md" params "loop" "\n"} 
${ifPartial returns "partials/returns_typed_head.md"}${defaultReturns returns "partials/params_typed.md"}${partial "partials/params_typed.md" returns "loop" "\n"} 
___