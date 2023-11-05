class Api {
    private static readonly baseUrl: string = "http://localhost:8080/api/v1"
    private static readonly baseSettings: JQueryAjaxSettings = {
        method: "POST",
        contentType: "application/json",
    }


    private _request: CubeRequest;

    public get request(): CubeRequest {
        return this._request;
    }
    public set request(value: CubeRequest) {
        this._request = value;
    }

    public async getData(): Promise<CubeResponse> {
        let settings = structuredClone(Api.baseSettings)
        settings.data = this._request
        return $.ajax(`${Api.baseUrl}/olap/get-cube`, settings)
    }

    public async getFields(): Promise<ApiResponse<MetadataResponse>> {
        return $.ajax(
            `${Api.baseUrl}/report-job/get-metadata`,
            Api.baseSettings
        )
    }
}