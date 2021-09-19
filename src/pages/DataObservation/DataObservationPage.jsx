import React, {useState, useEffect} from "react";
import "./dataobservation.css";
import {firebaseConfig} from "./../../api/fire";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

const DataObservationPage = () => {
  const [data, setData] = useState([]); //data from firestore
  const db = getFirestore();

  //   console.log(db);

  useEffect(() => {
    getDocs(collection(db, "Sites"))
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, []); //empty array, no dep, launch once upon render

  return (
    <div className="obheading">
      <h4 style={{color: "black", textAlign: "center", margin: 25}}>
        Data observation
      </h4>
    </div>
  );
};

export default DataObservationPage;
