import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = function () {
  const [info, setInfo] = useState(null);
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieInfo();
    getMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieInfo = async () => {
    try {
      const respons = await fetch(
        "https://www.omdbapi.com/?apikey=2c86c45f&i=" + params.movieId
      );
      if (respons.ok) {
        const data = await respons.json();
        console.log(data);
        setInfo(data);
      } else {
        throw new Error("dati film non recuperati");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getMovieReviews = async () => {
    try {
      const respons = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMGYyZWQyMjA3MTAwMTVkZTJmODYiLCJpYXQiOjE3MzY5NzQ4MTYsImV4cCI6MTczODE4NDQxNn0.5VGfbu-bmwfy5p7DPbzzNvubWwVAmcj4HmxZcvMdmDo",
          },
        }
      );
      if (respons.ok) {
        const data = await respons.json();
        console.log(data);
        setReviews(data);
      } else {
        throw new Error("Errore recupero recensioni");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Container className="bg-dark" fluid>
      <Row sm={3} className=" justify-content-center">
        <Col>
          {info && (
            <Card className="m-auto mb-3 border-black mt-5">
              <Card.Img variant="top" src={info.Poster} />
              <CardBody>
                <CardTitle>{info.Plot}</CardTitle>
                <CardText>Relase data: {info.Released}</CardText>
                <CardText>Durata: {info.Runtime}</CardText>
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
          )}
          <ListGroup className=" mb-5">
            {reviews.length > 0 ? (
              reviews.map((r) => {
                return (
                  <ListGroup.Item key={r._id}>
                    {r.rate} | {r.comment}
                  </ListGroup.Item>
                );
              })
            ) : (
              <ListGroup.Item>Non ci sono recensioni</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
