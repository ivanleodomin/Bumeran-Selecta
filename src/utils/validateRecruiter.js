export default function validateRecruiter(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First name required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name required";
  }
  if (!values.countryId) {
    errors.countryId = "Country required";
  }
  if (!values.cityId) {
    errors.cityId = "City required";
  }
  if (!values.areaOp1) {
    errors.areaOp1 = "Area 1 required";
  }
  if (!values.areaOp2) {
    errors.areaOp2 = "Area 2 required";
  }
  if (!values.areaOp3) {
    errors.areaOp3 = "Area 3 required";
  }
  if (!values.seniorityOp1) {
    errors.seniorityOp1 = "Seniority 1 required";
  }
  if (!values.seniorityOp2) {
    errors.seniorityOp2 = "Seniority 2 required";
  }
  if (!values.seniorityOp3) {
    errors.seniorityOp3 = "Seniority 3 required";
  }
  return errors;
}
