import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLower, setIncludeLower] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    if (includeLower) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) characters += '0123456789';
    if (includeSpecial) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      {/* Display generated password */}
      <View style={styles.passwordBox}>
        <Text style={styles.password}>{generatedPassword || 'Generated Password'}</Text>
      </View>

      {/* Input for password length */}
      <View style={styles.inputContainer}>
        <Text>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
          placeholder="8"
        />
      </View>

      {/* Toggles for options */}
      <View style={styles.optionContainer}>
        <Text>Include lower case letters</Text>
        <Switch value={includeLower} onValueChange={setIncludeLower} />
      </View>

      <View style={styles.optionContainer}>
        <Text>Include uppercase letters</Text>
        <Switch value={includeUpper} onValueChange={setIncludeUpper} />
      </View>

      <View style={styles.optionContainer}>
        <Text>Include number</Text>
        <Switch value={includeNumber} onValueChange={setIncludeNumber} />
      </View>

      <View style={styles.optionContainer}>
        <Text>Include special symbol</Text>
        <Switch value={includeSpecial} onValueChange={setIncludeSpecial} />
      </View>

      {/* Generate button */}
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C387E',
    padding: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordBox: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  password: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: 60,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;
