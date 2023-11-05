class CubeRequest {
    constructor(
        public columnFields: Array<FieldDefinition> = [],
        public rowFields: Array<FieldDefinition> = [],
        public metrics: Array<MetricDefinition> = [],
        public metricPlacement: OlapMetricPlacement = OlapMetricPlacement.COLUMNS,
        public columnsInterval: Interval,
        public rowsInterval: Interval,
        public columnSort: Array<SortingParams> = [],
        public rowSort: Array<SortingParams> = [],
        public allFields: Array<FieldDefinition> = [],
        public filterGroup?: FilterGroup,
        public metricFilterGroup?: MetricFilterGroup,
    ) { }
}