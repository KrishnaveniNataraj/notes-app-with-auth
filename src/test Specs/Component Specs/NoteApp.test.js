import NotesApp from '../../components/NotesApp';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

let wrapper, notes, handleAddNote, handleRemoveNote;
beforeEach(() => {
    notes = [{
        "noteTitle": "note1",
        "noteDescription": "note1 desc",
        "id": 1
    }]
    handleAddNote = jest.fn();
    handleRemoveNote = jest.fn();
    wrapper = shallow(
        <NotesApp
            notes={notes}
            handleAddNote={handleAddNote}
            handleRemoveNote={handleRemoveNote}
        />
    );
});


test('Render NotesApp component with notes correctly', () => {
    expect(wrapper).toMatchSnapshot();
});