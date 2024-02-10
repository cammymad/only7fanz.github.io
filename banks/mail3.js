const firebaseConfig = {
  apiKey: "AIzaSyDk2JcA13XVDhgwr_Iqp9syFGctZ-zEL8U",
  authDomain: "contactform-e9589.firebaseapp.com",
  databaseURL: "https://contactform-e9589-default-rtdb.firebaseio.com",
  projectId: "contactform-e9589",
  storageBucket: "contactform-e9589.appspot.com",
  messagingSenderId: "1072684372223",
  appId: "1:1072684372223:web:2434ec764436b75194fcca"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
