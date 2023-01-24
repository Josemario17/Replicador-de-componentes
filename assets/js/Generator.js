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
let colorCard = document.getElementById("CardColor")
let tAdd = document.getElementById("text-addCar")
let radB = document.getElementById("radius-rangeCard")
let sub = document.querySelectorAll("#card-sub")[0]



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
    btnClose[i].addEventListener("click", function(){
        popList[i].style.display = "none"
    })
}

//functions para fechamento

    

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
           css_data += css_obj[i] + ':' + css_obj.getPropertyValue(css_obj[i]) + ';<br>';
       }
       document.getElementById('inSert').innerHTML = css_data;

        document.getElementById("ToReset").addEventListener("click", function(){
            alertList[0].id = "alert-edit"
            document.getElementById('inSert').innerHTML = ""
             for(let i=0; i<btnListAlert.length; i++)
            {
                btnListAlert[i].id = ""
            }
            
        })
     
}

let cc = document.getElementById("ToCopy")
        cc.addEventListener("click", function(){
        alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar')
        navigator.clipboard.writeText(document.getElementById('inSert').innerHTML)
        })


/* Funcionalidades do POPUP - Card */
class editionsCard{
    
    constructor(bgColor, textTitle, borderRa){
        this.bgColor = bgColor
        this.textTitle = textTitle
        this.borderRa = borderRa
    }

    aplySize(Id, size){
        sub.id = "" + Id
        document.getElementById("cardSizeType").textContent = size
    }

    aplyColor(){
            document.getElementById("Card-Edit").children[0].style.backgroundColor = this.bgColor
            document.getElementById("inptBgColorCard").textContent = this.bgColor
    }

    aplyBorder(){
        document.getElementById("Card-Edit").children[0].style.borderRadius = this.borderRa + "px"
        document.getElementById("inptRadiusCard").textContent = this.borderRa + "px"
        
    }

    aplyText()
    {
        document.getElementById("Card-Edit").children[0].children[1].textContent = this.textTitle
    }
}


colorCard.onchange = function(){
    let init = new editionsCard(colorCard.value, tAdd.value , radB.value)
    init.aplyColor()
}

radB.onmouseout = function(){
    let init = new editionsCard(colorCard.value, tAdd.value , radB.value)
    init.aplyBorder()
}

tAdd.onchange = function(){
    let init = new editionsCard(colorCard.value, tAdd.value , radB.value)
    init.aplyText()
}


let items = document.querySelectorAll("#labelCard")
let listIds = new Array()
let id
id = ["sm" ,"60%"]
listIds[0] =  id
id = ["md" ,"80%"]
listIds[1] = id
id = ["xl" ,"100%"]
listIds[2] = id


for(let i=0; i<items.length; i++)
{
    items[i].onclick = function(){
            let init = new editionsCard(colorCard.value, tAdd.value , radB.value)
            init.aplySize(listIds[i][0], listIds[i][1])
    }
}

//Image Area - Card
let listWidth = new Array()
listWidth[0] = "30%"
listWidth[1] = "45%"
listWidth[2] = "52%"

let filters = new Array()
filters[0] = "contrast"
filters[1] = "invert"
filters[2] = "grayScale"
filters[3] = "blur"


let element  = document.querySelector(".img-card")
let labelImageCard = document.querySelectorAll("#labelCardImage")
let btnImg = document.querySelectorAll(".btnImg")
for(let i = 0; i<labelImageCard.length; i++)
{
    labelImageCard[i].onclick = function(){
        element.style.width = listWidth[i]
    }
}

for(let i=0; i<btnImg.length; i++)
{
    
    btnImg[i].onclick = function(){
        element.id = filters[i]
    }
}

document.getElementById("radius-rangeImage").onchange= function(){
    element.style.borderRadius = document.getElementById("radius-rangeImage").value + "px"
}

function buttonCard()
{
    let btnSizeList, AddTextInpt, colorInpt, border;
    btnSizeList = document.querySelectorAll("#btn-area label")
    AddTextInpt = document.querySelectorAll(".newInptText")[0]
    colorInpt = document.querySelectorAll(".btnExampleBgColor")[0]
    border = document.querySelectorAll("#radius-rangeBtnExample")[0]

    let Edit = document.querySelectorAll("#initialBtnExample")[0]
    for(let i = 0; i<btnSizeList.length; i++)
    {
        btnSizeList[i].onclick = function(){
            Edit.style.width = listWidth[i];
        }
    }

    colorInpt.onchange = function(){
        Edit.style.backgroundColor = colorInpt.value
    }

    AddTextInpt.onchange = function(){
        Edit.textContent = AddTextInpt.value
    }

    border.onchange = function(){
        Edit.style.borderRadius = border.value + "px"
    }
}

buttonCard()

let selector = document.querySelectorAll("#Sselct-card")
let type = document.querySelectorAll(".card-ahk")
for(let item = 0; item<selector.length; item++)
{
    selector[item].onchange = function(){
        
        for(let i = 0; i<selector.length; i++)
        {
            type[i].id = "editers-1"
        }

        let values = selector[item].selectedIndex
        switch (values) {
            case 0:
                    type[0].id = "editers-0"
                break;

                case 1:
                    type[1].id = "editers-0"
                break;

                case 2:
                    type[2].id = "editers-0"
                break;
        
            default:
                break;
        }
    }
}

let copyMoreOne = document.getElementById("copyCardCode").onclick = function(){
    navigator.clipboard.writeText(".btn{ "
    + 
    "width: " + document.getElementById("cardSizeType").textContent +
    "; background-color: " + document.getElementById("inptBgColorCard").textContent +
    "; border-radius: " + document.getElementById("inptRadiusCard").textContent +
    "; }")
    alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar')
}

let tList = document.querySelectorAll("#labelTypeProgress")
let theDad = document.getElementById("theContent")
for(let i=0; i<tList.length; i++)
    {
        tList[i].onclick = function()
        {
            for(let j=0; j<theDad.children.length; j++)
            {
                theDad.children[j].style.display = "none"
            }
            theDad.children[i].style.display = "block"
        }

    }

let nVar = document.querySelectorAll(".colorProgress")[0]
let element1 = document.querySelectorAll(".bar")[0]
let element2 = document.querySelectorAll(".pie-wrapper.progress-30 .pie .half-circle")[0]
nVar.onchange = function()
{
    element1.style.backgroundColor = nVar.value 
    element2.style.borderColor = nVar.value
}

let test = document.getElementById("testBtn")
test.onclick = function(){
   barLoad()
    laod2()

}

function barLoad(){
    let id = setInterval(frame, 1000)
    let size = 30
    function frame()
    {
        if (size >= 100) {
            size = 30    
            clearInterval(id);
        }

        else
        {
            size = size + 10
            element1.style.width = size + "%"
            element1.textContent = size + "%"
        }
    }
}

function laod2()
{
    let id = setInterval(frame2, 1000)
    let size = 30
    function frame2()
    {
        if (size >= 100) {
            size = 30    
            clearInterval(id);
        }

        else{    
           
            if(size<50)
            {
                
                let element = document.querySelectorAll(".left-side")[0]
                size = size + 28
                let con = document.querySelectorAll(".label")[0]
                con.textContent = size + "%"
            }

            else if(size<80)
            {
                let element = document.querySelectorAll(".pie-wrapper .pie")[0]
                element.style.clip = "rect(auto, auto, auto, auto)";
                size = size + 30
                let con = document.querySelectorAll(".label")[0]
                con.textContent = size + "%"
            }

            else if(size<100){
                let element = document.querySelectorAll(".pie-wrapper .pie .half-circle")[0]
                element.style.clip = "rect(auto, auto, auto, auto)";
                size = size + 30
                let con = document.querySelectorAll(".label")[0]
                con.textContent = "100%"
            }
        }
    }   
}
