import { firebaseConfig } from '../firebase/firebase.conf';

export const environment = {
  production: false,
  ...firebaseConfig
};
