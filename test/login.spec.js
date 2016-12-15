import React from 'react';
import {shallow} from 'enzyme';
import Login from '../src/app/components/Login';
import HttpUtil from '../src/app/HttpUtil';

describe('<Login />', () => {
    let wrapper;

    it('should render properly', () => {
        wrapper = shallow(<Login />);
        expect(wrapper).to.exist;
    });

});