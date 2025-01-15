import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

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
            <Card style={{}} className="m-auto mb-3 border-black">
              <Card.Img
                variant="top"
                src={e.Poster}
                style={{ height: "20rem" }}
              />
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

export default SingleFilm;
