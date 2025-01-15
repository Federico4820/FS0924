import { Alert } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const NotFound = function () {
  return (
    <Container className=" mt-3">
      <Row>
        <Col>
          <Alert className=" text-center">
            <h3>404 NOT found</h3>
            <p>
              Questa pagina non esiste, clicca <button>QUI</button> per tornare
              alla homepage
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
