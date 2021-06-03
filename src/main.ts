import { init } from 'lucia';

interface Card {
  year: string;
  title: string;
  authors: string;
  abstract: string;
  keywords: string;
  paper: string;
  poster: string;
}

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

const rows = JSON.parse(
  `[{"year":"Date(2021,5,2,16,37,35)","title":"Lucia: JavaScript Library for Developing Performance-Focused Web Applications","authors":"Aiden Bai","abstract":"The necessity of developing and deploying interactive web applications has quickly become more prevalent over the last decade, resulting in developers creating libraries and frameworks to simplify this process. These JavaScript libraries have come to dominate the web landscape, with many websites adopting them, as they allow more functionality and extensibility compared to normal JavaScript. However, these libraries bring overhead, reducing performance, and increasing bloat. This is why Lucia was created—to simplify web development, improve performance, while offering the core functionality of mainstream web libraries. This was done by creating an intentionally simple and straightforward core architecture, then benchmarking the performance through a suite of comprehensive and thorough tests. These results demonstrated that Lucia had the best performance when compared to mainstream libraries. Therefore, Lucia not only allows for a faster experience for the end user, but also a better developer experience, uprooting how traditional web applications are created.","keywords":"Engineering, JavaScript, Programming","paper":"https://drive.google.com/open?id=1TXxalurlIRwcYqszU3pEMa4PRklGFzVm","poster":"https://drive.google.com/open?id=12osgAwczQLOWzQxjXOye6NlOmH5ttrGv"}]`
);

// @ts-expect-error it exists
window.catalog = [];
rows.forEach(({ year, title, authors, abstract, keywords, paper, poster }: Card) => {
  const fullYear = String(new Date(eval(year)).getFullYear());
  // @ts-expect-error it exists
  window.catalog.push(createCard(fullYear, title, authors, abstract, keywords, paper, poster));
});

init();
