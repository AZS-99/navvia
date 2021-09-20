document.addEventListener('DOMContentLoaded', e => {
    const forms_delete = document.querySelectorAll("form[action^='/employees/delete']")

    for(let form of forms_delete) {
        form.addEventListener('submit', e => {
            return (window.confirm('This action once executed is irreversible! Do you want to proceed with deleting the ' +
                'data of the selected employee?'))? true : e.preventDefault()
        })
    }
})