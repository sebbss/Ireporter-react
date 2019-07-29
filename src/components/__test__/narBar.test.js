import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../common/navBar';


const props = {
  loggedIn: false,
};
const nextProps = {
  loggedIn: true,
};

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should switch the navBar', () => {
    wrapper.setProps({ ...nextProps });
    expect(wrapper.instance().state.loggedIn).toBe(true);
  });
  it('should not switch the navBar', () => {
    wrapper.setProps({ loggedIn: false });
    expect(wrapper.instance().state.loggedIn).toBe(false);
  });
});
