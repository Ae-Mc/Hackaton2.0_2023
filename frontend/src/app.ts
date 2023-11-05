function onloadHandler() {
    let headers = $('thead')
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i] as HTMLElement
        header.style.backgroundColor = "#aae"
    }
    const api = new Api()
    console.log(api)
    api.getFields().then((fields) => {
        console.log(fields)
    })
}

if (document.readyState === "complete") {
    onloadHandler()
} else {
    window.onload = onloadHandler
}

