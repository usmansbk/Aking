import React, {useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';
import {singleDay} from './data';
import Item from './Item';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  separator: {
    height: 16,
  },
});

export default function FlatTaskList() {
  const theme = useTheme();
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);

  return (
    <FlatList
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
      data={singleDay.data}
      keyExtractor={(item) => item.id}
      initialNumToRender={1}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <ListHeaderComponent title={singleDay.title} />
      )}
      ItemSeparatorComponent={SeparatorComponent}
    />
  );
}

const renderItem = ({item}) => {
  return <Item {...item} />;
};

const ListHeaderComponent = ({title}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.palatte.background.list,
          paddingVertical: theme.spacing.s,
          marginBottom: theme.spacing.s,
        },
      ]}>
      <Text variant="sectionHeader" color="sectionHeader">
        {title}
      </Text>
    </View>
  );
};

const SeparatorComponent = () => <View style={styles.separator} />;
