import List from "../components/List";
import { data } from "../stores/data";
import { db } from "../stores/db";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Clear the database
    db.friends.clear();
    // Populate the database with some data
    db.friends.bulkAdd(data);
    return () => {
      // Clear the database
      db.friends.clear();
    };
  }, []);

  return (
    <div>
      <List />
    </div>
  );
}
