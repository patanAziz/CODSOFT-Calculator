
let string="";
let output=document.querySelector(".output").innerHTML;
let btns=document.getElementsByTagName("button");
Array.from(btns).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector("input").value=string;
        }
        else{
            string= string+e.target.innerHTML;
            document.querySelector(".output").value=string;
        }
    })
})