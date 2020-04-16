import React from 'react';


class FilmSorting extends React.Component {
    render() {
        return (
            <li>
                <input key={this.props.categorie} type="checkbox" checked={this.props.isChecked} value={this.props.categorie} onClick={this.props.handleCheckChieldElement} /> {this.props.categorie}
            </li>
        )
    }
}

export default FilmSorting;