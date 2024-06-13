# idcheckio-sdkweb-example-web-reactnative-expo

![image](https://www.ariadnext.com/wp-content/uploads/2019/01/idcheck.io-rvb.png)

AriadNEXT IDCHECK.IO SDK Web enables you to easily integrate a document capture and
identity verification workflow into your user onboarding or verification process, thanks to an
API and a widget.

This project is an example of an integration of the [idcheckio sdkweb](https://www.idcheck.io/) in a React Native App to easily integrate a document capture and identification solution in your user acquisition path.

## Prerequisites

Before started, please make sure you have been in contact with the [AriadNEXT team](contact+sdkwebexample@idcheck.io) and they provide you **credentails to the Demo platform**.

Technically you will need :

- [NodeJS > v20.11](https://nodejs.org/en/download/)
- [Expo-cli](https://docs.expo.dev/)

This example use the [react-native-webview](https://www.npmjs.com/package/react-native-webview) component to open a link in a webview, as it is the recommended way to open webview. The same component can also be used when using React Native without Expo.

**It is important to provide both** `allowsInlineMediaPlayback={true}` **and** `mediaPlaybackRequiresUserAction={false}` **to the webview component** to avoid issues such as the camera launching in fullscreen on iOS devices.

## Run project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Integration

We have chosen to use Expo in this example of integration. This library is not essential. We wanted to simplifies the use of the camera.
It is possible to eject the project in order to work on native projects.

For futher integration support please refer to :

- [idcheckio sdk-web documentation](https://sdkweb-test.idcheck.io/rest/api/index.html)
- integration guide provided by your AriadNEXT contact. - our support email below

## Support

Please contact [AriadNEXT IDCHECKIO support team](contact+sdkwebexample@idcheck.io) if you encounter any issue with your idcheckio sdk-web integration
