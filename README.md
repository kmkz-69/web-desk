# Web To Desktop Application

Converts your website to a native desktop application based on the Electron framework. Without learning any programming language, you can build your macOS, Windows and Linux application within a few minutes by following this documentation.

## Files Structure
*  public folder - All used Images, stylesheet files included in this folder.
*  public folder - All used Images, stylesheet files included in this folder.
*  Main menu template


###  Main menu template
* On your project folder open config.js file. Change Url value.
```
//Main Application URL
'Url' : 'https://localhost:3000',
```

### Change application Name
* First, you need to change the name attribute of the package.json file in the application root directory .
``
"name": "New_App_Name",
``
Next, modify config.js file appName value.
```
'appName' : 'demo',
```

### Change application description

* First you need to change the application root directory package.json description attribute.
``
"description": "Convert Website to a Desktop application",``

### Change the width and height

* Open your application config.js file, after that change the height, width, minHeight, and minWidth values.
```
//Application window width and height
'width' : Replace_Value,
'height' : Replace_Value,
'minWidth' : Replace_Value,
'minHeight' : Replace_Value,
```

### Build the Application for platforms
* To build all platform :
 run ``yarn build ``

* To build the macOS platform:
 run ``yarn mac ``

* To build the Windows platform:
  run ``yarn win ``

*  To build the Linux platform:
   run ``yarn linux ``
   
   ## Support
   
   ### Ask a question about App
   
   You can ask questions and initiate [discussions](https://github.com/kmkz-69/web-desktop-app/discussions/) about Prisma-related topics in the `prisma` repository on GitHub.

👉 [**Ask a question**](https://github.com/kmkz-69/web-desktop-app/discussions/new)

<h3 align="left">Support:</h3>
<p><a href="https://ko-fi.com/chatr"> <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="chatr" /></a></p><br><br>
