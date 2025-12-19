let griglia = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let t=1;

function cliccato() {
    let tabella="";

    tabella+="<tbody>";
    for (let i = 0; i < griglia.length; i++) {
        tabella+="<tr>";
        for (let j = 0; j < griglia[i].length; j++) {
            griglia[i][j]=`<td><button onclick='click(${i},${j})' class='caselle' id='casella-${i}-${j}'></button></td>`;
            tabella += griglia[i][j];
        }
        tabella+="</tr>";
    }
    document.getElementById("griglia").innerHTML = tabella;
}

function click() {

    if (t % 2 != 0) {
        document.getElementById(`casella-${i}-${j}`).textContent = "X";
        document.getElementById(`casella-${i}-${j}`).disabled = true;
    } else {
        document.getElementById(`casella-${i}-${j}`).textContent = "O";
        document.getElementById(`casella-${i}-${j}`).disabled = true;
    }
    t++;
}