import React from 'react';
import {shallow, mount} from 'enzyme';
import Subheader from 'material-ui/Subheader';
import Items from '../src/app/components/Items';
import Item from '../src/app/components/Item';

let wrapper;

describe('<Items />', () => {
    beforeEach(() => {
        wrapper = shallow(<Items params={{categoryName: "Electronics"}}/>);
    });

    it('should render properly', () => {
        expect(wrapper).to.exist;
    });

    it('should have the word category in its title', () => {
        expect(wrapper.find(Subheader).node.props.children[0]).to.contain('Category');
    });

    it('should have the expected category', () => {
        expect(wrapper.find(Subheader).node.props.children[1]).to.contain('Electronics');        
    });
});

describe('<Items />', () => {
    beforeEach(() => {
        wrapper = shallow(<Items/>);
    });

    it('renders null based on initial state', () => {
        expect(wrapper.state().items.length).to.equal(0);
    });

    it('renders two Item components as children when state is set', () => {
        wrapper.setState({items : [
            {
                name: "iPhone 6S",
                description: "Some Apple phone",
                price: "Rs. 70000"
            },
            {
                name: "Samsung Galaxy S7",
                description: "Featuring exploding batteries",
                price: "Rs. 69999"
            }
        ]});
        expect(wrapper.state().items.length).to.equal(2);

        let header = wrapper.childAt(0);
        expect(header.type()).to.equal(Subheader);

        let child = wrapper.childAt(2);
        expect(child.type()).to.equal(Item);

        expect(child.props().name).to.equal('Samsung Galaxy S7');
    })
});