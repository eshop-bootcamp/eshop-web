import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Item from './Item.js';

class Items extends Component {
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
        let {params} = this.props;
        let list = this.state.items.map((item) =>
            <Item name={item.name}
                description={item.description}
                price={item.price} />
        );
        return (
            <div>
                <Subheader id="header"> Category: {params ? params.categoryName : ''}</Subheader>
                {list}
            </div>
        );
    }
}

export default Items;
