"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import createContact from "@/actions/createContact";
// import { useActionState } from "react";

export default function ContactForm() {
  //   const [state, formAction] = useActionState(create, {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(formData) {
    setIsSubmitting(true);
    setMessage("");

    const result = await createContact(formData);
    console.log(result);
    if (result.success) {
      setMessage("Message sent successfully!");
      const form = document.getElementById("contact-form");
      form.reset();
    } else {
      setMessage(result.error || "Something went wrong.");
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Contact us</CardTitle>
        </CardHeader>
        <CardContent>
          {message && (
            <div
              className={`mb-6 p-4 rounded ${
                message.includes("success")
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {message}
            </div>
          )}
          <form id="contact-form" className="space-y-6" action={onSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label>Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Input
                  className="min-h-[120px]"
                  id="message"
                  name="message"
                  type="text"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        {/* <form action={formAction}>
          <label htmlFor="">First Input</label>
          <input type="text" name="firstInput" />{" "}
          <label htmlFor="">First Input</label>
          <input type="text" name="firstInput" />{" "}
          <label htmlFor="">First Input</label>
          <input type="text" name="firstInput" />{" "}
          <label htmlFor="">First Input</label>
          <input type="text" name="firstInput" />
          <button type="submit">Create</button>
        </form> */}
      </Card>
    </>
  );
}
