// const myCustomLegendFactory = () => CustomLegend;
import CustomLegend from '../components/CustomLegend'
import {withState} from 'kepler.gl/components';
import {visStateLens} from 'kepler.gl/reducers';

const CustomLegendFactory = () => withState(
  // subreducer lenses
  [visStateLens],

  // mapStateToProps
  // state => (console.log('state', state)),

  // actions
  // {addTodo}
)(CustomLegend);

export default CustomLegendFactory