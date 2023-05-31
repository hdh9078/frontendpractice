//clicked와 sexy-font가 공존이 안되는 것. className은 원래의 저장되어있던 class명을 없애고 교체한다. sexy-font는 html내에 명명)

const H1 = document.querySelector('div.hello:first-child h1');


function handleTitleClick() {
    const clickedClass = "clicked";
    if (H1.className === clickedClass) {
        H1.className = "";
    } else {
        H1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick)


//classList는 h1내에 clicked란 class명과 sexy-font라는 두가지의 class name을 유지하게 하는 것 (sexy-font는 html내에 명명)

const h1 = document.querySelector('div.hello:first-child h1');


function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add((clickedClass));
    }
}

h1.addEventListener("click", handleTitleClick);


//위의 if문을 toggle로 대체

const h2 = document.querySelector('div.hello:first-child h1');


function handleTitleClick() {
    h2.classList.toggle("clicked");
}

h2.addEventListener("click", handleTitleClick);