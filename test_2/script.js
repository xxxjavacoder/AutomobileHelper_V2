function check() {

    let cards = document.getElementsByClassName('card');

    document.getElementById('output').innerHTML = '';

    let answer = "";

    let arr_of_k = [0.0, 0.0, 0.0, 0.0, 0.0];

    let  answers = ["Проблема скорее всего в датчике холостого хода и ему сопутствующих!", "Проблема может быть в свечах , катушках и их проводке!",
        "Неисправность может быть в инжекторе и топливной системе!", "Возможно качество топлива в баке сомнительное, разбавте хорошим бензином!",
        "Скорее всего в двигатель попала вода или конденсат, попробуйте прогазовать авто и дать ему прогрется!"];


    let r1 = document.getElementsByName("r1");

    if (getValueFromRadio(r1) === "0") {

        arr_of_k[0] += 0.6;
        arr_of_k[1] += 0.1;
        arr_of_k[2] += 0.1;
        arr_of_k[3] += 0.1;
        arr_of_k[4] += 0.1;

        cards[0].style.backgroundColor = '#CD5C5C';
    }else cards[0].style.backgroundColor = '#90EE90';


    let r2 = document.getElementsByName("r2");

    if (getValueFromRadio(r2) === "0") {

        arr_of_k[0] += 0.2;
        arr_of_k[1] += 0.7;
        arr_of_k[2] += 0.3;
        arr_of_k[3] += 0.2;
        arr_of_k[4] += 0.0;

        cards[1].style.backgroundColor = '#CD5C5C';
    }else cards[1].style.backgroundColor = '#90EE90';

    let r3 = document.getElementsByName("r3");

    if (getValueFromRadio(r3) === "1") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.0;
        arr_of_k[2] += 0.2;
        arr_of_k[3] += 0.1;
        arr_of_k[4] += 0.0;


        cards[2].style.backgroundColor = '#CD5C5C';
    }else cards[2].style.backgroundColor = '#90EE90';

    let r4 = document.getElementsByName("r4");

    if (getValueFromRadio(r4) === "0") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.1;
        arr_of_k[2] += 0.3;
        arr_of_k[3] += 0.5;
        arr_of_k[4] += 0.0;

        cards[3].style.backgroundColor = '#CD5C5C';
    }else cards[3].style.backgroundColor = '#90EE90';

    let r5 = document.getElementsByName("r5");

    if (getValueFromRadio(r5) === "0") {

        arr_of_k[0] += 0.2;
        arr_of_k[1] += 0.1;
        arr_of_k[2] += 0.0;
        arr_of_k[3] += 0.0;
        arr_of_k[4] += 0.0;

        cards[4].style.backgroundColor = '#CD5C5C';
    }else cards[4].style.backgroundColor = '#90EE90';

    let r6 = document.getElementsByName("r6");

    if (getValueFromRadio(r6) === "1") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.0;
        arr_of_k[2] += 0.0;
        arr_of_k[3] += 0.0;
        arr_of_k[4] += 0.5;

        cards[5].style.backgroundColor = '#CD5C5C';
    }else cards[5].style.backgroundColor = '#90EE90';

    let r7 = document.getElementsByName("r7");

    if (getValueFromRadio(r7) === "1") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.0;
        arr_of_k[2] += 0.1;
        arr_of_k[3] += 0.1;
        arr_of_k[4] += 0.4;

        cards[6].style.backgroundColor = '#CD5C5C';
    }else cards[6].style.backgroundColor = '#90EE90';

    let tmp = [];
    for (let i = 0; i < arr_of_k.length; i++) {
        if (arr_of_k[i] === Math.max(...arr_of_k) && Math.max(...arr_of_k) > 0.1){
            tmp.push(i);
        }
    }

    console.log(tmp);
    for (let i = 0; i < tmp.length; i++) {

        answer += answers[tmp[i]] + "<br>";
    }
    document.getElementById('output').innerHTML += answer;

}

function getValueFromRadio(element) {
    return [...element].find(item => item.checked).value
}