import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import Item from './Item.js';
import HttpUtil from '../HttpUtil'

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    };

    componentDidMount() {
        HttpUtil.GET('/categories/'+ this.props.params.categoryId + '/items').then(json => {
              this.setState({items: json});
            }
        );
    }

    render() {
        let {params} = this.props;
        let list = this.state.items.map((item,i) =>
            <Item
                key={i}
                name={item.name}
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
