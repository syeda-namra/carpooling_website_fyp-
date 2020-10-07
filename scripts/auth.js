// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    //window.location.href="home1.html"
    console.log('user logged in');
  } else {
    console.log('user logged out');
  }
})



// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
   // const modal = document.querySelector('#modal-login');
   // M.Modal.getInstance(modal).close();
    //loginForm.reset();
    window.location.href="home.html"
    //loginForm.reset();
  });

});