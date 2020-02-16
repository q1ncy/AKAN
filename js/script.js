function Akan(){
    var DD=parseInt(document.getElementById("day").value)
    var MM=parseInt(document.getElementById("Month").value)
    var CC=parseInt(document.getElementById("CC").value)
    var YY=parseInt(document.getElementById("YY").value)
    var DayOfTheweek=((((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM+1)/10)+DD)%7).toFixed()
     var gen=document.getElementById("Gender").value
     if (DD<=0 || DD>31 ){
        alert("Enter valid date!!!")
        
    }else if (MM<=0 || MM>12) {
        alert("Enter valid Month!!!")
    
    }

    var MaleNames=["Kwasi","Kwadwo","kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var FemaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    if (DayOfTheweek==6 && gen=="Male"){

       alert("Your Akan name is "+ MaleNames[6])

    }else if (DayOfTheweek==5 && gen=="Male"){

        alert("Your AKan name is " + MaleNames[5])

    }else if (DayOfTheweek==4 && gen=="Male"){

        alert("Your Akan name is " + MaleNames[4])

    }else if (DayOfTheweek==3 && gen=="Male"){

        alert("Your Akan name is " + MaleNames[3])

    }else if (DayOfTheweek==2 && gen=="Male"){

        alert("Your Akan name is " + MaleNames[2])

    }else if (DayOfTheweek==1 && gen=="Male"){

        alert("Your Akan name is " + MaleNames[1])

    }else if (DayOfTheweek==0 && gen=="Male"){
        alert("Your Akan name is " + MaleNames[0])
    }

    if (DayOfTheweek==6 && gen=="Female"){

        alert("Your Akan name is "+ FemaleNames[6])
 
     }else if (DayOfTheweek==5 && gen=="Female"){
 
         alert("Your AKan name is " + FemaleNames[5])
 
     }else if (DayOfTheweek==4 && gen=="Female"){
 
         alert("Your Akan name is " + FemaleNames[4])
 
     }else if (DayOfTheweek==3 && gen=="Female"){
 
         alert("Your Akan name is " + FemaleNames[3])
 
     }else if (DayOfTheweek==2 && gen=="Female"){
 
         alert("Your Akan name is " + FemaleNames[2])
 
     }else if (DayOfTheweek==1 && gen=="Female"){
 
         alert("Your Akan name is " + FemaleNames[1])
 
     }else if (DayOfTheweek==0 && gen=="Female"){
         alert("Your Akan name is " + FemaleNames[0])
     }
    }