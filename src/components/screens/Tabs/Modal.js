import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    width: '70%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const actions = [
  {
    id: '1',
    label: 'Add Task',
    route: 'NewTask',
  },
  {
    id: '2',
    label: 'Add Quick Note',
    route: 'NewQuickNote',
  },
  {
    id: '3',
    label: 'Add Check List',
    route: 'NewCheckList',
  },
];

export default function ActionModal({visible, onRequestClose}) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.container} onPress={onRequestClose}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalView,
                {
                  backgroundColor: theme.palatte.background.main,
                  borderRadius: theme.shape.radius,
                  elevation: theme.shape.elevation,
                },
              ]}>
              <FlatList
                data={actions}
                renderItem={({item: {route, label}}) => {
                  return (
                    <Button
                      onPress={() => {
                        onRequestClose();
                        navigation.navigate(route);
                      }}>
                      {label}
                    </Button>
                  );
                }}
                ItemSeparatorComponent={Divider}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

function Divider() {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: theme.colors.gray2,
        },
      ]}
    />
  );
}

function Button({children, onPress = () => console.log('hello')}) {
  const theme = useTheme();

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          {
            padding: theme.spacing.xl,
          },
        ]}>
        <Text variant="modalButton">{children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
