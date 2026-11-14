# JV Cabiao Item Intake

The web app is packaged for Android with Capacitor.

## Staff records

Use the **Customer / Staff** switch above the form to change views. Staff records are protected by a six-digit PIN, which should be set before handing the device to a customer. Switching back to Customer hides and clears the staff records from the page; records remain stored locally in the browser and are not encrypted.

The intake form also includes an optional item-issue description, visible with the record in the staff view. Staff can copy a complete record to the clipboard from the staff records screen.

## Build the APK

Install Node.js, JDK 21, and Android SDK Platform 35 plus Build Tools 35.0.0. Then run:

```sh
npm install
npm run android:debug
```

The installable debug APK is written to `dist/JV-Cabiao-Item-Intake.apk`.
