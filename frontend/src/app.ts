function onloadHandler() {
    const api = new Api()
    console.log(api)
    api.getFields().then((result) => {
        const fields = result.data.fields
        console.log(fields)
        api.request = new CubeRequest(
            [new FieldDefinition(fields[0].id), new FieldDefinition(fields[1].id)],
            [], [], OlapMetricPlacement.COLUMNS,
            new Interval(0 as unknown as bigint, 100 as unknown as bigint),
            new Interval(0 as unknown as bigint, 100 as unknown as bigint)
        )
        console.log(api.request)
        api.getData().then((data) => {
            console.log('Ok')
            console.log(data)
        }).catch((reason) => {
            console.log(reason)
        })
    })
}

if (document.readyState === "complete") {
    onloadHandler()
} else {
    window.onload = onloadHandler
}

