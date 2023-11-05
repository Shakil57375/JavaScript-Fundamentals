const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10 : 00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled!"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
};

const myMeeting = async () => {
  try {
    const meetingDetails = await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
  } catch {
    console.log(`something wrong happened`);
  }
};

myMeeting();
// will run first
console.log(`hello world`);

// if you want to run multiple promise at a tile use Promise.all

const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});
