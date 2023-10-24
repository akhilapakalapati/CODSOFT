let result=document.getElementById('inputvalue');

let cal=(character)=>{
   result.value+=character;
}

let ans=()=>{
   try{
    result.value=eval(result.value)
   }
   catch(error){
    alert("Enter the Valid Value");
   }
}

function clearInput(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}