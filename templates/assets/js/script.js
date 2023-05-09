import {initializeApp} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {getDatabase, ref, set, onValue, get, child, remove } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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


const table_path = "orders/";

var pay_online  = document.getElementById("pay-online");
var pay_offline  = document.getElementById("pay-offline");
var order_btn = document.getElementById("place-order");
var done = document.getElementById("done");
var gpay = document.getElementById("gpay");
var review = document.getElementById("review");

review.style.display = 'none';
done.style.display = 'none';
gpay.style.display = 'none';



var pay_status;

pay_offline.onclick = function(){
    pay_status = "Pending";
    pay_offline.style.display = 'none';
    pay_online.style.display = 'none';

}

pay_online.onclick = function(){
    pay_status = "paid";
    gpay.style.display = 'block';
    pay_offline.style.display = 'none';
    pay_online.style.display = 'none';

}





var items = [];
var total_prize = 0;


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('seatid');
const ph = urlParams.get("ph");
console.log(id);  
var seat_info = document.getElementById("seat-info");
seat_info.innerText = "Your seat Id: "+id;




var vg1 = document.getElementById('vg1');
var vg2 = document.getElementById('vg2');
var vg3 = document.getElementById('vg3');
var vg4 = document.getElementById('vg4');
var vg5 = document.getElementById('vg5');
var vg6 = document.getElementById('vg6');
var vg7 = document.getElementById('vg7');
var vg8 = document.getElementById('vg8');
var vg9 = document.getElementById('vg9');
var vg10 = document.getElementById('vg10');
var vg11 = document.getElementById('vg11');
var vg12 = document.getElementById('vg12');
var vg13  = document.getElementById('vg13');
var vg14  = document.getElementById('vg14');
var vg15  = document.getElementById('vg15');

var vg1t = document.getElementById('vg1t');
var vg2t = document.getElementById('vg2t');
var vg3t = document.getElementById('vg3t');
var vg4t = document.getElementById('vg4t');
var vg5t = document.getElementById('vg5t');
var vg6t = document.getElementById('vg6t');
var vg7t = document.getElementById('vg7t');
var vg8t = document.getElementById('vg8t');
var vg9t = document.getElementById('vg9t');
var vg10t = document.getElementById('vg10t');
var vg11t = document.getElementById('vg11t');
var vg12t = document.getElementById('vg12t');
var vg13t  = document.getElementById('vg13t');
var vg14t  = document.getElementById('vg14t');
var vg15t  = document.getElementById('vg15t');











vg1.addEventListener('change',()=>{
    var state = vg1.checked;
    if(state){
        items.push(vg1t.innerHTML);
        total_prize += 100;
    }else{
        var index = items.indexOf(vg1t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);


})



vg2.addEventListener('change',()=>{
    var state = vg2.checked;
    if(state){
        items.push(vg2t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(vg2t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})





vg3.addEventListener('change',()=>{
    var state = vg3.checked;
    if(state){
        items.push(vg3t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(vg3t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg4.addEventListener('change',()=>{
    var state = vg4.checked;
    if(state){
        items.push(vg4t.innerHTML);
        total_prize += 140;

    }else{
        var index = items.indexOf(vg4t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 140;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg5.addEventListener('change',()=>{
    var state = vg5.checked;
    if(state){
        items.push(vg5t.innerHTML);
        total_prize += 110;

    }else{
        var index = items.indexOf(vg5t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 110;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg6.addEventListener('change',()=>{
    var state = vg6.checked;
    if(state){
        items.push(vg6t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(vg6t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg7.addEventListener('change',()=>{
    var state = vg7.checked;
    if(state){
        items.push(vg7t.innerHTML);
        total_prize += 150;

    }else{
        var index = items.indexOf(vg7t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 150;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg8.addEventListener('change',()=>{
    var state = vg8.checked;
    if(state){
        items.push(vg8t.innerHTML);
        total_prize += 120;

    }else{
        var index = items.indexOf(vg8t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 120;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg9.addEventListener('change',()=>{
    var state = vg9.checked;
    if(state){
        items.push(vg9t.innerHTML);
        total_prize += 110;

    }else{
        var index = items.indexOf(vg9t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 110;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg10.addEventListener('change',()=>{
    var state = vg10.checked;
    if(state){
        items.push(vg10t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(vg10t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg11.addEventListener('change',()=>{
    var state = vg11.checked;
    if(state){
        items.push(vg11t.innerHTML);
        total_prize += 120;

    }else{
        var index = items.indexOf(vg11t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 120;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg12.addEventListener('change',()=>{
    var state = vg12.checked;
    if(state){
        items.push(vg12t.innerHTML);
        total_prize += 85;

    }else{
        var index = items.indexOf(vg12t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 85;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg13.addEventListener('change',()=>{
    var state = vg13.checked;
    if(state){
        items.push(vg13t.innerHTML);
        total_prize += 85;

    }else{
        var index = items.indexOf(vg13t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 85;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg14.addEventListener('change',()=>{
    var state = vg14.checked;
    if(state){
        items.push(vg14t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(vg14t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})



vg15.addEventListener('change',()=>{
    var state = vg15.checked;
    if(state){
        items.push(vg15t.innerHTML);
        total_prize += 90;

    }else{
        var index = items.indexOf(vg15t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 90;

          }
    }
    console.log(items);
    console.log(total_prize);

})




// ---------------------------------


var tvg1 = document.getElementById('tvg1');
var tvg2 = document.getElementById('tvg2');
var tvg3 = document.getElementById('tvg3');
var tvg4 = document.getElementById('tvg4');
var tvg5 = document.getElementById('tvg5');
var tvg6 = document.getElementById('tvg6');
var tvg7 = document.getElementById('tvg7');
var tvg8 = document.getElementById('tvg8');


var tvg1t = document.getElementById('tvg1t');
var tvg2t = document.getElementById('tvg2t');
var tvg3t = document.getElementById('tvg3t');
var tvg4t = document.getElementById('tvg4t');
var tvg5t = document.getElementById('tvg5t');
var tvg6t = document.getElementById('tvg6t');
var tvg7t = document.getElementById('tvg7t');
var tvg8t = document.getElementById('tvg8t');







tvg1.addEventListener('change',()=>{
    var state = tvg1.checked;
    if(state){
        items.push(tvg1t.innerHTML);
        total_prize += 90;
    }else{
        var index = items.indexOf(tvg1t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 90;

          }
    }
    console.log(items);
    console.log(total_prize);


})



tvg2.addEventListener('change',()=>{
    var state = tvg2.checked;
    if(state){
        items.push(tvg2t.innerHTML);
        total_prize += 80;

    }else{
        var index = items.indexOf(tvg2t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 80;

          }
    }
    console.log(items);
    console.log(total_prize);

})





tvg3.addEventListener('change',()=>{
    var state = tvg3.checked;
    if(state){
        items.push(tvg3t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(tvg3t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tvg4.addEventListener('change',()=>{
    var state = tvg4.checked;
    if(state){
        items.push(tvg4t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(tvg4t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tvg5.addEventListener('change',()=>{
    var state = tvg5.checked;
    if(state){
        items.push(tvg5t.innerHTML);
        total_prize += 110;

    }else{
        var index = items.indexOf(tvg5t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 110;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tvg6.addEventListener('change',()=>{
    var state = tvg6.checked;
    if(state){
        items.push(tvg6t.innerHTML);
        total_prize += 110;

    }else{
        var index = items.indexOf(tvg6t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 110;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tvg7.addEventListener('change',()=>{
    var state = tvg7.checked;
    if(state){
        items.push(tvg7t.innerHTML);
        total_prize += 120;

    }else{
        var index = items.indexOf(tvg7t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 120;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tvg8.addEventListener('change',()=>{
    var state = tvg8.checked;
    if(state){
        items.push(tvg8t.innerHTML);
        total_prize += 100;

    }else{
        var index = items.indexOf(tvg8t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 100;

          }
    }
    console.log(items);
    console.log(total_prize);

})


// -------------------------------------------------------

var tnvg1 = document.getElementById('tnvg1');
var tnvg2 = document.getElementById('tnvg2');
var tnvg3 = document.getElementById('tnvg3');
var tnvg4 = document.getElementById('tnvg4');
var tnvg5 = document.getElementById('tnvg5');
var tnvg6 = document.getElementById('tnvg6');
var tnvg7 = document.getElementById('tnvg7');
var tnvg8 = document.getElementById('tnvg8');
var tnvg9 = document.getElementById('tnvg9');
var tnvg10 = document.getElementById('tnvg10');
var tnvg11 = document.getElementById('tnvg11');


var tnvg1t = document.getElementById('tnvg1t');
var tnvg2t = document.getElementById('tnvg2t');
var tnvg3t = document.getElementById('tnvg3t');
var tnvg4t = document.getElementById('tnvg4t');
var tnvg5t = document.getElementById('tnvg5t');
var tnvg6t = document.getElementById('tnvg6t');
var tnvg7t = document.getElementById('tnvg7t');
var tnvg8t = document.getElementById('tnvg8t');
var tnvg9t = document.getElementById('tnvg9t');
var tnvg10t = document.getElementById('tnvg10t');
var tnvg11t = document.getElementById('tnvg11t');









tnvg1.addEventListener('change',()=>{ 
    var state = tnvg1.checked;
    if(state){
        items.push(tnvg1t.innerHTML);
        total_prize += 280;
    }else{
        var index = items.indexOf(tnvg1t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 280;

          }
    }
    console.log(items);
    console.log(total_prize);


})



tnvg2.addEventListener('change',()=>{
    var state = tnvg2.checked;
    if(state){
        items.push(tnvg2t.innerHTML);
        total_prize += 300;

    }else{
        var index = items.indexOf(tnvg2t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 300;

          }
    }
    console.log(items);
    console.log(total_prize);

})





tnvg3.addEventListener('change',()=>{
    var state = tnvg3.checked;
    if(state){
        items.push(tnvg3t.innerHTML);
        total_prize += 280;

    }else{
        var index = items.indexOf(tnvg3t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 280;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg4.addEventListener('change',()=>{
    var state = tnvg4.checked;
    if(state){
        items.push(tnvg4t.innerHTML);
        total_prize += 130;

    }else{
        var index = items.indexOf(tnvg4t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 130;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg5.addEventListener('change',()=>{
    var state = tnvg5.checked;
    if(state){
        items.push(tnvg5t.innerHTML);
        total_prize += 110;

    }else{
        var index = items.indexOf(tnvg5t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 110;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg6.addEventListener('change',()=>{
    var state = tnvg6.checked;
    if(state){
        items.push(tnvg6t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(tnvg6t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg7.addEventListener('change',()=>{
    var state = tnvg7.checked;
    if(state){
        items.push(tnvg7t.innerHTML);
        total_prize += 120;

    }else{
        var index = items.indexOf(tnvg7t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 120;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg8.addEventListener('change',()=>{
    var state = tnvg8.checked;
    if(state){
        items.push(tnvg8t.innerHTML);
        total_prize += 95;

    }else{
        var index = items.indexOf(tnvg8t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 95;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg9.addEventListener('change',()=>{
    var state = tnvg9.checked;
    if(state){
        items.push(tnvg9t.innerHTML);
        total_prize += 150;

    }else{
        var index = items.indexOf(tnvg9t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 150;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg10.addEventListener('change',()=>{
    var state = tnvg10.checked;
    if(state){
        items.push(tnvg10t.innerHTML);
        total_prize += 110;

    }else{
        var index = items.indexOf(tnvg10t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 110;

          }
    }
    console.log(items);
    console.log(total_prize);

})



tnvg11.addEventListener('change',()=>{
    var state = tnvg11.checked;
    if(state){
        items.push(tnvg11t.innerHTML);
        total_prize += 300;

    }else{
        var index = items.indexOf(tnvg11t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 300;

          }
    }
    console.log(items);
    console.log(total_prize);

})



var ck1 = document.getElementById('ck1');
var ck2 = document.getElementById('ck2');
var ck3 = document.getElementById('ck3');
var ck4 = document.getElementById('ck4');
var ck5 = document.getElementById('ck5');
var ck6 = document.getElementById('ck6');
var ck7 = document.getElementById('ck7');
var ck8 = document.getElementById('ck8');
var ck9 = document.getElementById('ck9');
var ck10 = document.getElementById('ck10');
var ck11 = document.getElementById('ck11');
var ck12 = document.getElementById('ck12');
var ck13  = document.getElementById('ck13');
var ck14  = document.getElementById('ck14');



var ck1t = document.getElementById('ck1t');
var ck2t = document.getElementById('ck2t');
var ck3t = document.getElementById('ck3t');
var ck4t = document.getElementById('ck4t');
var ck5t = document.getElementById('ck5t');
var ck6t = document.getElementById('ck6t');
var ck7t = document.getElementById('ck7t');
var ck8t = document.getElementById('ck8t');
var ck9t = document.getElementById('ck9t');
var ck10t = document.getElementById('ck10t');
var ck11t = document.getElementById('ck11t');
var ck12t = document.getElementById('ck12t');
var ck13t  = document.getElementById('ck13t');
var ck14t  = document.getElementById('ck14t');







ck1.addEventListener('change',()=>{
    var state = ck1.checked;
    if(state){
        items.push(ck1t.innerHTML);
        total_prize += 180;
    }else{
        var index = items.indexOf(ck1t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 180;

          }
    }
    console.log(items);
    console.log(total_prize);


})



ck2.addEventListener('change',()=>{
    var state = ck2.checked;
    if(state){
        items.push(ck2t.innerHTML);
        total_prize += 370;

    }else{
        var index = items.indexOf(ck2t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 370;

          }
    }
    console.log(items);
    console.log(total_prize);

})





ck3.addEventListener('change',()=>{
    var state = ck3.checked;
    if(state){
        items.push(ck3t.innerHTML);
        total_prize += 410;

    }else{
        var index = items.indexOf(ck3t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 410;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck4.addEventListener('change',()=>{
    var state = ck4.checked;
    if(state){
        items.push(ck4t.innerHTML);
        total_prize += 440;

    }else{
        var index = items.indexOf(ck4t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 440;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck5.addEventListener('change',()=>{
    var state = ck5.checked;
    if(state){
        items.push(ck5t.innerHTML);
        total_prize += 430;

    }else{
        var index = items.indexOf(ck5t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 430;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck6.addEventListener('change',()=>{
    var state = ck6.checked;
    if(state){
        items.push(ck6t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck6t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck7.addEventListener('change',()=>{
    var state = ck7.checked;
    if(state){
        items.push(ck7t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck7t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck8.addEventListener('change',()=>{
    var state = ck8.checked;
    if(state){
        items.push(ck8t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck8t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck9.addEventListener('change',()=>{
    var state = ck9.checked;
    if(state){
        items.push(ck9t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck9t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck10.addEventListener('change',()=>{
    var state = ck10.checked;
    if(state){
        items.push(ck10t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck10t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck11.addEventListener('change',()=>{
    var state = ck11.checked;
    if(state){
        items.push(ck11t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck11t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck12.addEventListener('change',()=>{
    var state = ck12.checked;
    if(state){
        items.push(ck12t.innerHTML);
        total_prize += 430;

    }else{
        var index = items.indexOf(ck12t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 430;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck13.addEventListener('change',()=>{
    var state = ck13.checked;
    if(state){
        items.push(ck13t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck13t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})



ck14.addEventListener('change',()=>{
    var state = ck14.checked;
    if(state){
        items.push(ck14t.innerHTML);
        total_prize += 390;

    }else{
        var index = items.indexOf(ck14t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 390;

          }
    }
    console.log(items);
    console.log(total_prize);

})





var mu1 = document.getElementById('mu1');
var mu2 = document.getElementById('mu2');
var mu3 = document.getElementById('mu3');
var mu4 = document.getElementById('mu4');
var mu5 = document.getElementById('mu5');
var mu6 = document.getElementById('mu6');
var mu7 = document.getElementById('mu7');
var mu8 = document.getElementById('mu8');
var mu9 = document.getElementById('mu9');





var mu1t = document.getElementById('mu1t');
var mu2t = document.getElementById('mu2t');
var mu3t = document.getElementById('mu3t');
var mu4t = document.getElementById('mu4t');
var mu5t = document.getElementById('mu5t');
var mu6t = document.getElementById('mu6t');
var mu7t = document.getElementById('mu7t');
var mu8t = document.getElementById('mu8t');
var mu9t = document.getElementById('mu9t');






mu1.addEventListener('change',()=>{
    var state = mu1.checked;
    if(state){
        items.push(mu1t.innerHTML);
        total_prize += 160;
    }else{
        var index = items.indexOf(mu1t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);


})



mu2.addEventListener('change',()=>{
    var state = mu2.checked;
    if(state){
        items.push(mu2t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(mu2t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})





mu3.addEventListener('change',()=>{
    var state = mu3.checked;
    if(state){
        items.push(mu3t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(mu3t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})



mu4.addEventListener('change',()=>{
    var state = mu4.checked;
    if(state){
        items.push(mu4t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(mu4t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})



mu5.addEventListener('change',()=>{
    var state = mu5.checked;
    if(state){
        items.push(mu5t.innerHTML);
        total_prize += 170;

    }else{
        var index = items.indexOf(mu5t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 170;

          }
    }
    console.log(items);
    console.log(total_prize);

})



mu6.addEventListener('change',()=>{
    var state = mu6.checked;
    if(state){
        items.push(mu6t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(mu6t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})



mu7.addEventListener('change',()=>{
    var state = mu7.checked;
    if(state){
        items.push(mu7t.innerHTML);
        total_prize += 170;

    }else{
        var index = items.indexOf(mu7t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 170;

          }
    }
    console.log(items);
    console.log(total_prize);

})



mu8.addEventListener('change',()=>{
    var state = mu8.checked;
    if(state){
        items.push(mu8t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(mu8t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})



mu9.addEventListener('change',()=>{
    var state = mu9.checked;
    if(state){
        items.push(mu9t.innerHTML);
        total_prize += 160;

    }else{
        var index = items.indexOf(mu9t.innerHTML);
        if (index !== -1) {
            items.splice(index, 1);
            total_prize -= 160;

          }
    }
    console.log(items);
    console.log(total_prize);

})


var status = document.getElementById("status");

function setvalue(path, val){
    set(ref(db,path),val);
}

order_btn.addEventListener('click', ()=>{
    setvalue(table_path+'/'+id, {'seat-id':id,
    'items':items,
    'total' : total_prize,
    'status':pay_status
        });

    console.log("order placed....")
    status.innerHTML = "Order Placed...."
    gpay.style.display = 'none';
    setTimeout(function() {
        order_btn.style.display = 'none';
        done.style.display = 'block';
        review.style.display = 'block';

        review.addEventListener('click', ()=>{
            window.location.replace("review.html");
            remove(ref(db,"/tabel-booking-available-no/"+ph));
        })

        status.innerHTML = '';
      }, 3000);

})



