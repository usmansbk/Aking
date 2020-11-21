import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';

const {width} = Dimensions.get('window');

const IMAGE_SIZE = width * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  message: {
    textAlign: 'center',
  },
});

export default function Success() {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.background.main,
          padding: theme.spacing.xl,
        },
      ]}>
      <Image
        source={require('@assets/images/confirmed.png')}
        resizeMode="contain"
        style={[
          styles.image,
          {
            marginBottom: theme.spacing.xl,
          },
        ]}
      />
      <Text variant="headline">Successful!</Text>
      <Text variant="subheading" style={styles.message}>
        You have successfully changed password. Please use your new passwords
        when logging in.
      </Text>
    </View>
  );
}
