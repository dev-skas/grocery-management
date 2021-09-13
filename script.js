var response =[];
var products =[];
var allProducts=[];

window.addEventListener("load",load);

function load(){
            var xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
             response =JSON.parse(this.responseText);
             products  = response.products;  
             allProducts = products
            calldata(); 
        }
        }
        xhttp.open("GET","file.json",true);
        xhttp.send();
}



function calldata(){    
 
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
    document.getElementById("searchsection").classList.add("hide");
    document.getElementById("editData").classList.remove("hide");
    document.getElementById("searchData").classList.remove("hide");
   
   }
   
function searchhide(){
    document.getElementById("inputSec").classList.add("hide");
    document.getElementById("addData").classList.remove("hide");
    document.getElementById("searchsection").classList.add("hide");
    document.getElementById("editData").classList.remove("hide");
    document.getElementById("searchData").classList.remove("hide");
   
   }
   function edithide(){
    document.getElementById("editSec").classList.add("hide");
    document.getElementById("editData").classList.remove("hide");
    document.getElementById("searchData").classList.remove("hide");
    document.getElementById("addData").classList.remove("hide");


   }

function addView(){
       document.getElementById("inputSec").classList.remove("hide");
       document.getElementById("addData").classList.add("hide");
    document.getElementById("editData").classList.add("hide");
    document.getElementById("searchData").classList.add("hide");

       
   }
function serchView(){
    document.getElementById("searchsection").classList.remove("hide");
    document.getElementById("searchData").classList.add("hide");
    document.getElementById("editData").classList.add("hide");
    document.getElementById("addData").classList.add("hide");
    
}
function editView(){
    document.getElementById("editSec").classList.remove("hide");
    document.getElementById("editData").classList.add("hide");
    document.getElementById("searchData").classList.add("hide");
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
    products  = response.products;  
    allProducts = products
    calldata()

   }

   function search(){
     products =allProducts 
    var searchArray =[];
       var searchData = document.getElementById("searchInput").value;
      for(var i=0;i<products.length;i++){
        
        // if((products[i].Name).toLocaleLowerCase()==(searchData).toLocaleLowerCase())
        if(((products[i].Name).toLocaleLowerCase()).includes((searchData).toLocaleLowerCase()))

        {

           searchArray.push(products[i]);
        }
       
        
     }
    if(searchArray.length==0){
        products =allProducts 
        document.getElementById("searchLabel").innerText=" Result not found";
        calldata();
    }else{
        document.getElementById("searchLabel").innerText=" Result  found";

      
        products = searchArray
           calldata();
    }
    
   }

   function refresh(){
    document.getElementById("inputSec").classList.add("hide");
    document.getElementById("addData").classList.remove("hide");
    document.getElementById("searchsection").classList.add("hide");
    document.getElementById("searchData").classList.remove("hide");
    document.getElementById("editData").classList.remove("hide");

    products =allProducts 
           calldata();
   }

  
   var editsn=0;

   function editData(){

    var getsn = document.getElementById("editsn").value; 
    editsn = Number(getsn)-1;

    if(getsn ==0 || getsn == ""){
        document.getElementById("validno").innerText="Enter valid serial number";

    }else if(products.length <= editsn){
        document.getElementById("validno").innerText="Enter valid serial number";

        
    }
    else{
        document.getElementById("validno").innerText="";
    
  
    document.getElementById("editname").value = products[editsn].Name;
    document.getElementById("editqn").value =products[editsn].Quantity;
    document.getElementById("editunit").value =products[editsn].Unit;
    document.getElementById("editdep").value =products[editsn].Department;
    document.getElementById("editnote").value =products[editsn].Notes;

   
   
}
  
   }

   

   function editsubmit(){

   var editname=  document.getElementById("editname").value 
   var editqn=  document.getElementById("editqn").value 
   var editunit= document.getElementById("editunit").value 
   var editdep= document.getElementById("editdep").value 
   var editnote=  document.getElementById("editnote").value 

       

     const editdata =`{"SN":"${editsn+1}","Name":"${editname}","Quantity":"${editqn}","Unit":"${editunit}","Department":"${editdep}","Notes":"${editnote}"}`

     const editobj = JSON.parse(editdata);
    


     products[editsn] = editobj ;
     calldata();

    
            
   }