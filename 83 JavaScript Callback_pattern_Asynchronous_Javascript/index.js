const paymentSuccess = false;
const marks = 70;

function enroll(callback) {
  console.log("Course enrollment is in progress");
  setTimeout(() => {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on progress");
  setTimeout((marks) => {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You didn't achieve required marks to get certified");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing your certificate");
  setTimeout(() => {
    console.log("Congrats! You have got the certificate!");
  }, 1000);
}

enroll(function () {
  progress(getCertificate);
});
