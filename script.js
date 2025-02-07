function out() {
    var num1 = parseFloat(document.getElementById('value1').value);
    var num2 = parseFloat(document.getElementById('value2').value);
    var num3 = document.getElementById('value3').value.trim();

    var result;
    if (num3 === '+') {
        result = num1 + num2;
    } else if (num3 === '-') {
        result = num1 - num2;
    } else if (num3 === '*') {
        result = num1 * num2;
    } else if (num3 === '/') {
        result = num1 / num2;
    } else {
        result = "Error!";
    }

    document.querySelector('.demo').innerText = "The Damnnnn Output issssssssssssss " + result;
}
