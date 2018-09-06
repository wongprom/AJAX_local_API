document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  //Open
  //Step 1
  xhr.open('GET', 'data.txt', true);
  console.log('READYSTAT', xhr.readyState);

  //Optional - Used for spinners/loaders
  //Step 3
  xhr.onprogress = function() {
    console.log('READYSTAT', xhr.readyState);
  };

  //Step 4
  xhr.onload = function() {
    console.log('READYSTAT', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector('#output').innerHTML = `
      <h1>${this.responseText}</h1>`;
    }
  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP status
  // 200: 'ok'
  // 403: 'forbidden'
  // 404: 'not found'
}
