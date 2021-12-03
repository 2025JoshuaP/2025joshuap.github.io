var expanded = false;

function expand() {
    expanded = !expanded;
    if (expanded == true) {
        document.getElementById("icons").style.width = "330px";
        document.getElementById("expander").style.transform = "rotate(225deg)";
        document.getElementById("a").style.cursor = "pointer";
        document.getElementById("b").style.cursor = "pointer";
        document.getElementById("c").style.cursor = "pointer";
        document.getElementById("d").style.cursor = "pointer";
        document.getElementById("e").style.cursor = "pointer";
        document.getElementById("f").style.cursor = "pointer";
        document.getElementById("a").title = "Home";
        document.getElementById("b").title = "Instructions";
        document.getElementById("c").title = "Layout";
        document.getElementById("d").title = "Event Sheet";
        document.getElementById("e").title = "Game Preview";
        document.getElementById("f").title = "Play Game";
    } else {
        document.getElementById("icons").style.width = "50px";
        document.getElementById("expander").style.transform = "rotate(0deg)";
        document.getElementById("a").style.cursor = "default";
        document.getElementById("b").style.cursor = "default";
        document.getElementById("c").style.cursor = "default";
        document.getElementById("d").style.cursor = "default";
        document.getElementById("e").style.cursor = "default";
        document.getElementById("f").style.cursor = "default";
        document.getElementById("a").title = "";
        document.getElementById("b").title = "";
        document.getElementById("c").title = "";
        document.getElementById("d").title = "";
        document.getElementById("e").title = "";
        document.getElementById("f").title = "";
    }
}
