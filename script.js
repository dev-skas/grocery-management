var response =[];
window.addEventListener("load",load)

function load(){
            var xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
             response =JSON.parse(this.responseText);
            calldata(); 
        }
        }
        xhttp.open("GET","file.json",true);
        xhttp.send();
}



function calldata(){    
   var products = response.products;  
   var output=""
   for(i=0;i<products.length;i++){
       output +=`<tr>
                <td>${products[i].SN}</td>
                <td>${products[i].Name}</td>
                <td>${products[i].Quantity}</td>
                <td>${products[i].Unit}</td>
                <td>${products[i].Department}</td>
                <td>${products[i].Notes}</td>
                </tr>`
     
    }
    document.getElementById("data").innerHTML=output;
   
}




function hide(){
    document.getElementById("inputSec").classList.add("hide");
    document.getElementById("addData").classList.remove("hide");
   
   }

function addView(){
       document.getElementById("inputSec").classList.remove("hide");
       document.getElementById("addData").classList.add("hide");
       
   }

 function submit(){

    // var sn = document.getElementById("sn").value
    var sn = response.products.length+1;
    var name = document.getElementById("name").value
    var qn = document.getElementById("qn").value
    var unit = document.getElementById("unit").value
    var dep = document.getElementById("dep").value
    var note = document.getElementById("note").value


    response["products"].push({
    "SN":sn,
    "Name":name,
    "Quantity":qn,
    "Unit":unit,
    "Department":dep,
    "Notes":note
      });
      
    calldata()
   }