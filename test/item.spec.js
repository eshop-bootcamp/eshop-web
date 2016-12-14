import React from 'react';
import {shallow, mount} from 'enzyme';
import Subheader from 'material-ui/Subheader';
import Item from '../src/app/components/Item';

let wrapper;

describe('<Item />', () => {
    beforeEach(() => {
        wrapper = shallow(<Item/>);
    });

    it('should render properly', () => {        
        expect(wrapper).to.exist;
    });

    it('should have a name', () => {
        expect(wrapper.find('#name')).to.be.defined;
    });

    it('should have a buy button', () => {
        expect(wrapper.find('#Buy')).to.have.length(1);
    });
});

