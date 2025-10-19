import { series } from './data.js';

function renderSeries(): void {
  const tbody: HTMLElement | null = document.getElementById('series-body');
  const avgSeasonsElem: HTMLElement | null = document.getElementById('avg-seasons');
  if (!tbody || !avgSeasonsElem) return;

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  let totalSeasons = 0;
  series.forEach((serie) => {
    totalSeasons += serie.seasons;
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tbody.appendChild(tr);
  });
  const average = series.length ? (totalSeasons / series.length) : 0;
  avgSeasonsElem.textContent = average.toFixed(2);
}

renderSeries();