$(document).ready(function () {
    $('#update-user').submit(function (e) {
        e.preventDefault();
        var unindexdata = $(this).serializeArray();
        var data = {};
        $.map(unindexdata, function (n, i) {
            data[n['name']] = n['value']
        })
        console.log(data);
        var request = {
            "url": `http://localhost:8080/api/users/${data.id}`,
            "method": "PUT",
            "data": data
        }
        $.ajax(request).done(function (response) {
            window.location.href = "/all-user";
        })


    })


})
$(document).ready(function () {
    $ondelete = $(".table tbody td a.delete_user");
    $ondelete.click(function () {
    //  alert("hello");
        var id = $(this).attr('data-id');

        var request = {
            "url": `http://localhost:8080/api/users/${id}`,
            "method": "DELETE"
        }
        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted");
                location.reload();
            })
        }


    })

});
