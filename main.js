$(document).ready(function() {


    $.ajax({
        url: "http://api.open-notify.org/astros.json",
        method: 'GET',
        success: function(space) {
            console.log(space);
            spacePeople(space.people);
        },
    });

    function spacePeople(people) {
        for (var i = 0; i < people.length; i++) {
            var name = '<p class="' + 'name' + i + '">' + people[i].name + '</p>';
            var craft = '<p class="' + 'craft' + i + '">' + people[i].craft + '</p>';
            $('#astronauts').append(name);
            $('#astronauts').append(craft);
        }
    };

});
