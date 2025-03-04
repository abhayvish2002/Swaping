

document.getElementById("btn").addEventListener('click', function() {
    let input1=document.getElementById('input1').value;
    let input2=document.getElementById('input2').value;

    if(input1 === ""  || input2 === ""){
document.getElementById('ab').textContent = "enter number";
return;
    }
});




 



// document.getElementById('swapBtn').addEventListener('click', function() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;

//     if (num1 === "" || num2 === "") {
//         document.getElementById('result').textContent = "Please enter both numbers!";
//         return;
//     }

//     // Swap logic using destructuring assignment
//     [num1, num2] = [num2, num1];

//     document.getElementById('num1').value = num1;
//     document.getElementById('num2').value = num2;

//     document.getElementById('result').textContent = `Numbers swapped! Now Number 1 is ${num1} and Number 2 is ${num2}.`;
// });
