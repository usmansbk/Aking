import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  label: {
    fontFamily: 'Medium',
    fontSize: 20,
  },
  textInput: {
    fontFamily: 'Regular',
    fontSize: 16,
    paddingHorizontal: 0,
  },
});

const AkingTextInput = React.forwardRef(
  ({label, placeholder, style, secureTextEntry, ...textInputProps}, ref) => {
    const theme = useTheme();
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomColor: theme.palatte.textInput.underlineColor,
          },
          style,
        ]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          underlineColorAndroid="transparent"
          placeholderTextColor={theme.palatte.textInput.placeholderColor}
          style={[
            styles.textInput,
            {
              color: theme.palatte.text.main,
            },
          ]}
          {...textInputProps}
        />
      </View>
    );
  },
);

export default AkingTextInput;
