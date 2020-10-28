let img = document.getElementById('cool');
let i=0;


setInterval(fall,1000);
function fall()
{ 
    if(i!==360){    
img.style.transform="rotateZ("+i+"deg)";
i=i+30;
    }
    else{
        i=0;
        img.style.transform="rotateZ("+i+"deg)";
    }
}

