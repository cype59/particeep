import React from 'react';
import { movies } from '../movie.js';
import FilmCell from './FilmCell.js';
import FilmSorting from './FilmSorting.js';
import { Container, Row, Card, Col, Input } from 'reactstrap'
import '../style/FilmList.css';
import MoviesPagination from './Pagination.js';



class FilmList extends React.Component {
    constructor(props) {
        super(props)
        this.handleCompteLikes = this.handleCompteLikes.bind(this)
        this.handleCompteDislikes = this.handleCompteDislikes.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.state = {
            films: movies,
            films_copie: movies,
            currentPage: 1,
            postsPerPage: 8,
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
        this.setState({ films_copie: films });
    }

    handleCheckElement = (event) => {
        if (event.target.checked === true) {
            const films = this.state.films.filter(film => film.category === event.target.value);
            this.setState({ films: films });
        } else {
            this.setState({ films: this.state.films_copie });
        }
    }

    handleChangeSelect(event) {
        this.setState({ postsPerPage: event.target.value });
    }

    render() {

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentMovies = this.state.films.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNumber => this.setState({ currentPage: pageNumber });

        const cells = currentMovies.map(movies => {
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

        const categorie = this.state.films.map(movies => {
            return (
                movies.category
            );
        });
        
        const uniqueSet = new Set(categorie)
        const categorieArray = [...uniqueSet];
        const listCategorie = categorieArray.map(cat => {
            return (<FilmSorting key={cat} categorie={cat} handleCheckElement={this.handleCheckElement} />)
        })

        return (
            <Container>
                <Card className="categorie">
                    <p>Filtrer selon</p>
                    <Col>
                        <ul>
                            {listCategorie}
                        </ul>
                    </Col>
                </Card>
                <Row>
                    <MoviesPagination
                        postsPerPage={this.state.postsPerPage}
                        totalPosts={this.state.films.length}
                        paginate={paginate}
                    />
                    <Col>
                        <div className="selectOption">
                            <Input type="select" name="select" value={this.state.postsPerPage} onChange={this.handleChangeSelect}>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {cells}
                </Row>
            </Container>
        )
    }
}

export default FilmList;




