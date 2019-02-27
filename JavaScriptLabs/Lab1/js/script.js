//  Task 1 solution.
console.log("Task 1: ");
var secondsTotal = 234245645335;
var secondsInHour = 3600;
var secondsInMinute = 60;
var result = secondsTotal % secondsInHour;

console.log(`${result} seconds left`);
console.log(`${result / secondsInMinute} minutes left`);
console.log(`${result / secondsInMinute / 60} hours left`);


console.log("==============================")
// ===========================================================


// Task 2 solution.
console.log("Task 2: ")
var string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";
var listInd = [];

for (var i = 0; i < string.length; i++){
    string[i] == "a" ? listInd.push(i) : NaN;
}


console.log("The indexes of 'a': " + listInd);
// ===========================================================



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
    parseInt(result / secondsInMinute) + " minutes left";
    
    
}

function showTask2(){
    var task2 = document.getElementById("task2")
    task2.style.display = "block";
    task2.innerHTML = "The indexes of 'a': " + listInd;
    
    
}




