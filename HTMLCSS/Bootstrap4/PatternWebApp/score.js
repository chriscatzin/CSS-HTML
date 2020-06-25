var projectOne = document.getElementById("projectOne");
var projectOneDisplay = document.querySelector("#liOne");
var projectTwo = document.getElementById("projectTwo");
var projectTwoDisplay = document.querySelector("#liTwo");
var projectThree = document.getElementById("projectThree");
var projectThreeDisplay = document.querySelector("#liThree");
var isList = false;

projectOne.addEventListener("click", function(){
    if(isList){
        projectOneDisplay.textContent = "Project One";
    }
    else{
        projectOneDisplay.textContent = "This is a Game App Project!"
    }
    isList = !isList
});

projectTwo.addEventListener("click", function(){
    if(isList){
        projectTwoDisplay.textContent = "Project Two";
    }
    else{
        projectTwoDisplay.textContent = "This is a Photography App Project!"
    }
    isList = !isList
});

projectThree.addEventListener("click", function(){
    if(isList){
        projectThreeDisplay.textContent = "Project Three";
    }
    else{
        projectThreeDisplay.textContent = "This is a Location App Project!"
    }
    isList = !isList
});