import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

/**
 *
 * Form for sales rep to type in chat
 *
 * SalesChar => SalesChatForm
 */
function SalesChatForm({submit}) {
  console.debug("SalesChatForm");
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
    <Container className="SalesChatForm">
    <Row>
    <Col>
    <h4>SalesChat</h4>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Input your chat:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
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

export default SalesChatForm;