import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Container, Row, Col, Form } from "react-bootstrap";

const FormSignup = ({ handleChange, handleSubmit, values, errors }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Container>
        <Form>
          <form onSubmit={handleSubmit}>
            <Row className="wrap2">
              <Col>
                <div>
                  <label style={{ color: "#ff82f6" }}>Store name</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    name="stName"
                    id="stName"
                    value={values.stName}
                    onChange={handleChange}
                  />
                  {errors.stName && <p>{errors.stName}</p>}
                </div>
              </Col>

              <Col>
                <div>
                  <label style={{ color: "#ff82f6" }}>Store phone Nº</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    name="stPhone"
                    id="stPhone"
                    value={values.stPhone}
                    onChange={handleChange}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  {errors.stPhone && <p>{errors.stPhone}</p>}
                </div>
              </Col>

              <Col>
                <div>
                  <label style={{ color: "#ff82f6" }}>Served by</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    name="served"
                    id="served"
                    value={values.served}
                    onChange={handleChange}
                  />
                  {errors.served && <p>{errors.served}</p>}
                </div>
              </Col>

              <Col>
                <div>
                  <label style={{ color: "#ff82f6" }}>Date</label>
                  <br />
                  <DatePicker
                    name="dtp1"
                    id="dtp1"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="form-control"
                  />
                  {errors.dtp1 && <p>{errors.dtp1}</p>}
                </div>
              </Col>
            </Row>

            <div className="padding">
              <h1 className="h12">Let's Get started</h1>

              <div className="margin2">
                <Row>
                  <Col>
                    <label className="text2">Your BT Broadbands is: </label>
                  </Col>

                  <Col>
                    <input
                      className="form-control"
                      name="broad"
                      id="broad"
                      value={values.broad}
                      onChange={handleChange}
                    />
                    {errors.broad && <p>{errors.broad}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin2">
                <Row>
                  <Col>
                    <label className="text2">Your BT TV package is: </label>
                  </Col>

                  <Col>
                    <input
                      className="form-control"
                      name="package5"
                      id="package5"
                      value={values.package5}
                      onChange={handleChange}
                    />
                    {errors.package5 && <p>{errors.package5}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin2">
                <Row>
                  <Col>
                    <label className="text2">
                      Your additional sport package is:
                    </label>
                  </Col>

                  <Col>
                    <input
                      className="form-control"
                      name="package2"
                      id="package2"
                      value={values.package2}
                      onChange={handleChange}
                    />
                    {errors.package2 && <p>{errors.package2}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin2">
                <Row>
                  <Col>
                    <label className="text2">All for just</label>
                  </Col>

                  <Col></Col>
                  <Col>
                    <input
                      type="text"
                      placeholder="£"
                      className="form-control"
                      name="allForJust"
                      id="allForJust"
                      value={values.allForJust}
                      onChange={handleChange}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  </Col>

                  <Col>
                    <label className="text2">
                      a month including line rental
                    </label>
                    {errors.allForJust && <p>{errors.allForJust}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin2">
                <Row>
                  <Col>
                    <label className="text2">Plus an upfront fee of </label>
                  </Col>

                  <Col>
                    <input
                      type="text"
                      placeholder="£ "
                      className="form-control"
                      name="plus"
                      id="plus"
                      value={values.plus}
                      onChange={handleChange}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                    {errors.plus && <p>{errors.plus}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin2">
                <Row>
                  <Col>
                    <label className="text2">
                      An engineer (if applicable) will set it all up on:
                    </label>
                  </Col>

                  <Col>
                    <input
                      type="text"
                      className="form-control"
                      name="setItUp"
                      id="setItUp"
                      value={values.setItUp}
                      onChange={handleChange}
                    />
                    {errors.setItUp && <p>{errors.setItUp}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin2">
                <Row>
                  <label className="text2" style={{ marginBottom: "10px" }}>
                    Anything else?
                  </label>

                  <Col>
                    <textarea
                      type="text"
                      name="area"
                      className="form-control"
                      id="area"
                      value={values.area}
                      onChange={handleChange}
                    ></textarea>
                    <br />
                    {errors.area && <p>{errors.area}</p>}
                  </Col>
                </Row>
              </div>

              <button className="btn3" type="submit" onClick={handleSubmit}>
                Send
              </button>

              <p className="margin2">
                We will contact you on the mobile number and/or email address
                provided to confirm key dates for installation, delivery and
                activation of your package.
              </p>

              <h3 className="leave"> Leave the rest to us</h3>
            </div>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default FormSignup;
