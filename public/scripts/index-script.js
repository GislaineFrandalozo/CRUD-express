console.log('*******************')
const send = document.querySelector('.send')
const search = document.querySelector('.search')

console.log(send)
console.log(search)
send.addEventListener('click', (e) => {
  //  e.preventDefault()
    const sendID = document.getElementById('sendID')
    const sendAtt = document.getElementById('sendAtt')
    const form = document.getElementById('form-1')
    form.setAttribute('action', `/add/${sendID.value}/${sendAtt.value}`)
    console.log(form)
})
search.addEventListener('click', () => {
  const searchID = document.getElementById('searchID')
  console.log(searchID.value)
})