import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import WebView from "react-native-webview";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <View style={styles.centeredView}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={setUrl}
        value={url}
        placeholder="Enter URL"
        keyboardType="url"
      />
      <Pressable style={[styles.button]} onPress={() => setUrl("")}>
        <Text style={styles.textStyle}>Clear url</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show webview in modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <WebView
            source={{
              uri: url,
            }}
            style={{ flex: 1 }}
            allowsInlineMediaPlayback={true} // Important
            mediaPlaybackRequiresUserAction={false} // Important
          />
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#B6B6B6",
    borderRadius: 8,
    padding: 8,
    width: "80%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 2,
    backgroundColor: "#fc5332",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  logo: {
    height: 100,
    resizeMode: "center",
  },
});
