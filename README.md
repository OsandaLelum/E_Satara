﻿# E_Satara
*Youtube video play requirments*

Install the latest version to your package.json:

$ npm install react-native-youtube -S

React Native automatically connects this native module to your iOS and Android projects. On Android this linking is supported with Gradle and is done automatically after installation. On iOS the linking is done by Cocoapods, without the need to add this library to the Podfile, Just run pod install after installation.

IMPORTANT! (Android Only): The Android implementation of this component needs to have the official YouTube app installed on the device. Otherwise the user will be prompted to install / activate the app, and an error event will be triggered with SERVICE_MISSING/SERVICE_DISABLED.
OPTIONAL: Activated sound when iPhone (iOS) is on vibrate mode

Open AppDelegate.m and add :

    #import <AVFoundation/AVFoundation.h>

    [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error: nil]; in your didFinishLaunchingWithOptions method


OPTIONAL: Activated sound when iPhone (iOS) is on vibrate mode

Open AppDelegate.m and add :

    #import <AVFoundation/AVFoundation.h>

    [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error: nil]; in your didFinishLaunchingWithOptions method



