window.onload = refresh;

var bugCounter = 1;
var bugLimit = 20;

const container = document.querySelector("#bugs-area");
alert(container);

document.getElementById('refresh').addEventListener('click', refresh);
document.getElementById('counter').innerHTML = '';

// Счётчик
counter.innerHTML += (
    `<div class="myCounter" id="myNewCounter" style="display: inline-block;">
        
 </div> `
);

// Функция, возвращающая случайные значения координат
function getRandom (min, max) {
    let random = Math.random() * (max - min) + min;
    return random;
}

// Проверка количества жуков
function checkBugs() {
    if(bugCounter >= (bugLimit-1) && bugCounter >= 0) {
        document.getElementById('refresh').removeEventListener('click', refresh);
    }
    
}

// Обновить
function refresh() {

        bugCounter = 0;

        let count = document.getElementById('myNewCounter');
        count.innerHTML = `Осталось жуков: ${bugLimit}`;

        for (let i = 0; i < bugLimit; i++) {
            createBug();
        }

        checkBugs();
        //bugCounter--;
        moveBug();

}

// Создать жуков
function createBug() {
    let randomWidthNumber = getRandom(0, 600);
    let randomHeightNumber = getRandom(0, 400);

    let img = document.createElement('img');
    img.className = 'bugg';
    img.id = `tmp` + `_` + `${bugCounter}`;
    img.style = ` left: ${randomWidthNumber}px; top: ${randomHeightNumber}px`;
    img.src = 'images/bug.png';
    img.alt = 'bugs';

    document.getElementById('bugs-area').appendChild(img);

    bugCounter++;
}

// Двигать жуков
function moveBug() {

    for(let i = 0; i <= bugLimit; i++) {
        let timerId = setInterval(() => {
        let randomWidthNumber = getRandom(0, 600);
        let randomHeightNumber = getRandom(0, 400);

        if (`tmp` + `_` + `${i}`){
            document.getElementById(`tmp` + `_` + `${i}`).style.left = `${randomWidthNumber}px`;
            document.getElementById(`tmp` + `_` + `${i}`).style.top = `${randomHeightNumber}px`;
        } 
        else {
            console.log('element not found');
        }
        //document.getElementById(`tmp` + `_` + `${i}`).style = ` left: ${randomWidthNumber}px; top: ${randomHeightNumber}px`;
    }
    , 2000);
    }
}

// Функция, удаляющая жуков по клику
container.addEventListener('click', e => {


     if(e.target.className == 'bugg') {
        container.removeChild(e.target);
        bugCounter--;
     }
     if (bugCounter == 0) {
        document.getElementById('refresh').addEventListener('click', refresh);
     }

    // Счётчик
    let count = document.getElementById('myNewCounter');
    count.innerHTML = `Осталось жуков: ${bugCounter}`;
    if (bugCounter === 0) {
        clearInterval(counts);
    }

})

