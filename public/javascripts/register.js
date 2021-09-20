document.addEventListener('DOMContentLoaded', e => {

    const email_ipt = document.querySelector('input[type=email]')
    const feedback = document.getElementById('feedback')
    const submit_btn = document.querySelector('button[type=submit]')

    email_ipt.addEventListener('focusout', async e => {
        try {
            const response = await fetch('/employees/email_exists', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({"email": e.target.value})
            })
            const exists_json = await response.json()
            if (exists_json.exists) {
                feedback.textContent = 'This email is already in use'
                submit_btn.disabled = true
            }

        } catch (e) {
            
        }
    })


    email_ipt.addEventListener('focusin', e => {
        feedback.textContent = ""
        submit_btn.disabled = false
    })
})