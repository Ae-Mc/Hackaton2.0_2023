class MetadataResponse {
    constructor(
        public id: number,
        public totalRows: number,
        public fields: Array<Field>,
    ) { }
}