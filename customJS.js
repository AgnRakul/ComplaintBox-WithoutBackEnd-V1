let filterUrl = window.location.href;

let filter = filterUrl.split("=");
let postNumber = filter[1];


fetch("assets/customJS/names.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (i = 0; i < data.length; i++) {
            if (data[i].ComplaintId === postNumber) {

                let title = document.querySelector('.Title');
                let message = document.querySelector('.Message');
                title.innerHTML = data[i].ComplaintTitle;

                message.innerHTML = data[i].ComplaintText;
            }
        }

    });