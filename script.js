function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("super").value;
    var years = document.getElementById("years").value;
    var interest = parseFloat(principal) * parseFloat(years) * parseFloat(rate) / 100;
    var d = new Date();
    var n = d.getFullYear();
    var future_years = parseInt(n) + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit " + principal + ", <br>" 
    + "at an interest rate of " + rate + ". <br>"
    + "You will receive an amount of " + interest + ", <br>" 
    + "in the year " + future_years + "<br>";
}
function show_value(x)
{
    document.getElementById("slider_value").innerHTML=x;
}
