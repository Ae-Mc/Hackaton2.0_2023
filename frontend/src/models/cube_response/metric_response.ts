class MetricResponse {
    constructor(
        public fieldId: number,
        public aggregationType: OlapAggregationType,
        public values: Array<Array<string>>,
        public dataType: OlapType,
    ) { }
}