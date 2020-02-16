function Akan(){
    var DD=parseInt(document.getElementById("day").value)
    var MM=parseInt(document.getElementById("Month").value)
    var CC=parseInt(document.getElementById("CC").value)
    var YY=parseInt(document.getElementById("YY").value)
    var DayOfTheweek=((((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM+1)/10)+DD)%7).toFixed()
     var gen=document.getElementById("Gender").value
    if (DD<=0 || DD>31){
        alert("Enter valid date!!!")
    }else if (MM<=0 || MM>12) {
        alert("Enter valid Month!!!")
    }
}