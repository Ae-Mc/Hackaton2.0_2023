enum TypeEnum {
    AGGR = "aggregate",
    COLUMN = "column"
}

enum DragZoneID {
    LEFT = "",
    TOP = ""
}

class DragAndDropMetrics {
    private _rowMetrics: Array<MetricDefinition> = new Array<MetricDefinition>();
    private _columnMetrics: Array<MetricDefinition> = new Array<MetricDefinition>();
    private divId: string = "";
    private type: TypeEnum;

    get rowMetrics(): Array<MetricDefinition> {
        return this._rowMetrics;
    }

    get columnMetrics(): Array<MetricDefinition> {
        return this._columnMetrics;
    }

    public aggregateDragStart(ev: DragEvent): void {
        ev.dataTransfer.dropEffect = "move";
        this.type = TypeEnum.AGGR;
        let target = ev.target as HTMLElement;
        this.divId = target.id;
    }

    public columnDragStart(ev: DragEvent): void {
        ev.dataTransfer.dropEffect = "copy";
        this.type = TypeEnum.COLUMN;
        let target = ev.target as HTMLDivElement;
        ev.dataTransfer.setData("id", target.id);
    }

    public aggregateDragOver(ev: DragEvent): void {
        let target = ev.target as HTMLDivElement;
        if (this.type == TypeEnum.AGGR) {
            let targetDrag = $("#" + this.divId)[0];
            target.appendChild(targetDrag);
            let metric: MetricDefinition = new MetricDefinition(
                new FieldDefinition(parseInt(target.getAttribute("fieldId")), OlapFieldType[target.getAttribute("type") as keyof typeof OlapFieldType]),
                OlapAggregationType[targetDrag.getAttribute("type") as keyof typeof OlapAggregationType]);
            if (target.parentElement.className == DragZoneID.TOP) {
                this._columnMetrics.push(metric);
            }
            else {
                this._rowMetrics.push(metric);
            }
        }
    }

    public columnDragOver(ev: DragEvent) {
        let target = ev.target as HTMLDivElement;
        if (this.type == TypeEnum.COLUMN) {
            let targetDrag = $("#" + this.divId)[0];
            target.appendChild(targetDrag);
            let metric: MetricDefinition = new MetricDefinition(
                new FieldDefinition(parseInt(target.getAttribute("fieldId"))),
                OlapAggregationType[targetDrag.getAttribute("type") as keyof typeof OlapAggregationType]
            );
            if (target.parentElement.className == DragZoneID.TOP) {
                this._columnMetrics.push(metric);
            }
            else {
                this._rowMetrics.push(metric);
            }
        }
    }
}

var dragAndDropMetrics = new DragAndDropMetrics();