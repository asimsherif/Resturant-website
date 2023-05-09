import {initializeApp} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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


function setvalue(path, val){
    set(ref(db,path),val);
}



setvalue(table_path+"2-seater",{
    available:5,
    reserved:5
});

setvalue(table_path+"4-seater",{
    available:5,
    reserved:5
});

setvalue(table_path+"6-seater",{
    available:5,
    reserved:5
});


var res;

function getvalue(path){
    const starCountRef = ref(db, path);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        res = data;
    });
}

getvalue(table_path+"2-seater");
console.log(res);



var phone = 9840;

  set(ref(db, "tabel-booking/"+phone), {
    seater_2:5,
    seater_4:5,
    seater_6:5
  });


