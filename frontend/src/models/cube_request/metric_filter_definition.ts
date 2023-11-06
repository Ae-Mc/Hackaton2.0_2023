class MetricFilterDefinition extends BaseFilterDefinition {
    constructor(
        public invertResult: boolean,
        public rounding: number,
        public values: Array<string>,
        public metricId: number,
        public filterType: OlapMetricFilterType,
    ) {
        super(invertResult, rounding, values);
    }
}