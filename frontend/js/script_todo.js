fetch("/api/todos")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("loader").style.display="none";
    });

var light = true;
function setTheme(){
    if(light){
        document.documentElement.setAttribute("data-bs-theme","dark");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-sun fa-lg fa-fw"></i>'
    }
    else{
        document.documentElement.setAttribute("data-bs-theme","light")
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-moon fa-lg fa-fw"></i>'
    }
    light = !light;
}