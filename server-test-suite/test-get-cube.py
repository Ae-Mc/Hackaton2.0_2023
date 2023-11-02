from icecream import ic
from requests import Session

from consts import API_BASE_URL
from models import CubeRequest, OlapField, OlapType

fields = [
    OlapField(
        id=14,
        ordinal=1,
        name="Код субъекта федерации",
        description="Код субъекта Российской Федерации",
        type=OlapType.INTEGER,
        visible=True,
    ),
    OlapField(
        id=15,
        ordinal=2,
        name="Название субъекта федерации",
        description="Наименование субъекта Российской Федерации",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=16,
        ordinal=3,
        name="Название муниципального образования",
        description="Наименование муниципального образования",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=18,
        ordinal=4,
        name="Тип населённого пункта",
        description="Тип населенного пункта (город, село, деревня, кожуун, "
        "станица и др.)",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=17,
        ordinal=5,
        name="Название населённого пункта",
        description="Наименование населенного пункта",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=19,
        ordinal=6,
        name="Численность населения",
        description="Население населенного пунктах, всего человек",
        type=OlapType.INTEGER,
        visible=True,
    ),
    OlapField(
        id=20,
        ordinal=7,
        name="Численность детей",
        description="Количество детей в возрасте до 18 лет в населенном пункте, "
        "человек",
        type=OlapType.INTEGER,
        visible=True,
    ),
    OlapField(
        id=21,
        ordinal=8,
        name="Широта населенного пункта(формат DMS)",
        description="Широта населенного пункта в формате DMS",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=22,
        ordinal=9,
        name="Долгота населенного пункта (формат DMS)",
        description="Долгота населенного пункта в формате DMS",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=23,
        ordinal=10,
        name="Широта населенного пункта (формат DD)",
        description="Широта населенного пункта в формате DD",
        type=OlapType.DOUBLE,
        visible=True,
    ),
    OlapField(
        id=24,
        ordinal=11,
        name="Долгота населенного пункта (формат DD)",
        description="Долгота населенного пункта в формате DD",
        type=OlapType.DOUBLE,
        visible=True,
    ),
    OlapField(
        id=25,
        ordinal=12,
        name="ОКТМО",
        description="Значение кода ОКТМО для населенного пункта",
        type=OlapType.STRING,
        visible=True,
    ),
    OlapField(
        id=26,
        ordinal=13,
        name="Код населенного пункта",
        description="id населённого пункта",
        type=OlapType.INTEGER,
        visible=True,
    ),
]

with Session() as session:
    request: CubeRequest = CubeRequest()
    result = session.post(
        f"{API_BASE_URL}/olap/get-cube",
        headers={
            "Content-Type": "application/json",
        },
        data=request.model_dump(),
    )
    ic(result.json())
