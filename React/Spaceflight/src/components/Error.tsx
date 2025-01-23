import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <Container className=" mt-3">
      <Row>
        <Col>
          <Alert className=" text-center">
            <h3>404 NOT found</h3>
            <p>
              Questa pagina non esiste, clicca{" "}
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                QUI
              </button>{" "}
              per tornare alla homepage
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;
