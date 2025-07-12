import db from '../config/db.js';
import {
  collection, getDocs, doc, getDoc, setDoc, deleteDoc
} from 'firebase/firestore';

const productsRef = collection(db, 'products');

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(productsRef, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const createProduct = async (data) => {
  const newDoc = doc(productsRef);
  await setDoc(newDoc, data);
  return { id: newDoc.id, ...data };
};

export const deleteProduct = async (id) => {
  const docRef = doc(productsRef, id);
  await deleteDoc(docRef);
};
