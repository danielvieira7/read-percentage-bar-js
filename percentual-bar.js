bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"

document.body.append(bar)

document.addEventListener("scroll", () => {
    const textHeight = postWrap.offsetHeight
    const pagePostiionY = window.pageYOffset
    const updateBar = pagePostiionY * 100 / textHeight
    bar.style.width = updateBar + "%"
})