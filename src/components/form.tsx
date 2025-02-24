"use client";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormEvent, useState } from "react";
import { countries } from "@/app/util/util";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import { useReCaptcha } from "next-recaptcha-v3";


export const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const { executeRecaptcha } = useReCaptcha();

  const vendorContact = async (event: FormEvent<HTMLFormElement>) => {
    if(!event.nativeEvent.target) return;
    event.preventDefault();
    const token = await executeRecaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_ACTION!);
    setSubmitting(true);
    const form = new FormData(event.nativeEvent.target as HTMLFormElement)
    const name = form.get("name")
    const email = form.get("email")
    const website = form.get("website")
    const country = form.get("country")
    const description = form.get("description")

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, website, country, description, token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseBody = await response.json();
    setResponseMessage(responseBody.message);
    setSubmitting(false);
    setSubmitSuccess(responseBody.success);
  }

  return (

    <form onSubmit={vendorContact} className="mx-auto mt-8 max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Business Name</Label>
                <Input id="name" name="name" placeholder="Your business name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" name="website" type="url" placeholder="https://" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Country</Label>
                <Select name="country">
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Tell us about your products</Label>
                <Textarea id="description" name="description" placeholder="Describe your products and their sustainable aspects" />
              </div>
              <Button disabled={submitting || !!submitSuccess} size="lg" className="w-full">
                
                {submitting && <Loader2 className="animate-spin" />}
                {submitting ? "Submitting..." : !!submitSuccess ? "Thank you for applying!":"Apply to Sell"}
              </Button>
              {responseMessage && <p className="text-center text-sm text-muted-foreground">{responseMessage}</p>}
            </form>
  )
}