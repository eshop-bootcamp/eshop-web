import React from 'react';
import 'whatwg-fetch';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import landingPageStyle from './landingpage.css';
import config from '../config';

export default class LandingPageBuyer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0, categories: [] }
    }

    componentDidMount() {

        fetch(config.baseurl + '/category/getcategories', { mode: 'cors' })
            .then(response => {
                return response.json();
            }).then(json => {

                this.setState({
                    categories: json,
                    value: 1
                })
            });
    }

    handleChange(event, index, value) {
        this.setState({ value });
        alert('ID ' + value + ' redirect to items list page');
    }


    render() {
        return (<div className={landingPageStyle.formfield} >
            <center>
                <label className={landingPageStyle.formlabel}>Categories</label>
                <DropDownMenu
                    id="ddlCategory"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    autoWidth={true} >
                    {
                        this.state.categories.map(function(cat) {
                            return <MenuItem id={"category_" + cat.id} key={cat.id} primaryText={cat.name} value={cat.id} />
                        })
                    }
                </DropDownMenu>
            </center>
        </div>
        )
    }
}
