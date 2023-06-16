et screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let evaluate = "";
let answer = "0";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            //buttonText = '*';
            screenValue += "x";
            screen.value = screenValue;
            evaluate += '*';
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            evaluate = "";
            answer = "0";
            screen.value = screenValue;
        }
        else if (buttonText == 'Enter') {
            screenValue = eval(evaluate).toString();
            evaluate = screenValue;
            screen.value = screenValue;
            answer = screenValue;

        }
        else if (buttonText == 'del') {
            size = screenValue.length;
            size2 = evaluate.length;
            size5 = answer.length;
            if (screenValue[size - 2] == 'v') {
                screenValue = screenValue.substring(0, size - 2);
                evaluate = evaluate.substring(0, size2 - 10);
            }
            if (screenValue[size - 1] == 's') {
                screenValue = screenValue.substring(0, size - 3);
                evaluate = evaluate.substring(0, size2 - size5);
            }
            else {
                screenValue = screenValue.substring(0, size - 1);
                evaluate = evaluate.substring(0, size2 - 1);
            }
            screen.value = screenValue;
        }
        else if (buttonText == 'v') {
            evaluate += "Math.sqrt(";
            screenValue += "v(";
            screen.value = screenValue;
        }
        else if (buttonText == 'ans') {
            evaluate += answer;
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '+/-') {
            evaluate += "-(";
            screenValue += "-(";
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            evaluate += buttonText;
            screen.value = screenValue;
        }

    })
}