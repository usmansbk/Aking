import React, {useRef} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';
import data from './data';
import Item from './Item';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  separator: {
    height: 16,
  },
});

export default function SectionTaskList() {
  const theme = useTheme();
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);

  return (
    <SectionList
      ref={scrollRef}
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.background.list,
        },
      ]}
      contentContainerStyle={{
        padding: theme.spacing.l,
      }}
      stickySectionHeadersEnabled={false}
      sections={data}
      keyExtractor={(item) => item.id}
      initialNumToRender={1}
      renderItem={renderItem}
      renderSectionHeader={({section: {title}}) => {
        return (
          <View
            style={[
              {
                backgroundColor: theme.palatte.background.list,
                paddingVertical: theme.spacing.s,
              },
            ]}>
            <Text variant="sectionHeader" color="sectionHeader">
              {title}
            </Text>
          </View>
        );
      }}
      SectionSeparatorComponent={SeparatorComponent}
      ItemSeparatorComponent={SeparatorComponent}
    />
  );
}

const renderItem = ({item}) => {
  return <Item {...item} />;
};

const SeparatorComponent = () => <View style={styles.separator} />;
