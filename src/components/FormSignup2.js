import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Form } from "react-bootstrap";

const FormSignup2 = ({ values, errors, handleChange, handleSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [selectedDate3, setSelectedDate3] = useState(new Date());
  const [selectedDate4, setSelectedDate4] = useState(new Date());
  const [selectedDate5, setSelectedDate5] = useState(new Date());

  return (
    <div>
      <Container>
        <Form>
          <form onSubmit={handleSubmit}>
            <div className="wrap">
              <Row>
                <Col>
                  <div>
                    <label className="text">Store name</label>
                    <br />
                    <input
                      type="text"
                      name="stName"
                      id="stName"
                      value={values.stName}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.stName && <p>{errors.stName}</p>}
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="text">Store phone Nº</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      name="stPhone"
                      id="stPhone"
                      value={values.stPhone}
                      onChange={handleChange}
                    />
                    {errors.stPhone && <p>{errors.stPhone}</p>}
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="text">Served by</label>
                    <br />
                    <input
                      type="text"
                      name="served"
                      id="served"
                      value={values.served}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.served && <p>{errors.served}</p>}
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="text">Date</label>
                    <br />
                    <DatePicker
                      name="dtp1"
                      id="dtp1"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className="form-control"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="test">
              <h1 className="main-text">Let's Get started</h1>

              <div>
                <Row>
                  <Col></Col>
                  <Col>
                    <div className="main-text">Plan 1</div>
                  </Col>
                  <Col>
                    <div className="main-text">Plan 2</div>
                  </Col>
                  <Col>
                    <div className="main-text">Plan 3</div>
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <Col>
                    <label className="main-text">Type od plan: </label>
                  </Col>

                  <Col>
                    <input
                      name="broad1"
                      id="broad1"
                      value={values.broad1}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.broad && <p>{errors.broad}</p>}
                  </Col>

                  <Col>
                    <input
                      name="broad2"
                      id="broad2"
                      value={values.broad2}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.broad2 && <p>{errors.broad2}</p>}
                  </Col>

                  <Col>
                    <input
                      name="broad3"
                      id="broad3"
                      value={values.broad3}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.broad3 && <p>{errors.broad3}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin">
                <Row>
                  <Col>
                    <label className="main-text">Phone number(s): </label>
                  </Col>

                  <Col>
                    <input
                      name="number1"
                      id="number1"
                      value={values.number1}
                      className="form-control"
                      onChange={handleChange}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                    {errors.number1 && <p>{errors.number1}</p>}
                  </Col>

                  <Col>
                    <input
                      name="number2"
                      id="number2"
                      value={values.number2}
                      className="form-control"
                      onChange={handleChange}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                    {errors.number2 && <p>{errors.number2}</p>}
                  </Col>

                  <Col>
                    <input
                      name="number3"
                      id="number3"
                      className="form-control"
                      value={values.number3}
                      onChange={handleChange}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                    {errors.number3 && <p>{errors.number3}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin">
                <Row>
                  <Col>
                    <label className="main-text">
                      Chosen Smart Benefits: <br />
                    </label>
                  </Col>

                  <Col>
                    <input
                      name="chosen1"
                      id="chosen1"
                      value={values.chosen1}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.chosen1 && <p>{errors.chosen1}</p>}
                  </Col>

                  <Col>
                    <input
                      name="chosen2"
                      id="chosen2"
                      value={values.chosen2}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.chosen2 && <p>{errors.chosen2}</p>}
                  </Col>

                  <Col>
                    <input
                      name="chosen3"
                      id="chosen3"
                      value={values.chosen3}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.chosen3 && <p>{errors.chosen3}</p>}
                  </Col>
                </Row>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Row>
                  <Col>
                    <label className="main-text">
                      First bill charge(s): <br />
                    </label>
                  </Col>
                  <Col>
                    <input
                      name="first1"
                      id="first1"
                      value={values.first1}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.first1 && <p>{errors.first1}</p>}
                  </Col>

                  <Col>
                    <input
                      name="first2"
                      id="first2"
                      value={values.first2}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.first2 && <p>{errors.first2}</p>}
                  </Col>

                  <Col>
                    <input
                      name="first3"
                      id="first3"
                      value={values.first3}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.first3 && <p>{errors.first3}</p>}
                  </Col>
                </Row>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Row>
                  <Col>
                    <label className="main-text">
                      Recurring bill charges(s):
                    </label>
                  </Col>

                  <Col>
                    <input
                      name="recurring1"
                      id="recurring1"
                      value={values.recurring1}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.recurring1 && <p>{errors.recurring1}</p>}
                  </Col>

                  <Col>
                    <input
                      name="recurring2"
                      id="recurring2"
                      value={values.recurring2}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.recurring2 && <p>{errors.recurring2}</p>}
                  </Col>

                  <Col>
                    <input
                      name="recurring3"
                      id="recurring3"
                      value={values.recurring3}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.recurring3 && <p>{errors.recurring3}</p>}
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <Col xs={9} style={{ marginTop: "20px" }}>
                    <label className="main-text">Future bill total:</label>
                  </Col>

                  <Col>
                    <input
                      name="future"
                      id="future"
                      placeholder="£"
                      value={values.future}
                      onChange={handleChange}
                      className="form-control"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                    {errors.future && <p>{errors.future}</p>}
                  </Col>
                </Row>
              </div>

              <div className="margin">
                <Row>
                  <Col xs={9}>
                    <label className="main-text">Bill date</label>
                  </Col>

                  <Col>
                    <DatePicker
                      selected={selectedDate2}
                      className="form-control"
                      name="bill"
                      id="bill"
                      onChange={(date) => setSelectedDate2(date)}
                    />
                  </Col>
                </Row>
              </div>

              <div className="margin">
                <Row>
                  <Col xs={9}>
                    <label className="main-text">Direct debit date:</label>
                  </Col>
                  <Col>
                    <DatePicker
                      selected={selectedDate3}
                      className="form-control"
                      name="direct"
                      id="direct"
                      onChange={(date) => setSelectedDate3(date)}
                    />
                  </Col>
                </Row>
              </div>

              <div className="margin">
                <Row>
                  <Col xs={9}>
                    <label className="main-text">Device delivery date:</label>
                  </Col>
                  <Col>
                    <DatePicker
                      selected={selectedDate4}
                      className="form-control"
                      name="device"
                      id="device"
                      onChange={(date) => setSelectedDate4(date)}
                    />
                  </Col>
                </Row>
              </div>

              <div className="margin">
                <Row>
                  <Col xs={9}>
                    <label className="main-text">
                      Broadband activation date:
                    </label>
                  </Col>

                  <Col>
                    <DatePicker
                      selected={selectedDate5}
                      className="form-control"
                      name="broadband"
                      id="broadband"
                      onChange={(date) => setSelectedDate5(date)}
                    />
                  </Col>
                </Row>
              </div>

              <Row style={{ marginTop: "20px" }}>
                <label style={{ marginBottom: "10px" }} className="main-text">
                  Other handy information:
                </label>

                <Col>
                  <textarea
                    type="text"
                    name="area"
                    id="area"
                    className="form-control"
                    value={values.area}
                    onChange={handleChange}
                  ></textarea>
                  <br />
                  {errors.area && <p>{errors.area}</p>}
                </Col>
              </Row>

              <Row>
                <Col>
                  <button className="btn2" type="submit" onClick={handleSubmit}>
                    Send
                  </button>
                </Col>
              </Row>
            </div>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default FormSignup2;
