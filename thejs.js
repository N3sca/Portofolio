var theme = window.localStorage.getItem('data-theme');
if(theme) document.documentElement.setAttribute('data-theme', theme);

function themes(){
    if(document.querySelector("html").getAttribute("data-theme") == "dark"){
        document.querySelector("html").setAttribute("data-theme", "light");
        window.localStorage.setItem('data-theme', 'light');
    }else{
        document.querySelector("html").setAttribute("data-theme", "dark");
        window.localStorage.setItem('data-theme', 'dark');
    }
}