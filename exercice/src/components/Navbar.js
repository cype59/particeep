import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

class NavbarMenu extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="warning" light expand="md">
                    <NavbarBrand>Cine Particeep</NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMenu;