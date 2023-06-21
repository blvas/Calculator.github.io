var calcDisplay =""


function btnClick (e) {
    if (e == 1 || e == 2 ||e == "3" ||e == "4" || e == "/" ||e == "*")
    if (e == "AC") {
        calcDisplay = ""
    } else {
        calcDisplay = calcDisplay + e
console.log(calcDisplay)
    }
}

var sidplayValue = document.getElementsByName("display").addEventListener('change', function) = calcDisplay
console.log(displayValue)
function displayChange() {
    console.log(this.value)
    let e = this.value
    let chars = /^[o-9+-+s/

    if(chars.test(e)) {
        console.log("digits")
    } else {
        console.log("not digits")
    }
}