let bar = document.createElement("div")
bar.style.height = "4px"
bar.style.width = "0"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
document.body.append(bar)

let postWrapClass = "#primary"

document.addEventListener("scroll", () => {
    const postWrap = document.querySelector(postWrapClass)
    const textHeight = postWrap.offsetHeight
    const pagePostiionY = window.pageYOffset
    const updateBar = pagePostiionY * 100 / textHeight
    bar.style.width = updateBar + "%"
})