  //buisness Logic
$(document).ready(function(){
  function range(userNum){
    const newArray = [...Array(userNum).keys()];
  } })

  //UI Logic
$("#userInput").submit(function(e) {
    e.preventDefault()
    let userInput = parseInt($('#userNum').val()) + 1;
    let result = range(userInput);
    $('#result').html(result.toString())
}); 