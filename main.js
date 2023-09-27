function change(){
    document.getElementById("box").src="images.jpeg";
}
function changeimg(){
    document.getElementById("box1").src="download.jpeg";
}

function varExample(){
    if(true){
        var akki="Akhila";
        console.log(akki);
        akki="Akhila T";
    }
    console.log(akki);
}
varExample();

function letExample(){
    if(true){
        let  y="image"
        console.log(y);
        y="clickOnImage";
        console.log(y);
    }
}
letExample();

function constExample(){
    const x="print";
    console.log(x);
}
constExample();

 var a="Akki";
function varfunction(){
    if(true){
      
        document.getElementById("output").textContent=a;
    }
}
varfunction();

  
function letfunction(){
    if(true){
        let b="Akhila";
        document.getElementById("output1").textContent=b;
    }
}
letfunction();


function constfunction(){
    if(true){
        const c="Akhila Thallabathula";
        document.getElementById("output2").textContent=c;
    }
}
constfunction();