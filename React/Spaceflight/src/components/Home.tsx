import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GetArticle } from "./interfaces/GetArticle";

function Home() {
  const [ret, setRet] = useState<GetArticle>();

  const getAPI = async () => {
    try {
      const respons = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (respons.ok) {
        const data = await respons.json();
        console.log(data.results);
        setRet(data.results);
      } else {
        throw new Error("dati non recuperati");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>ret.ti</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
