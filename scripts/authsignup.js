// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    //window.location.href="home1.html"
    console.log('user logged in');
  } else {
    console.log('user logged out');
  }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
   // const modal = document.querySelector('#modal-signup');
    //M.Modal.getInstance(modal).close();
    signupForm.reset();
    window.location.href="index.html"
  });
});