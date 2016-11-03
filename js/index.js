var signup = document.querySelector('#signup')
var signin = document.querySelector('#signin')

signup.addEventListener('click', signupHandler)
signin.addEventListener('click', signinHandler)

function signupHandler() {

  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value

  fetch('', {
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
  .then(signedupHandler)

}

function signedupHandler(response) {
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('phetchly', response.user.api_token)
    window.location.href = '/photos.html'
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

  fetch('', {
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
  sessionStorage.setItem('phetchly', response.user.api_token)
  window.location.href = '/photos.html'
}
