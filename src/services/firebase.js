import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4jSYgGc5ny3DMa0jwXTVyQei51ehoLEk",
  authDomain: "cyberlife-3901b.firebaseapp.com",
  projectId: "cyberlife-3901b",
  storageBucket: "cyberlife-3901b.appspot.com",
  messagingSenderId: "959112212095",
  appId: "1:959112212095:web:2d3d86f6c73aff7703594a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSingleItem(itemid) {
  const docRef = doc(db, "products", itemid);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getItems() {
  const productsCollection = collection(db, "products");
  const querysnapshot = await getDocs(productsCollection);

  const dataDocs = querysnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
}

export async function getItemsByType(typeid) {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("type", "==", typeid));
  const querySnapshot = await getDocs(q);
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
}

export function setOrderId(id) {
  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Juan",
        phone: "12345678",
        email: "juan@gmail.com",
      },
      items: [{ id: "IVrM4gSfTwm9hXmlJKxP", model: "AP700", price: 3000 }],
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };
}
