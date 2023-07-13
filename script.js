let numbers = []



//clearing values
document.getElementById('clear').onclick = function(){

    num = document.getElementById('input').value = "";

    document.getElementById('resultLabel').innerHTML= "Result";

    numbers =[];

}

//insert numebers inside of the array
document.getElementById('submit').onclick = function(){
let num = document.getElementById('input').value;
num = Number(num);

if(isNaN(num)){
    document.getElementById('resultLabel').innerHTML= "Error";
}
else{
    numbers.push(num);
    document.getElementById('resultLabel').innerHTML = numbers;
    document.getElementById('input').value = "";
}

}


// Shuffle the array
document.getElementById('shuffle').onclick = function() {
    if(numbers.length === 0){
        document.getElementById('resultLabel').innerHTML = "The array is empty! please try again!";
    }
    else{
        shuffleArray(numbers);
        document.getElementById('resultLabel').innerHTML = numbers;
    }
  };
  
  function shuffleArray(array) {
    array.forEach((_, index, arr) => {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    });
  }



