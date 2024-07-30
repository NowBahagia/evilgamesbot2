import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  "Your Firebase Private Keys Here"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db};
