import WelcomePage from '../../components/WelcomePage';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


test('Render WelcomePage component correctly', () => {    
    const wrapper =shallow(<WelcomePage/>);
    expect(wrapper).toMatchSnapshot();
});