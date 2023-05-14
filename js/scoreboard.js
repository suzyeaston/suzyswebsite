document.addEventListener("DOMContentLoaded", function() {
  getResults();
});

async function getResults() {
  const leagues = [
    { name: "NHL", endpoint: "latesticehockey.php" },
    { name: "NBA", endpoint: "latestbasketball.php" },
    { name: "Horse Racing", endpoint: "latestracing.php" },
    { name: "MLB", endpoint: "latestbaseball.php" }
  ];

  for (const league of leagues) {
    const data = await fetchResults(league.endpoint);
    displayResults(league.name, data.results);
  }
}

async function fetchResults(endpoint) {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/60130162/${endpoint}`);
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

    if (results && results.length > 0) { // Check if results is not null and has items
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
}
