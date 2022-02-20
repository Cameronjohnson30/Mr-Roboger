//buisness logic
function range(userInput) {
  const results = [...Array(userInput).keys()];
  for(const i in results) {
    results.forEach(function(i) {
      i = i.toString();
      if (i == 3 || i.indexOf('3') > -1) {
        results[i] = 'Wont you be my neighbor?'
      }   
      else if (i == 2 || i.indexOf('2') > -1) {
        results[i] = 'Boop!'
      }    
      else if(i == 1 || i.indexOf('1') > -1) {
        results[i] = 'Beep!'
      };
    });
    return results.toString()
  };
};

//Ui Logic
function returnResults() {
  $("#userInput").submit((e) => {
    e.preventDefault()
    value = $('#userNum').val()
    userInput = parseInt(value) + 1;
    results = range(userInput)
    return $('#result').html(results)
  });
}

// clear form
function clearForm() {
  $('#clear').click(() => {
    $("#result").html("");
    $("#userNum").val("");
  });
}

// lets run the code
$(document).ready(() => {
  returnResults()
  clearForm();
});
