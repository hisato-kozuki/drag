let mouse = {x: 0, y: 0};
let boxposi = {x: 0, y: 0};
let dif = {x: 0, y: 0};
let flag = 0;
let first = 0;
let box;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        let a = document.createElement("box");
        a.id="a"+(i*4+j);
        console.log("id"+a.id);
        a.style="top: "+200*i+"px; left: "+200*j+"px; background-color: rgb("+i*64+",0,"+j*64+");";
        a.addEventListener("mousedown", down);
        a.addEventListener("mousemove", drag);
        a.addEventListener("mouseup", stop);
        a.addEventListener("touchstart", down_s);
        a.addEventListener("touchmove", drag_s);
        a.addEventListener("touchend", stop);
        document.getElementsByTagName("body")[0].appendChild(a);
    }
}

function down(event){
    console.log(event);
    flag = 1;
    mouse.x = event.clientX+window.scrollX, mouse.y = event.clientY+window.scrollY;
    box = document.getElementById(event.srcElement.id);
    boxposi = detect_boxposi(box);
    console.log("box x y "+boxposi.x+" "+boxposi.y);

    dif.x = boxposi.x - mouse.x;
    dif.y = boxposi.y - mouse.y;

    console.log(box);
    console.log("mouse "+mouse.x+" "+mouse.y);
    console.log("dif "+dif.x+" "+dif.y);
}

function down_s(event){
    console.log(event);
    flag = 1;
    mouse.x = event.changedTouches[0].pageX+window.scrollX, mouse.y = event.changedTouches[0].pageY+window.scrollY;
    box = document.getElementById(event.srcElement.id);
    boxposi = detect_boxposi(box);
    console.log("box x y "+boxposi.x+" "+boxposi.y);

    dif.x = boxposi.x - mouse.x;
    dif.y = boxposi.y - mouse.y;

    console.log(box);
    console.log("mouse "+mouse.x+" "+mouse.y);
    console.log("dif "+dif.x+" "+dif.y);
}

function drag(event){
    if(flag){
        mouse.x = event.clientX, mouse.y = event.clientY;
        console.log(box);
        console.log(mouse.x+" "+mouse.y);
        console.log(dif.x+" "+dif.y);
        box.style.left = (mouse.x+dif.x+window.scrollX)+"px";
        box.style.top = (mouse.y+dif.y+window.scrollY)+"px";
    }
}

function drag_s(event){
    event.preventDefault();
    if(flag){
        mouse.x = event.changedTouches[0].pageX, mouse.y = event.changedTouches[0].pageY;
        console.log(box);
        console.log(mouse.x+" "+mouse.y);
        console.log(dif.x+" "+dif.y);
        box.style.left = (mouse.x+dif.x+window.scrollX)+"px";
        box.style.top = (mouse.y+dif.y+window.scrollY)+"px";
    }
}

function stop(){
    flag = 0;
    let box_ = document.getElementById("a"+(Math.floor((box.style.left.substring(0, box.style.left.length-2)-dif.x)/200)+Math.floor((box.style.top.substring(0, box.style.top.length-2)-dif.y)/200)*4));
    console.log("box_"+(Math.floor((box.style.left.substring(0, box.style.left.length-2)-dif.x)/200)+Math.floor((box.style.top.substring(0, box.style.top.length-2)-dif.y)/200)*4));
    //console.log(box_);
    let buffer = box.id;
    console.log("buffer:"+buffer+" box_:"+box_.id);
    console.log(box_);
    box.id = box_.id; box_.id = buffer;
    console.log("box:");
    console.log(box);
    console.log("box_:");
    console.log(box_);
    console.log("box x y"+box.style.left+" "+box.style.top);
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            box=document.getElementById("a"+(i*4+j));
            box.style.left = (Math.floor(Number(box.id.substring(1, box.id.length)))%4*200)+"px";
            box.style.top = (Math.floor(Number(box.id.substring(1, box.id.length))/4)*200)+"px";
            box_.style.left = (Math.floor(Number(box_.id.substring(1, box.id.length)))%4*200)+"px";
            box_.style.top = (Math.floor(Number(box_.id.substring(1, box.id.length))/4)*200)+"px";
            first = 0;
            console.log("up");
        }
    }
}

function detect_boxposi(box){
    let rect = box.getBoundingClientRect();
    console.log(rect);
    let boxposi = {x:rect.x+window.scrollX,y:rect.y+window.scrollY}
    return boxposi;
}