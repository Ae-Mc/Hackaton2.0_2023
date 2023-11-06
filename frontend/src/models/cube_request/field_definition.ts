class FieldDefinition {
    constructor(
        public fieldId: number,
        public fieldType: OlapFieldType = OlapFieldType.REPORT_FIELD,
    ) { }
}