import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import landingPageStyle from './landingpage.css';
import config from '../config';
import HttpUtil from '../HttpUtil';

export default class LandingPageBuyer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0, categories: [] };
        this.defaultCategoryId = -1;
    }

    componentDidMount() {
        HttpUtil.GET('/categories')
            .then(json => {
                json.splice(0, 0, { id: this.defaultCategoryId, name: "--- Please select ---" });
                this.setState({ categories: json, value: this.defaultCategoryId });
            });
    }

    handleChange(event, index, value) {
        this.setState({ value });
        if (value !== this.defaultCategoryId) {
            this.props.router.push('/items/' + value);
        }
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
                        this.state.categories.map(function (cat) {
                            return <MenuItem id={"category_" + cat.id} key={cat.id} primaryText={cat.name} value={cat.id} />
                        })
                    }
                </DropDownMenu>
            </center>
        </div>
        )
    }
}
