const sendRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    // step-1 : create new XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        // handle application error
        if(this.status >= 400){
            reject(`There was an application error and the response status is ${this.status} and response text is ${this.statusText}`)
        }
        else{
            resolve(this.response)
        }
      // normally you will get response on string type and you can get them like this
      // console.log(this.responseText)
      // but if you convert it to json format then you have to receive it like this.
      resolve(this.response);
    };

    xhr.onerror = function (){
        reject("there was an error")
    }
    xhr.open(method, url);
    // convert the response type to json
    xhr.responseType = "json";
    xhr.send(data);
  });
  return promise;
};

const getData = () => {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = () => {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  ).then((responseData) => {
    console.log(responseData);
  });
};

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
