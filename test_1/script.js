function check() {

    let cards = document.getElementsByClassName('card');

    document.getElementById('output').innerHTML = '';

    let answer = "";

    let arr_of_k = [0.0, 0.0, 0.0, 0.0, 0.0];

    let  answers = ["Возможно отсуцтвие искры в свечах зажигания!", "Проблема может быть в катушках и их проводке!",
         "Проверьте клемы аккамулятора , они могли окислится!", "Комутатор может быть неисправен!",
         "Проверьте проводку бензонасоса и его работоспособность!"];


    let r1 = document.getElementsByName("r1");

    if (getValueFromRadio(r1) === "0") {

        arr_of_k[0] += 0.5;
        arr_of_k[1] += 0.3;
        arr_of_k[2] += 0.5;
        arr_of_k[3] += 0.3;
        arr_of_k[4] += 0.1;

        cards[0].style.backgroundColor = '#CD5C5C';
    }else cards[0].style.backgroundColor = '#90EE90';


    let r2 = document.getElementsByName("r2");

    if (getValueFromRadio(r2) === "0") {

        arr_of_k[0] += 0.1;
        arr_of_k[1] += 0.2;
        arr_of_k[2] += 0.2;
        arr_of_k[3] += 0.1;
        arr_of_k[4] += 0.0;

        cards[1].style.backgroundColor = '#CD5C5C';
    }else cards[1].style.backgroundColor = '#90EE90';

    let r3 = document.getElementsByName("r3");

    if (getValueFromRadio(r3) === "0") {

        arr_of_k[0] += 0.1;
        arr_of_k[1] += 0.2;
        arr_of_k[2] += 0.2;
        arr_of_k[3] += 0.3;
        arr_of_k[4] += 0.1;


        cards[2].style.backgroundColor = '#CD5C5C';
    }else cards[2].style.backgroundColor = '#90EE90';

    let r4 = document.getElementsByName("r4");

    if (getValueFromRadio(r4) === "0") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.0;
        arr_of_k[2] += 0.0;
        arr_of_k[3] += 0.2;
        arr_of_k[4] += 0.3;

        cards[3].style.backgroundColor = '#CD5C5C';
    }else cards[3].style.backgroundColor = '#90EE90';

    let r5 = document.getElementsByName("r5");

    if (getValueFromRadio(r5) === "0") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.0;
        arr_of_k[2] += 0.0;
        arr_of_k[3] += 0.0;
        arr_of_k[4] += 0.4;

        cards[4].style.backgroundColor = '#CD5C5C';
    }else cards[4].style.backgroundColor = '#90EE90';

    let r6 = document.getElementsByName("r6");

    if (getValueFromRadio(r6) === "1") {

        arr_of_k[0] += 0.3;
        arr_of_k[1] += 0.1;
        arr_of_k[2] += 0.1;
        arr_of_k[3] += 0.0;
        arr_of_k[4] += 0.1;

        cards[5].style.backgroundColor = '#CD5C5C';
    }else cards[5].style.backgroundColor = '#90EE90';

    let r7 = document.getElementsByName("r7");

    if (getValueFromRadio(r7) === "0") {

        arr_of_k[0] += 0.0;
        arr_of_k[1] += 0.2;
        arr_of_k[2] += 0.0;
        arr_of_k[3] += 0.1;
        arr_of_k[4] += 0.0;

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