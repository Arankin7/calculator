// number button eventlistener
// 

$(".numButton").click(function(){
    console.log('1');
    var number = $(this).data('number');
    $("#numInput").val(function() {
        return this.value + number;
    });
});

// arithmetic listeners

$("#addition").click( (e) => {
    console.log('Adding');
});

$("#subtract").click( (e) => {
    console.log('Subtracting');
});

$("#multiply").click( (e) => {
    console.log('Multiplying');
});

$("#divide").click( (e) => {
    console.log('Dividing');
});

$("#calculate").click( (e) => {
    console.log('Calculating');
});

// Clear Eventlistener

$("#clear").click(function() {
    console.log('Clear');
    var number = $(this).data('number');
    $("#numInput").val(function() {
        return number;
    })
});







