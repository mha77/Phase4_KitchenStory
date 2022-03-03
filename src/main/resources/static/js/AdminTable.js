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
                    "defaultContent": null,
                    "visible": false},
                    {'data': 'name'},
                    {'data': 'company'},
                    {'data': 'units'},
                    {'data': 'price'},
                    {'data': 'enabled',
                    "defaultContent": true,
                    "visible": false,},
                    {
                    "targets": [-2],
                    "data": null,
                    "defaultContent": "<input id='enable' type='checkbox' checked data-toggle='toggle'> Enabled</input>"
                    },
                    {
                    "targets": [-1],
                    "data": null,
                    "defaultContent": "<button id='delRow'>Delete</button>"
                    }
                 ],
    } );

    $('#addRow').on('click', function(){
    //Send Data from form to backend and reload table
            let name = document.getElementById("product").value;
            let company = document.getElementById("company").value;
            let units = document.getElementById("units").value;
            let price = document.getElementById("price").value;

            if(name == null || name == "" ||
                company == null || company == "" ||
                units == null || units == "" ||
                price == null || price == "")
            {
            alert("All values neccessary")
            return
            }

            let row = {product_id:null, name: name, company:company, units:units, price:price, enabled : true}
            $.ajax({
                "dataType":"json",
                'contentType': 'application/json',
                "type": "POST",
                "url": "postProducts",
                "data": JSON.stringify(row)
            });
            table.ajax.reload();
        });

$('#table_id tbody').on( 'click', '#delRow', function () {
    //Delete Row of Data from Backend and datatable
    let rowData = table.row( $(this).parents('tr') ).data();

    $.ajax({
        "dataType":"json",
        'contentType': 'application/json',
        "type": "POST",
        "url": "delProduct",
        "data": JSON.stringify(rowData)
     });
    table
    .row( $(this).parents('tr') )
    .remove()
    .draw();
});

$('#table_id tbody').on( 'click', '#enable', function () {
//todo update database with enabled/disabled
        //update boolean cell with true or false
        //var idx = table.cell('.selected', 0).index();
        let idx = table.row( $(this).parents('tr')).index()
        //alert ("rowindex " + idx)

        if($(this).prop("checked"))
        {
            table.cell(idx, 5).data(true);
        }else{
            table.cell(idx, 5).data(false);
        }
    });
});