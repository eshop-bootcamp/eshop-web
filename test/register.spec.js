import React from 'react';
import {shallow, mount} from 'enzyme';
import Subheader from 'material-ui/Subheader';
import Register from '../src/app/components/Register';

describe('<Register />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Register/>);
        expect(wrapper).to.exist;
    });

    it('should have a title New User Registration', () => {
        const wrapper = shallow(<Register/>);
        expect(wrapper.find(Subheader).node.props.children).equal('New User Registration');
    });
});