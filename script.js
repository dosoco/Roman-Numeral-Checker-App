//Roman Numeral Converter
// takes in a number from the user and converts that num into a roman numeral

// I : 1
// IV : 4
// V : 5
// IX : 9
// X - 10
// XL - 40
// L - 50
// XC - 90
// C - 100
// CD - 400
// D - 500
// CM - 900
// M - 1000

function convertToRoman(num){
const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}
// Initialize an empty string to build the final roman numeral result
let romanized = ""

  // Convert the object keys (which are strings) into an array, then reverse it.
  // This ensures we start with the largest numeral values (1000, 900, etc.).
const numeralKeys = Object.keys(numerals).reverse().map(Number)

// Iterate over each key in the numeralKeys array
numeralKeys.forEach(key => {
    //While the current Roman numeral value (key) can be subtracted from num...
    while(key <= num) {
        //Append the corresponding Roman numeral symbol to the result string
        romanized += numerals[key]
        //subtract the current key from num, reducing it until the numeral can no longer be used
        num -= key
    }
})
return romanized
}

console.log(convertToRoman(2024))