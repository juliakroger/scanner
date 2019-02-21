import  React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './Containers/Home';
import Camera from './Containers/Camera';
import Photos from './Containers/Photos';



const RouterComponent = () => {
  return (
      <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Home" initial />
        <Scene key="Camera" component={Camera} title="Camera" />
        <Scene key="Photos" component={Photos} title="Photos" />
      </Scene>
      </Router>
  );
}


export default RouterComponent;
