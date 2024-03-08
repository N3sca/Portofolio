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

