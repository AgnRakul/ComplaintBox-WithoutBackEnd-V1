let fs = require('fs');
let express = require('express');
const app = express();
app.use(express.json());



function makeId(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

app.get('/submit', (req, res) => {

  let Title = req.query.title;
  let Text = req.query.text;
  let myData = {
    'ComplaintTitle': Title,
    'ComplaintText': Text,
    'ComplaintId': makeId(6)
  }
  const buf = fs.readFileSync('names.json', 'utf8');
  let newDataStr;

  if (buf.length === 0) {
    let dataObj = [];
    dataObj.push(myData);
    newDataStr = JSON.stringify(dataObj);
  } else {
    let dataObj = JSON.parse(buf);
    dataObj.push(myData); // assuming that this is an array
    newDataStr = JSON.stringify(dataObj);
  }

  fs.writeFileSync("names.json", newDataStr);

});

// app.get('/view', (req, res) => {
//   let id = req.query.inputId;
//   console.log(id);

//   function Click() {

//     let share = "http://localhost:1310/view/" + id;
//     window.open(share);

//   }
//   Click();

// });






const port = 1310;
app.listen(port, () => console.log(`Listening on port ${port}..`));