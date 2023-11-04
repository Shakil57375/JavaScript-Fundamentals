const booking = true;
const carArrive = true;
const fare = 60;
function Car(callback) {
  console.log("car is coming....");
  setTimeout(() => {
    if (booking) {
      callback();
    } else {
      console.log("booking failed!");
    }
  }, 2000);
}

function CarArrived(callback) {
  console.log("Car Arriving.....");
  setTimeout(() => {
    if (carArrive) {
      callback();
    } else {
      console.log("something happened in the road");
    }
  }, 3000);
}

function ContactWithDriver(callback) {
  console.log("Contact in progress....");
  setTimeout(() => {
    if (fare <= 50) {
      callback()
    } else {
      console.log("contact failed!");
    }
  }, 2000);
}

function arrivedDestination(){
    console.log("arriving.......")
    setTimeout(() => {
        console.log("arrived")
    }, 1000);
}


Car(function(){
    CarArrived(function(){
        ContactWithDriver(arrivedDestination)
    })
})