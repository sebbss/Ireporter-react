import React from 'react';
import { shallow } from 'enzyme';
import { LoginView } from '../loginContainer';

const props = {
  login: jest.fn(),
  history: { push: jest.fn() },
  loginState: { loggedIn:false },
};
const nextProps = {
    loginState: {
        loggedIn: true,
  },
};

describe('socialAuthView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginView {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state as user inputs data', () => {
    const e = {
      target: {
        name: 'username',
        value: 'sebbss',
      },
    };
    wrapper.instance().handleOnChange(e);
    expect(wrapper.instance().state.data.username).toEqual('sebbss');
  });

  it('should login on submission', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleOnSubmit(e);
    expect(props.login).toHaveBeenCalledTimes(1);
  });

  it('should redirect on successful login', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalled();
  });

  it('should not redirect on login failure', () => {
    wrapper.setProps({ loggedIn: false });
    expect(props.history.push).not.toBeCalled();
  });
});
