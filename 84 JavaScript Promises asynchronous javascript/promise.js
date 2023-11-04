const paymentSuccess = true;
const marks = 90;

function enroll() {
  console.log("Course enrollment is in progress..");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed!");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on progress");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("you could not get enough marks to et the certificate.");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate");
  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Congress! you got the certificate")
    }, 1000);
  });
  return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err)
    })