import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJHnLhE215BntDqgVZ1BawLM-fLn0bmV4",
  authDomain: "meuprimeirofirebase-fbac4.firebaseapp.com",
  projectId: "meuprimeirofirebase-fbac4",
  storageBucket: "meuprimeirofirebase-fbac4.appspot.com",
  messagingSenderId: "1078501627330",
  appId: "1:1078501627330:web:dd95449948cdef305f725b"
};


firebase.initializeApp(firebaseConfig);


import React, {useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App(){
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore(). collection ('Nomes');
      const snapshot = await nomesCollection.get();
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
      });

      setNomes(data);
    };
  
    fetchData();

  }, []);

  return (
    <view style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nomes} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </view>
  );
}