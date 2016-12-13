import React from 'react';
import {shallow, mount} from 'enzyme';
import Subheader from 'material-ui/Subheader';
import Items from '../src/app/components/Items';

describe('<Items />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Items/>);
        expect(wrapper).to.exist;
    });

    it('should have the word category in its title', () => {
        const wrapper = shallow(<Items/>);
        expect(wrapper.find(Subheader).node.props.children).to.contain('Category');
    });

/*    it('should have at least one item on the page', () => {
        const wrapper = shallow(<Items />);
        expect(wrapper.find(items).node.props.children).to.contain.text('');
    }); */
});