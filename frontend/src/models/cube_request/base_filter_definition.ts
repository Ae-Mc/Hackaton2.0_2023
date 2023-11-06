class BaseFilterDefinition {
    constructor(
        public invertResult: boolean,
        public rounding: number,
        public values: Array<string>
    ) { }
}