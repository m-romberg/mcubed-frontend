import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AddProjectQuestion from "./AddProjectQuestion";

/**
 * Controll component for ApiForm
 *
 * App => ApiForms => {AddProjectQuestion}
 */
function ApiForms({submit}) {
  console.debug("ApiForms");

  return (
    <Container className="ApiForms">
    <Row>
    <Col>
      <AddProjectQuestion submit={submit} />
    </Col>
    </Row>
    </Container>
  );
}

export default ApiForms;