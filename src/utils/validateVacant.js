export default function validateVacant(values) {
  let errors = {};
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!values.title) {
    errors.title = "Titulo required";
  } else if (format.test(values.title)) {
    errors.title = "Enter a valid Title";
  }
  if (!values.vacant) {
    errors.vacant = "Vacant Required";
  }
  if (!values.CountryId) {
    errors.CountryId = "Country Required";
  }
  if (!values.CityId) {
    errors.CityId = "City Required";
  }
  if (!values.AreaId) {
    errors.AreaId = "Area Required";
  }
  if (!values.SeniorityId) {
    errors.SeniorityId = "Seniority Required";
  }
  if (!values.description) {
    errors.description = "Description Required";
  } else if (values.description.length < 50) {
    errors.description = "La descripcion tiene que ser mayor a 50";
  }
  return errors;
}
