const scriptURL = 'https://script.google.com/macros/s/AKfycby4JfRRwdj0EKFJmIsrH02KVbtfaCk1OKCH5nv4KLCSynRsXRAGLCTxnQF_HJCfkqE/exec'


const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})







