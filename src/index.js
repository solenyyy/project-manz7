import _ from "lodash";

const TEAMS = [
  "Real Madrid",
  "Oviedo FC",
  "Sevilla FC",
  "Real Betis",
  "CD Tenerife",
  "UD Las Palmas",
  "Barcelona FC",
  "Real Sociedad",
];

const shuffledTeams = _.shuffle(TEAMS);

const POINTS = ["0", "1", "2", "3", "2", "1", "0", "1", "2", "3", "1", "0"];

const shuffledPoints = _.shuffle(POINTS);

const btn = document.querySelector(".btn");

function putTeam(className) {
  const team = document.querySelector(className);
  const pElement = document.createElement("p");
  team.insertAdjacentElement("beforeend", pElement);
  pElement.textContent = `${shuffledTeams.shift()}: ${shuffledPoints.shift()}`;
}

function game() {
  if (shuffledTeams.length != 0) {
    putTeam(".score-team1");
    putTeam(".score-team2");
  } else {
    btn.remove();
    const winMessage = document.querySelector(".container-futbol");
    const message = document.createElement("h4");
    winMessage.insertAdjacentElement("afterend", message);
    message.textContent = "¡LA JORNADA HA FINALIZADO!";
  }
}

btn.addEventListener("click", game);
