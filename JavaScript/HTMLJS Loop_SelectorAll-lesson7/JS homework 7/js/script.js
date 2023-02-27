document.querySelector(".moveBtn").onclick = funcMove;

function funcMove(){
    let x = parseInt(Math.random() * 120);
    let y = parseInt(Math.random() * 120);
    let c = parseInt(Math.random() * 120);
    let b = parseInt(Math.random() * 120);

    let allImg = document.querySelectorAll(".img");
    allImg[0].style.top = x + "px";
    allImg[1].style.bottom = y + "px";
    allImg[2].style.left = c + "px";
    allImg[3].style.right = b + "px";
}
