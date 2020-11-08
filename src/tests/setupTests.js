import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import "babel-polyfill"

Enzyme.configure({
  adapter: new EnzymeAdapter()
})