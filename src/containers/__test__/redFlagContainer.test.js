import React from 'react';
import { shallow } from 'enzyme';
import { RedFlagView } from '../redFlagContainer';


const props = {
  flags: jest.fn(),
  redFlags: { payload: [] },
};
const nextProps = {
  redFlags: {
    payload: [{ created_by: 2 }],
  },
};

describe('socialAuthView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RedFlagView {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state', () => {
    wrapper.setProps({ ...nextProps });
    expect(wrapper.instance().state.payload).toEqual([{ created_by: 2 }]);
  });
});
