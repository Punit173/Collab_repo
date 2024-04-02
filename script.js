


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

function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };
    const task = ref.child('img/' + name).put(file, metadata);
    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);
            alert('Image uploaded successfully');
           
        })
        .catch(console.error);
}

const errorMsgElement = document.querySelector('span#errorMsg');








function retrieve() {
    var img_all = ""; 

//listing all files using below 2 lines
    const storageRef = firebase.storage().ref('img');
    storageRef.listAll()
        .then((result) => {
//use of promise to wait for url to be first collected in variable then executing other part of code
            const promises = result.items.map((item) => {
                const imagesRef = firebase.storage().ref().child('img');
                const imageRef = imagesRef.child(item.name);
                return imageRef.getDownloadURL();
            });

            return Promise.all(promises);
        })
        .then((urls) => {
//item.name consits of name of file and then we are displaying them using <img> tag 
            urls.forEach((url) => {
        
                 img_all += `<img src="${url}" class="disimage" alt="error loading image"><br><br>`;
            });

        
            document.getElementById("allimages").innerHTML=img_all;
        })
        .catch((error) => {
            console.error('Error retrieving download URLs:', error);
        });
}
