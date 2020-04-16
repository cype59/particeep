import React from 'react';
import { movies } from '../movie.js';
import FilmCell from './FilmCell.js';
import { Container, Row } from 'reactstrap'



const FilmList = () => {
    const cells = movies.map(movies => {
        return (
            <FilmCell
                key={movies.id}
                movies={movies}
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

export default FilmList;




