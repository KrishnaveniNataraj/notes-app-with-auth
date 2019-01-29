import SearchBar from '../../components/SearchBar';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


test('Render SearchBar component correctly', () => {    
    const wrapper =shallow(<SearchBar/>);
    expect(wrapper).toMatchSnapshot();
});