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
        listItem.textContent = `${result.strEvent}: ${result.strResult}`;
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
  { 
    name: "Expo 86", 
    results: [
      { strEvent: "World's Biggest Disco Ball", strResult: "Successfully dazzled!"},
      { strEvent: "Monorail Record", strResult: "Looped 86 times in one day"},
    ]
  },
  { 
    name: "Vancouver Canucks", 
    results: [
      { strEvent: "Stanley Cup Run", strResult: "Made it to the finals in 1994"},
      { strEvent: "Towel Power", strResult: "Wave those towels!" },
    ]
  },
  { 
    name: "Seagull Shenanigans", 
    results: [
      { strEvent: "Granville Island Market", strResult: "Stole 10 hotdogs in an hour"},
      { strEvent: "English Bay", strResult: "Dive-bombed 5 beach-goers"},
    ]
  },
];

window.onload = () => {
  leagues.forEach((league) => {
    displayResults(league.name, league.results);
  });
};
