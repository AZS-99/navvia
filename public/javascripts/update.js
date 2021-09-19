document.addEventListener('DOMContentLoaded', e => {
    const edit_btns = document.querySelectorAll('button[type=button]')
    let input

    for (let btn of edit_btns) {
        btn.addEventListener('click', e => {
            input = btn.parentNode.querySelector('input')
            input.disabled = !input.disabled
        })
    }
})