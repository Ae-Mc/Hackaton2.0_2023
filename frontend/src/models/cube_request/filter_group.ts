class FilterGroup extends BaseGroup {
    filters: Array<FilterDefinition> = []
    allFields: Set<FieldDefinition> = new Set()
}