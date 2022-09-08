'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      counter: require('./widgets/counter'),
      home: require('./widgets/home'),
      menu: require('./widgets/menu'),
    },
    listeners: {
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootWidget: 'main'
  }
}