import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text} from '@components/common';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default function Dropdown({data}) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.textInput.background,
          paddingVertical: theme.spacing.l,
        },
      ]}>
      {data.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </View>
  );
}

const Item = ({title, subtitle}) => {
  const theme = useTheme();

  return (
    <RectButton>
      <View
        style={[
          styles.itemContainer,
          {
            padding: theme.spacing.l,
          },
        ]}>
        <View>
          <Avatar size={44} />
        </View>
        <View
          style={{
            paddingHorizontal: theme.spacing.m,
          }}>
          <Text variant="searchTitle">{title}</Text>
          <Text variant="searchSubtitle">{subtitle}</Text>
        </View>
      </View>
    </RectButton>
  );
};
