class BaseGroup {
    operationType: OlapOperationType = OlapOperationType.AND
    invertResult: boolean = false
    childGroups: Array<any> = []
}