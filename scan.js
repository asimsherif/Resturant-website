import {initializeApp} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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




var phone = document.getElementById('phone');
var seatid = document.getElementById('seatid');
var otp = document.getElementById('otp');
var submit = document.getElementById('submit');
var res = document.getElementById('res');
var con_btn = document.getElementById('continue');
var can_btn = document.getElementById('cancel');



con_btn.style.display = 'none';
can_btn.style.display = 'none';






function setcolors(phone, id, otp){
    const starCountRef = ref(db, "/tabel-booking-available-no");
    res.innerHTML = '<p>Fetching data..</p>';
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var ids = Object.keys(data);
        for(var i = 0; i <ids.length; i++){
            var temp = data[ids[i]];
            //console.log(temp);
            if (temp[2][1]== phone){
                var ot = temp[5][1];
                var seat_id = temp[4][1];
                if(ot == otp){
                    if(seat_id == id){
                        console.log("Verified");
                        res.innerHTML = '<p>Verified</p>';
                        con_btn.style.display = 'block';
                        can_btn.style.display = 'block';
                        let rec_path =  ref(db, "/tabel-booking-available-no/"+phone);
                        console.log(rec_path);
                        can_btn.onclick = function(){
                            remove(rec_path).then(() => {
                                console.log("location removed");
                                con_btn.style.display = 'none';
                                can_btn.style.display = 'none';
                                res.innerHTML = '<p>Thank You, Your Reservation has been cancled!!</p>';
                                setTimeout(function(){
                                    window.location.replace("Resturant-website/templates/review.html");
                                    remove(ref(db,"/tabel-booking-available-no/"+phone));
                                })

                              });
                        };

                        con_btn.onclick = function(){
                            window.location.replace("Resturant-website/templates/menu.html?seatid="+seat_id+"&ph="+phone);
                        }


                        break;
                        
                    }else{
                        console.log('check your sear id');
                        res.innerHTML = '<p>Check your data!!</p>';
                        can_btn.addEventListener('click', ()=>{
                            setTimeout(function(){
                                //window.location.replace("templates/review.html");
                                remove(ref(db,"/tabel-booking-available-no/"+phone));
                            })
        
                        });

                    }
                }else{
                    console.log("check your otp");
                    res.innerHTML = '<p>check your otp</p>';
                    can_btn.addEventListener('click', ()=>{
                        setTimeout(function(){
                            //window.location.replace("templates/review.html");
                            remove(ref(db,"/tabel-booking-available-no/"+phone));
                        })
    
                    });
                    

                }
            }else{
                console.log("check your otp");
                res.innerHTML = '<p>Check your data!!</p>';
                can_btn.style.display = 'block';
                can_btn.addEventListener('click', ()=>{
                    setTimeout(function(){
                        //window.location.replace("templates/review.html");
                        remove(ref(db,"/tabel-booking-available-no/"+phone));
                    })

                });
            }

        }
    });
}




// 00000
// : 
// Array(7)
// 0
// : 
// (2) ['username', 'sr']
// 1
// : 
// (2) ['email', 'sec20ec045@sairamtap.edu.in']
// 2
// : 
// (2) ['phone', '00000']
// 3
// : 
// (2) ['seat-type', '6']
// 4
// : 
// (2) ['seat-id', 61]
// 5
// : 
// (2) ['otp', '6410']
// 6
// : 
// 1





submit.addEventListener("click", ()=>{
    var phoneno = phone.value;
    var id = seatid.value;
    var otp_now = otp.value;
    setcolors(phoneno, id, otp_now);
  
});

// submit.addEventListener("click", () => {








