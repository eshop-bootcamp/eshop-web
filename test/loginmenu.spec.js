import React from 'react';
import { shallow } from 'enzyme';
import LoginMenu from '../src/app/components/LoginMenu';
        const wrapper = shallow(<LoginMenu />);

describe('<Main />', () => {

    it('should render', () => {
        const wrapper = shallow(<LoginMenu />);
        expect(wrapper).to.have.descendants('div');
    });

});