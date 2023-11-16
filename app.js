// we need to select all the elements on the UI = user interfase
// we need to select also the information
// we have to select the options that we have on the us.
let userData = ''
const informationContainer = document.querySelector('.information') // node
const userNameBtn = document.querySelector('.userName')
const descriptionDisplay = document.querySelector('.description')
const emailBtn = document.querySelector('.email')
const dateBtn = document.querySelector('.date')
const adressBtn = document.querySelector('.map')
const phoneBtn = document.querySelector('.phone')
const passwordBtn=document.querySelector('.password')

const getNewUserBtn = document.querySelector('.getNewUser')

getNewUserBtn.addEventListener('click', callApi)
userNameBtn.addEventListener('click',displayName)
emailBtn.addEventListener('click',displayEmail)
dateBtn.addEventListener('click',displayDate)
adressBtn.addEventListener('click',displayAdress)
phoneBtn.addEventListener('click',displayPhone)
passwordBtn.addEventListener('click',displayPassword)

async function callApi() {
  const res = await fetch('https://randomuser.me/api/')
  const data = await res.json()
  userData = data.results[0]
  displayName()
}
function displayName(){
  if(userData === '') return
  const {title,first,last} = userData.name
  descriptionDisplay.innerText = "My name is: "
  informationContainer.innerText = `${title} ${first} ${last}`
}
function displayEmail(){
  if(userData === '') return
  const {email} =userData;
  descriptionDisplay.innerText = "My Email is: "
  informationContainer.innerText = `${email}`
}
function displayDate(){
  if(userData === '') return
  const {date:birthday} = userData.dob
  descriptionDisplay.innerText = "My DOB is: "
  informationContainer.innerText = `${formatDate(birthday)}`
}
function formatDate(date) {
  const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  };
return new Date(date).toLocaleString(undefined, options);
}
// "city":"Sevilla","state":"Comunidad de Madrid",
// "country":"Spain","postcode":93096
function displayAdress(){
    if(!userData==='') return
    const {city,postcode,country,street}=userData.location
    descriptionDisplay.innerText= "My Adress is: "
    informationContainer.innerText=`${country} ${city} ${street.name} ${postcode}`
    }

function displayPhone(){
if(userData==='') return
const{cell}=userData;
descriptionDisplay.innerText="My phone Number is: "
informationContainer.innerText=`${cell}`

}
function displayPassword(){
if(!userData==='') return
const{password}=userData.login;
descriptionDisplay.innerText="My password is : "
informationContainer.innerText=`${password}`
}