$(document).ready(function() {
 let table = $('#table_id').DataTable({
 //todo get enabled products from backend
 //todo show units in table and that it's not possible to order more
  "ajax": {
                     "url": "getProducts",
                     "type": "GET",
                     "contentType": "application/json",
                     "dataSrc": ''
                   },
     "columns": [
                  {'cart_id': 'cart_id',
                   "visible": false,
                   "defaultContent": "notSet"},
                  {'data': 'product_id',
                  "visible": false},
                  {'data': 'name'},
                  {'data': 'company'},
                  {'data': 'units',
                  "visible": false},
                  {'data': 'price'},
                  {'data': 'enabled',
                  "visible": false},
                  {'data:': 'quantity',
                  "defaultContent": 0,
                  "visible": false},
                  {
                  "targets": [-2],
                  "data": null,
                  "defaultContent": "<input id='quantity' type='number'></input>"
                  },
                  {"data:":"total",
                  "defaultContent": 0},
                  {
                  "targets": [-1],
                  "data": null,
                  "defaultContent": "<button id='addToCart'>Add to Cart</button>"
                  }
                ]
    } );

    $('#table_id tbody').on( 'click', 'tr', function () {
            if ( $(this).hasClass('selected') ) {
                $(this).removeClass('selected');
            }
            else {
                table.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        } );

    $('#table_id tbody').on( 'click', '#addToCart', function () {
        //Add Row to Database
        let rowData = table.row( $(this).parents('tr') ).data();
        rowData.quantity = rowData[7]
        alert(JSON.stringify(rowData))
        $.ajax({
            "dataType":"json",
            'contentType': 'application/json',
            "type": "POST",
            "url": "addToCart",
            "data": JSON.stringify(rowData)
        });
    });

    $('#table_id tbody').on( 'input', '#quantity', function () {
            //update quantity cell with value
            let value = $(this).val()
            let idx = table.row( $(this).parents('tr')).index()
            let price = table.cell(idx, 5).data()
            let total = value * price
            table.cell(idx, 7).data(value)
            table.cell(idx, 9).data(total.toFixed(2));
        });
});

document.getElementById('delCart').addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
        }
    }
    xhttp.open("GET", "/delCart", true);
    xhttp.send(null);
});
