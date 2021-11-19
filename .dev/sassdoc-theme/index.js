module.exports = function(dest, ctx) {
    const def = {
        display: {
            annotations: {
                function: ['description', 'parameter', 'return', 'example', 'throw', 'require', 'usedby', 'since', 'see', 'todo', 'link', 'author'],
                mixin: ['description', 'parameter', 'content', 'output', 'example', 'throw', 'require', 'usedby', 'since', 'see', 'todo', 'link', 'author'],
                placeholder: ['description', 'example', 'throw', 'require', 'usedby', 'since', 'see', 'todo', 'link', 'author'],
                variable: ['description', 'type', 'property', 'require', 'example', 'usedby', 'since', 'see', 'todo', 'link', 'author']
            },
            access: ['public'],
            alias: false
        },
        groups: {
            undefined: 'General'
        },
        pagesFrom: false
    }
    ctx = Object.assign(
        {},
        def,
        ctx,
        {
            groups: Object.assign(def.groups, ctx.groups),
            display: Object.assign(def.display, ctx.display)
        }
    )
    sassdocExtras(ctx, 'display', 'groupName')

    ctx.data.byGroupAndType = sassdocExtras.byGroupAndType(ctx.data)
    console.log(ctx)
}
