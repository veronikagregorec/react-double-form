import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Tabs, Tab } from "react-bootstrap";
import FormSignup from "./FormSignup";
import FormSignup2 from "./components/FormSignup2";
import Modal from "react-modal";
import useForm from "./components/useForm2";
import validate from "./validateInfo";

function App() {
  const { handleChange, handleSubmit, values, errors, modalIsOpen, modalOp } =
    useForm(validate);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalOp}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            width: "500px",
            height: "200px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            marginBottom: "50px",
          },
        }}
      >
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="Your email"
          value={values.email}
          handleSubmit={handleSubmit}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <button type="submit" value="Send" className="btn-send">
          Send
        </button>
        <button onClick={modalOp} className="btnClose">
          Close
        </button>
      </Modal>

      <div className="tab">
        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="BT form">
            <FormSignup
              values={values}
              errors={errors}
              modalIsOpen={modalIsOpen}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Tab>
          <Tab eventKey="second" title="EE form">
            <FormSignup2
              values={values}
              errors={errors}
              modalIsOpen={modalIsOpen}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
