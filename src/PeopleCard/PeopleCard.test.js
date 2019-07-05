import React from 'react';
import PeopleCard from './PeopleCard/'
import { shallow, mount } from 'enzyme';

describe('PeopleCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <PeopleCard 
      personName='Obi Wan'
      birthYear='1994'
      gender='male'
      height='10cm'
      eyeColor='red'
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});