class Field {
    constructor(
        public id: number,
        public ordinal: number,
        public name: string,
        public description: number,
        public type: OlapType,
        public visible: boolean,
    ) { }
}