document.querySelector(".moveBtn").onclick = funcMove;

function funcMove(){
    let x = parseInt(Math.random() * 130);
    let y = parseInt(Math.random() * 130);
    let c = parseInt(Math.random() * 130);
    let b = parseInt(Math.random() * 130)

    let allImg = document.querySelectorAll(".img");
    
    allImg[0].style.top = x + "px";
    allImg[1].style.bottom = y + "px";
    allImg[2].style.left = c + "px";
    allImg[3].style.right = b + "px";

    // for(let i = 0; i < allImg.length; i++){
    //     allImg[i].style.transition = "0.3s"
    // }
    

    // let a = parseInt(Math.random() * 200);
    // let b = parseInt(Math.random() * 50);

    // let g = parseInt(Math.random() * 300);
    // let h = parseInt(Math.random() * 150);

    // let k = parseInt(Math.random() * 280);
    // let u = parseInt(Math.random() * 110);

    // let img1 = document.querySelector(".img1");
    //  img1.style.marginTop = y + "px";
    //  img1.style.marginLeft = x + "px";

    //  let img2 = document.querySelector(".img2");
    //  img2.style.marginTop = a + "px";
    //  img2.style.marginLeft = b + "px";

    //  let img3 = document.querySelector(".img3");
    //  img3.style.marginBotom = g + "px";
    //  img3.style.marginRight = h + "px";

    //  let img4 = document.querySelector(".img4");
    //  img4.style.marginBotom = k + "px";
    //  img4.style.marginRight = u + "px";

}