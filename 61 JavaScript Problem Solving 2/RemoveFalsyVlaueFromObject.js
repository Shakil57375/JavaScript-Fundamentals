// Remove Falsy Value from object
const truthyAndFalsyObject = {
  trueValue: true,
  falseValue: false,
  numberValue: 42,
  zeroValue: 0,
  stringValue: "Hello",
  emptyStringValue: "",
  objectValue: {},
  nullValue: null,
  undefinedValue: undefined
};

const truthyObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i]
        }
    }
    return obj
}

console.log(truthyObject(truthyAndFalsyObject))