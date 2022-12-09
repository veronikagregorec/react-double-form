export default function validateInfo(values) {
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

  if (!values.broad.trim()) {
    errors.broad = "Your BT Broadbands is required";
  }

  if (!values.package5.trim()) {
    errors.package5 = "Your BT TV package is required";
  }

  if (!values.package2.trim()) {
    errors.package2 = "Your additional suport package is required";
  }

  if (!values.allForJust.trim()) {
    errors.allForJust = "An including line rental is required";
  }

  if (!values.plus.trim()) {
    errors.plus = "An upfront is required";
  }

  if (!values.setItUp.trim()) {
    errors.setItUp = "This field is required";
  }

  // if (!values.email) {
  //   errors.email = "Email required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }

  return errors;
}
