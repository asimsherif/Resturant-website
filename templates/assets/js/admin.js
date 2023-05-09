
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

var tableArr = [
    ["Seat Id"],["Items"],["Cost"],["status"]
  ]


  function setvalue(path, val){
    set(ref(db,path),val);
}

  let table = document.createElement('table');
  table.setAttribute("border", "2");

var statuss;

table.insertRow();
        
for (let cell of tableArr) {

    let newCell = table.rows[table.rows.length - 1].insertCell();

    newCell.textContent = cell;

}





document.body.appendChild(table);

function setcolors(){
    const starCountRef = ref(db, "/orders");
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var ids = Object.keys(data);
        console.log(ids.length);
        for(var i = 0; i < ids.length; i++){
            var temp = data[ids[i]]
            var tt = [temp['seat-id'], temp['items'], temp['total'], temp['status']];
            tableArr.push(tt)
                table.insertRow();
                for (let cell of tt) {
                    let newCell = table.rows[table.rows.length - 1].insertCell();
                    newCell.textContent = cell;
                    //console.log(cell);
                    if(cell == 'Pending'){
                        console.log('found');
                        newCell.style.color = 'blue'
                        newCell.style.cursor = 'pointer';
                        newCell.className = 'status_class';
                        newCell.onclick = function(){
                            newCell.textContent = 'paid';
                            newCell.style.color = 'black'
                            setvalue('/orders/'+temp['seat-id']+"/status", "paid");

                            console.log("clicked");
                        }
                    }
                }
            document.body.appendChild(table);
        }
    }, {
        onlyOnce: true
      });
}

setTimeout(function() {

    statuss = document.getElementsByClassName("status_class");
    for (let i1 = 0; i1 < statuss.length; i1++) {
        console.log(statuss[i1]);
        statuss[i1].addEventListener('click',()=>{

            const starCountRef = ref(db, "/orders");
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                var ids = Object.keys(data);
                console.log(ids.length);
                var tttt = [];
                for(var i = 0; i < ids.length; i++){
                    var temp = data[ids[i]]
                    if(temp['status'] == 'Pending'){
                        console.log(temp['seat-id']);
                        tttt.push(temp['seat-id']);
                    }
                }
                console.log(tttt);
                setvalue('/orders/'+tttt[i1]+"/status", "paid")

            },{
                onlyOnce: true
            });
        });

        }
}, 3000)



//console.log(statuss);


setcolors();

