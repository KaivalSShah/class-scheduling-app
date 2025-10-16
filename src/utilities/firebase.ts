import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyClO9EH5HdtJfYblso7Y1woBSksE6zwVEc",
  authDomain: "class-scheduling-app-f5901.firebaseapp.com",
  databaseURL: "https://class-scheduling-app-f5901-default-rtdb.firebaseio.com",
  projectId: "class-scheduling-app-f5901",
  storageBucket: "class-scheduling-app-f5901.firebasestorage.app",
  messagingSenderId: "733472529922",
  appId: "1:733472529922:web:2b21ba9a6af26fa669511b"
};

const firebase = initializeApp(firebaseConfig);

const database = getDatabase(firebase);

type JsonQueryResult<T> = [T | undefined, boolean, Error | null];

export function useDataQuery<T>(url: string): JsonQueryResult<T> {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setData(undefined);
    setLoading(true);
    setError((null));
    return onValue(ref(database), (snapshot) => {
        setData( snapshot.val() );
        console.log("got a data")
        setLoading(false);
      }, (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, [ url ]);

  return [ data, loading, error ];
};