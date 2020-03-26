function check() {

    let cards = document.getElementsByClassName('card');

    document.getElementById('output').innerHTML = '';

    let answer;
    let r1 = document.getElementsByName("r1");
    if (getValueFromRadio(r1) === "0") {
        answer = "Проверте лампочку в приборном щитке и пройлите тест заново!<br>";
        document.getElementById('output').innerHTML += answer;
        cards[0].style.backgroundColor = '#CD5C5C';
    }else cards[0].style.backgroundColor = '#90EE90';


    let r2 = document.getElementsByName("r2");
    if (getValueFromRadio(r2) === "0") {
        answer = "Проверте контакты на стартере и его сохранность!<br>";
        document.getElementById('output').innerHTML += answer;
        cards[1].style.backgroundColor = '#CD5C5C';
    }else cards[1].style.backgroundColor = '#90EE90';

    let r3 = document.getElementsByName("r3");
    if (getValueFromRadio(r3) === "0") {
        answer = "Проверьте проводку и предохранители подкапотного пространства!<br>";
        document.getElementById('output').innerHTML += answer;
        cards[2].style.backgroundColor = '#CD5C5C';
    }else cards[2].style.backgroundColor = '#90EE90';

    let r4 = document.getElementsByName("r4");
    if (getValueFromRadio(r4) === "0") {
        answer = "Залейте топливо в топливный бак авто и прпробуйте заново!<br>";
        document.getElementById('output').innerHTML += answer;
        cards[3].style.backgroundColor = '#CD5C5C';
    }else cards[3].style.backgroundColor = '#90EE90';

    let r5 = document.getElementsByName("r5");
    if (getValueFromRadio(r5) === "0") {
        answer = "Проверте топливную магистраль (Требует визита на СТО!!!)<br>";
        document.getElementById('output').innerHTML += answer;
        cards[4].style.backgroundColor = '#CD5C5C';
    }else cards[4].style.backgroundColor = '#90EE90';

}

function getValueFromRadio(element) {
    return [...element].find(item => item.checked).value
}