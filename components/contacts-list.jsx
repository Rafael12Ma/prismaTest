import { getContacts } from "@/actions/createContact";
import { Badge } from "lucide-react";

export default async function ContactsList() {
  const contacts = await getContacts();

  console.log(contacts);
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Contact Messages</h2>
          <Badge variant="secondary">{contacts.length} messages</Badge>
        </div>
      </div>
    </>
  );
}
