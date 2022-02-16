
//buisness logic
$(document).ready(function(){
  function range(userNum){
    const newArray = [...Array(userNum).keys()];
    for(const _i in newArray){}
    newArray.forEach(function(i) {
      i = i.toString();
      if (i == 3 || i.indexOf('3') > -1) {
        newArray[i] = 'Wont you be my neighbor?'
      }   
      else if (i == 2 || i.indexOf('2') > -1) {
        newArray[i] = 'Boop!'
      }    
      else if(i == 1 || i.indexOf('1') > -1) {
        newArray[i] = 'Beep!'
      }
    });
    return newArray
  }

  // ui logic-------
$("#clear").click(function () {
  $("#result").html("");
  $("#userNum").val("");
});
//user number input
  $("#userInput").submit(function(e) {
    e.preventDefault()
    let userInput = parseInt($('#userNum').val()) + 1;
    let result = range(userInput);
    $('#result').html(result.toString())
  });
});
