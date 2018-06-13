firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("afterLoginDiv").style.display = "block";
        document.getElementById("loginDiv").style.display = "none";
        var user = firebase.auth().currentUser;

        if(user != null){
            var email = user.email;
            document.getElementById("user_para").innerHTML = 'welcome user' + email; 
        }
    } else {
      // No user is signed in.
        window.alert('Not logged in');
        document.getElementById("afterLoginDiv").style.display = "none";
        document.getElementById("loginDiv").style.display = "block";
    }
  });

function click_login () {
    var userEmail = document.getElementById('email_field').value;
    var userPass = document.getElementById('pwd_field').value;
    console.log(userEmail,userPass, "email pwd");
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : ", error.message);
      });

}

function click_logout() {
    firebase.auth().signOut().then(function() {
        window.alert("Sign-out successful");    
    }).catch(function(error) {
        // An error happened.
    });
}