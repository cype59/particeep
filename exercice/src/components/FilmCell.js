import React from 'react';
import { Card, CardHeader, CardBody, Col, Row } from 'reactstrap';
import '../style/FilmCell.css';

class FilmCell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col xs="4">
        <Card className="carte">
          <CardHeader>{this.props.movies.title}</CardHeader>
          <CardBody>
            <Row>
              <Col><img src={this.props.movies.img} alt="affiche" className="affiche" /></Col>
              <Col className="infos">
                <p>Catégorie : {this.props.movies.category}</p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>

    )
  }
}

export default FilmCell;