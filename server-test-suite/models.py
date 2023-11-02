from enum import Enum
from typing import Literal

from pydantic import BaseModel, Field


class OlapType(Enum):
    INTEGER = "INTEGER"
    STRING = "STRING"
    DOUBLE = "DOUBLE"
    DATE = "DATE"
    TIMESTAMP = "TIMESTAMP"


class OlapMetricPlacement(Enum):
    COLUMNS = "COLUMNS"
    ROWS = "ROWS"


class olapFieldType(Enum):
    REPORT_FIELD = "REPORT_FIELD"
    DERIVED_FIELD = "DERIVED_FIELD"


class OlapField(BaseModel):
    id: int
    ordinal: int
    name: str
    description: str
    type: OlapType
    visible: bool


class OlapFieldDefinition(BaseModel):
    fieldId: int
    fieldType: Literal["REPORT_FIELD"] = Field(olapFieldType.REPORT_FIELD)


class OlapInterval(BaseModel):
    From: int


class CubeRequest(BaseModel):
    columnFields: list[OlapFieldDefinition] = Field(default_factory=list)
    rowFields: list[OlapFieldDefinition] = Field(default_factory=list)
    metrics: list = Field(default_factory=list)
    metricPlacement: OlapMetricPlacement = Field()
