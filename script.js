let curr='X';
let box = document.querySelectorAll('.slot');
let tur = document.getElementById('turn');
let reset = document.getElementsByClassName('buttons')[0];
let wins=[
    [0,1,2,0,11.5,0],
    [3,4,5,0,24,0],
    [6,7,8,0,36.5,0],
    [0,3,6,24,12.5,90],
    [1,4,7,24,0,90],
    [2,5,8,24,-12.5,90],
    [0,4,8,17,17,45],
    [2,4,6,-17,17,-45],
]
reset.onclick = () =>{
    curr ='X';
    tur.innerText =` It's ${curr}'s Turn`;
    box.forEach(x => {
            x.innerText="";
            x.disabled = false;
    })
    document.querySelector('.line').style.backgroundColor = "#091B3A";
    document.querySelector('.line').style.transform = `rotate(0) translate(0vh,0vh)`;
    // document.querySelector('.board').style.background = "#091B3A";
    // document.querySelector('.game').style.background = "#091B3A";
}
draw =(a,b,c,x,y,angle) =>{
    document.querySelector('.line').style.backgroundColor = "white";
    document.querySelector('.line').style.transform = `rotate(${angle}deg) translate(${x}vh,${y}vh)`
}
check = () =>{
    wins.forEach(e=>{
        if((box[e[0]].innerText === box[e[1]].innerText)&&(box[e[2]].innerText === box[e[1]].innerText)&&(box[e[0]].innerText !=="")){
            box.forEach(x => {
                x.disabled = true;
                variable = box[e[0]].innerText;    
        }) 
        draw(e[0],e[1],e[2],e[3],e[4],e[5]);
        }
})
}
let variable ="A";
box.forEach(x => {
    x.onclick = () =>{
        x.innerText = curr;
        if(curr == 'X') curr = 'O';
        else curr = 'X';
        check();
        if(variable == 'A')
        tur.innerText =` It's ${curr}'s Turn`;
        else tur.innerText = `${variable} WON`;
        // tur.style.animation ="roll 0.3s linear";
        x.disabled = true;//After clicking cant change again
    }
})