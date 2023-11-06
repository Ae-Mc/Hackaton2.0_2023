class CubeResponse {
    constructor(
        public columnValues: Array<Array<string>>,
        public rowValues: Array<Array<string>>,
        public metricValues: Array<MetricResponse>,
        public totalColumns: number,
        public totalRows: number,
    ) { }
}