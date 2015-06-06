# Joywok EAB

An Ionic-based EAB(enterprise address book) app. 

To build, install Ionic, then run:

    $ ionic platform add ios
    $ ionic plugin add org.apache.cordova.device
    $ ionic plugin add org.apache.cordova.statusbar
    $ ionic plugin add org.apache.cordova.geolocation
    $ ionic build ios
    $ ionic emulate ios

Substitute ios for android above to test on Android.

## Desktop browser testing

Testing Joywok EAB in a browser is as simple as running the serve command in the root folder.

    $ ionic serve

## Simulator testing

You can also test right in the simulator using the cordova commands. For example, to test in the iOS simulator, run:

    $ ionic build ios
    $ ionic emulate ios

Substitute ios with android for Android testing. 

## Testing as a native app

Testing on Android is much easier and faster. To test on the device, simply plug it in, and run

    $ ionic run android

If this doesn't work, make sure you have USB debugging enabled on your device.

