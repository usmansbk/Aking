import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
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

export default function ActionModal({visible, onRequestClose}) {
  const theme = useTheme();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
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
              <Button>Add Task</Button>
              <Divider />
              <Button>Add Quick Note</Button>
              <Divider />
              <Button>Add Check List</Button>
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
