import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

type Props = {
  value: number;
  onChange: (value: number) => void;
  width?: number;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export default function NumberField({ value, onChange, width = 64, accessibilityLabel, style }: Props) {
  const [text, setText] = useState(String(value));
  useEffect(() => setText(String(value)), [value]);

  const update = (next: string) => {
    setText(next);
    const parsed = Number(next);
    if (next.trim() !== '' && Number.isFinite(parsed)) onChange(parsed);
  };

  const normalize = () => {
    const parsed = Number(text);
    if (!Number.isFinite(parsed) || text.trim() === '') setText(String(value));
  };

  return (
    <TextInput
      accessibilityLabel={accessibilityLabel}
      value={text}
      onChangeText={update}
      onBlur={normalize}
      keyboardType="numbers-and-punctuation"
      selectTextOnFocus
      style={[styles.input, { width }, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 42,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: '#fff',
    color: '#0f172a',
    fontSize: 16,
    textAlign: 'right',
  },
});
