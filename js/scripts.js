$(function()  {
  $("#formone").submit(function(event) {
    event.preventDefault();

    var countto  = parseInt($("input#num1").val());
    var countby  = parseInt($("input#num2").val());

    if (countto == true && countby == true && countby <= countto) {



    for (var currentNumber = countby; currentNumber <= countto; currentNumber += countby ) {

      $("#output").append(" " + currentNumber);
      $("#output").show();

    }
}
else {
  alert("enter valid numbers");
}


  });

});
