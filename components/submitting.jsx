import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function Submitting() {
  const submitting = useFormStatus();
  return (
    <>
      <Button type="submit" className="w-full">
        {!submitting ? "Sending..." : "Send message"}
      </Button>
    </>
  );
}
