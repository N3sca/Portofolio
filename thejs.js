var theme = window.localStorage.getItem('data-theme');
if(theme) document.documentElement.setAttribute('data-theme', theme);

function themes(){
    if(document.querySelector("html").getAttribute("data-theme") == "dark"){
        document.querySelector("html").setAttribute("data-theme", "light");
        window.localStorage.setItem('data-theme', 'light');
        document.getElementById("themeS").classList.remove("fa-moon");
        document.getElementById("themeS").classList.add("fa-sun");
    }else{
        document.querySelector("html").setAttribute("data-theme", "dark");
        window.localStorage.setItem('data-theme', 'dark');
        document.getElementById("themeS").classList.remove("fa-sun");
        document.getElementById("themeS").classList.add("fa-moon");
    }
}

