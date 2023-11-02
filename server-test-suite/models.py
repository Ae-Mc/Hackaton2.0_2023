from typing import Literal

from olap.enums import (
    OlapAggregationType,
    OlapFieldType,
    OlapMetricPlacement,
    OlapOperationType,
    OlapSortOrder,
    OlapType,
)
from pydantic import BaseModel, Field


class OlapField(BaseModel):
    id: int
    ordinal: int
    name: str
    description: str
    type: OlapType
    visible: bool


class OlapFieldDefinition(BaseModel):
    fieldId: int
    fieldType: Literal["REPORT_FIELD"] = Field(OlapFieldType.REPORT_FIELD)


class OlapInterval(BaseModel):
    From: int = Field(serialization_alias="from")
    count: int = Field()


class OlapFilterGroup(BaseModel):
    operationType: OlapOperationType = Field(default=OlapOperationType.AND)
    invertResult: bool = Field(False)
    childGroups: list = Field(default_factory=list)
    filters: list = Field(default_factory=list)


class OlapFilterFilterGroup(OlapFilterGroup):
    allFields: list[OlapField] = Field(default_factory=list)


class OlapMetricFilterGroup(OlapFilterGroup):
    allMetricIds: list[int] = Field(default_factory=list)


class OlapSortingParams(BaseModel):
    order: OlapSortOrder = Field(default=OlapSortOrder.Ascending)
    Tuple: list[str] = Field(default_factory=list, serialization_alias="tuple")
    metricId: int = Field()


class OlapMetricDefinition(BaseModel):
    field: OlapFieldDefinition = Field()
    aggregationType: OlapAggregationType = Field()


class CubeRequest(BaseModel):
    columnFields: list[OlapFieldDefinition] = Field(default_factory=list)
    rowFields: list[OlapFieldDefinition] = Field(default_factory=list)
    metrics: list[OlapMetricDefinition] = Field(default_factory=list)
    metricPlacement: OlapMetricPlacement = Field()
    filterGroup: OlapFilterFilterGroup = Field(
        default_factory=OlapFilterFilterGroup
    )
    metricFilterGroup: OlapMetricFilterGroup = Field(
        default_factory=OlapMetricFilterGroup
    )
    columnsInterval: OlapInterval = Field(
        default=OlapInterval(From=0, count=100)
    )
    rowsInterval: OlapInterval = Field(default=OlapInterval(From=0, count=100))
    columnSort: list[OlapSortingParams] = Field(default_factory=list)
    rowSort: list[OlapSortingParams] = Field(default_factory=list)
    allFields: list[OlapFieldDefinition] = Field(default_factory=list)
