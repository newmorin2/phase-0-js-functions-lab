
function calculateTax(amount) {
    let taxRate = 0.1
    let calc = amount * taxRate
    return calc;
}
console.log(calculateTax(1000))

function convertToUpperCase(text) {
    let name = text;
    let convert = name.toUpperCase()
    console.log(convert)
}
convertToUpperCase("newton")

function findMaximum(num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    }else{
        console.log(num2)
    }
}
findMaximum(6,3)

function isPalindrome(word) {
    let text = word;
    if (text = text === text.split("").reverse().join("")) {
        console.log(true)
    }else{
        console.log(false)
    }
}
isPalindrome("racecar")

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let calc = discountPercentage / 100 * originalPrice
    return calc;
}
console.log(calculateDiscountedPrice(500,10))
// This is required for the test to function properly  
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };