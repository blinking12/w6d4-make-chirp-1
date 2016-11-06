var signup = document.querySelector('#sign-up')
var signin = document.querySelector('#sign-in')
var signupHome = document.querySelector('#signup')
var signinHome = document.querySelector('#signin')

const path = window.location.href

if (signup !== null) {
   signup.addEventListener('click', signupHandler)
} else if (signin !== null) {
  signin.addEventListener('click', signinHandler)
} else {
  signupHome.addEventListener('click', function() {
    window.location.href = path + 'sign-up.html'
  })
  signinHome.addEventListener('click', function() {
    window.location.href = path + 'sign-in.html'
  })
}

function signupHandler() {
  console.log('signing up')
  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value
  var name = document.querySelector('#name').value
  var photo = document.querySelector('#photo')

  var data = new FormData()
  data.append('email', email)
  data.append('password', password)
  data.append('name', name)
  data.append('avatar', photo.files[0])

  fetch('https://immense-harbor-69502.herokuapp.com/api/signup', {
    method: 'POST',
    body: data
  })
  .then(response => response.json())
  .then(signedupHandler)
}

function signedupHandler(response) {
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('chirps', response.user.api_token)
    sessionStorage.setItem('id', response.user.id)
    sessionStorage.setItem('avatar', response.user.avatar)
    window.location.href = path + 'chirps.html'

  }
  else {
    response.forEach(function(error) {
      var errorDiv = document.createElement('div')
      errorDiv.classList.add('alert', 'alert-danger')
      errorDiv.innerHTML = error
      document.querySelector('#errors').appendChild(errorDiv)
    })
  }
}

function signinHandler() {
  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value

  fetch('https://immense-harbor-69502.herokuapp.com/api/log_in', {
    body: JSON.stringify({
      email: email,
      password: password
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(signedinHandler)
}

function signedinHandler(response) {
  sessionStorage.setItem('chirps', response.user.api_token)
  sessionStorage.setItem('id', response.user.id)
  sessionStorage.setItem('avatar', response.user.avatar)
  window.location.href = "/chirps.html"
  window.location.href = path + 'chirps.html'

  console.log(sessionStorage.getItem('avatar'))
}
