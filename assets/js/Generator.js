/* Recebendo todas ids e inicializa-lós */

//varaivéis
let btnList = document.querySelectorAll(".group-fix")
let popList = document.querySelectorAll("#popUP")
let btnClose = document.querySelectorAll("#closebtn")
let btnTypeSize = document.querySelectorAll("[name ~= btnType]")
let btnEdit = document.getElementById("btnEdit")
let bgColorInpt = document.getElementById("color")
let textAddInpt = document.querySelector("#text-add")
let radiusRangeInpt = document.getElementById("radius-range")
let label = document.querySelectorAll("#label")
let alertList = document.querySelectorAll("#alert-edit")
let c = document.getElementById("alert-edit")


//Area para functions open/Hide
for(let i = 0; i<btnList.length; i++)
{
    btnList[i].addEventListener("click", function(){
        for(let i=0; i<popList.length; i++)
        {
            popList[i].style.display = "none"
        }
        if(i==6)
        {
            popList[i].style.display = "grid"

        }

        else{
            popList[i].style.display = "block"
        }
        
    })

    if(i==0){}
}

//functions para fechamento
for(let i=0; i<btnClose.length; i++)
{
    btnClose[i].addEventListener("click", function(){
        popList[i].style.display = "none"
    })
}

/* PopUp do Botão */
class operation{

    constructor(){
        this.bgcolor
        this.borderRadius = radiusRangeInpt.value
    }

    addSize(selected){
        btnEdit.style.width =  (selected * 2) + "%"
        document.getElementById("btnSize").textContent = (selected * 2) + "%"
       
    }

    addBgColor(){
       btnEdit.style.backgroundColor = bgColorInpt.value
       document.getElementById("inptBgColor").textContent = "" + bgColorInpt.value
    }

    addTxt(){
        btnEdit.textContent = textAddInpt.value
    }

    addBorder(sizeRadius){
        btnEdit.style.borderRadius = sizeRadius + "px"
        document.getElementById("inptRadius").textContent = sizeRadius + "px"
    }

}

let operar = new operation()
textAddInpt.onchange = function(){operar.addTxt()}
bgColorInpt.onchange = function(){operar.addBgColor()}
label[0].onclick = function(){operar.addSize(10)}
label[1].onclick = function(){operar.addSize(20)}
label[2].onclick = function(){operar.addSize(50)}
radiusRangeInpt.onchange = function(){operar.addBorder(radiusRangeInpt.value)}
document.getElementById("copy").onclick = function(){ 
 navigator.clipboard.writeText(".btn{ "
  + 
  "width: " + document.getElementById("btnSize").textContent +
  "; background-color: " + document.getElementById("inptBgColor").textContent +
  "; border-radius: " + document.getElementById("inptRadius").textContent +
  "; }")
 alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar')
}

document.querySelectorAll("#reset")[0].onclick = function(){
    document.getElementById("btnSize").textContent = "auto;"
    btnEdit.style.width = "auto"
    document.getElementById("inptBgColor").textContent = "auto;"
    btnEdit.style.backgroundColor = "#babdbe"
    radiusRangeInpt.value = "#0000"
    document.getElementById("inptRadius").textContent = "auto;"
    btnEdit.style.borderRadius = "0"
    btnEdit.textContent = "Texto"
}


/* PopUp do Botão fecho*/





/* Funcionalidades para o PopUp Alert */
let btnListAlert = document.querySelectorAll("div.btnTypes button")
   for(let i = 0; i<btnListAlert.length; i++)
    {
            btnListAlert[i].onclick = function(){
                changeClassId(i)}
        
   }
    
function changeClassId(item){
        for(let i=0; i<btnListAlert.length; i++)
        {
            btnListAlert[i].id = ""
        }
        btnListAlert[item].id = "btn-active"


        if(item == 0)
        { 
            alertList[0].id = "alert-sucess" 
        }
        
        else if(item == 1)
        {  
            alertList[0].id = "alert-warning"
        }
        else if(item == 2)
        {
            alertList[0].id = "alert-error"
        }
        
        else if(item == 3)
        {
            alertList[0].id = "alert-Primary" 
        }
        
       var css_data = '';
       var css_obj = getComputedStyle(alertList[0]);
       let array
       for (var i = 0; i < css_obj.length; i++) {
           css_data +=
               css_obj[i] + ':' + 
               css_obj.getPropertyValue(css_obj[i]) + ';<br>';
       }
       document.getElementById('inSert').innerHTML = css_data;
}
