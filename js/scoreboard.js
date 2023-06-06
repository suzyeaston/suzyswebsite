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
      { strEvent: "The Expo Skytain Line", strResult: "Transportation and Communication: World in Motion – World in Touch&#8203;``oaicite:{"number":1,
       "metadata":{"title":"en.wikipedia.org","url":"https://en.wikipedia.org/wiki/Expo_86",
       "text":"The 1986 World Exposition on Transportation and Communication, or simply Expo 86, was a World's Fair held in Vancouver, British Columbia, 
       Canada from May 2 until October 13, 1986. The fair, the theme of which was \"Transportation and Communication: World in Motion – World in Touch\", 
       coincided with Vancouver's centennial and was held on the north shore of False Creek","pub_date":null}}``&#8203;"},
    ]
  },
  { 
    name: "Vancouver Canucks", 
    results: [
      { strEvent: "Stanley Cup Run", strResult: "Made it to the finals in 1994"},
      { strEvent: "1991-92 Season Record", strResult: "42 wins, 26 losses, 12 ties, reached NHL Division Finals&#8203;
       ``oaicite:{"number":2,"metadata":{"title":"www.hockey-reference.com","url":"https://www.hockey-reference.com/teams/VAN/history.html",
       "text":"1991-92NHLVancouver Canucks*80 42 26 12 96.600 0.31-0.13 1st of 6 Lost NHL Division FinalsP. Quinn (42-26-12)Smythe Clarence Campbell","pub_date":null}}``&#8203;" },
    ]
  },
];

window.onload = () => {
  leagues.forEach((league) => {
    displayResults(league.name, league.results);
  });
};
