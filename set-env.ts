const isDevMode = require('isDevMode');
const fs = require('fs');
const writeFile = fs.writeFile;

require('dotenv').config();

const targetPath = (isDevMode) ? './src/environments/environment.ts' : './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
  production: ${!isDevMode},
  firebase: {
    apiKey: '${process.env['FIREBASE_API_KEY']}',
    authDomain: '${process.env['FIREBASE_AUTH_DOMAIN']}',
    projectId: '${process.env['FIREBASE_PROJECT_ID']}',
    storageBucket: '${process.env['FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env['FIREBASE_APP_ID']}',
    measurementId: '${process.env['FIREBASE_MEASUREMENT_ID']}'
  }
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err: any) => {
  if (err) {
    return console.log(err);
  }
});
