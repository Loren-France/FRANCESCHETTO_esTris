
let griglia = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let t = 1;

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
  btn.textContent = simbolo;
  btn.disabled = true;

  t++;
}

cliccato();
