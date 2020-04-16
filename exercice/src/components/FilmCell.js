import React from 'react';
import { Card, CardHeader, CardBody, Col, Row, Button } from 'reactstrap';
import '../style/FilmCell.css';

class FilmCell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col lg="3" md="4" xs="12" sm="6">
        <Card className="carte">
          <CardHeader className="titre">{this.props.movies.title}</CardHeader>
          <CardBody>
            <Row><img src={this.props.movies.img} alt="affiche" className="affiche" /></Row>
            <p className="categorie">Catégorie : {this.props.movies.category}</p>
            <Button className="like" onClick={() => this.props.compteLikes(this.props.movies.id)}><i className="fas fa-thumbs-up"></i></Button>
            {this.props.movies.likes}
            <Button className="like" onClick={() => this.props.compteDislikes(this.props.movies.id)}><i class="fas fa-thumbs-down"></i></Button>
            {this.props.movies.dislikes}
            <div className="bar">
              <progress id="avancement" className="progressBar" value={(this.props.movies.likes * 100 / (this.props.movies.likes + this.props.movies.dislikes)).toFixed(2)} max="100"></progress>
            </div>
          </CardBody>
        </Card>
      </Col>

    )
  }
}

export default FilmCell;