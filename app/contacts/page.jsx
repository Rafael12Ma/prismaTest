import ContactsList from "@/components/contacts-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-4xl mb-8">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"mb-4 bg-transparent"}
            >
              Back to form
            </Button>
          </Link>
          <ContactsList />
        </div>
      </main>
    </>
  );
}
