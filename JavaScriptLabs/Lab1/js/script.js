console.log("Task 1: ")
var secondsTotal = 234245645335;
var secondsInHour = 3600;
var secondInMinute = 60;
var result = secondsTotal % secondsInHour;

console.log(result + " seconds left");
console.log(result / secondInMinute+ " hours left");


console.log("==============================")

console.log("Task 2: ")
var string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";
var listInd = [];

for (var i = 0; i < string.length; i++){
    if (string[i] == "a"){
        listInd.push(i);
    }
}

console.log("The indexes of 'a': " + listInd);


function processFiles(files){
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        // Когда это событие активируется, данные готовы.
        // Вставляем их в страницу в элемент <div>
        var output = document.getElementById("fileOutput");   
        output.textContent = e.target.result;
        reader.readAsText(file);
    };
}
function showTask1(){
    var task1 = document.getElementById("task1")
    task1.style.display = "block";
    task1.innerHTML = result + " seconds left; \n" + 
    parseInt(result / secondInMinute) + " hours left";
    
    
}




