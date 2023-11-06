class BaseGroup {
    constructor(
        public operationType: OlapOperationType = OlapOperationType.AND,
        public invertResult: boolean = false,
        public childGroups: Array<any> = [],
    ) { }
}