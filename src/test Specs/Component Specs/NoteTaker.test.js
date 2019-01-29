import NoteTaker from '../../components/NoteTaker';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper, notes, handleAddNote;
beforeEach(() => {    
    notes= [{
        "noteTitle": "note1",
        "noteDescription": "note1 desc",
        "id": 1
      }]
      handleAddNote = jest.fn();
    wrapper = shallow(
        <NoteTaker handleAddNote={handleAddNote} />
    );
});


test('Render NoteTaker component correctly', () => {        
    expect(wrapper).toMatchSnapshot();
});