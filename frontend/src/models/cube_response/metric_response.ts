class MetricResponse {
    fieldId: bigint
    aggregationType: OlapAggregationType
    metricValues: Array<MetricResponse>
    values: Array<Array<string>>
    dataType: OlapType
}