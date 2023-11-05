function onloadHandler() {
    let headers = document.getElementsByTagName('thead')
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i] as HTMLElement
        header.style.backgroundColor = "#aae"
    }
}

if (document.readyState === "complete") {
    onloadHandler()
} else {
    window.onload = onloadHandler
}
