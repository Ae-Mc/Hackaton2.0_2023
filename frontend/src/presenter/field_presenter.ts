class FieldPresenter {
    private container: JQuery<HTMLElement>

    constructor(private _elementId: string, public fields: Array<Field>) {
        this.container = $(this._elementId)
        if (this.container.length != 1) {
            throw ReferenceError(`Wrong container id: ${_elementId}`)
        }
    }

    public construct() {
        this.container.text("")
        console.log(this.fields)
        for (let i = 0; i < this.fields.length; i++) {
            const field = this.fields[i]
            let htmlElement = $(`<h5 id="field_${field.id}">${field.name}</h5>`)
            this.container.append(htmlElement)
        }
    }
}