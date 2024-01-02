let object = {
  name: "Shakil",
  city: "Cumilla",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "jabil",
};
// never change the proto just for understanding purpose.
// when we set the __proto__ of object 2 to the object it will get access to the properties of object one that's how prototype chain work.
object2.__proto__ = object;
// ! when we try to access the city from the object2 object it will try to find it inside the object if it doesn't find the city key it will try to find it on the proto if it doesn't find it. It will try to find on the proto of the proto and that's who it goes through out the chain
console.log(object2.city);

/* When you access object2.city, it doesn't find the city property directly on object2. However, it looks up the prototype chain since you've set object2.__proto__ = object. So, it finds the city property in the prototype (object), and the value is "Cumilla". Therefore, calling console.log(object2.city) will output "Cumilla".

If you call object2.getIntro(), it doesn't find the getIntro method directly on object2. Again, it looks up the prototype chain and finds the getIntro method in the prototype (object). Therefore, calling object2.getIntro() will print "Jabil from Cumilla" to the console.

Setting the prototype (__proto__) creates a link between object2 and object, allowing properties and methods to be inherited from the prototype if they are not found directly on the object. */
