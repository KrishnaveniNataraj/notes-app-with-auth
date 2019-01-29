import NotesContainer from '../../components/NotesContainer';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


let wrapper, notes, handleRemoveNote;
beforeEach(() => {    
    notes= [{
        "noteTitle": "note1",
        "noteDescription": "note1 desc",
        "id": 1
      }]
      handleRemoveNote = jest.fn();
    wrapper = shallow(
        <NotesContainer notes={notes} handleRemoveNote={handleRemoveNote} />
    );
});


test('Render NotesContainer component correctly', () => {        
    expect(wrapper).toMatchSnapshot();
});