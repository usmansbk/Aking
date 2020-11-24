import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Header, Footer} from '@components/common';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
});

export default function NewTask({navigation}) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Header
        title="New Task"
        backgroundColor={theme.palatte.primary.main}
        barStyle="light-content"
        leftIcon="arrow-left"
        onPressLeftIcon={() => navigation.goBack()}
        iconColor={theme.palatte.background.main}
        expand
      />
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}
