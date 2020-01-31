## Linux e suas variáveis de ambiente

export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

source $HOME/.bashrc

echo $ANDROID_SDK_ROOT

## Comandos e lembretes

react-native run-android
react-native start
yarn add react-navigation
npm install react-native-gesture-handler
yarn add react-navigation-stack
npm install axios
npm install react-native-webview
rm -rf node_modules
yarn install
npm install
react-native run-android
npm start --reset-cache