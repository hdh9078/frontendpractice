//document.getElementById() ---> HTML파일에 id='title'을 입력해두고 그 id가 있는 h1을 불러온다.
//const title = document.getElementById('title')

//getElementsByClassName() ---> HTML파일에 class="hello"를 입력하고 그것이 있는 h1을 불러온다. array형태[]로 불러온다.

//getElementsByTagName() ---> HTML내의 h1이라는 tagname을 불러오는 것. array형태[]로 불러온다. (tagname = h1 or div 등)

//querySelector() ---> element를 CSS방식으로 검색
//const title() = document.querySelector('div.hello:first-child h1') ---> hello라는 class 내부에 있는 h1을 가져온다.

//querySelectorAll ---> 조건에 맞는 모든 element를 []형식으로 찾는다.


//event#1

//1.querySelector = element를 CSS방식으로 검색 ---> hello란 class 내부에 있는 h1을 가져온다 (title element 찾아서 가져오기)
const title = document.querySelector('div.hello:first-child h1');

//3.event와 함께 실행 될 함수입력
function handleTitleClick() {
    console.log("title was clicked");
}
//2.listen할 event인 click과 실행할 함수 andleTitleClick 입력 (click event를 listen하고 click event가 발생하면 handleTitleClick함수 실행)
title.addEventListener("click", handleTitleClick);


//event#2

const Title = document.querySelector('div.hello:first-child h1');


function handleTitleClick(){
    Title.style.color = "green";
}

function handleMouseEnter(){
    Title.innerText = "Mouse is here!";
}

function hadleMouseLeave(){
    Title.innerText = "Mouse is gone.ㅠ";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

Title.addEventListener("click", handleTitleClick);
Title.addEventListener("mouseenter", handleMouseEnter);
Title.addEventListener("mouseleave", hadleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);


//event#3 if문으로 간단히 하기

const h1 = document.querySelector('div.hello:first-child h1');


function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "pink";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);