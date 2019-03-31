let max = 50000;
let counter = 0;

try{
    while (true){
        counter++;
        console.log("Looping!");
        if (counter === max){
            throw new Error("Looping detected at page!");
        }
    }
} catch (e){
    alert("Error occurred. Message is: " + e.message);
}
