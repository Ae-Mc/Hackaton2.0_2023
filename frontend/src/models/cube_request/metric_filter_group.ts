class MetricFilterGroup extends BaseGroup {
    filters: Array<MetricFilterDefinition> = []
    allMetricIds: Set<bigint> = new Set()
}