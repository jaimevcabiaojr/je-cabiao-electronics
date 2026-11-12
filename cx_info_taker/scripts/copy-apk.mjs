import { copyFile, mkdir } from "node:fs/promises";

const apkPath = "android/app/build/outputs/apk/debug/app-debug.apk";
const outputPath = "dist/JV-Cabiao-Item-Intake.apk";

await mkdir("dist", { recursive: true });
await copyFile(apkPath, outputPath);
console.log(`APK copied to ${outputPath}`);
