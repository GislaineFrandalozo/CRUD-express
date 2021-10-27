console.log('*******************')
const send = document.querySelector('.send')
const search = document.querySelector('.search')

console.log(send)
console.log(search)
send.addEventListener('click', () => {
    //e.preventDefault()
    const sendID = document.getElementById('sendID')
    const sendAtt = document.getElementById('sendAtt')
    console.log(sendID.value)
    console.log(sendAtt.value)
    
})
search.addEventListener('click', () => {
  const searchID = document.getElementById('searchID')
  console.log(searchID.value)
})