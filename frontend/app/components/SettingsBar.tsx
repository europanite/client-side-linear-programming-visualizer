import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { REPO_URL } from '../screens/HomeScreenUtil';

export default function SettingsBar() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.bar}>
        <View style={styles.brandRow}>
          <View>
            <Text style={styles.title}>2D Linear Programming</Text>
            <Text style={styles.subtitle}>Graphical solver · client-side only</Text>
          </View>
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(REPO_URL)}
            style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]}
          >
            <Text style={styles.linkText}>GitHub</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#111827' },
  bar: { backgroundColor: '#111827', paddingHorizontal: 18, paddingVertical: 13 },
  brandRow: {
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  title: { color: '#fff', fontSize: 20, fontWeight: '800' },
  subtitle: { color: '#cbd5e1', fontSize: 12, marginTop: 2 },
  linkButton: {
    minHeight: 40,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569',
    justifyContent: 'center',
  },
  linkText: { color: '#fff', fontWeight: '700' },
  pressed: { opacity: 0.75 },
});
