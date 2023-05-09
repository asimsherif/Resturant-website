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

const s2a = document.getElementById('s2a');
const s2r = document.getElementById('s2r');
const s4a = document.getElementById('s4a');
const s4r = document.getElementById('s4r');
const s6a = document.getElementById('s6a');
const s6r = document.getElementById('s6r');

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


var get_once = function() {
    return new Promise(resolve => {
        setTimeout(function() {
            const dbRef = ref(db);
            get(child(dbRef, "tableinfo/")).then((snapshot) => {
                if (snapshot.exists()) {
                resolve(snapshot.val());
                } else {
                console.log("No data available");
                }
            })
        }, 4000);
    });
};






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
        }, 4000);
    });
};


function get_opts(data){
    var otps = [];
    var ids = Object.keys(data);
    for(var i = 0; i<ids.length; i++){
        var temp = data[ids[i]];
        var temp2 = data[ids[i]]['otp'];
        var t = {};
        t[ids[i]] = temp2
        otps.push(t);
    }
    return otps;
}

var tot_datas= await get_once_2();
var otp_data = get_opts(tot_datas);





      
const table_avail_count= await get_once();

console.log(table_avail_count);

var reserved2 = table_avail_count["2seatres"];
var reserved4 = table_avail_count["4seatres"];
var reserved6 = table_avail_count["6seatres"];
var available2 = table_avail_count["2seatavai"];
var available4 = table_avail_count["4seatavai"];
var available6 = table_avail_count["6seatavai"];

s2a.innerHTML = "Available seats: "+available2;
s2r.innerHTML = "reserved seats: "+reserved2;
s4a.innerHTML = "Available seats: "+available4;
s4r.innerHTML = "reserved seats: "+reserved4;
s6a.innerHTML = "Available seats: "+available6;
s6r.innerHTML = "reserved seats: "+reserved6;




function getvalue(path){
    const thank = document.getElementById("thank");

    const starCountRef = ref(db, path);
    onValue(starCountRef, (snapshot) => {
        var otp = generateOTP();
        const data = snapshot.val();
        var ids = Object.keys(data);
        for(var i = 0; i<ids.length; i++){
            var temp = data[ids[i]];
            var active = data[ids[i]][4];
            var type = temp[3][1];
            console.log("type: "+type+"active: "+active);
            if(type == '2' && active == 1 && available2 !=0){
                reserved2++;
                available2--;
                setvalue("/tableinfo/2seatavai", available2);
                setvalue("/tableinfo/2seatres", reserved2);
                setvalue(path+"/"+ids[i]+'/4',0);
                setvalue(path+"/"+ids[i]+'/otp',otp);
                otpc.innerHTML = "Your OTP: "+otp;
                console.log("2 seat updated");
                console.log("otp"+otp);

                s2a.innerHTML = "Available seats: "+available2;
                s2r.innerHTML = "reserved seats: "+reserved2;
                thank.innerHTML = "Your seats have been reserved";
            }else if (type == '4' && active == 1 && available4 !=0){
                reserved4++;
                available4--;
                setvalue("/tableinfo/4seatavai", available4);
                setvalue("/tableinfo/4seatres", reserved4);
                setvalue(path+"/"+ids[i]+'/4',0);
                setvalue(path+"/"+ids[i]+'/otp',otp);
                console.log("otp"+otp);

                otpc.innerHTML = "Your OTP: "+otp;
                console.log("4 seat updated");

                s4a.innerHTML = "Available seats: "+available4;
                s4r.innerHTML = "reserved seats: "+reserved4;
                thank.innerHTML = "Your seats have been reserved";

            }else if (type == '6' && active == 1 && available6 !=0){
                reserved6++;
                available6--;
                setvalue("/tableinfo/6seatavai", available6);
                setvalue("/tableinfo/6seatres", reserved6);
                setvalue(path+"/"+ids[i]+'/4',0);
                setvalue(path+"/"+ids[i]+'/otp',otp);
                otpc.innerHTML = "Your OTP: "+otp;  
                console.log("6 seat updated");
                console.log("otp"+otp);

                s6a.innerHTML = "Available seats: "+available6;
                s6r.innerHTML = "reserved seats: "+reserved6;
                thank.innerHTML = "Your seats have been reserved";
            }
            
            
            // else if((type == 6 && available6 == 0)){
            //     thank.innerHTML = "Sorry, please check other seats";
            // }else if((type == 2 && available4 == 0)){
            //     thank.innerHTML = "Sorry, please check other seats";
            // }else if((type == 2 && available2== 0)){
            //     thank.innerHTML = "Sorry, please check other seats";
            // }
        }
    });
}

getvalue(table_path);






const form = document.getElementById('regform');

var arr = [];


    





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

  console.log(rv);

  setvalue(table_path+arr[2][1], rv);
  setvalue(table_path+'/'+arr[2][1]+"/4", 1);


  e.target.reset();
})




// verification form:


const vform = document.getElementById('veriform');

      
  
function fun() {  
console.log(".....");
}  

function verify(d1,d2){
    var container = $("#contactForm");
    var d = document.getElementById('verify-form');
    if (parseInt(d1) == parseInt(d2)){
        console.log("success");
        d.innerHTML = "verification successfull";
        setTimeout(fun, 2000);  
    }else{
        console.log("unsuccess");
        d.innerHTML = "verification unsuccessfull";

    }
}



var varr = [];
vform.addEventListener('submit', (e) => {
    e.preventDefault()
    const vformData = new FormData(vform)

  
    for (const pair of vformData.entries()) {
      varr.push(pair);
    }   

    var vrv = {};
    for (var i = 0; i < varr.length; ++i){
        vrv[i] = varr[i];
    }
    var id = vrv[0]['1'];
    var ot = vrv[1]['1'];
    console.log("id"+id);

    console.log(vrv);

    const entries = Object.entries(otp_data);
    var flag = 0;
    for(var i = 0; i< entries.length; i++){
        var vid = parseInt(Object.entries(otp_data[i])[0][0]);
        console.log(vid);
        if (vid == id){
            var otp_d = otp_data[i][vid];
            verify(otp_d, ot);
            console.log(vid);
            console.log(ot);
            console.log(otp_d);
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        console.log("no records were found....");
        document.getElementById('verify-form').innerHTML = "no records were found....";
    }
  
    e.target.reset();
  
  })


