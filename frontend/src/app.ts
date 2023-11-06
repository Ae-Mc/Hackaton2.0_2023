function slidersSetup(presenter: TablePresenter) {
    let colSlider = $('#start_column')
    colSlider.attr({
        "max": presenter.data.totalColumns - presenter.width
    })
    colSlider.on(
        "input",
        function () {
            presenter.startColumnIndex = parseInt(colSlider.val() as string)
        }
    )
    let rowSlider = $('#start_row')
    rowSlider.attr({
        "max": presenter.data.totalRows - presenter.height
    })
    // rowSlider[0].style.height = rowSlider[0].parentElement.clientHeight + "px"
    rowSlider.on(
        "input",
        function () {
            presenter.startRowIndex = parseInt(rowSlider.val() as string)
        }
    )
}
function onloadHandler() {
    const api = new Api()
    // const fieldsPresenter = new FieldPresenter("#fields_container", [])
    api.getFields().then((result) => {
        const fields = result.data.fields
        // fieldsPresenter.fields = fields
        // fieldsPresenter.construct()
        const fieldsDict: Map<number, Field> = new Map(fields.map((field, _, __) => [field.id, field]))

        api.request = new CubeRequest(
            [
                new FieldDefinition(fields[0].id),
                new FieldDefinition(fields[1].id),
            ],
            [
                new FieldDefinition(fieldsDict.get(16).id),
                new FieldDefinition(fieldsDict.get(18).id),
            ],
            [
                new MetricDefinition(new FieldDefinition(fieldsDict.get(16).id), OlapAggregationType.COUNT),
                // new MetricDefinition(new FieldDefinition(fieldsDict.get(18).id), OlapAggregationType.COUNT),
            ],
            OlapMetricPlacement.COLUMNS,
            new Interval(0, 1),
            new Interval(0, 1)
        )

        api.getData().then((data) => {
            api.request.rowsInterval.count = data.data.totalRows
            api.request.columnsInterval.count = data.data.totalColumns
            api.getData().then((data) => {
                const presenter = new TablePresenter('#table', data.data, api.request, fieldsDict)
                presenter.construct()
                slidersSetup(presenter)
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

