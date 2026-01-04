let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let resultDisplayed = false;
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue == '=') {
            try {
                if (string === "") {
                    input.value = "";
                    return;
                }
                let cleanString = string.replace(/\b0+(?=\d)/g, '');
                string = String(eval(cleanString));
                input.value = string;
                resultDisplayed = true;
            } catch (error) {
                input.value = "Erro";
                string = "";
                resultDisplayed = false;
            }
        }
        else if (btnValue == 'AC') {
            string = "";
            input.value = string;
            resultDisplayed = false;
        }
        else if (btnValue == 'DEL') {
            if (resultDisplayed) {
                resultDisplayed = false;
            }
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            if (resultDisplayed) {
                if (['+', '-', '*', '/', '%'].includes(btnValue)) {
                    resultDisplayed = false;
                } else {
                    string = "";
                    resultDisplayed = false;
                }
            }

            string += btnValue;
            input.value = string;
        }
    });
});