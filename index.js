/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppPro from './AppPro';
import AppThree from './components/AppThree';
import Practice from './Practice';
import Project3 from './project3/Project3';
import BackgroundChanger from './project4/BackgroundChanger';
import DiceRoller from './project5/DiceRoller';
import Main from './project6/Main.tsx';
// import Main from './project6/Main.tsx';

AppRegistry.registerComponent(appName, () =>Main );
