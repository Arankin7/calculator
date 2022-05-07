// Empty array for variables
var numVar = [];
const placeholder = "0123456789"

const clearInput = function(){
    $("#numInput").val(function(){
        return ""; 
    });
};

const clearClass = function(){
    $("#calculate").removeClass("add");
    $("#calculate").removeClass("subtract");
    $("#calculate").removeClass("multiply");
    $("#calculate").removeClass("divide");
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
    // console.log(action);

    

    switch(action){
        case 'addition':
            // console.log("Adding Stuff");
            $("#calculate").addClass("add");
            break;
        case 'subtract':
            // console.log("subtracting stuff");
            $("#calculate").addClass("subtract");
            break;
        case 'multiply':
            // console.log("multiplying stuff");
            $("#calculate").addClass("multiply");
            break;
        case 'divide':
            // console.log("dividing Stuff");
            $("#calculate").addClass("divide");
            break;
    }

    // creates variable from number in Input field
    var firstNum = parseFloat($("#numInput").val());

    if(!firstNum){
        var firstNum = parseFloat($("#numInput").attr('placeholder'));
        // firstNum = histNum;
        console.log(firstNum);
    }

    numVar.push(firstNum);

    clearInput();

    $("#numInput").attr('placeholder', firstNum);  
});

$("#calculate").click( calculate = function() {

//   Adds the numInput value to the array
  var lastNum = parseFloat($("#numInput").val());
  numVar.push(lastNum);
  console.log(numVar);

//   const answerEl = $("#numInput");

//   Checks classes on Calculate button then does the proper calculations
  if($("#calculate").hasClass("add")){
    const answer = numVar.reduce(getSum, 0);

    function getSum(total, num){
        return (total + num);
    }
    $("#numInput").val(function(){
        return answer; 
    });
    clearInput();
    $("#numInput").attr('placeholder', answer); 
  }
  else if($("#calculate").hasClass("subtract")){
      const answer = numVar.reduce(getSub);

      function getSub(total, num){
          return(total - num);
      }
      $("#numInput").val(function(){
        return answer; 
    });
    clearInput();
    $("#numInput").attr('placeholder', answer);
    }
  else if($("#calculate").hasClass("multiply")){
    const answer = numVar.reduce(getProduct);

    function getProduct(total, num){
        return(total * num);
    };
    $("#numInput").val(function(){
        return answer; 
    });
    clearInput();
    $("#numInput").attr('placeholder', answer);
    }

    else if($("#calculate").hasClass("divide")){
        const answer = numVar.reduce(getQuotient);

        function getQuotient(total, num){
            return(total / num);
        };
        $("#numInput").val(function(){
            return answer; 
        });
        clearInput();
        $("#numInput").attr('placeholder', answer);
    }

    clearClass();
    numVar = [];  
});

// Clear Eventlistener

$("#clear").click(function() {
    console.log('Clear');
    clearInput();
    $("#numInput").attr('placeholder', placeholder);
    clearClass();
    numVar = [];
});







