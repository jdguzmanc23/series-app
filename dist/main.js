import { series } from './data.js';
function renderSeries() {
    var tbody = document.getElementById('series-body');
    var avgSeasonsElem = document.getElementById('avg-seasons');
    if (!tbody || !avgSeasonsElem)
        return;

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    var totalSeasons = 0;
    series.forEach(function (serie) {
        totalSeasons += serie.seasons;
        var tr = document.createElement('tr');
        tr.innerHTML = "\n      <th scope=\"row\">".concat(serie.id, "</th>\n      <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tbody.appendChild(tr);
    });
    var average = series.length ? (totalSeasons / series.length) : 0;
    avgSeasonsElem.textContent = average.toFixed(2);
}

renderSeries();