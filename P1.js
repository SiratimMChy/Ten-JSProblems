//1

function reverseString(str) {
    let revStr = str.split('').reverse().join('');
    return revStr;
}

console.log(reverseString("AHUT"));

//2

function countVowel(str) {
    let cnt = 0;
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            cnt++;
        }
    }

    return cnt;
}

console.log(countVowel('BANGLADESH'));

//3
function checkPalindrome(str){
    let revStr ='';
    for(let i =str.length -1; i>=0;i--){
        revStr += str[i];
    }

    return str === revStr;
}

console.log(checkPalindrome('level'));


//4

function findMaxNumber(arr){
    let maxNum = arr[0];

    for(let i=1; i<arr.length;i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(findMaxNumber([1,2,3,4,52]))

//5
function removeDuplicates(arr){
    let uniqueArray = [];

    for(let i=0;i<arr.length;i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}


console.log(removeDuplicates([1,2,2,3,4,4,5,5]));



//6
function sumOfArray(arr){
    let sum =0;
    for (i=0;i<arr.length;i++){
        sum +=arr[i];
    }

    return sum;
}


console.log(sumOfArray([1,2,3,4,5]));
//7
function findEvenNumber(arr) {
    let evenNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber.push(arr[i]);
        }
    }

    return evenNumber;
}

console.log(findEvenNumber([11, 12, 13, 14, 15, 16]));

//8
function capitalizeWords(str) {
  let w = str.split(" ");
  let result = [];

  for (let i = 0; i < w.length; i++) {
    let w = w[i];
    result.push(w[0].toUpperCase() + w.slice(1));
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));

//9

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


console.log(factorial(5));


//10
function pingpongChallenge() {

    let arr = []
    for (let i = 1; i <= 20; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            arr.push('PingPong');

        } else if (i % 3 == 0) {

            arr.push('Ping');

        } else if (i % 5 == 0) {

            arr.push('Pong');
        }
        else {
            arr.push(i);

        }
    }
    console.log(arr.join(", "));
    
}

pingpongChallenge();

//11 - Find Minimum Number
function findMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinNumber([5, 2, 9, 1, 3]));

//12 - Count Words in a String
function countWords(str) {
    return str.trim().split(" ").length;
}
console.log(countWords("Hello world from JavaScript"));

//13 - Check Prime Number
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

//14 - Find Largest String in Array
function longestString(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
console.log(longestString(["hi", "hello", "javascript"]));

//15 - Sum of Even Numbers
function sumEven(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) sum += num;
    }
    return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6]));

//16 - Reverse Array
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray([1, 2, 3, 4]));

//17 - Check Anagram
function isAnagram(str1, str2) {
    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");
    return s1 === s2;
}
console.log(isAnagram("listen", "silent"));

//18 - Fibonacci Series (n terms)
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(fibonacci(6));

//19 - Remove Falsy Values
function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy([0, 1, false, 2, "", 3]));

//20 - Find Second Largest Number
function secondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(secondLargest([10, 20, 4, 45, 99]));
