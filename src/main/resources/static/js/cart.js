$(document).ready(function() {

 var table = $('#table_id').DataTable({
 //todo get enabled products from backend
  "ajax": {
                     "url": "getCart",
                     "type": "GET",
                     "contentType": "application/json",
                     "dataSrc": '',
                   },
     "columns": [
                  {'data': 'cart_id',
                   "visible": false},
                  {'data': 'product_id',
                  "visible": false},
                  {'data': 'name'},
                  {'data': 'company'},
                  {'data': 'units',
                  "visible": false},
                  {'data': 'price'},
                  {'data': 'enabled',
                  "visible": false},
                  {'data': 'quantity'},
                  {'data': 'total',
                  "defaultContent": 0}
                ]
    } );
});

