const send = document.querySelector('.send')
const search = document.querySelector('.search')

send.addEventListener('click', (e) => {
  //  e.preventDefault()
    const sendID = document.getElementById('sendID')
    const sendString = document.getElementById('sendString')
    console.log(sendString)
    const formPOST = document.getElementById('form-1')
    formPOST.setAttribute('action', `/api/${sendID.value}/${sendString.value}`)
})
search.addEventListener('click', () => {
  const searchID = document.getElementById('searchID')
  const formGET = document.getElementById('form-2')
  formGET.setAttribute('action', `/api/${searchID.value}`)
  
})