enum OlapAggregationType {
    COUNT = "COUNT",
    COUNT_DISTINCT = "COUNT_DISTINCT",
    SUM = "SUM",
    MAX = "MAX",
    MIN = "MIN",
    AVG = "AVG",
}


enum OlapSortOrder {
    Ascending = "Ascending",
    Descending = "Descending",
}


enum OlapType {
    INTEGER = "INTEGER",
    STRING = "STRING",
    DOUBLE = "DOUBLE",
    DATE = "DATE",
    TIMESTAMP = "TIMESTAMP",
}


enum OlapMetricPlacement {
    COLUMNS = "COLUMNS",
    ROWS = "ROWS",
}


enum OlapFieldType {
    REPORT_FIELD = "REPORT_FIELD",
    DERIVED_FIELD = "DERIVED_FIELD",
}


enum OlapOperationType {
    AND = "AND",
    OR = "OR",
}


enum OlapFilterType {
    EMPTY = "EMPTY",
    IN_LIST = "IN_LIST",
    CONTAINS_CS = "CONTAINS_CS",
    CONTAINS_CI = "CONTAINS_CI",
    EQUALS = "EQUALS",
    GREATER = "GREATER",
    LESSER = "LESSER",
    GREATER_OR_EQUALS = "GREATER_OR_EQUALS",
    LESSER_OR_EQUALS = "LESSER_OR_EQUALS",
    BETWEEN = "BETWEEN",
    BLANK = "BLANK",
}

enum OlapMetricFilterType {
    EMPTY = "EMPTY",
    EQUALS = "EQUALS",
    GREATER = "GREATER",
    LESSER = "LESSER",
    GREATER_OR_EQUALS = "GREATER_OR_EQUALS",
    LESSER_OR_EQUALS = "LESSER_OR_EQUALS",
    BETWEEN = "BETWEEN",
    BLANK = "BLANK",

}