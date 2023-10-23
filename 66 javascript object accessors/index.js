//! Create an object:
// ! get accessor
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };
//   console.log(person.lang)

// ! set accessor
const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };

  person2.lang = "bg"
  console.log(person2)
  
  // Set an object property using a