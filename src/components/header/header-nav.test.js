import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import HeaderNav from './header-nav'

describe('<HeaderNav 1 />', () => {
  it('renders Logout', () => {
    const wrapper = shallow(<HeaderNav isLogged />)
    expect(wrapper.find('button').text()).to.contain('Logout')
  })
})

describe('<HeaderNav 2/>', () => {
  it('renders Login', () => {
    const wrapper = shallow(<HeaderNav isLogged={false} />)
    expect(
      wrapper
        .find('NavLink')
        .at(1)
        .props().to
    ).to.equal('/login')
  })
})

describe('<HeaderNav 3 />', () => {
  it('renders Register', () => {
    const wrapper = shallow(<HeaderNav isLogged={false} />)
    expect(
      wrapper
        .find('NavLink')
        .at(2)
        .props().to
    ).to.equal('/register')
  })
})
