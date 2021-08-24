import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";

const WEBSDK_LINK =
  "https://sdkweb-test.idcheck.io/v2/ariadnext/829d3898-9597-4e74-a02e-21002d5212ab";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <WebView
      mediaPlaybackRequiresUserAction={false}
      source={{ uri: WEBSDK_LINK }}
    />
  );
}
