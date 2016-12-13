import React from 'react';
import { shallow, mount } from 'enzyme';
import LandingPageBuyer from '../src/app/components/LandingPageBuyer';
import DropDownMenu from 'material-ui/DropDownMenu';

describe('<LandingPageBuyer />', () => {

    var wrapper;

    beforeEach(function () {
        wrapper = shallow(<LandingPageBuyer />);
    });

    it('should render <LandingPageBuyer/> components', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.descendants('label');
        expect(wrapper).to.have.descendants('DropDownMenu');
    });

    it('should render Categories label component', () => {
        var labelDom = wrapper.find('label');
        expect(labelDom.text()).to.equals('Categories');
        expect(labelDom.hasClass('_src_app_components_landingpage__formlabel')).to.equals(true);
    });


});