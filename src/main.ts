import './style.css'

import { component } from 'lucia';

interface Card {
  year: string;
  title: string;
  authors: string;
  abstract: string;
  keywords: string;
  paper: string;
  poster: string;
  video: string;
}

const createCard = (
  year: string,
  title: string,
  authors: string,
  abstract: string,
  keywords: string,
  paper: string,
  poster: string,
  video: string
): string => `
  <summary><b>${title}</b></summary>
  <p>
    <b>Year:</b> ${year}
  </p>
  <p>
    <b>Authors:</b> ${authors}
  </p>
  <p>
    <b>Keywords:</b> ${keywords}
  </p>
  <p>
    <b>Links:</b> <a href="${paper}" target="_blank">Paper</a> | <a target="_blank" href="${poster}">Poster</a> | <a href="${video}" target="_blank">Video</a>
  </p>
  <p>
    <b>Abstract:</b><br>${abstract}
  </p>
`;

fetch('https://literallyjustanabel.aidenbai.repl.co/mst')
  .then((res) => res.json())
  .then((rows: Card[]) => {
    const c = component({ catalog: [], query: '' });

    rows.forEach(({ year, title, authors, abstract, keywords, paper, poster, video }: Card) => {
      const fullYear = String(new Date(eval(year)).getFullYear());
      // @ts-expect-error it exists
      c.state.catalog.push(
        createCard(fullYear, title, authors, abstract, keywords, paper, poster, video)
      );
    });

    c.mount('#app');
  });
