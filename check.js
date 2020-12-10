import React from 'react';
import {View, Text} from 'react-native';

const messages = [
  'hello',
  'this is supposed to be a bit of a long line.',
  'bye',
    'hello',
    'this is supposed to be a bit of a long line.',
    'bye',
    'hello',
    'this is supposed to be a bit of a long line.',
    'bye',
    'hello',
    'this is supposed to be a bit of a long line.',
    'bye',
    'hello',
    'this is supposed to be a bit of a long line.',
    'bye',
];
export default function App() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
      }}>
      {messages.map((message, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{
              flex: -1,
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: '#CCC',
              borderRadius: 10,
              padding: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
              }}>
              {message}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
