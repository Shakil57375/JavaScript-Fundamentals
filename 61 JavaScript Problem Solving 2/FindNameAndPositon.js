// নিচের sentence এ sumit শব্দটি কয়বার আছে  ? প্রথমবার sumit  কত নাম্বার পজিশনে পাওয়া গেছে?

const sentence = " Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, learn with sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers."
// How many times is the word sumit in the sentence below
const matches = sentence.match(/sumit/ig)
const occurrence = matches ? matches.length : 0  
// console.log(occurrence)
// How many number positions did sumit get for the first time?
const position = sentence.search(/sumit/i)
console.log(position)