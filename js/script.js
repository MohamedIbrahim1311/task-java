var allproduct=document.querySelectorAll(".list div")
var content=document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalprice=0
var display=document.querySelector("display")


allproduct.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        content.innerHTML +=item.textContent + "&nbsp&nbsp&nbsp&nbsp "
        if (content.innerHTML !=""){
            btn.style.display ="block";
            btn.style.backgroundColor = " rgb(165, 124, 124)";
            btn.style.color ="white";
            btn.style.width ="150px";
            btn.style.height ="30px";

        }
    }
    
})
btn.onclick=function(){
    document.getElementById("display").innerHTML = totalprice;
}