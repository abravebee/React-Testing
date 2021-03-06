import React from 'react';;
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
  
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should total 0 by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
  })

  it('should set next to null by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.next).toBe(null);
    })

  it('should set operation to null by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.operation).toBe(null);
    })
  
});
