function slidersSetup(data: CubeResponse, colCallback: (arg0: number) => void, rowCallback: (arg0: number) => void) {
    let colSlider = $('#start_column')
    colSlider.attr({
        "max": data.totalColumns
    })
    colSlider.on(
        "input",
        function () {
            colCallback(parseInt(colSlider.val() as string))
        }
    )
    let rowSlider = $('#start_row')
    rowSlider.attr({
        "max": data.totalRows
    })
    rowSlider[0].style.height = rowSlider[0].parentElement.clientHeight + "px"
    rowSlider.on(
        "input",
        function () {
            rowCallback(parseInt(rowSlider.val() as string))
        }
    )
}
function onloadHandler() {
    const api = new Api()
    console.log(api)
    api.getFields().then((result) => {
        const fields = result.data.fields
        const fieldsDict: Map<number, Field> = new Map(fields.map((field, _, __) => [field.id, field]))

        api.request = new CubeRequest(
            [
                new FieldDefinition(fields[0].id),
                new FieldDefinition(fields[1].id),
            ],
            [
                new FieldDefinition(fieldsDict.get(16).id),
                // new FieldDefinition(fieldsDict.get(18).id),
            ],
            [
                new MetricDefinition(new FieldDefinition(fieldsDict.get(16).id), OlapAggregationType.COUNT),
                new MetricDefinition(new FieldDefinition(fieldsDict.get(18).id), OlapAggregationType.COUNT),
            ],
            OlapMetricPlacement.COLUMNS,
            new Interval(0, 1),
            new Interval(0, 1)
        )

        api.getData().then((data) => {
            api.request.rowsInterval.count = data.data.totalRows
            api.request.columnsInterval.count = data.data.totalColumns
            api.getData().then((data) => {
                console.log(fieldsDict)
                const presenter = new TablePresenter('#table', data.data, api.request, fieldsDict)
                presenter.construct()
                slidersSetup(data.data, (val) => {
                    presenter.startColumnIndex = val
                }, (val) => {
                    presenter.startRowIndex = val
                })
            })
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

