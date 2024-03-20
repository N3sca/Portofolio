var theme = window.localStorage.getItem('data-theme');
if(theme != null){
    document.documentElement.setAttribute('data-theme', theme)
}else document.documentElement.setAttribute('data-theme', 'dark');


function themes(){
    if(document.querySelector("html").getAttribute("data-theme") == "dark"){
        document.querySelector("html").setAttribute("data-theme", "light");
        window.localStorage.setItem('data-theme', 'light');
        document.getElementById("themeS").classList.replace("fa-sun", "fa-moon");
    }else{
        document.querySelector("html").setAttribute("data-theme", "dark");
        window.localStorage.setItem('data-theme', 'dark');
        document.getElementById("themeS").classList.replace("fa-moon", "fa-sun");
    }
}



const executeCodes = () => {
if (document.cookie.includes("teste")) return;
document.querySelector(".Cokkies").classList.add("show");

document.querySelectorAll(".cokkiesbtn").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".Cokkies").classList.remove("show");
        if (button.id == "acceptBtn") {
            //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days (60 * 60 * 24 * 30)
            document.cookie = "PortfolioN3sca=teste; max-age=" + 300; //300 = 5 min
        }
    });
  });
};



function modal(x){
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModalImg").src = document.getElementById(x).src;
    document.getElementById("caption").innerHTML = document.getElementById(x).alt;
}
function modal2(x){
    document.getElementById(x).style.display = "none";
}

var pointerimg;
var maximg;
function maxiimg(){
    maximg = document.getElementById("orientation").getAttribute("max");
}
function rightarrow(){
    pointerimg = document.getElementById("orientation").getAttribute("ori");
    document.getElementById("myImg" + pointerimg).style.display = "none";
    
    if(pointerimg != maximg){
        pointerimg = parseInt(pointerimg) + 1;
        
    }else{
        document.getElementById("myImg" + pointerimg).style.display = "none";
        pointerimg = 1;
    }

    document.getElementById("orientation").setAttribute("ori", pointerimg);
    document.getElementById("orientation").innerHTML = pointerimg + " / " + maximg;
    document.getElementById("myImg" + pointerimg).style.display = "block";
}
function leftarrow(){
    pointerimg = document.getElementById("orientation").getAttribute("ori");
    document.getElementById("myImg" + pointerimg).style.display = "none";
    
    if(pointerimg != "1"){
        pointerimg = parseInt(pointerimg) - 1;
        
    }else{
        document.getElementById("myImg" + pointerimg).style.display = "none";
        pointerimg = 3;
    }

    document.getElementById("orientation").setAttribute("ori", pointerimg);
    document.getElementById("orientation").innerHTML = pointerimg + " / " + maximg;
    document.getElementById("myImg" + pointerimg).style.display = "block";
}
