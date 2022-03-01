$(document).ready(function() {
 let table = $('#table_id').DataTable({
  "ajax": {
                     "url": "getProducts",
                     "type": "GET",
                     "contentType": "application/json",
                     "dataSrc": ''

                   },

     "columns": [
                  {'data': 'product_id',
                  "defaultContent": "Not set"},
                  {'data': 'name'},
                  {'data': 'company'},
                  {'data': 'units'},
                  {'data': 'price'},
                  {'data': 'enabled',
                  "defaultContent": "Not set"}

                ],
     "columnDefs": [
                 {
                     "targets": [ 0 ],
                     "visible": false,
                     "searchable": false
                 },
                 {
                     "targets": [ 5 ],
                     "visible": false
                 }
             ]
    } );

    $('#addRow').on('click', function(){
            let name = document.getElementById("product").value;
            let company = document.getElementById("company").value;
            let units = document.getElementById("units").value;
            let price = document.getElementById("price").value;
            let row = {product_id:null, name: name, company:company, units:units, price:price, enabled : null}
            $.ajax({
                             "dataType":"json",
                             'contentType': 'application/json',
                             "type": "POST",
                             "url": "postProducts",
                             "data": JSON.stringify(row)
                             });
            table.ajax.reload();
        });
} );

 $('#table_id tbody').on( 'click', 'button', function () {
        table
        .row( $(this).parents('tr') )
        .remove()
        .draw();
    } );
