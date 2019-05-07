import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import HeaderNav from './header-nav'

describe('<HeaderNav />', () => {
  it('renders Logout', () => {
    const wrapper = shallow(<HeaderNav isLogged={true} />)
    expect(wrapper.find('button').text()).to.contain('Logout')
  })
})

describe('<HeaderNav />', () => {
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

describe('<HeaderNav />', () => {
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
