class SortingParams {
    constructor(
        public order: OlapSortOrder = OlapSortOrder.Ascending,
        public tuple: Array<string>,
        public metricId: number,
    ) { }
}