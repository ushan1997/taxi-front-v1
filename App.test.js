import React from 'react';
import  renderer  from 'react-test-renderer'

test('view vehicles in db',()=>{
    const component = renderer.create(<vehicles/>);
    const tree =component.toJSON();
    expect(tree).toMatchSnapshot();
})

