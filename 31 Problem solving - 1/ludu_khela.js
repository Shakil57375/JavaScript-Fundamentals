// কিভাবে আমরা লুডু খেলায় এক থেকে ছয় রেন্ডমলি প্রিন্ট করতে পারি
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1,6))