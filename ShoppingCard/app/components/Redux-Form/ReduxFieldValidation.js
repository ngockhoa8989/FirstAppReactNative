import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TextInput.styles';

export default function FieldValidation(props) {
    const { input, label, type, meta,...inputProps  } = props;
    // do not display warning if the field has not been touched or if it's currently being edited
    const validationStyles = meta.touched && !meta.active
        ? meta.valid ? styles.valid : styles.invalid
        : null;

    return (
        <View>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{label}</Text>
            <View style={[styles.inputContainer, validationStyles]}>
                <TextInput
                    {...inputProps}
                    onChangeText={input.onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    value={input.value}
                    style={styles.input}
                />
                {meta.touched && ((meta.error && <Text className="text-danger">{meta.error}</Text>) || (meta.warning && <Text>{meta.warning}</Text>))}
            </View>
        </View>
    );
}

FieldValidation.propTypes = {
    input: PropTypes.shape({
      onBlur: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired,
      onFocus: PropTypes.func.isRequired,
      value: PropTypes.any.isRequired
    }).isRequired,
    meta: PropTypes.shape({
      active: PropTypes.bool.isRequired,
      error: PropTypes.string,
      invalid: PropTypes.bool.isRequired,
      pristine: PropTypes.bool.isRequired,
      visited: PropTypes.bool.isRequired
    }).isRequired
  };