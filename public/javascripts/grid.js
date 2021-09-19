document.addEventListener('DOMContentLoaded', e => {
    const forms_delete = document.querySelectorAll("form[action^='/employees/delete']")

    for(let form of forms_delete) {
        form.addEventListener('submit', e => {
            return (window.confirm('Are you sure you want to delete this employee?'))? true : e.preventDefault()
        })
    }
})