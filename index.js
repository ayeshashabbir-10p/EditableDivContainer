


let edit=document.getElementById('edit');
console.log(edit);

edit.addEventListener('dblclick', func1);
 //when user double clicks on the text
function func1(){
    let enterText =document.createElement('input');
    enterText.id="inputid";
    enterText.type="text";

    enterText.innerText="";
    enterText.appendChild(enterText);
  
    let u=document.getElementById("inputid");
      u.addEventListener('click',func2);
       // when user clicks on The  entered value
      function func2(){
          let getval=u.value;
          localStorage.setItem('Data Entered',getval);
      }
      
}

