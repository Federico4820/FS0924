import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GetArticle } from "./interfaces/GetArticle";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const [ret, setRet] = useState<GetArticle[]>([]);
  const location = useLocation();
  console.log(location);

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
    <>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {ret &&
          ret.map((r) => {
            return (
              <Col key={r.id}>
                <Link to={"/:" + r.id}>
                  <Card style={{ height: "30em" }}>
                    <Card.Img
                      className=""
                      style={{ height: "25em" }}
                      variant="top"
                      src={r.image_url}
                    />
                    <Card.Body>
                      <Card.Title>{r.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default Home;
