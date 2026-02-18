let i = 0

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.translates__slider .slide')
    elements.forEach((el, index) => {
        if (index !== 0) {
            el.style.display = "none"
        }
    })

    document.querySelector('.translates__slider-nav-back').onclick = () => {
        if (i === 0) { i = elements.length - 1 } 
        else { i -= 1 }
        elements.forEach((el, index) => {
            if (index !== i) {
                el.style.display = "none"
            } else {
                el.style.display = "block"
            }
        })
    }

    document.querySelector('.translates__slider-nav-forward').onclick = () => {
        if (i === elements.length - 1) { i = 0 }
        else { i += 1 }
        elements.forEach((el, index) => {
            if (index !== i) {
                el.style.display = "none"
            } else {
                el.style.display = "block"
            }
        })
    }
})