import EditNote from '../../components/EditNote';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper, notes, handleUpdateNote;
beforeEach(() => {    
    notes= [{
        "noteTitle": "note1",
        "noteDescription": "note1 desc",
        "id": 1
      }]
    handleUpdateNote = jest.fn();
    wrapper = shallow(
        <EditNote  
        notes={notes}
        match={{params: {id: 1}, isExact: true, path: "", url: ""}}
        handleUpdateNote={handleUpdateNote}/>
    );
});


test('Render EditNote component correctly', () => {        
    expect(wrapper).toMatchSnapshot();
});