import React from 'react';
import { movies } from '../movie.js';
import FilmCell from './FilmCell.js';
import { Container, Row } from 'reactstrap'


class FilmList extends React.Component {
    constructor(props) {
        super(props)
        this.handleCompteLikes = this.handleCompteLikes.bind(this)
        this.handleCompteDislikes = this.handleCompteDislikes.bind(this)
        this.state = {
            films: movies
        }
    }

    handleCompteLikes = (id_select) => {
        const compteur = this.state.films[id_select-1].likes + 1
        const infos = this.state.films
        infos[id_select-1].likes = compteur
        this.setState(infos)
    }

    handleCompteDislikes = (id_select) => {
        const compteur = this.state.films[id_select-1].dislikes + 1
        const infos = this.state.films
        infos[id_select-1].dislikes = compteur
        this.setState(infos)
    }

    render() {
        const cells = this.state.films.map(movies => {
            return (
                <FilmCell
                    key={movies.id}
                    movies={movies}
                    compteLikes={this.handleCompteLikes}
                    compteDislikes={this.handleCompteDislikes}
                />
            );
        });
        return (
            <Container>
                <Row>
                    {cells}
                </Row>
            </Container>
        )
    }
}

export default FilmList;




