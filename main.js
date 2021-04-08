// Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyBswPeB2zAznjhh9yDdBF6klmwe8w5H3I0",
    authDomain: "contactform-2215e.firebaseapp.com",
    databaseURL: "https://contactform-2215e.firebaseio.com",
    projectId: "contactform-2215e",
    storageBucket: "contactform-2215e.appspot.com"
    
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var database = firebase.database();
  var messagesRef = database.ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, lastName, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message
    });
  }
  