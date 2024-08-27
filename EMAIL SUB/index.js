const scriptURL = 'https://script.google.com/macros/s/AKfycby3z_lIRLyqQU_zIc8JzUuFC7VbMUPh8oPa9JoEkCCXJR1o0EHrBZAzSb6WT12v_08O/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener
    ('submit', e => {
        e.preventDefault
            ()
        fetch(scriptURL,
            { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = 'Thank You For Subscribing!'
                setTimeout(() => {
                    msg.innerHTML = ''
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })