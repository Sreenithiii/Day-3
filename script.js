
//Task1
let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name: "person1"};

if (obj1 === obj2) {
    console.log("Objects are not equal.");
} else 
{
    console.log("Objects are equal.");
}


//task 2

var request = new XMLHttpRequest();
request.open ("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload=function(){
    var data = request.response;
     var result= JSON.parse(data);
     for (var i = 0; i < result.length; i++) 
     {
      console.log(result[i].flags.svg);
    }
  }


//task 3

var request = new XMLHttpRequest();
request.open ("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload=function(){
    var data = request.response;
     var result = JSON.parse(data);
    for(var i=0;i< result.length;i++)
    {
      console.log ("counrtyname:"+"  "+result[i].name.common,"Region:"+"  "+result[i].region,"Subregion:"+"  "+result[i].subregion,"Population:"+"  "+result[i].population)
      
    }
}