document.getElementById("test").addEventListener("click", function(e){
    e.preventDefault

    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    let c = Number(document.getElementById("input3").value);
    let f = Number(document.getElementById("input4").value);
    let sum = a + b + c + f
    if (
        a < 0 || b < 0 || c < 0 || f < 0 
    ) {
        alert("Error login")
    } else {
        alert(sum)
    }
})
