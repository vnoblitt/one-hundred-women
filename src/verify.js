async function verifyWoman(name) {
  const search = await fetch(
    `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(name)}&language=en&type=item&limit=5&format=json&origin=*`
  ).then(r => r.json());

  const ids = search.search.map(r => r.id).join("|");
  if (!ids) return null;

  const data = await fetch(
  `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${ids}&props=claims|sitelinks|labels&languages=en&languagefallback=1&format=json&origin=*`
).then(r => r.json());

  for (const e of Object.values(data.entities)) {
    const isHuman = e.claims?.P31?.some(c => c.mainsnak.datavalue?.value.id === "Q5");
    const isFemale = e.claims?.P21?.some(c =>
      ["Q6581072", "Q1052281"].includes(c.mainsnak.datavalue?.value.id));
    const hasWikipedia = !!e.sitelinks?.enwiki;
    if (isHuman && isFemale && hasWikipedia) {
      return { id: e.id, name: e.labels.en?.value, sitelinks: Object.keys(e.sitelinks).length };
    }
  }
  return null;
}

export { verifyWoman };