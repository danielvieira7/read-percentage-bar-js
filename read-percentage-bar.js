/**

This script need to be called after </body> like this:

readPercentageBar({
    wrapClass: '#content',
    height: '4px',
    bgcolor: '#6633cc'
})

or

let params = {
    wrapClass: '.your_class_or_id',
    height: '4px',
    bgcolor: '#6633cc'
}

readPercentageBar(params)

*/

function readPercentageBar(params){
    let bar = document.createElement("div")
    bar.style.height = params.height
    bar.style.width = "0"
    bar.style.backgroundColor = params.bgcolor
    bar.style.position = "fixed"
    bar.style.top = "0"
    bar.style.left = "0"
    bar.style.zIndex = "9999"
    document.body.append(bar)

    let postWrapClass = params.wrapClass

    document.addEventListener("scroll", () => {
        const postWrap = document.querySelector(postWrapClass)
        const textHeight = postWrap.offsetHeight
        const pagePostiionY = window.pageYOffset
        const updateBar = pagePostiionY * 100 / textHeight
        bar.style.width = updateBar + "%"
    })
}
