const isPalindrome = (x) => {
    const strX = x.toString();
    const revStrX = x.toString().split("").reverse().join("");
    if (strX === revStrX) return true;
    else return false;
}

console.log(isPalindrome(1234))