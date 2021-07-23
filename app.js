 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB3nmL0QIVbsohGDHhOjkNZog_7AmkH0u0",
    authDomain: "user-data-c35fc.firebaseapp.com",
    projectId: "user-data-c35fc",
    storageBucket: "user-data-c35fc.appspot.com",
    messagingSenderId: "582386456782",
    appId: "1:582386456782:web:3e64b7f5c82487a0ac589f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let userinfo = firebase.database().ref("infos");



document.querySelector(".form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = document.querySelector(".name").value;
    let lastName = document.querySelector(".lastName").value;
    let email = document.querySelector(".email").value;
    let address = document.querySelector(".address").value;
    let address2 = document.querySelector(".address2").value;
    let city = document.querySelector(".city").value;
    let state = document.querySelector(".state").value;
    let zip = document.querySelector(".zip").value;
    saveUserData(name, lastName, email, address, address2, city, state, zip);
    
    document.querySelector(".form").reset();
}

function saveUserData(name, lastName, email, address, address2, city, state, zip) {
  let newUserData = userinfo.push();

    newUserData.set({
      name: name,
      lastName: lastName,
      email: email,
      address: address,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
  });
  

}


 // Retrive userdata
   function retrieveData() {
    let ref = firebase.database().ref('infos');
    ref.on("value", gotData);
    
   }

    function gotData(data) {
        let info = data.val();
        let keys = Object.keys(info);
        
        for (let i = 0; i < keys.length; i++) {
            let infoData = keys[i];
            let uname = info[infoData].name;
            let lname = info[infoData].lastName;
            let uemail = info[infoData].email;
            let uaddress = info[infoData].address;
            let uaddress2 = info[infoData].address2;
            let ucity = info[infoData].city;
            let ustate = info[infoData].state;
            let uzip = info[infoData].zip;
            console.log(uname, lname, uemail, uaddress, uaddress2, ucity, ustate, uzip);

            let results = document.querySelector(".results");

            results.innerHTML += `<div>
            <p>Name: ${uname}<br />
            <a>Last name: ${lname}</a> <br />
            <a>Email: ${uemail}</a><br />
            <a>address: ${uaddress}</a><br />
            <a>address2: ${uaddress2}</a><br />
            <a>Massage: ${ucity}</a><br />
            <a>state: ${ustate}</a><br />
            <a>Zip: ${uzip}</a>
            </p>
            </div>`;
        }
        
    }

