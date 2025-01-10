import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

class SingleBook extends Component {
  state = {
    select: false,
  };
  render() {
    return (
      <Col key={this.props.book.asin}>
        <Card
          className=" mb-4 h-100"
          value={this.state.select}
          onClick={() => this.setState({ select: !this.state.select })}
          style={{ border: this.state.select ? "3px solid red" : "none" }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className=" h-100"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
