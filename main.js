let canvas = document.querySelector("#board");
let ctx = canvas.getContext("2d");

let letters = "ABCDEFGH";
for(let i = 0; i < 8; i++){
    ctx.fillStyle = "white";
    ctx.font = "30px Tahoma";
    ctx.fillText(8 - i, 320, 85 + 50 * i);
    ctx.fillText(letters[i], 370 + 50 * i, 32)
    

    for(j = 0; j < 8; j++){
        ctx.fillStyle = (i+j)%2 == 0 ? "white" : "black";
        ctx.fillRect(350 + 50*j, 50 + 50 * i, 50, 50);
    }
}

knight.onclick = ()=>{
    let code = prompt().toUpperCase();
    const pattern = /^[A-H][1-8]$/;

    if(!pattern.test(code)){
        return alert("Error code");
    }

    let [x,y] = [...code];
    y = 8-y;
    x = letters.indexOf(x);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    [
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x - 1, y + 2],
        [x + 1, y + 2]
    ]
    .filter(([x,y]) => x >= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=> {
       ctx.fillStyle = "rgba(80,200,120,0.5)";
       ctx.fillRect(350 + 50 * x, 50 + 50 * y, 50, 50)
    })
    let img = new Image();
    img.src="./img/knight.png";
    img.onload = function(){
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40)
    }
}

elephant.onclick = ()=>{
    let code = prompt().toUpperCase();
    let pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)){
        return alert("Error code");
    }
    let [x,y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    [
        [x + 1,y - 1],
        [x + 2,y - 2],
        [x + 3,y - 3],
        [x + 4,y - 4],
        [x + 5,y - 5],
        [x + 6,y - 6],
        [x + 7,y - 7],

        [x - 1,y + 1],
        [x - 2,y + 2],
        [x - 3,y + 3],
        [x - 4,y + 4],
        [x - 5,y + 5],
        [x - 6,y + 6],
        [x - 7,y + 7],

        [x - 1,y - 1],
        [x - 2,y - 2],
        [x - 3,y - 3],
        [x - 4,y - 4],
        [x - 5,y - 5],
        [x - 6,y - 6],
        [x - 7,y - 7],

        [x + 1,y + 1],
        [x + 2,y + 2],
        [x + 3,y + 3],
        [x + 4,y + 4],
        [x + 5,y + 5],
        [x + 6,y + 6],
        [x + 7,y + 7],
    ]
    .filter(([x,y])=> x>= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=>{
       ctx.fillStyle = "rgba(80,200,120,0.5)";
       ctx.fillRect(350 + 50 * x, 50 + 50 * y, 50, 50);
    })
    let img = new Image();
    img.src = "./img/elephent.png";
    img.onload = function(){
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40);
    }
}

boat.onclick = ()=>{
    let code = prompt().toUpperCase();
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)){
        return alert("Error code");
    }
    let [x,y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    [
        [x, y - 1],
        [x, y - 2],
        [x, y - 3],
        [x, y - 4],
        [x, y - 5],
        [x, y - 6],
        [x, y - 7],

        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
        [x + 4, y],
        [x + 5, y],
        [x + 6, y],
        [x + 7, y],

        [x - 1, y],
        [x - 2, y],
        [x - 3, y],
        [x - 4, y],
        [x - 5, y],
        [x - 6, y],
        [x - 7, y],

        [x, y + 1],
        [x, y + 2],
        [x, y + 3],
        [x, y + 4],
        [x, y + 5],
        [x, y + 6],
        [x, y + 7],
    ]
    .filter(([x,y])=> x >= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=>{
        ctx.fillStyle = "rgba(80,200,120,0.5)";
        ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50)
    })
    let img = new Image();
    img.src = "./img/boat.png";
    img.onload = ()=>{
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40);
    }
}

soldier.onclick = ()=>{
    let code = prompt().toUpperCase();
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)){
        return alert("Error code");
    }
    let [x,y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    [
        [x, y - 1]
    ]
    .filter(([x,y])=> x >= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=>{
        ctx.fillStyle = "rgba(80,200,120,0.5)";
        ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50)
    })
    let img = new Image();
    img.src = "./img/soldier.png";
    img.onload = ()=>{
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40);
    }
}

check.onclick = ()=>{
    let code = prompt().toUpperCase();
    const pattern = /^[A-H][1-8]-[A-H][1-8]$/;
    if(!pattern.test(code)){
        return alert("Error code");
    }
    let [x,y,,x2,y2] = [...code];

    y = 8 - y;
    y2 = 8-y2;
    x = letters.indexOf(x);
    x2 = letters.indexOf(x2);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    ctx.fillRect(350 + x2 * 50, 50 + y2 * 50, 50, 50);

    let elephant = [
        [x + 1,y - 1],
        [x + 2,y - 2],
        [x + 3,y - 3],
        [x + 4,y - 4],
        [x + 5,y - 5],
        [x + 6,y - 6],
        [x + 7,y - 7],

        [x - 1,y + 1],
        [x - 2,y + 2],
        [x - 3,y + 3],
        [x - 4,y + 4],
        [x - 5,y + 5],
        [x - 6,y + 6],
        [x - 7,y + 7],

        [x - 1,y - 1],
        [x - 2,y - 2],
        [x - 3,y - 3],
        [x - 4,y - 4],
        [x - 5,y - 5],
        [x - 6,y - 6],
        [x - 7,y - 7],

        [x + 1,y + 1],
        [x + 2,y + 2],
        [x + 3,y + 3],
        [x + 4,y + 4],
        [x + 5,y + 5],
        [x + 6,y + 6],
        [x + 7,y + 7],
    ]
    elephant.filter(([x,y])=> x>= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=>{
       ctx.fillStyle = "rgba(80,200,120,0.5)";
       ctx.fillRect(350 + 50 * x, 50 + 50 * y, 50, 50);
    })
    let img = new Image();
    img.src = "./img/elephent.png";
    img.onload = function(){
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40);
    }

    let soldier = [
        [x2, y2 - 1],
        [x2, y2 - 2],
        [x2, y2 - 3],
        [x2, y2 - 4],
        [x2, y2 - 5],
        [x2, y2 - 6],
        [x2, y2 - 7]
    ]
    soldier.filter(([x2,y2])=> x2 >= 0 && y2 >= 0 && x2 < 8 && y2 < 8)
    .forEach(([x2,y2])=>{
        ctx.fillStyle = "rgba(80,200,120,0.5)";
        ctx.fillRect(350 + x2 * 50, 50 + y2 * 50, 50, 50)
    })
    let img2 = new Image();
    img2.src = "./img/soldier.png";
    img2.onload = ()=>{
        ctx.drawImage(img2, 355 + x2 * 50, 54 + y2 * 50, 40, 40);
    }
   
}

king.onclick = ()=>{
    let code = prompt().toUpperCase();
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)){
        return alert("Error code");
    }
    let [x,y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    [
        [x, y - 1],
        [x, y + 1],
        [x + 1, y],
        [x - 1, y],
        [x + 1, y - 1],
        [x + 1, y + 1],
        [x - 1, y - 1],
        [x - 1, y + 1],
    ]
    .filter(([x,y])=> x >= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=>{
        ctx.fillStyle = "rgba(80,200,120,0.5)";
        ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50)
    })
    let img = new Image();
    img.src = "./img/king.png";
    img.onload = ()=>{
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40);
    }

}

queen.onclick = ()=>{
    let code = prompt().toUpperCase();
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)){
        return alert("Error code");
    }
    let [x,y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    ctx.fillStyle = "#50C878";
    ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50);
    [
        [x, y + 1],
        [x, y + 2],
        [x, y + 3],
        [x, y + 4],
        [x, y + 5],
        [x, y + 6],
        [x, y + 7],

        [x, y - 1],
        [x, y - 2],
        [x, y - 3],
        [x, y - 4],
        [x, y - 5],
        [x, y - 6],
        [x, y - 7],

        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
        [x + 4, y],
        [x + 5, y],
        [x + 6, y],
        [x + 7, y],

        [x - 1, y],
        [x - 2, y],
        [x - 3, y],
        [x - 4, y],
        [x - 5, y],
        [x - 6, y],
        [x - 7, y],

        [x - 1, y - 1],
        [x - 2, y - 2],
        [x - 3, y - 3],
        [x - 4, y - 4],
        [x - 5, y - 5],
        [x - 6, y - 6],
        [x - 7, y - 7],

        [x - 1, y + 1],
        [x - 2, y + 2],
        [x - 3, y + 3],
        [x - 4, y + 4],
        [x - 5, y + 5],
        [x - 6, y + 6],
        [x - 7, y + 7],

        [x + 1, y + 1],
        [x + 2, y + 2],
        [x + 3, y + 3],
        [x + 4, y + 4],
        [x + 5, y + 5],
        [x + 6, y + 6],
        [x + 7, y + 7],

        [x + 1, y - 1],
        [x + 2, y - 2],
        [x + 3, y - 3],
        [x + 4, y - 4],
        [x + 5, y - 5],
        [x + 6, y - 6],
        [x + 7, y - 7],
        

    ]
    .filter(([x,y])=> x >= 0 && y >= 0 && x < 8 && y < 8)
    .forEach(([x,y])=>{
        ctx.fillStyle = "rgba(80,200,120,0.5)";
        ctx.fillRect(350 + x * 50, 50 + y * 50, 50, 50)
    })
    let img = new Image();
    img.src = "./img/queen.png";
    img.onload = ()=>{
        ctx.drawImage(img, 355 + x * 50, 54 + y * 50, 40, 40);
    }

}