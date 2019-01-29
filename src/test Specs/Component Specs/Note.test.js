import Note from '../../components/Note';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper, note, handleRemoveNote;
beforeEach(() => {    
    note= {
        "noteTitle": "note1",
        "noteDescription": "note1 desc",
        "id": 1
        }
      handleRemoveNote = jest.fn();
    wrapper = shallow(
        <Note note={note} handleRemoveNote={handleRemoveNote} />
    );
});


test('Render Note component', () => {        
    expect(wrapper).toMatchSnapshot();
});