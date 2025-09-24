"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { sendMessageServerAction } from "../actions/sendMailServerAction";

const labelWithRequiredStar = ({ label }: { label: string }) => {
  return (
    <Label htmlFor={label.toLowerCase()}>
      <span className="flex">
        <span>{label}</span>
        <span className="text-red-500">*</span>
      </span>
    </Label>
  );
};

type FormState = {
  success?: string;
  error?: string;
  fullnameError?: string;
  emailError?: string;
  messageError?: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>({});
  const [isPending, startTransition] = useTransition();

  // Watch for success / error messages
  useEffect(() => {
    if (formState?.success) {
      toast.success(formState.success);
      setFormData({ fullname: "", email: "", message: "" });
    }
  }, [formState?.success]);

  useEffect(() => {
    if (formState?.error) {
      toast.error(formState.error);
    }
  }, [formState?.error]);

  async function handleSubmit(formDataObj: FormData) {
    startTransition(async () => {
      const result = await sendMessageServerAction({}, formDataObj);
      setFormState(result);
    });
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-4">
        {labelWithRequiredStar({ label: "Name" })}
        <div className="space-y-1">
          <Input
            type="text"
            required
            id="name"
            placeholder="Your name, your fame"
            className="px-2 py-6"
            name="fullname"
            value={formData.fullname}
            disabled={isPending}
            aria-invalid={!!formState?.fullnameError}
            aria-errormessage="fullname-error"
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
          {formState?.fullnameError && (
            <span
              id="fullname-error"
              className="text-sm text-red-500"
              role="alert"
            >
              {formState.fullnameError}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-4">
        {labelWithRequiredStar({ label: "Email" })}
        <div className="flex flex-col space-y-1">
          <Input
            type="email"
            required
            id="email"
            placeholder="Where can I reach you back?"
            className="px-2 py-6"
            name="email"
            value={formData.email}
            disabled={isPending}
            aria-invalid={!!formState?.emailError}
            aria-errormessage="email-error"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span className="text-sm text-muted-foreground">
            Temporary emails are also accepted, unless you wish to hear back 😉
          </span>
          {formState?.emailError && (
            <span
              id="email-error"
              className="text-sm text-red-500"
              role="alert"
            >
              {formState.emailError}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-4">
        {labelWithRequiredStar({ label: "Message" })}
        <div className="space-y-1">
          <Textarea
            required
            id="message"
            placeholder="Your words, my inbox."
            className="px-2 py-4"
            name="message"
            value={formData.message}
            disabled={isPending}
            aria-invalid={!!formState?.messageError}
            aria-errormessage="message-error"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {formState?.messageError && (
            <span
              id="message-error"
              className="text-sm text-red-500"
              role="alert"
            >
              {formState.messageError}
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="default"
          disabled={isPending}
        >
          {isPending ? "Transporting your message to my inbox... 📨" : "Submit"}
        </Button>

        <Button
          type="reset"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="outline"
          onClick={() =>
            setFormData({
              fullname: "",
              email: "",
              message: "",
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
