import { ref, onValue } from "firebase/database";
import { db } from "../firebase/firebase";

async function getDB() {
  return new Promise((resolve, reject) => {
    const starCountRef = ref(db);

    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log("get db successfully");
        resolve(data);
      },
      (error) => {
        console.error("Error getting data:", error);
        reject(error);
      }
    );
  });
}

export default getDB;
