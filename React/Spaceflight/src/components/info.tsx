import { useEffect, useState } from "react";
import { GetSingleArticle } from "./interfaces/GetSingleArticle";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function Info() {
  const [inf, setInf] = useState<GetSingleArticle>(Object);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(Boolean);
  console.log(inf);

  useEffect(() => {
    getInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getInfo = async () => {
    try {
      const respons = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/" +
          location.pathname.slice(2)
      );
      if (respons.ok) {
        const data = await respons.json();
        console.log(data);
        setIsLoading(true);
        setInf(data);
      } else {
        throw new Error("dati non recuperati");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Container className="bg-dark" fluid>
      <Row sm={3} className=" justify-content-center">
        <Col className=" text-center">
          {isLoading ? (
            <Card className="m-auto mb-3 border-black mt-5">
              <Card.Img variant="top" src={inf.image_url} />
              <CardBody>
                <CardTitle>{inf.title}</CardTitle>
                <CardText>{inf.summary}</CardText>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </Button>
              </CardBody>
            </Card>
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Info;
