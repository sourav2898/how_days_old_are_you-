function ageInDays(){
    var yearOfBirth = prompt("what is your year of birth");
    var date = new Date();
    var presentYear = date.getFullYear();
    
    if(yearOfBirth.length!=0){
        var result = (presentYear-yearOfBirth)*365;
        console.log(result);
        var h1 = document.createElement("h1");
        var text = document.createTextNode("You are " + result + " days old!");
        h1.setAttribute('id','ageindays');
        h1.appendChild(text);
        document.getElementById("res").appendChild(h1);
    }
    
}

function reset(){
    document.getElementById('ageindays').remove();
}