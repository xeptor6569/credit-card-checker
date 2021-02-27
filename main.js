// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

const ccString1 = '4929583696515977';

const convertStringToNumber = ccString => {
    let numbers = [];
    for (let i = 0; i < ccString.length; i++) {
        const element = ccString[i];
        numbers.push(parseInt(element));
    }
    return numbers;
}

console.log(convertStringToNumber(ccString1)); //should return [4, 9, 2, 9, 5, 8,3, 6, 9, 6, 5, 1, 5, 9, 7, 7]

// Add your functions below:
const validateCred = digits => {
    // sstart at the last digit (check digit)
    let sumDigits = 0;
    for (let i = digits.length-1; i >= 0; i--) {
        let element = digits[i];
        //console.log('it: ' + i + 'e:' + element);

        // double every other digit starting at 1 (o is check digit)
        if ((digits.length - 1 - i) % 2 === 1) {
            element *= 2;
            if (element > 9) {
                element -= 9;
            }
        }
        sumDigits += element;
    }

    // return true if valid credit card number, else false
    return sumDigits % 10 === 0;
}


// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false


const findInvalidCards = array => {
    let invalidCards = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(validateCred(element) === false) {
            invalidCards.push(element);
        }
    }

    return invalidCards;
}


// Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are


const idInvalidCardCompanies = invalidCards => {
    let companies = [];
    invalidCards.forEach(element => {
        switch (element[0]) {
            case 3:
                if(companies.indexOf('Amex (American Express)') === -1){
                    companies.push('Amex (American Express)');
                }
                break;
            case 4:
                if(companies.indexOf('Visa') === -1){
                    companies.push('Visa');
                }
                break;
            case 5:
                if(companies.indexOf('Mastercard') === -1){
                    companies.push('Mastercard');
                }
                break;
            case 6:
                if(companies.indexOf('Discover') === -1){
                    companies.push('Discover');
                }
                break;
            default:
                console.log('Company not found');
                break;
        }
    });
    return companies;
}


console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards






