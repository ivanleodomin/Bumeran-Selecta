export default function validateVacant(values) {
  let errors = {};
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!values.title) {
    errors.title = "Titulo es requerido";
  } else if (format.test(values.title)) {
    errors.title = "Titulo contiene un caracter invalido";
  }
  if (!values.vacant) {
    errors.vacant = "Vacante es requerido";
  }
  if (!values.CityId) {
    errors.CityId = "Ciudad es requerido";
  }
  if (!values.AreaId) {
    errors.AreaId = "Area es requerido";
  }
  if (!values.SeniorityId) {
    errors.SeniorityId = "Seniority es requerido";
  }
  if (!values.description) {
    errors.description = "Descripcion es requerido";
  } else if (values.description.length < 15) {
    errors.description = "La descripcion tiene que ser mayor a 15";
  } else if (format.test(values.description)) {
    errors.description = "Titulo contiene un caracter invalido";
  }

  return errors;
}
