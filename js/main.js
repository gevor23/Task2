var box =document.getElementById("box");
var count = 0;

for(let i=0; i<9;i++){
    //box.innerHTML+='<div class="boxes">'+(i+1)+'</div>';
    const div = document.createElement("div");
    div.className = "boxes";
    div.textContent = i+1;
    div.addEventListener("click", f1);
    box.appendChild(div);
}

function f1(e){
    if(e.target.style.backgroundColor == "black"){
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
    }
    else{
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
    }

}