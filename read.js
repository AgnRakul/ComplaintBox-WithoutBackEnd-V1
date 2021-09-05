function myFunction(t, m, id) {

  let mainDiv = document.querySelector('.container-center');

  // let form = document.createElement('form');
  // form.action = "http://127.0.0.1:5500/comp/show.html?Cid=" + id;
  // // form.onClick = "customJS();";
  // form.className = "formCard"
  // form.method = "get"
  // mainDiv.appendChild(form);

  let card = document.createElement('div');
  card.className = "card";
  mainDiv.appendChild(card);

  textSix = document.createElement('h6');
  textSix.className = "CardTitle";
  textSix.id = "CardTitle";
  card.appendChild(textSix);

  let text = document.createTextNode(t);
  textSix.appendChild(text);

  let hr = document.createElement('hr');
  card.appendChild(hr);

  let para = document.createElement('p');
  para.className = "ComplaintMessage";
  para.id = "ComplaintMessage";
  card.appendChild(para);

  let message = document.createTextNode(m);
  para.appendChild(message);


  let btncard = document.createElement('a');
  btncard.className = "ReadMore";
  btncard.setAttribute('href', "http://127.0.0.1:5500/show.html?Cid=" + id);
  btncard.id = "ReadMore";
  btncard.innerText = "View"
  card.appendChild(btncard);

  // let input = document.createElement('input');
  // input.id = "input";
  // input.name = "inputId";
  // input.value = "http://127.0.0.1:5500/comp/show.html?Cid=" + id;
  // card.appendChild(input);




  // ========================================================
}


fetch("assets/customJS/names.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    // console.log(data.length)
    for (i = 0; i < data.length; i++) {
      myFunction(data[i].ComplaintTitle, data[i].ComplaintText, data[i].ComplaintId)
    }

  });



//   Add Several New Elements With append() and prepend()
// https://www.w3schools.com/jquery/jquery_dom_add.asp



