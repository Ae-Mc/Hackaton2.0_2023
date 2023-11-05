class FieldDefinition {
    constructor(
        public fieldId: bigint,
        public fieldType: OlapFieldType = OlapFieldType.REPORT_FIELD,
    ) { }
}