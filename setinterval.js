// let count = 0;
// const navidata = ["네이버","다음","구글","야후","레딧"]

// setInterval(function(){
//     console.log(navidata[count]);
//     count++;
//     count %= navidata.length;
// }, 500)

//자바스크립트 경로는 css와 다르다 연결된 html 기준으로 처리해야된다.

// let count = 3;

// setInterval(function(){
//     count++;
//     count %= 5;
//     document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.png`)
// },1000);

const bannerData = [
    "/banner2/1.png",
    "/banner/0.png",
    "/banner2/membership.png"
];

let num = 0;

const bannerWrap = document.querySelector(".bannerwrap");
const bannerImg = document.querySelector("#bannerimg");
const bannerButton = document.querySelector(".bannerwrap button");

function updateBanner() {
    bannerWrap.style.background = `url(${bannerData[num]}) center no-repeat`;
    bannerImg.setAttribute("src", bannerData[num]);
}

function startAutoBanner() {
    return setInterval(function() {
        num = (num + 1) % bannerData.length;
        updateBanner();
    }, 3000);w
}

let autoBanner = startAutoBanner();

bannerButton.addEventListener('click', function() {
    clearInterval(autoBanner);
    bannerButton.innerHTML = "PLAY";
});

// 초기 배너 설정
updateBanner();
