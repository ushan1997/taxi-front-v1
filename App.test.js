import React from 'react';
import  renderer  from 'react-test-renderer'

test('Test case1 :view vehicles in db',()=>{
    const component = renderer.create(<vehicles/>);
    const tree =component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Test case2 :Insert vehicles in db',()=>{
    const component = renderer.create(<create-vehicle/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})

test('Test case3 :Navbar check',()=>{
    const component = renderer.create(<NavBar/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
test('Test case4 :Test Catogories',()=>{
    const component = renderer.create(<catagory/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})