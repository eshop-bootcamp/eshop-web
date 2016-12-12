import React from 'react';
import { shallow } from 'enzyme';
import Main from '../src/app/components/Main';
describe('<Main />', () => {

    it('should render', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper).to.have.descendants('div');
    });

});