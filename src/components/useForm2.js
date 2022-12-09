import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    stName: "",
    stPhone: "",
    served: "",
    broad1: "",
    broad2: "",
    broad3: "",
    number1: "",
    number2: "",
    number3: "",
    chosen1: "",
    chosen2: "",
    chosen3: "",
    first1: "",
    first2: "",
    first3: "",
    recurring1: "",
    recurring2: "",
    recurring3: "",
    future: "",

    stName: "",
    stPhone: "",
    served: "",
    dtp1: "",
    broad: "",
    package5: "",
    package2: "",
    allForJust: "",
    plus: "",
    setItUp: "",
    dtp2: "",
    email: "",
    area: "",
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModelIsOpen] = useState(false);

  const modalOp = () => {
    setModelIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setOpen(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && open) {
      setModelIsOpen(true);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, modalIsOpen, modalOp };
};

export default useForm;
