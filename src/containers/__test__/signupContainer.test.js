import React from 'react';
import { shallow } from 'enzyme';
import { SignupView } from '../signupContainer';


const props = {
  signup: jest.fn(),
  history: { push: jest.fn() },
  signUpState: { loggedIn: false },
};
const nextProps = {
  signUpState: {
    signIn: true,
  },
};

describe('signupView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignupView {...props} />);
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

  it('should signUp on submission', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleOnSubmit(e);
    expect(props.signup).toHaveBeenCalledTimes(1);
  });

  it('should redirect on successful signUp', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalled();
  });

  it('should not redirect on signUp failure', () => {
    wrapper.setProps({ signIn: false });
    expect(props.history.push).not.toBeCalled();
  });
});
