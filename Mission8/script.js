//Exercice 1
document.getElementById("demo1").addEventListener("click", function() {
    let num1 = prompt("Entrez le premier nombre:");
    let num2 = prompt("Entrez le deuxième nombre:");
    let sum = parseFloat(num1) + parseFloat(num2);
    alert("La somme des deux nombres est: " + sum);
});

document.getElementById("sol1").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo1 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black"; 
        newDiv.textContent = "function Add(a,b){ result = a + b; return result; }";
        document.getElementById("demo1").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 2
document.getElementById("demo2").addEventListener("click", function() {
    let chiffre = prompt("Entrez le premier nombre:");
    let sum = "";
    for (let i = 1; i <= parseInt(chiffre); i++) {
        sum += i;
    }
    alert("La somme des deux nombres est: " + sum);
});

document.getElementById("sol2").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo2 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black"; // Adding border to make it a small box
        newDiv.textContent = "function(){ let sum = ''; for(let i = 1; i <= chiffre; i++){ sum += i; } return sum; }";
        document.getElementById("demo2").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 3
document.getElementById("demo3").addEventListener("click", function() {
    let num = prompt("Entrez un nombre:");
    let factorial = 1;
    for (let i = 1; i <= parseInt(num); i++) {
        factorial *= i;
    }
    alert("La factorielle de " + num + " est: " + factorial);
});

document.getElementById("sol3").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo3 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function Factorial(n){ let result = 1; for(let i = 1; i <= n; i++){ result *= i; } return result; }";
        document.getElementById("demo3").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 4
document.getElementById("demo4").addEventListener("click", function() {
    let num = prompt("Entrez un nombre:");
    let isPrime = true;
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }
    alert(num + " est " + (isPrime ? "un nombre premier." : "pas un nombre premier."));
});

document.getElementById("sol4").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo4 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function IsPrime(n){ if(n <= 1) return false; for(let i = 2; i < n; i++){ if(n % i === 0) return false; } return true; }";
        document.getElementById("demo4").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 5
document.getElementById("demo5").addEventListener("click", function() {
    let num = prompt("Entrez un nombre:");
    let fibonacci = [0, 1];
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    alert("Les " + num + " premiers nombres de Fibonacci sont: " + fibonacci.slice(0, num).join(", "));
});

document.getElementById("sol5").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo5 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function Fibonacci(n){ let fib = [0, 1]; for(let i = 2; i < n; i++){ fib[i] = fib[i - 1] + fib[i - 2]; } return fib.slice(0, n); }";
        document.getElementById("demo5").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 6
document.getElementById("demo6").addEventListener("click", function() {
    let num = prompt("Entrez un nombre:");
    let reversedNum = num.split("").reverse().join("");
    alert("Le nombre inversé est: " + reversedNum);
});

document.getElementById("sol6").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo6 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function ReverseNumber(n){ return n.split('').reverse().join(''); }";
        document.getElementById("demo6").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 7
document.getElementById("demo7").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let reversedStr = str.split("").reverse().join("");
    alert("La chaîne inversée est: " + reversedStr);
});

document.getElementById("sol7").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo7 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function ReverseString(s){ return s.split('').reverse().join(''); }";
        document.getElementById("demo7").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 8
document.getElementById("demo8").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let vowels = str.match(/[aeiou]/gi);
    alert("Le nombre de voyelles est: " + (vowels ? vowels.length : 0));
});

document.getElementById("sol8").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo8 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function CountVowels(s){ let vowels = s.match(/[aeiou]/gi); return vowels ? vowels.length : 0; }";
        document.getElementById("demo8").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 9
document.getElementById("demo9").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let words = str.split(" ");
    alert("Le nombre de mots est: " + words.length);
});

document.getElementById("sol9").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo9 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function CountWords(s){ return s.split(' ').length; }";
        document.getElementById("demo9").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 10
document.getElementById("demo10").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    alert("La fréquence des caractères est: " + JSON.stringify(charCount));
});

document.getElementById("sol10").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo10 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function CharFrequency(s){ let charCount = {}; for(let char of s){ charCount[char] = charCount[char] ? charCount[char] + 1 : 1; } return charCount; }";
        document.getElementById("demo10").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 11
document.getElementById("demo11").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let longestWord = str.split(" ").reduce((longest, current) => current.length > longest.length ? current : longest, "");
    alert("Le mot le plus long est: " + longestWord);
});

document.getElementById("sol11").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo11 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function LongestWord(s){ return s.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, ''); }";
        document.getElementById("demo11").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 12
document.getElementById("demo12").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let capitalizedStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    alert("La chaîne avec chaque mot en majuscule est: " + capitalizedStr);
});

document.getElementById("sol12").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo12 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function CapitalizeWords(s){ return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); }";
        document.getElementById("demo12").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 13
document.getElementById("demo13").addEventListener("click", function() {
    let str = prompt("Entrez une chaîne de caractères:");
    let palindrome = str === str.split("").reverse().join("");
    alert("La chaîne " + (palindrome ? "est" : "n'est pas") + " un palindrome.");
});

document.getElementById("sol13").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo13 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function IsPalindrome(s){ return s === s.split('').reverse().join(''); }";
        document.getElementById("demo13").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 14
document.getElementById("demo14").addEventListener("click", function() {
    let num = prompt("Entrez un nombre:");
    let binary = parseInt(num).toString(2);
    alert("La représentation binaire de " + num + " est: " + binary);
});

document.getElementById("sol14").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo14 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function ToBinary(n){ return parseInt(n).toString(2); }";
        document.getElementById("demo14").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 15
document.getElementById("demo15").addEventListener("click", function() {
    let num = prompt("Entrez un nombre:");
    let isEven = parseInt(num) % 2 === 0;
    alert(num + " est " + (isEven ? "pair." : "impair."));
});

document.getElementById("sol15").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo15 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function IsEven(n){ return parseInt(n) % 2 === 0; }";
        document.getElementById("demo15").insertAdjacentElement("afterend", newDiv);
    }
});