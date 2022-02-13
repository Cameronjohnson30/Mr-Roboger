
$(document).ready(function(){
  function range(userNum){
    const newArray = [...Array(userNum).keys()];
    for(const i in newArray){}
    newArray.forEach(function(i) {
      i = i.toString();
      if (i == 3 || i.indexOf('3') > -1) {
        newArray[i] = 'Wont you be my neighbor?'
      }
    });
    return newArray
  }
  $("#userInput").submit(function(e) {
    e.preventDefault()
    let userInput = parseInt($('#userNum').val()) + 1;
    let result = range(userInput);
    $('#result').html(result.toString())
  });
});
