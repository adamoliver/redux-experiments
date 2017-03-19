import React from 'react';
import ActiveFilters from '../containers/ActiveFilters';
import Filters from '../containers/Filters';
import '../../styles/index.scss';

const App = () => (
  <div>
    <Filters />
    <ActiveFilters />
  </div>
);

export default App;