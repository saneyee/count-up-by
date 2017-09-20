$(function()  {
  $("#formone").submit(function(event) {
    event.preventDefault();

    var countto  = parseInt($("input#num1").val());
    var countby  = parseInt($("input#num2").val());

    if (countto != false && countby != false && countby <= countto) {


        var outputstring = " ";
    for (var currentNumber = countby; currentNumber <= countto; currentNumber += countby ) {
        outputstring += currentNumber + " ";
    }
    $("#output").text(outputstring);
    $("h2").show();

}
else {
  alert("enter valid numbers");
}


});


});
