# Тестовое задание (аутстафф)
#### Мобильное приложение отображает пагинированную обновляемую ленту с пользовательскими событиями GitHub, и при нажатии на конкретное событие позволяет посмотреть подробную информацию по нему.

### Используемые технологии

 * React Native
 * Redux
 * React Navigation
 * Axios

### Развертывание проекта

 1. Установить в систему nodejs *(на примере macos)*

  brew install nodejs npm

 2. Настроить dev окружение в соотетствии с [документацией React Native](https://reactnative.dev/docs/environment-setup).

  В том числе, необходимо установить Xcode и Android Studio и настроить их для работы с React Native.

 4. Перейти в папку с проектом

  cd /path/to/project/folder/

 4. Установить зависимости

  npm install i

 5. Собрать Podfile

 `cd ios &&
 pod install`

 6. Запуск на iOS

 `cd /path/to/project/folder/ &&
 npm run ios`

 7. Запуск на Android

`cd /path/to/project/folder/  &&
 npm run android`
