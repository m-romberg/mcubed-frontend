import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


/** Form component to add a question to the API db
 *
 * ApiForms => AddProjectQuestion
 */
function AddVariableNameForm({ submit }) {
  console.debug("AddVariableNameForm");
  const [formData, setFormData] = useState({ name: "", units: "" });
  const method = "post";

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      "action": "addprojectvariable",
      "name": formData["name"],
      "units": formData["units"]
    };
    submit(data, method);

  }

  function handleChange(evt) {
    console.log(evt);
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  return (
    <Container className="AddProjectQuestion">
      <Row>
        <Col>
          <h4>Add a variable name</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Variable Name:</Form.Label>
              <Form.Control
                type="text"
                value={formData["name"]}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Units:</Form.Label>
              <Form.Control
                type="text"
                value={formData["units"]}
                name='units'
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddVariableNameForm;