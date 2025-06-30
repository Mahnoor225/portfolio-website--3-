"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Loader2, Send } from "lucide-react"

export function SubmitButtonComponent() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 size={20} className="mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send size={20} className="mr-2" />
          Send Message
        </>
      )}
    </Button>
  )
}
