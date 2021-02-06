import {Navigation} from 'react-native-navigation';
import {Root, BottomTabs, StackWith, Component} from './layout';
import {screens} from './screens';
import NavigationSystem from './system';
import {getTabOptions} from './tabs';

class NavigationService extends NavigationSystem implements IService {
  init = async () => {
    await this.initSystem();
  };

  pushSettings = async (cId: string) => {
    this.push(cId, screens.events.id);
  };

  showSettings = async () => {
    this.show(screens.events.id);
  };

  showAppUpdate = async () => {
    this.showOverlay(screens.routes.id);
  };

  // APP

  startApp = async () => {
    const tabOptions = await getTabOptions();

    Navigation.setRoot(
      Root(
        BottomTabs([
          StackWith(Component(screens.dashboard.id), {...tabOptions[0]}),

          StackWith(Component(screens.events.id), tabOptions[1]),
          StackWith(Component(screens.routes.id), tabOptions[2]),
          StackWith(Component(screens.menu.id), tabOptions[3]),
        ]),
      ),
    );
  };
}

export default new NavigationService();
