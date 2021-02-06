import {Options} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Here we define all information regarding tabs

const TabTitles: TabTitlesType = ['Dashboard', 'Events', 'Routes', 'Menu'];

const loadTabIcons = async (): Promise<TabIcons> => {
  // getting icons for tabs as they have to be as image sources
  const [tab1, tab2, tab3, tab4] = await Promise.all([
    Ionicons.getImageSource('ios-rocket-outline', 25),
    Ionicons.getImageSource('calendar-outline', 25),
    Ionicons.getImageSource('map-outline', 25),
    Ionicons.getImageSource('grid-outline', 25),
  ]);
  const [
    tab1Selected,
    tab2Selected,
    tab3Selected,
    tab4Selected,
  ] = await Promise.all([
    Ionicons.getImageSource('ios-rocket', 25),
    Ionicons.getImageSource('calendar', 25),
    Ionicons.getImageSource('map', 25),
    Ionicons.getImageSource('grid', 25),
  ]);

  return [
    {
      icon: tab1,
      selectedIcon: tab1Selected,
    },
    {
      icon: tab2,
      selectedIcon: tab2Selected,
    },
    {
      icon: tab3,
      selectedIcon: tab3Selected,
    },
    {
      icon: tab4,
      selectedIcon: tab4Selected,
    },
  ];
};

const getTabOptions = async (): Promise<Options[]> => {
  const tabIcons = await loadTabIcons();

  return TabTitles.map((text, i) => ({
    bottomTab: {text, ...tabIcons[i]},
  }));
};

export {TabTitles, getTabOptions};
