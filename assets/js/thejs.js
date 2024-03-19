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
            //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
            document.cookie = "PortfolioN3sca=teste; max-age=" + 60 * 60 * 24 * 30;
        }
    });
  });
};