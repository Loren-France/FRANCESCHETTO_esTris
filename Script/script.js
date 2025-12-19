let griglia = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let t = 1;
let output = "";

function cliccato() {

  let tabella = "<tbody>";
  for (let i = 0; i < griglia.length; i++) {
    tabella += "<tr>";
    for (let j = 0; j < griglia[i].length; j++) {
      tabella += `
        <td>
          <button onclick="clickCasella(${i},${j})" class="caselle" id="casella-${i}-${j}">${griglia[i][j]}</button></td>`;
    }
    tabella += "</tr>";
  }
  tabella += "</tbody>";
  document.getElementById("griglia").innerHTML = tabella;
}

function clickCasella(i, j) {
  if (griglia[i][j] !== "") return;

  const simbolo = (t % 2 !== 0) ? "X" : "O";
  griglia[i][j] = simbolo;

  const btn = document.getElementById(`casella-${i}-${j}`);
  btn.innerHTML = simbolo;
  btn.disabled = true;

  if(controllaVittoria(simbolo)){
    output = `Ha vinto il giocatore ${simbolo}!`;
    document.getElementById("output").innerHTML = output;
    for(let x=0; x<3; x++){
        for(let y=0; y<3; y++){
            document.getElementById(`casella-${x}-${y}`).disabled = true;
        }
    }
    return;
    }
    else if(t === 9){
      output = "La partita è finita in pareggio!";
      document.getElementById("output").innerHTML = output;
      return;
    }
    else{}

  t++;
}

function controllaVittoria(s) {
  for (let i = 0; i < 3; i++) {
    if (griglia[i][0] === s && griglia[i][1] === s && griglia[i][2] === s)
      return true;
  }

  for (let j = 0; j < 3; j++) {
    if (griglia[0][j] === s && griglia[1][j] === s && griglia[2][j] === s)
      return true;
  }

  if (griglia[0][0] === s && griglia[1][1] === s && griglia[2][2] === s)
    return true;

  if (griglia[0][2] === s && griglia[1][1] === s && griglia[2][0] === s)
    return true;

  return false;
}

cliccato();
