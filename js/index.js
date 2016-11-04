var signup = document.querySelector('#sign-up')
var signin = document.querySelector('#sign-in')
var signupHome = document.querySelector('#signup')
var signinHome = document.querySelector('#signin')

if (signup !== null) {
   signup.addEventListener('click', signupHandler)
} else if (signin !== null) {
  signin.addEventListener('click', signinHandler)
} else {
  signupHome.addEventListener('click', function() {
    window.location.href = "/sign-up.html"
  })
  signinHome.addEventListener('click', function() {
    window.location.href = "/sign-in.html"
  })
}

function signupHandler() {

  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value
  var name = document.querySelector('#name').value
  var photo = document.querySelector('#photo')

  var data = new FormData()
  data.append('email', email)
  data.append('password', password)
  data.append('name', name)
  data.append('avatar', photo.files[0])

  fetch('http://7d7089fa.ngrok.io/api/signup', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))
  // .then(signedupHandler)

}

function signedupHandler(response) {
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('chirps', response.user.api_token)
    window.location.href = '/chirps.html'
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

  fetch('http://7d7089fa.ngrok.io/api/log_in', {
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
  window.location.href = '/chirps.html'
}
