// কি ভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের রোল নাম্বর ক্রম অনুযায়ী সাজাতে পারি?
const rollNumbers = [3, 1, 6, 23, 5, 32, 2, 7]
console.log(rollNumbers.sort((a,b) => a - b)) // with array function
console.log(rollNumbers.sort(function(a,b){
    return a - b
})) // with normal function