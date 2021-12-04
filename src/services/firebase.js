import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW9UM4ZmIOw65RNHCTytqFTvQmO5mMfn0",
    authDomain: "dados-de-transito---recife-pe.firebaseapp.com",
    databaseURL: "https://dados-de-transito---recife-pe-default-rtdb.firebaseio.com/",
    projectId: "dados-de-transito---recife-pe",
    storageBucket: "dados-de-transito---recife-pe.appspot.com",
    messagingSenderId: "596879868000",
    appId: "1:596879868000:web:21e7ad5164773fb0d20305",
    measurementId: "G-R81VKS0FK8"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);


// https://github.com/machadop1407/firebase-react-crud/blob/main/src/App.js

const caminhoCollection = collection(db, "acidentes");

const getAcidentes = async() => {
    // get acidentes
    const data = await getDocs(caminhoCollection);
    // map pra extrair dados
    const dados = data.docs.map((doc) => ({...doc.data(), id: doc.id }));
    console.log(dados)
};

export default app