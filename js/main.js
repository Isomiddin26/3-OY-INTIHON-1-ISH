function sumInput() {
    var number = [];
    var addNumber = prompt("Raqam yozing:");
    number.push(addNumber);
    for (var list of number) {
        list = Number(list)
        if(isNaN(list) || list <= 0 ) {
            function numbersAdd(numberCon) {
                var results = "";
                for (var reaction of numberCon) {
                    results = (results)*1 + (reaction)*1;
                }
                return results
            }
            number.pop(addNumber);
        } else if (list >= 0) {
            var addNumber = prompt("Raqam yozing:");
            number.push(addNumber);
        }
    }
    alert(numbersAdd(number));
}

var inputSum = sumInput();