console.log('js file sourced');

var redCount = 0;
var yellowCount = 0;
var greenCount = 0; 
var blueCount = 0;

$(document).ready(function() {

    $('#red-button').click(function(){
      $('#block-div').append("<div class='red-block'></div>") //this adds the red block
      redCount++;
      $('#redCounter').html("<p id='redCounter'>Red Counter" + redCount + "</p>")
    })

    $('#yellow-button').click(function(){ 
        $('#block-div').append("<div class='yellow-block'></div>") //this adds the yellow block      
        yellowCount++;
        $('#yellowCounter').html("<p id='yellowCounter'>Yellow Counter" + yellowCount + "</p>")   
    })

    $('#green-button').click(function(){ 
        $('#block-div').append("<div class='green-block'></div>") //this adds the green block
        greenCount++
        $('#greenCounter').html("<p id='greenCounter'>Green Counter" + greenCount + "</p>")   
    })

    $('#blue-button').click(function(){
        $('#block-div').append("<div class='blue-block'></div>") //this adds the blue block
        blueCount++
        $('#blueCounter').html("<p id='blueCounter'>Blue Counter" + blueCount + "</p>")   
    })
    
})




