import './style.css';
import { init } from 'lucia';
// @ts-expect-error No types
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

interface Card {
  year: string;
  title: string;
  authors: string;
  abstract: string;
  keywords: string;
  paper: string;
  poster: string;
}

const parser = new PublicGoogleSheetsParser('1stDtVun1C2aDm7CgxLeKzIj7sbkH2-3aq1TGD4hqK6w');
const createCard = (
  year: string,
  title: string,
  authors: string,
  abstract: string,
  keywords: string,
  paper: string,
  poster: string
): string => `
  <summary>${title}</summary>
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
    <b>Links:</b> <a href="${paper}">Paper</a> | <a href="${poster}">Poster</a>
  </p>
  <p>
    <b>Abstract:</b><br>${abstract}
  </p>
`;

parser.parse().then((rows: Card[]) => {
  // @ts-expect-error window.catalog exists
  window.catalog = [];
  rows.forEach(({ year, title, authors, abstract, keywords, paper, poster }: Card) => {
    const fullYear = String(new Date(eval(year)).getFullYear());

    // @ts-expect-error window.catalog exists
    window.catalog.push(createCard(
      fullYear,
      title,
      authors,
      abstract,
      keywords,
      paper,
      poster
    ));
  });

  init();
});
