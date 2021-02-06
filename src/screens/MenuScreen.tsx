import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {
  useNavigationButtonPress,
  useNavigationComponentDidAppear,
} from 'react-native-navigation-hooks/dist/hooks';
import {ScrollView} from 'react-native-gesture-handler';

// EXPO modules
import {Constants as ExpoConstants} from 'react-native-unimodules';
import * as Network from 'expo-network';

import {useStores} from 'src/stores';
import {useServices} from 'src/services';
import Reanimated2 from 'src/components/Reanimated2';
import {ButtonIcon, ButtonTitle} from 'src/components/Button';
import useStyles from 'src/hooks/useStyles';
import {screens} from 'src/services/navigation/screens';
import Section from 'src/components/Section';
import {Buttons} from 'src/services/navigation/buttons';

type MenuScreenProps = {};

const MenuScreen: NavigationFunctionComponent<MenuScreenProps> = observer(
  ({componentId}) => {
    const {ui, counter} = useStores();
    const {nav, t} = useServices();
    const {styles} = useStyles(_styles);

    useNavigationButtonPress(counter.decrement, componentId, Buttons.Dec.id);
    useNavigationButtonPress(counter.increment, componentId, Buttons.Inc.id);
    useNavigationComponentDidAppear(() => {
      getNetworkType();
    }, componentId);

    const getNetworkType = async () => {
      try {
        const networkState = await Network.getNetworkStateAsync();

        ui.setNetworkType(networkState.type);
      } catch (e) {}
    };

    return (
      <ScrollView>
        <Text>Hello World</Text>
      </ScrollView>
    );
  },
);

const _styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
    },
    section: {
      padding: theme.sizes.m,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    text: {
      fontSize: 16,
      margin: theme.sizes.s,
      color: theme.colors.text,
    },

    counterContainer: {
      padding: theme.sizes.s,
      flexDirection: 'row',
      alignItems: 'center',
    },
    counterText: {
      fontSize: 50,
      marginHorizontal: theme.sizes.m,
      marginVertical: theme.sizes.s,
      textAlign: 'center',
      color: theme.colors.text,
    },
  });

MenuScreen.options = (props) => screens.menu.options();

export default MenuScreen;
