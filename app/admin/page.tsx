import { User } from "@prisma/client";
import { columns } from "./admin/columndef";
import { DataTable } from "./admin/datatable";
import { db } from "@/lib/db";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  const users = await db.user.findMany();
  return users
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
