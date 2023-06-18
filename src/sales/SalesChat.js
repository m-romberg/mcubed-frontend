import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questions from './Questions';
import SalesChatForm from './SalesChatForm';

function SalesChat({questions}) {
  console.debug("SalesChat");
  // const [questions, setQuestions] = useState(["why", "why not"]);

  return (
    <Container className="SalesChat">
    <Row>
    <Col>
      { questions.length > 0 && <Questions questions={questions} />}
       <SalesChatForm />
    </Col>
    </Row>
    </Container>
  );
}

export default SalesChat;