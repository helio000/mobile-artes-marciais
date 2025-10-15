import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index() {
  const siteUrl = 'https://helio000.github.io/web-projeto2/';

  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <iframe
          src={siteUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="App Web Preview"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: siteUrl }}
        style={{ flex: 1 }}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
