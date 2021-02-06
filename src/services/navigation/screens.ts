import DashboardScreen from 'src/screens/DashboardScreen';
import EventsScreen from 'src/screens/EventsScreen';
import RoutesScreen from 'src/screens/RoutesScreen';
import MenuScreen from 'src/screens/MenuScreen';

import {Buttons} from './buttons';
import {Options} from 'react-native-navigation';

// Here we define all information regarding screens

type Screen = {
  id: string;
  options: () => Options;
};
type ScreenName = 'dashboard' | 'events' | 'routes' | 'menu';

const withPrefix = (s: string) => `rnn_starter.${s}`;

const screens: Record<ScreenName, Screen> = {
  dashboard: {
    id: withPrefix('DashboardScreen'),
    options: () => ({
      topBar: {
        title: {text: 'Dashboard'},
      },
    }),
  },
  events: {
    id: withPrefix('EventsScreen'),
    options: () => ({
      topBar: {
        title: {text: 'Events'},
      },
    }),
  },
  routes: {
    id: withPrefix('RoutesScreen'),
    options: () => ({
      topBar: {
        title: {text: 'Routes'},
      },
    }),
  },
  menu: {
    id: withPrefix('MenuScreen'),
    options: () => ({
      topBar: {
        title: {text: 'Menu'},
      },
    }),
  },
};

const Screens = new Map<string, React.FC<any>>();
Screens.set(screens.dashboard.id, DashboardScreen);
Screens.set(screens.events.id, EventsScreen);
Screens.set(screens.routes.id, RoutesScreen);
Screens.set(screens.menu.id, MenuScreen);

export default Screens;
export {screens};
