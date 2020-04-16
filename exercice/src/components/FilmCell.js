import React from 'react';
import { Card, CardHeader, CardBody, Col, Row, Button } from 'reactstrap';
import '../style/FilmCell.css';

class FilmCell extends React.Component {
  render() {
    return (
      <Col lg="3" md="4" xs="12" sm="6">
        <Card className="carte">
          <CardHeader className="titre">{this.props.movies.title}</CardHeader>
          <CardBody>
            <Row><img src={this.props.movies.img} alt="affiche" className="affiche" /></Row>
            <p className="categorie">Catégorie : {this.props.movies.category}</p>
            <Row>
              <Col>
                <p className="compteur likes" onClick={() => this.props.compteLikes(this.props.movies.id)}><i className="fas fa-thumbs-up"> {this.props.movies.likes}</i></p>
              </Col>
              <Col>
                <p className="compteur dislikes" onClick={() => this.props.compteDislikes(this.props.movies.id)}><i className="fas fa-thumbs-down"> {this.props.movies.dislikes}</i></p>
              </Col>
            </Row>
            <div className="bar">
              <progress id="avancement" className="progressBar" value={(this.props.movies.likes * 100 / (this.props.movies.likes + this.props.movies.dislikes)).toFixed(2)} max="100"></progress>
            </div>
          </CardBody>
          <Button color="danger" onClick={e => window.confirm("Vous voulez vraiment supprimer ce film ?") && this.props.delete(this.props.movies.id)}>Supprimer</Button>{' '}
        </Card>
      </Col>

    )
  }
}

export default FilmCell;