from enum import Enum


class OlapAggregationType(Enum):
    COUNT, COUNT_DISTINCT, SUM, MAX, MIN, AVG = (
        "COUNT",
        "COUNT_DISTINCT",
        "SUM",
        "MAX",
        "MIN",
        "AVG",
    )


class OlapSortOrder(Enum):
    Ascending = "Ascending"
    Descending = "Descending"


class OlapType(Enum):
    INTEGER = "INTEGER"
    STRING = "STRING"
    DOUBLE = "DOUBLE"
    DATE = "DATE"
    TIMESTAMP = "TIMESTAMP"


class OlapMetricPlacement(Enum):
    COLUMNS = "COLUMNS"
    ROWS = "ROWS"


class OlapFieldType(Enum):
    REPORT_FIELD = "REPORT_FIELD"
    DERIVED_FIELD = "DERIVED_FIELD"


class OlapOperationType(Enum):
    AND = "AND"
    OR = "OR"
