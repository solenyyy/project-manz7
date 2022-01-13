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

function putTwoTeams() {
  if (shuffledTeams.length != 0) {
    const teamOne = document.querySelector(".score-team1");
    const elOne = document.createElement("p");
    teamOne.insertAdjacentElement("beforeend", elOne);
    elOne.textContent = `${shuffledTeams.shift()}: ${shuffledPoints.shift()} ➡`;

    const teamTwo = document.querySelector(".score-team2");
    const elTwo = document.createElement("p");
    teamTwo.insertAdjacentElement("beforeend", elTwo);
    elTwo.textContent = `⬅${shuffledTeams.shift()}: ${shuffledPoints.shift()}`;
  } else {
    btn.remove();
    const winMessage = document.querySelector(".container-futbol");
    const message = document.createElement("h4");
    winMessage.insertAdjacentElement("afterend", message);
    message.textContent = "¡LA JORNADA HA FINALIZADO!";
  }
}

btn.addEventListener("click", putTwoTeams);
