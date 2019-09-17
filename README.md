# react-native-tab-layout

## Getting started

`$ npm install react-native-tab-layout --save`

### Mostly automatic installation

`$ react-native link react-native-tab-layout`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.busfor.rntablayout.TabLayoutPackage;` to the imports at the top of the file
  - Add `new TabLayoutPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-tab-layout'
  	project(':react-native-tab-layout').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-tab-layout/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-tab-layout')
  	```


## Usage
```javascript
import TabLayout from 'react-native-tab-layout';

// TODO: What to do with the module?
TabLayout;
```
