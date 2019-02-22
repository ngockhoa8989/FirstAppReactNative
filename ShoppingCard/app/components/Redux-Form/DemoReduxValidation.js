import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import FieldValidation from './ReduxFieldValidation';
import styles from './DemoReduxForm.styles';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined


  function DemoReduxValidation(props) {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <ScrollView style={styles.container}>
            <Field name="Username" type="text"
                component={FieldValidation} label="Username"
                validate={[required, maxLength15]}
            />
            <Field name="email" type="email"
                component={FieldValidation} label="Email"
                validate={email}
                warn={aol}
            />
            <Field name="age" type="number"
                component={FieldValidation} label="Age"
                validate={[required, number, minValue18]}
                warn={tooOld}
            />
            <TouchableOpacity onPress={props.handleSubmit} disabled={submitting}> 
                <Text style={styles.formSubmit}>Submit!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.handleSubmit} disabled={pristine || submitting}> 
                <Text style={styles.formSubmit}>Clear Values</Text>
            </TouchableOpacity>
        </ScrollView>
      );
    
  }

  export default reduxForm({
    form: 'ReduxValidationForm'
  })(DemoReduxValidation);
  