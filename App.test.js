import React from 'react';
import  renderer  from 'react-test-renderer'

test('Test view vehicles in db',()=>{
    const component = renderer.create(<vehicles/>);
    const tree =component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Insert vehicles in db',()=>{
    const component = renderer.create(<create-vehicle/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})

test('Navbar check',()=>{
    const component = renderer.create(<NavBar/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
test('Test Catogories',()=>{
    const component = renderer.create(<catagory/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})