let nam=document.querySelector("#Fullname");
let enrol=document.querySelector("#enrolment");
let year=document.querySelector("#year");
let adhar=document.querySelector("#adhar")
let img=document.querySelector("#image")
let btn=document.querySelector("button");
let view= [];
let block=document.querySelector(".block")



btn.addEventListener("click",function(){
    let product={[nam.name]:nam.value,[enrol.name]:enrol.value,[year.name]:year.value,[adhar.name]:adhar.value,[img.name]:img.value.replace("C:\\fakepath\\", "")}
    // view.push(product);
    // show();

    let data = view.filter(first => first.adhar ==  adhar.value || first.enrol == enrolment.value )
    
    if(data.length===0){
        view.push(product);  
        show();
    }
    else{
        alert("Already Registered : you can't be register same id!");
    }

})

function show(){
    let temp='';

   view.forEach(function(data,index){
       temp+=
       `<div id="card">
       <p>Full Name :${data.Fullname} </p>
       <h4>Enrolment:${data.enrolment} </h4>
       <p>Pursuing year:${data.year} </p>
       <img src="${data.image}" alt="">
       <h5>Adhar No : ${data.adhar}  </h5>
       <button data-empty=${index}>remove</button> </div>`
      
   })
   
   block.innerHTML=temp;


}

block.addEventListener("click",function(sehow){
    if(sehow.target.textContent==='remove'){
        view.splice(sehow.target.dataset.empty,1)
        show();
    }
    
})
