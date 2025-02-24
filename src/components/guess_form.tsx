"use client";
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import { useReCaptcha } from "next-recaptcha-v3";


export const GuessForm = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const makeGuess = async (event: FormEvent<HTMLFormElement>) => {
    if(!event.nativeEvent.target) return;
    event.preventDefault();
    setSubmitting(true);
    const token = await executeRecaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_ACTION!);

    const form = new FormData(event.nativeEvent.target as HTMLFormElement)
    const guess = form.get("guess")

    const response = await fetch("/api/guesses", {
      method: "POST",
      body: JSON.stringify({ guess, token }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responseBody = await response.json();
    setSubmitting(false);
    setSubmitSuccess(responseBody.success);
  }

  return (
    <form onSubmit={makeGuess} className="mx-auto mt-8 flex max-w-md items-center space-x-2">
              <Input name="guess" placeholder="Make a guess..." className="h-12 rounded-lg bg-white" />
              <Button disabled={submitting || !!submitSuccess} className="h-12 px-12 rounded-lg">
                
                {submitting && <Loader2 className="animate-spin" />}
                {submitting ? "Submitting..." : !!submitSuccess ? "Maybe...":"Submit"}
              </Button>
            </form>
  )
}