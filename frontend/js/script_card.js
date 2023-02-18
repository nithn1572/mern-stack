const user1 = {
    name : "ANNAPU REDDY ARAVIND REDDY",
    image :"images/empty_pp.jpg"
}
const user2 = {
    name : "ANNAPU REDDY NITHIN KUMAR REDDY",
    image : "images/smoke.jpg"
}
let currentIsNithin = true ;
let currentuser =  user1;

let usertitle = document.getElementById("username");
let userimage = document.getElementById("userimage");

let toggleuser = function(){
    if(currentIsNithin){
        currentuser = user2;
        currentIsNithin =false;
    }
    else{
        currentuser = user1;
        currentIsNithin = true;
    }
    
    usertitle.innerHTML = currentuser.name;
    userimage.src = currentuser.image
}