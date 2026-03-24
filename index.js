
function calculateTax(amount) {
    return amount * (10/100)
}

function convertToUpperCase(text) {
    return text.toUpperCase()
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    }else{
        return num2
    }
}

function isPalindrome(word) {
    for( let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 -i]) {
            return false
        }
    }
    return true
}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    let discountAmount = (discountedPercentage / 100) * originalPrice
    let finalPrice = originalPrice - discountAmount
    return finalPrice;
}
console.log(calculateTax(1000))
console.log(convertToUpperCase("newton"))
console.log(findMaximum(2,4))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))
console.log(calculateDiscountedPrice(150,30))

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };