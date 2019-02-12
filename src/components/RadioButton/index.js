import React from 'react';
import { CheckBox } from 'react-native-elements';

const RadioButton = (props) => {
    return (
        <CheckBox
            {...props}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
            textStyle={{ fontSize: 14 }}
            size={40}
        />
    )
}

export default RadioButton;