export default function validateRecruiter(values) {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Nombre es requerido";
  } else if (format.test(values.firstName)) {
    errors.firstName = "Nombre contiene un caracter invalido";
  }
  if (!values.lastName) {
    errors.lastName = "Apellido es requerido";
  } else if (format.test(values.lastName)) {
    errors.lastName = "Apellido contiene un caracter invalido";
  }
  if (!values.cityId) {
    errors.cityId = "Ciudad es requerido";
  }
  if (!values.areaOp1) {
    errors.areaOp1 = "Area 1 es requerido";
  }
  if (!values.areaOp2) {
    errors.areaOp2 = "Area 2 es requerido";
  }
  if (!values.areaOp3) {
    errors.areaOp3 = "Area 3 es requerido";
  }
  if (!values.seniorityOp1) {
    errors.seniorityOp1 = "Seniority 1 es requerido";
  }
  if (!values.seniorityOp2) {
    errors.seniorityOp2 = "Seniority 2 es requerido";
  }
  if (!values.seniorityOp3) {
    errors.seniorityOp3 = "Seniority 3 es requerido";
  }
  return errors;
}
