import React from 'react';
import {shallow, mount} from 'enzyme';
import Login from '../src/app/components/Login';
import HttpUtil from '../src/app/HttpUtil';

describe('<Login />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mountWithContext(<Login />);
    });

    it('should render properly', () => {
        expect(wrapper).to.exist;
    });

});