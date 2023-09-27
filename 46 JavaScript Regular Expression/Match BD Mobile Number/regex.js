const text = "+8801814265294"
const regex = /(\+88)?-?01[1-9]\d{8}/g;
const matches = text.match(regex)
const index = text.search(regex)
const replaced = text.replace(regex, "phone")
const testing = regex.test(text)
console.log(matches, index, replaced, testing)
