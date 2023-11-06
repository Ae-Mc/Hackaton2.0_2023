class MetricFilterGroup extends BaseGroup {
    constructor(
        public operationType: OlapOperationType = OlapOperationType.AND,
        public invertResult: boolean = false,
        public childGroups: Array<any> = [],
        public filters: Array<MetricFilterDefinition> = [],
        public allMetricIds: Array<number> = [],
    ) {
        super(operationType, invertResult, childGroups);
    }
}