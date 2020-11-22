import React from 'react';
import {SectionList, StyleSheet} from 'react-native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';
import data from './data';
import Item from './Item';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default function TaskList() {
  const theme = useTheme();
  return (
    <SectionList
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.background.list,
          padding: theme.spacing.l,
        },
      ]}
      contentContainerStyle={{}}
      stickySectionHeadersEnabled
      sections={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={({section: {title}}) => {
        <Text variant="title">{title}</Text>;
      }}
    />
  );
}

const renderItem = ({item}) => {
  return <Item {...item} />;
};
