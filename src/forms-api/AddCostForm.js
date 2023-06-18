import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/** Form component to add a question to the API db
 *
 * ApiForms => AddCostForm
 */
function AddCostForm({ submit }) {
  console.debug("AddCostForm");
  const [formData, setFormData] = useState([{
    "name": "",
    "cost": "",
    "quantity": "",
    "stock": "",
    "time": ""
  }]);
  console.debug("formData", formData);
  const method = "post";

  function handleSubmit(evt) {
    console.debug("AddCostForm handleSubmit");
    evt.preventDefault();
    const data = {
      "action": "addcosts",
      "costbasis": formData,
    };
    console.log("data=", data);
    submit(data, method);

  }

  function handleChange(evt, indx) {
    console.debug("handleChange");
    console.log(evt);
    const fieldName = evt.target.name;
    const value = fieldName === "name" ? evt.target.value : +evt.target.value;

    setFormData(currData => {
      currData[indx][fieldName] = value;
      return [ ...currData ];
    });
  }

  function addFormFields() {
    console.log("addformfields", [...formData, {
      "name": "CPU AMD Epyc 7002",
      "cost": 300,
      "quantity": 1,
      "stock": 400,
      "time": 10
    }] )
    setFormData([...formData, {
      "name": "",
      "cost": "",
      "quantity": "",
      "stock": "",
      "time": ""
    }]);
  }

  function removeFormFields(i) {
    let newFormValues = [...formData];
    newFormValues.splice(i, 1);
    setFormData(newFormValues);
  }

  return (
    <Container className="AddProjectQuestion">
      <Row>
        <Col>
          <h4>Add a cost basis</h4>
          <Form onSubmit={handleSubmit}>
            {formData.map((element, indx) =>
              <div key={indx}>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData["name"]}
                    name="name"
                    onChange={ e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Cost:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData["cost"]}
                    name='cost'
                    onChange={ e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData["quantity"]}
                    name='quantity'
                    onChange={ e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Stock:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData["stock"]}
                    name='stock'
                    onChange={ e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Time:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData["untimeits"]}
                    name='time'
                    onChange={ e => handleChange(e, indx)}
                  />
                </Form.Group>
                {
                  indx ?
                    <Button onClick={() => removeFormFields(indx)}>Remove</Button>
                  : null
                }
              </div>
            )}
            <Button onClick={() => addFormFields()}>Add</Button>
            <Button variant="primary" type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddCostForm;