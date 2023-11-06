class TablePresenter {
    static readonly aggregationTypeToText = new Map<OlapAggregationType, string>([
        [OlapAggregationType.AVG, "Среднее"],
        [OlapAggregationType.COUNT, "Количество"],
        [OlapAggregationType.COUNT_DISTINCT, "Количество уникальных"],
        [OlapAggregationType.MAX, "Максимальное"],
        [OlapAggregationType.MIN, "Минимальное"],
        [OlapAggregationType.SUM, "Сумма"],
    ])
    private table: HTMLTableElement
    private _startRowIndex: number = 0
    private _startColumnIndex: number = 0
    private _width: number = 10
    private _height: number = 10


    public get startRowIndex(): number {
        return this._startRowIndex
    }
    public set startRowIndex(value: number) {
        this._startRowIndex = value
        this.construct()
    }

    public get startColumnIndex(): number {
        return this._startColumnIndex
    }
    public set startColumnIndex(value: number) {
        this._startColumnIndex = value
        this.construct()
    }

    public get width(): number {
        return this._width
    }
    public set width(value: number) {
        this._width = value
        this.construct()
    }
    public get height(): number {
        return this._height
    }
    public set height(value: number) {
        this._height = value
        this.construct()
    }

    public get maxX() {
        return Math.min(this._startColumnIndex + this.width, this.data.totalColumns)
    }

    public get maxY() {
        return Math.min(this._startRowIndex + this.height, this.data.totalRows)
    }

    constructor(private _elementId: string, private _data: CubeResponse, private request: CubeRequest, private fields: Map<number, Field>) {
        const candidates = $(_elementId)
        if (candidates.length != 1) {
            throw ReferenceError(`Wrong id: found ${candidates.length} candidates`)
        }
        this.table = $("<table></table>").get(0) as HTMLTableElement
        candidates.get(0).append(this.table)
    }
    get data() { return this._data }

    buildColumnHeaders(): void {
        let row = $("<tr></tr>")
        const rowColspan = Math.max(this.request.rowFields.length, 1)
        const metricColspan = Math.max(this.data.metricValues.length, 1)

        for (let i = 0; i < this.request.columnFields.length; i++) {
            row.append($(`<td class="fieldHeader" colspan=${rowColspan}>${this.fields.get(this.request.columnFields[i].fieldId).name}</td>`))
            for (let j = this._startColumnIndex; j < this.maxX; j++) {
                const value = this.data.columnValues[j][i]
                row.append(`<td class="header" colspan=${metricColspan}>${value}</td>`)
            }
            this.table.append(...row)
            row = $("<tr></tr>")
        }
        for (let j = 0; j < this.request.rowFields.length; j++) {
            row.append($(`<td class="fieldHeader">${this.fields.get(this.request.rowFields[j].fieldId).name}</td>`))
        }

        if (this.request.rowFields.length != 0) {
            const metrics = this.request.metrics.map((value, _, __) => this._metricToText(value))
            for (let i = this._startColumnIndex; i < this.maxX; i++) {
                for (let k = 0; k < this.request.metrics.length; k++) {
                    row.append($(`<td class="metricHeader">${metrics[k]}</td>`))
                }
            }
            this.table.append(...row)
        }
    }

    buildTable(): void {
        for (let i = this._startRowIndex; i < this.maxY; i++) {
            let currentRow = $('<tr></tr>')
            for (let j = 0; j < this.request.rowFields.length; j++) {
                currentRow.append($(`<td class="header">${this.data.rowValues[i][j]}</td>`))
            }
            for (let j = this._startColumnIndex; j < this.maxX; j++) {
                for (let k = 0; k < this.data.metricValues.length; k++) {
                    currentRow.append($(`<td class="value">${this.data.metricValues[k].values[j][i]}</td>`))
                }
            }
            this.table.append(...currentRow)
        }
    }

    private _metricToText(metric: MetricDefinition): string {
        const aggregationStr = TablePresenter.aggregationTypeToText.get(metric.aggregationType)
        const fieldName = this.fields.get(metric.field.fieldId).name

        return `${aggregationStr} «${fieldName}»`
    }

    construct() {
        this.table.innerHTML = ""
        this.buildColumnHeaders()
        this.buildTable()
    }
}