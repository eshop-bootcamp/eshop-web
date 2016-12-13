import React from 'react';
import {shallow, mount} from 'enzyme';
import Subheader from 'material-ui/Subheader';
import Item from '../src/app/components/Item';

describe('<Item />', () => {
    it('should render properly', () => {        
        expect(shallow(<Item/>)).to.exist;
    });

    it('should have a name', () => {
        const wrapper = shallow(<Item/>);
        expect(wrapper.find('#name')).to.be.defined;
    });

    it('should have a buy button', () => {
        const wrapper = shallow(<Item/>);
        expect(wrapper.find('#Buy')).to.have.length(1);
    });
});

