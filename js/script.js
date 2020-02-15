function Press(){
    var Year=parseInt(document.getElementById("Year").value)
    var CC=Year.slice(0,1)
    var YY=Year.slice(2,3)
    var DD=parseInt(document.getElementById("day").value)
    var MM=parseInt(document.getElementById("month").value)
    var dayOftheWeek=parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7
    alert(dayOftheWeek)
}