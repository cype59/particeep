import React from 'react';
import { movies } from '../movie.js';
import FilmCell from './FilmCell.js';
import { Container, Row } from 'reactstrap'


class FilmList extends React.Component {
    constructor(props) {
        super(props)
        this.handleCompteLikes = this.handleCompteLikes.bind(this)
        this.handleCompteDislikes = this.handleCompteDislikes.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            films: movies
        }
    }

    handleCompteLikes = (id_select) => {
        const film_select = this.state.films.filter(film => film.id === id_select);
        const compteur = film_select[0].likes + 1
        film_select[0].likes = compteur
        this.setState(film_select) 
    }

    handleCompteDislikes = (id_select) => {
        const film_select = this.state.films.filter(film => film.id === id_select);
        const compteur = film_select[0].dislikes + 1
        film_select[0].dislikes = compteur
        this.setState(film_select) 
    }

    handleDelete = (id_select) => {
        const films = this.state.films.filter(film => film.id !== id_select);
        this.setState({ films: films });
    }


    render() {
        const cells = this.state.films.map(movies => {
            return (
                <FilmCell
                    key={movies.id}
                    movies={movies}
                    compteLikes={this.handleCompteLikes}
                    compteDislikes={this.handleCompteDislikes}
                    delete={this.handleDelete}
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




