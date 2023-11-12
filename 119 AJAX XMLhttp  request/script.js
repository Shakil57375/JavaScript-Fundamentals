function loadData(callbackF) {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = function () {
    console.log("into");
    callbackF(this);
    // console.log(this.getAllResponseHeaders());
    console.log(this.getResponseHeader("etag"));
  };
  /* The default value for the async parameter is async = true.
    You can safely remove the third parameter from your code.
    Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop. */
  // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
  // xhr.open("GET", "./data/data.txt", false);
  xhr.open("GET", "./data/data.txt", true);

  // add a request header
  // xhr.setRequestHeader("MY_GF", "JavaScript");

  // send request
  xhr.send();

  console.log("object");
  // abort
  // xhr.abort();
}

function myCallback1(xhr) {
  const container = document.getElementById("demo");
  container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
  const container = document.getElementById("demo2");
  container.innerHTML = xhr.responseText;
}
