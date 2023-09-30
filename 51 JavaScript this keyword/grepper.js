//this refer to global object or window object
//but when we call this inside method of object it refers to current object
//COMMENT::1)This understanding
console.log(this === window); //true

let user = {
  name: 'shirshak',
  age: 25,
  say() {
    //here this is current object which is user
    console.log(this.name); //print shirshak
  },
};

//COMMENT::2)Reduced duplicated code inside object
let developer = {
  name: 'shirshak',
};
let admin = {
  name: 'admin',
};

function sayHi() {
  console.log(this.name);
}
developer.hi = sayHi;
admin.hi = sayHi;
developer.hi(); //log shirshak
admin.hi(); //log admin
//this reduced writing same code in each object.

//COMMENT::3)Using this in dom
const lists = document.querySelectorAll('li');
lists.forEach(list => {
  list.addEventListener('click', function () {
    console.log(this); //click li will be log
  });
});


//COMMENT::4) New this which refer to window when calling function inside function of object
user = {
  name: 'shirshak',
  skill: ['html', 'css', 'javascript', 'react', 'nextjs', 'ethers.js', 'nodejs', 'express'],
  greet() {
    const self = this;
    console.log(`Hello there ${this.name}`); //here this is user object
    //     const getSkills = function () {
    //       console.log(`You currently have ${this.skill.length} skills`);
    //       //this.skill is undefined as here this is window
    //     };
    const getSkills = function () {
      console.log(`You currently have ${self.skill.length} skills`);
      //self.skill is user object
    };

    getSkills();
    // when we call getSkills it will create new execution context
    //with this being window
  },
  geetArrow() {
    console.log(`Hello there ${this.name}`);
    this.skill.forEach(video => {
      console.log(this.name);
    });

    const getSkills = () => {
      console.log(`You currently have ${this.skill.length} skills`);
    };
    getSkills();
  },
};

user.greet();
//here new execution context create with this refer to user object
user.geetArrow();
//here we use arrow function so new function will not create new this which refer to window in new global execution context.
22

document.querySelector("button.w").addEventListener("click", function () {
    this.style.color = "white";
});
// In HTML event handlers, this refers to the HTML element that received the event:
// when clicked color of the element would change to white, 
// document.querySelector("button.w") indentifies the element.