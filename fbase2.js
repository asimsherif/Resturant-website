import {initializeApp} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {getDatabase, ref, set, onValue, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDas3E1vVvcE1KZjZL9RqGmtSQgBPCeQYQ",
    authDomain: "restaurant-website-8b564.firebaseapp.com",
    projectId: "restaurant-website-8b564",
    storageBucket: "restaurant-website-8b564.appspot.com",
    messagingSenderId: "913904119782",
    appId: "1:913904119782:web:89a501e9d0e54148297027"
};

initializeApp(firebaseConfig);
const db = getDatabase();



const table_path = "tabel-booking-available-no/";
const thank = document.getElementById("thank");

const otpc = document.getElementById('otp');

function setvalue(path, val){
    set(ref(db,path),val);
}

function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


var get_once_2 = function() {
    return new Promise(resolve => {
        setTimeout(function() {
            const dbRef = ref(db);
            get(child(dbRef, "/tabel-booking-available-no")).then((snapshot) => {
                if (snapshot.exists()) {
                resolve(snapshot.val());
                } else {
                console.log("No data available");
                }
            })
        }, 2000);
    });
};


// var tot_datas= await get_once_2();



function setcolors(){
    const starCountRef = ref(db, "/tabel-booking-available-no");
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var ids = Object.keys(data);
        for(var i = 0; i <ids.length; i++){
            var temp = data[ids[i]];
            var id_now = temp[4][1];
            var sty = document.getElementById(id_now);
            sty.style.backgroundColor = 'grey';
            sty.style.pointerEvents = 'none';
        }
    });
}


setcolors();





const form = document.getElementById('regform');

var arr = [];




console.log(global.id);


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
  
    for (const pair of formData.entries()) {
  
      arr.push(pair);
    }   
    
    var rv = {};
    for (var i = 0; i < arr.length; ++i){
        rv[i] = arr[i];
    }
    var otp_now = generateOTP();
    console.log(otp_now);

    rv[4] = ['seat-id',global.id];
    rv[5] = ['otp',otp_now];
  
    setvalue(table_path+arr[2][1], rv);
    setvalue(table_path+'/'+arr[2][1]+"/6", 1);
    rv=[];
    arr = [];
    thank.innerHTML = "Thank your <br> Your OTP: "+otp_now+"<br> Your Seat ID: "+global.id;
    console.log(otp_now);

  
    e.target.reset();
  })
  


