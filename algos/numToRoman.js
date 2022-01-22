var intToRoman = function(num) {
    /**
     * @param {number} num
     * @return {string}
     */
    let remainingAmount = num;
    let final = '';

    const letters = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    };

    const letterArray = Object.keys(letters).map(letter => {
        return {
            'letter': letter,
            'value': letters[letter]
        }
    });

    while(letterArray.length > 0){
        if (remainingAmount >= letterArray[0].value) {
            final += letterArray[0].letter;
            remainingAmount -= letterArray[0].value;
        }
        if (remainingAmount < letterArray[0].value || remainingAmount <= 0)  {
            letterArray.shift();
        }
    }
    return final

};

intToRoman(0);



//
// while (num > 0){
//     console.log('final', final);
//     console.log('num', num);
//     if (num >= 1000) {
//         num -= 1000;
//         final += 'M'
//     }
//     else if(num >= 900) {
//         num -= 900;
//         final += 'CM'
//     }
//     else if (num >= 500) {
//         num -= 500;
//         final += 'D'
//     }
//     else if (num >= 400) {
//         num -= 400;
//         final += 'CD'
//     }
//     else if (num >= 100){
//         num -= 100;
//         final += 'C'
//     }
//     else if (num >= 90){
//         num -= 90;
//         final += 'XC'
//     }
//     else if (num > 50){
//         num -= 50;
//         final += 'L'
//     }
//     else if (num >= 40){
//         num -= 40;
//         final += 'XL'
//     }
//     else if (num >= 10){
//         num -= 10;
//         final += 'X'
//     }
//     else if(num >= 9){
//         num -= 9;
//         final += 'IX'
//     }
//     else if (num >= 5){
//         num -= 5;
//         final += 'V'
//     }
//     else if (num >= 4){
//         num -= 4;
//         final += 'IV'
//     }
//     else {
//         num -= 1;
//         final += 'I'
//     }
// }
