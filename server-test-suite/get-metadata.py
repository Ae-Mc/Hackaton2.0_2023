from icecream import ic
from requests import Session

from consts import API_BASE_URL
from models import OlapField

with Session() as session:
    result = session.post(
        f"{API_BASE_URL}/report-job/get-metadata",
        headers={
            "Content-Type": "application/json",
            # "MediaType": "application/json",
        },
    )
    result.raise_for_status()
    fields: list[OlapField] = []
    for field in (result.json())["data"]["fields"]:
        fields.append(OlapField.model_validate(field))
    ic(fields)
