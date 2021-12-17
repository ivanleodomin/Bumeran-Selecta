export default async function findId(country, countries, setCountryId) {
  if (country === "Peru") country = "Perú";
  else if (country === "Mexico") country = "México";
  else if (country === "Panama") country = "Panamá";
  let id;

  countries.map((c) => {
    if (c.name === country) setCountryId(c.id, "IdD");
  });
  return id;
}
