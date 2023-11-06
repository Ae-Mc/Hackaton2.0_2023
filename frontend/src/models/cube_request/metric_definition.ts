class MetricDefinition {
    constructor(
        public field: FieldDefinition,
        public aggregationType: OlapAggregationType,
    ) { }
}