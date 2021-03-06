import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';

const WEBSDK_LINK =
  'https://sdkweb-test.idcheck.io/v2/ariadnext/942e56a5-d49b-4fe6-8918-24477726c109';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { status: audioStatus } = await Audio.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      setHasPermission(audioStatus === 'granted');
    })();
  }, []);

  return (
    <WebView
      mediaPlaybackRequiresUserAction={false}
      source={{ uri: WEBSDK_LINK }}
    />
  );
}
