cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/src/firefoxos/notification.js",
        "id": "cordova-plugin-dialogs.dialogs-impl",
        "pluginId": "cordova-plugin-dialogs",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/firefoxos/VibrationProxy.js",
        "id": "cordova-plugin-vibration.VibrationProxy",
        "pluginId": "cordova-plugin-vibration",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});