let mouse = {x: 0, y: 0};
let dif = {x: 0, y: 0};
let flag = 0;
let first = 0;
let id;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        let a = document.createElement("box");
        a.id="a"+(i*4+j);
        console.log("id"+a.id);
        a.style="top: "+200*i+"px; left: "+200*j+"px; background-color: rgb("+i*32+",0,"+j*32+");";
        a.addEventListener("mousedown", down);
        a.addEventListener("mouseup", stop);
        a.addEventListener("touchstart", down);
        a.addEventListener("touchmove", drag);
        a.addEventListener("touchend", stop);
        document.getElementsByTagName("body")[0].appendChild(a);
    }
}

document.onmousemove = drag;

function down(event){
    flag = 1;
    mouse.x = event.clientX, mouse.y = event.clientY;
    id = document.getElementById("a"+(Math.floor(mouse.x/200)+Math.floor(mouse.y/200)*4));
    console.log("id x y "+id.style.left.substring(0, id.style.left.length-2)+" "+id.style.top.substring(0, id.style.top.length-2));

    dif.x = id.style.left.substring(0, id.style.left.length-2) - mouse.x;
    dif.y = id.style.top.substring(0, id.style.top.length-2) - mouse.y;

    console.log(id);
    console.log(mouse.x+" "+mouse.y);
    console.log(dif.x+" "+dif.y);
}

function drag(event){
    if(flag){
        mouse.x = event.clientX, mouse.y = event.clientY;
        console.log(id);
        console.log(mouse.x+" "+mouse.y);
        console.log(dif.x+" "+dif.y);
        id.style.left = (mouse.x+dif.x)+"px";
        id.style.top = (mouse.y+dif.y)+"px";
    }
}

function stop(){
    flag = 0;
    let id_ = document.getElementById("a"+(Math.floor((id.style.left.substring(0, id.style.left.length-2)-dif.x)/200)+Math.floor((id.style.top.substring(0, id.style.top.length-2)-dif.y)/200)*4));
    console.log("id_"+(Math.floor((id.style.left.substring(0, id.style.left.length-2)-dif.x)/200)+Math.floor((id.style.top.substring(0, id.style.top.length-2)-dif.y)/200)*4));
    //console.log(id_);
    let buffer = id.id;
    console.log("buffer:"+buffer+" id_:"+id_.id);
    console.log(id_);
    id.id = id_.id; id_.id = buffer;
    console.log("id:");
    console.log(id);
    console.log("id_:");
    console.log(id_);
    console.log("id x y"+id.style.left+" "+id.style.top);
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            id=document.getElementById("a"+(i*4+j));
            id.style.left = (Math.floor(Number(id.id.substring(1, id.id.length)))%4*200)+"px";
            id.style.top = (Math.floor(Number(id.id.substring(1, id.id.length))/4)*200)+"px";
            id_.style.left = (Math.floor(Number(id_.id.substring(1, id.id.length)))%4*200)+"px";
            id_.style.top = (Math.floor(Number(id_.id.substring(1, id.id.length))/4)*200)+"px";
            first = 0;
            console.log("up");
        }
    }
}