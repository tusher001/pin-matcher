//Generate random number
document.getElementById('generateBtn').addEventListener('click', function(){
    let randomNbr = Math.round(1000 + Math.random()*8999);
    document.getElementById('randomNbr').value = randomNbr;
})

//Insert value
function insertNbr(num) {
    document.getElementById('insertNbr').value = num;
}

//Clear & Backspace button
document.getElementById('clear').addEventListener('click', function(){
    insertNbr('');
})
document.getElementById('backspace').addEventListener('click', function(){
    var currentNbr = document.getElementById('insertNbr').value;
    if (currentNbr) {
        currentNbr = currentNbr.substr(0, currentNbr.length-1);
        insertNbr(currentNbr);
    }
})

//All number
let number = document.getElementsByClassName('number');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        let output = document.getElementById('insertNbr').value;
        output = output + this.id;
        insertNbr(output);
    })
}

// Pin matching
document.getElementById('submitBtn').addEventListener('click', function(){ 
    let num1 = document.getElementById('randomNbr').value;
    let num2 = document.getElementById('insertNbr').value;
    if (num1 == num2) {
        document.getElementById('match').style.display = 'block';
        document.getElementById('unmatch').style.display = 'none';
        insertNbr('');
        document.getElementById('countDown').innerText = 3;
    }
    else{
        document.getElementById('unmatch').style.display = 'block';
        document.getElementById('match').style.display = 'none';
        insertNbr('');
        let countDown = parseInt(document.getElementById('countDown').innerText);
        countDown -= 1;
        if (countDown >= 0) {
            document.getElementById('countDown').innerText = countDown;
        }
        else{
            document.getElementById('submitBtn').disabled = true;
            document.getElementById('submitBtn').style.background = 'grey';
        }
    }
})