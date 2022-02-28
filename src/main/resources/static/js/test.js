$(document).ready(function() {
    $('#table_id').DataTable( {
        "ajax": {
                    "url": "getProducts",
                    "type": "GET"
                  },
        columns: [
                { Data: "name" },
                { Data: "company" },
                { Data: "units" },
            ]
    } );
} );