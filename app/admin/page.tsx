'use client'
import { columns } from "./admin/columndef";
import { DataTable } from "./admin/datatable";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DemoPage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/add-user');
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={userData} />
    </div>
  );
}
