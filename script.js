const firebaseConfig = {
    apiKey: "AIzaSyBZBS-CAB9D0ryL7S1l0Gjyy92_bUrlRQc",
    authDomain: "image-upload-1ce9c.firebaseapp.com",
    projectId: "image-upload-1ce9c",
    storageBucket: "image-upload-1ce9c.appspot.com",
    messagingSenderId: "174674177688",
    appId: "1:174674177688:web:927529cb8f1f3a3e002aed",
    measurementId: "G-6V5D2Y0KZJ"
  };
  
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     console.log(firebase);
     function uploadImage() {
        const ref = firebase.storage().ref();
        const file = document.querySelector("#photo").files[0];
        const name = +new Date() + "-" + file.name;
        const metadata = {
           contentType: file.type
        };
        const task = ref.child(name).put(file, metadata);task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
        console.log(url);
        alert('image uploaded successfully');
        document.querySelector("#image").src = url;
     })
     .catch(console.error);
     }
     const errorMsgElement = document.querySelector('span#errorMsg');