import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import itemStyle from './item.css'
import TextField from 'material-ui/TextField';

class Item extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Card>
                <div className={itemStyle.main}>
                    <CardMedia>
                        {/* TODO Remove hardcoding */}
                        <img src="https://9to5mac.files.wordpress.com/2015/09/iphone-6s.jpg?quality=82&strip=all&w=838" height="320" width="22" />
                    </CardMedia>

                    <div className={itemStyle.details}>
                        <div className={itemStyle.header}>
                            <CardTitle className={itemStyle.name} title={this.props.name} />
                            <p id="price" className={itemStyle.price}>{this.props.price}</p>
                            <CardActions className={itemStyle.buy}>
                                <RaisedButton secondary={true} label="Buy" id="Buy" />
                            </CardActions>
                        </div>
                        <div className={itemStyle.description}>
                            <CardText>
                                {this.props.description}
                        </CardText>
                        </div>
                        {/* TODO Remove hardcoding */}
                        <p id="sellers" className={itemStyle.sellers}>8 more sellers</p>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Item;