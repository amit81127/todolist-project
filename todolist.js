let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function() {
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let deBtn = document.createElement("button");
    deBtn.innerText="delete";
    deBtn.classList.add("delete");
    item.appendChild(deBtn);
   ul.appendChild(item);
    inp.value=" ";
});

ul.addEventListener("click",function (event) {
    if(event.target.nodeName =="BUTTON"){
        
      let listItem = event.target.parentElement;
      listItem.remove();
      console.log("deleted");
    }
});


// let deBtns=document.querySelectorAll(".delete");
// for(deBtn of deBtns){
//     deBtn.addEventListener("click",function() {
//         console.log("element deleted");
//         let par=this.parentElement;
//         par.remove();

//     });
// }