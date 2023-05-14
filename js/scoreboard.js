async function fetchResults(leagueId) {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/60130162/eventresults.php?id=${leagueId}`);
  const data = await response.json();
  return data;
}

function displayResults(leagueName, results) {
  const container = document.querySelector("#scoreboard-container");

  if (container) {
    const leagueHeader = document.createElement("h2");
    leagueHeader.textContent = leagueName;
    container.appendChild(leagueHeader);

    const resultList = document.createElement("ul");

    if (results && results.length > 0) {
      results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = `${result.strEvent}: ${result.intHomeScore}-${result.intAwayScore}`;
        listItem.style.fontFamily = "'Press Start 2P', cursive";
        listItem.style.fontSize = "12px";
        listItem.style.color = "#00FF00";
        listItem.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        listItem.style.padding = "5px";
        listItem.style.borderRadius = "5px";
        listItem.style.marginBottom = "5px";
        resultList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = "No results available";
      listItem.style.fontFamily = "'Press Start 2P', cursive";
      listItem.style.fontSize = "12px";
      listItem.style.color = "#00FF00";
      listItem.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      listItem.style.padding = "5px";
      listItem.style.borderRadius = "5px";
      listItem.style.marginBottom = "5px";
      resultList.appendChild(listItem);
    }

    container.appendChild(resultList);
  }
}

const leagues = [
  { name: "NHL", id: "4380" },
  { name: "NBA", id: "4387" },
  { name: "MLB", id: "4424" }
];

window.onload = () => {
  leagues.forEach(async (league) => {
    const results = await fetchResults(league.id);
    displayResults(league.name, results);
  });
};
