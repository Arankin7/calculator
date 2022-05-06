// Empty array for variables
var numVar = [];

var clearInput = function(){
    $("#numInput").val(function(){
        return ""; 
    });
};

// number button eventlistener
$(".numButton").click(function(){
    var number = $(this).data('number');
    $("#numInput").val(function() {
        return this.value + number;
    });
});

// arithmetic listeners

$(".operator").click( function() {
    // grabs the operator action from the dataset
    var action = $(this).data('action');
    console.log(action);

    // creates variable from number in Input field
    var firstNum = parseFloat($("#numInput").val());
    // console.log(firstNum);

    numVar.push(firstNum);

    console.log(numVar);

    clearInput();
});

$("#calculate").click( calculate = function() {
  console.log('Calculating');

//   Adds the numInput value to the array
  var lastNum = parseFloat($("#numInput").val());
  numVar.push(lastNum);
  console.log(numVar);

  const answer = numVar.reduce(getSum, 0);

  function getSum(total, num){
      return (total + num);
  }
  console.log(answer);
  
//   numVar.reduce(subArray);
//   numVar.reduce(multArray);
//   numVar.reduce(divideArray);

clearInput();

  
});

// Clear Eventlistener

$("#clear").click(function() {
    console.log('Clear');
    clearInput();

    numVar = [];

    // need to clear the array numVar
});







