// convert this to a promise, so that it's easier to handle errors
function fetchAndInsertMarkdown(pathToMarkdown, divId) {
  fetch(pathToMarkdown, {cache: "no-store"}).then(function(response) {
    return response.text().then(function(text) {
      document.getElementById(divId).innerHTML = marked(text);
    });
  });
}

$( document ).ready(function() {
  // $("#nomic-target").load("changeWhatsInMe/nomicHtml/nomic.html");
  // $("#nomic-description-target").load("changeWhatsInMe/nomicHtml/nomic_description.html");
  fetchAndInsertMarkdown("changeWhatsInMe/nomicMarkdown/nomic.md", "nomic-target");
  fetchAndInsertMarkdown("changeWhatsInMe/nomicMarkdown/nomic_description.md", "nomic-description-target");
});
