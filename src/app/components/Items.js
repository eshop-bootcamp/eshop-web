import React from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Item from './Item.js';

export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    };

    componentDidMount() {
        // fetch from URL
    }

    render() {
        // TODO These items must be children of this Items component.
        let list = this.state.items.map((item) =>
            <Item name={item.name}
                description={item.description}
                price={item.price} />
        );
        return (
            <div>
                {/* TODO Remove hardcoding */}
                <Subheader id="header"> Category: Electronics</Subheader>
                {list}
            </div>
        );
    }
}