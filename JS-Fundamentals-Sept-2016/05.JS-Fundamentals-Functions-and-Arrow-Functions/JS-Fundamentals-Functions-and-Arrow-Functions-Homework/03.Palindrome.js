/**
 *
 * @param input
 * @returns {boolean}
 */


function isPalindrome(input) {
    let palindrome = input[0];
    for (let i = 0; i < palindrome.length / 2; i++) {
        if(palindrome[i]!=palindrome[palindrome.length - i - 1]) {
           return false;
        }
    }
    return true;

}
isPalindrome(['unitinu']);