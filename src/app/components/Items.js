import React from 'react';
import Subheader from 'material-ui/Subheader';


class Items extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // fetch data from url
    }
    render() {
        return (
            <Subheader id="header"> Category: Electronics</Subheader>
        );
    }
}

export default Items;