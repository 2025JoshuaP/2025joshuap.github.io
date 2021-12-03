document.getElementById("homePress").style.display = "none";

function copyCode() {
    navigator.clipboard.writeText("357862");
    document.getElementById("copyCode").innerHTML = "[Text Copied!]";
}

function passcodeCheck() {
    if (document.getElementById("passcodeCheck").value == "357862") {
        document.location = "victory.html";
    } else {
        document.getElementById("passcodeCheck").value = "";
        document.getElementById("passcodeCheck").placeholder = "Incorrect Code!";
        document.getElementById("passcodeCheck").style.borderColor = "red";
    }
}

function clickReset() {
    document.getElementById("passcodeCheck").placeholder = "Type Code";
    document.getElementById("passcodeCheck").style.borderColor = "white";
}

function homePress() {
    console.log("press detected");
     if (document.getElementById("homePress").style.display == "none") {
         document.getElementById("homePress").style.display = "block";
     } else {
         document.getElementById("homePress").style.display = "none";
     }
}

function homePressCancel() {
    document.getElementById("homePress").style.display = "none";
}