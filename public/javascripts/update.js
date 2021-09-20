document.addEventListener('DOMContentLoaded', e => {
    const edit_btns = document.querySelectorAll('button[type=button]')
    let input, textArea, select

    for (let btn of edit_btns) {
        btn.addEventListener('click', e => {
            input = btn.parentNode.querySelector(':first-child')
            input.disabled = !input.disabled

        })
    }
})