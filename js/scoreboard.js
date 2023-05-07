document.addEventListener("DOMContentLoaded", function() {
  getResults();
});

async function getResults() {
  const leagues = [
    { name: "NHL", id: "4380" },
    { name: "NBA", id: "4387" },
    { name: "Horse Racing", id: "6195" }
  ];

  for (const league of leagues) {
    const data = await fetchResults(league.id);
    displayResults(league.name, data.results);
  }
}

async function fetchResults(leagueId) {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=${leagueId}`);
  const data = await response.json();
  return data;
}

function displayResults(leagueName, results) {
  const container = document.querySelector("#scoreboard-container");

  const leagueHeader = document.createElement("h2");
  leagueHeader.textContent = leagueName;
  container.appendChild(leagueHeader);

  const resultList = document.createElement("ul");

  if (results) {
    results.forEach(result => {
      const listItem = document.createElement("li");
      listItem.textContent = `${result.strEvent}: ${result.intHomeScore}-${result.intAwayScore}`;
      resultList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = "No results available";
    resultList.appendChild(listItem);
  }

  container.appendChild(resultList);
}
