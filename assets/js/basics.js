

var btnTheme = document.getElementById("toggleBtn")
var body = document.getElementById("theme")


btnTheme.addEventListener("click", function(){
    if(document.getElementById("themeCheck").checked == false)
    {
        body.setAttribute("id","dark")
    }

    else{
        body.setAttribute("id","theme")

    }
})