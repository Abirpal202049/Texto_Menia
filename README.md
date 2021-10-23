# Texto_Menia - Text Based Utility App
It is an text based utility app
#### Link :- [Texto_Menia](https://clone-a4dc8.web.app)


# Getting Started with Create React App

### If you want to start with a new app
+ ##### `npx create-react-app my-app`
+ ##### `cd my-app`
+ ##### `npm start`
+ For invoking Mongo Doemon 

      mongod

### If you want to run this app on your system
+ #### `npm install` [ For downloding the Node Module to your system ]
+ #### `npm start`     [ For Running the app on Local Host]


# How To Deploy Your React App On Firebase
### `npm install -g firebase-tools`
Run this command to Install Firebase CLI (Command Line Tools) globally on your system and if you dont want to install globally on your system remove '-g' from the command

### `firebase login`
Run this command to login to firebase in your Terminal 

If you get any <span style="background-color: #ff0000">ERROR</span> as shown below 

 ~~~~~~~~
firebase : File C:\Users\Abir Pal\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/LinkID=135170.
At line:1 char:1
+ firebase login
+ ~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
 ~~~~~~~~
### `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
Run this command before to login to firebase successfully in your Terminal if you get the above error
### `firebase init`
Run this command to Initiate your project. 
~~~~

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##      
     ######    ##  ########  ######   ########  #########  ######  ######  
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##      
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\Abir Pal\Desktop\REACT\textutils

? Are you ready to proceed? Yes 

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: clone-a4dc8 (google-clone)
i  Using project clone-a4dc8 (google-clone)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
+  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
~~~~
### `npm run build`
Run the following command for Creating an optimized production build...
~~~
> textutils@0.1.0 build C:\Users\Abir Pal\Desktop\REACT\textutils
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  49.72 KB  build\static\js\2.a53ad94d.chunk.js
  3.79 KB   build\static\js\main.68b12185.chunk.js
  1.62 KB   build\static\js\3.75684c19.chunk.js
  1.17 KB   build\static\js\runtime-main.adc6e6b9.js
  434 B     build\static\css\main.dd9b91a1.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

~~~

### `firebase deploy`   or   `firebase deploy --only hosting`
Just run the following command to deploy your app:
~~~
=== Deploying to 'clone-a4dc8'...

i  deploying hosting
i  hosting[clone-a4dc8]: beginning deploy...
i  hosting[clone-a4dc8]: found 22 files in build
+  hosting[clone-a4dc8]: file upload complete
i  hosting[clone-a4dc8]: finalizing version...
+  hosting[clone-a4dc8]: version finalized
i  hosting[clone-a4dc8]: releasing new version...
+  hosting[clone-a4dc8]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/clone-a4dc8/overview
Hosting URL: https://clone-a4dc8.web.app
~~~
