class CubeRequest {
    columnFields: Set<FieldDefinition> = new Set()
    rowFields: Set<FieldDefinition> = new Set()
    metrics: Array<MetricDefinition> = []
    metricPlacement: OlapMetricPlacement = OlapMetricPlacement.COLUMNS
    filterGroup: FilterGroup
    metricFilterGroup: MetricFilterGroup
    columnsInterval: Interval
    rowsInterval: Interval
    columnSort: Array<SortingParams> = []
    rowSort: Array<SortingParams> = []
    allFields: Set<FieldDefinition> = new Set()
}