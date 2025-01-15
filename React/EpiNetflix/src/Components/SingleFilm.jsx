import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class SingleFilm extends Component {
  state = {
    film: [],
  };

  getFilm = () => {
    fetch(this.props.apiUrl)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(`Errore: ${r.status}`);
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({ film: data.Search });
        } else {
          throw new Error("Nessun risultato trovato");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    this.getFilm();
  }

  render() {
    return (
      <>
        {this.state.film.map((e) => (
          <Col xs="12" key={e.imdbID}>
            <Card
              style={{ maxWidth: "320px", height: "470px" }}
              className="m-auto mb-3 border-black"
            >
              <Link to={"/movie-details/" + e.imdbID}>
                <Card.Img
                  variant="top"
                  src={e.Poster}
                  style={{ height: "470px" }}
                />
              </Link>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

export default SingleFilm;
