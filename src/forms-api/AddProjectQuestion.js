import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


/** Form component to add a question to the API db
 *
 * ApiForms => AddProjectQuestion
 */
function AddProjectQuestion({ submit }) {
  console.debug("AddProjectQuestion");
  const [formData, setFormData] = useState("");
  const method = "post";

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = {"action": "addprojectquestion", "text": formData};
    submit(data, method);

  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  return (
    <Container className="AddProjectQuestion">
      <Row>
        <Col>
          <h4>Add a project question</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Question:</Form.Label>
              <Form.Control type="text"
                value={formData}
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

export default AddProjectQuestion;