document.getElementById("btn").addEventListener('click', function () {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    if (input1 === "" || input2 === "") {
        document.querySelector('.ab').textContent = "please enter number in the input box";
        
        return;
    }

    let tem=input1;
        input1=input2;
        input2=tem;

        document.getElementById('input1').value=input1;
        document.getElementById('input2').value=input2;
});
