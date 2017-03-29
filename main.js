$.ajax({
    url: "http://api.open-notify.org/astros.json",
    method: 'GET',
    success: function(space) {
        $('#astronauts').html("")
        $('#astronauts').append(`<tr><td>${space.name}</td>, <td>${space.craft}</td></tr>`)

    },
});


$.ajax({
    url: 'http://api.open-notify.org/astros.json',
    method: "POST",
    success: function() {
    console.log("yous data is been post")
},
data: {
    astronauts: $('#astronauts').val(),

     },
});
