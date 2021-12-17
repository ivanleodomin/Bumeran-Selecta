export default function validateRecruiter(values) {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First name required";
  } else if (format.test(values.firstName)) {
    errors.firstName = "Enter a valid firstName";
  }
  if (!values.lastName) {
    errors.lastName = "Last name required";
  }else if (format.test(values.lastName)) {
    errors.lastName = "Enter a valid lastname";
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
