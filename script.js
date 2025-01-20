for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        let a = document.createElement("box");
        a.id=i*4+j;
        a.style="top: "+25*i+"%; left: "+25*j+"%; background-color: rgb("+i*16+","+i*16+",0);";
        document.getElementsByTagName("body")[0].appendChild(a);
    }
}