export default function validateInfo2(values) {
  let errors = {};

  if (!values.stName.trim()) {
    errors.stName = "Name and surname are required";
  } else if (!/^[A-Za-z]+/.test(values.stName.trim())) {
    errors.stName = "Enter a valid name and surname";
  }

  if (!values.stPhone.trim()) {
    errors.stPhone = "Phone number is required";
  }

  if (!values.served.trim()) {
    errors.served = "Served by is required";
  }

  if (!values.broad1.trim()) {
    errors.broad1 = "Type of plan is required";
  }

  if (!values.number1.trim()) {
    errors.number1 = "Phone number is required";
  }

  if (!values.first1.trim()) {
    errors.first1 = "The filed is required";
  }

  if (!values.recurring1.trim()) {
    errors.recurring1 = "Recurring bill charge is required";
  }

  if (!values.future.trim()) {
    errors.future = "Future bill total is required";
  }

  return errors;
}
