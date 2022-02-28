$(document).ready(function() {
$('#table_id').DataTable(
    let table = new DataTable('#table_id', {
    "ajax": {
        "url": "/getProducts",
        "type": "GET"
    },
    dom: 'Bfrtip',
    buttons: [
    {
        text: 'My button',
        className: 'custom-html-collection',
        action: function ( e, dt, node, config ) {
        alert( 'Button activated' );
        }
    }
    ],
    "columnDefs": [ {
        "targets": -1,
        "data": null,
        "defaultContent": "<button>Delete</button>"
    },
    {
        "targets": -2,
        "data": null,
        "defaultContent": "<input type='checkbox' checked data-toggle='toggle'>Enable</input>"
    }
    ]

    } );
 
    $('#table_id tbody').on( 'click', 'button', function () {
        table
        .row( $(this).parents('tr') )
        .remove()
        .draw();
    } );

    $('#addRow').on('click', function(){
        let product = document.getElementById("product").value;
        let company = document.getElementById("company").value;
        let units = document.getElementById("units").value;
        let price = document.getElementById("price").value;
    
        table.row.add([product,company, units, price]).draw();
    });
} );

function addRowToTable(){
    let product = document.getElementById("product").value;
    let company = document.getElementById("company").value;
    let units = document.getElementById("units").value;
    let price = document.getElementById("price").value;
    table.row.add([product,company, units, price]).draw();

}


function UserAction() {
    // var xhr = createCORSRequest('GET', "http://localhost:9091/Phase4Application/login");
    // if (!xhr) {
    //   throw new Error('CORS not supported');
    // }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("GET", "http://localhost:9091/Phase4Application/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");
    alert(xhttp.responseText);
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
  
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
  
    } else if (typeof XDomainRequest != "undefined") {
  
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
  
    } else {
  
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
  
    }
    return xhr;
  }
  
 