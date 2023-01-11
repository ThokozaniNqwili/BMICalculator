


function calculateBMI(){
let height = parseInt(document.querySelector("#height").value);
let weight = parseInt(document.querySelector("#weight").value);

    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
        let bmi = (weight / ((height * height) 
        / 10000)).toFixed(2);
        
        document.getElementById("result").innerHTML = bmi;
  }
}
