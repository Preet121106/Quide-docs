// components/SubscriptionHelpForm.tsx
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


const SubscriptionHelpForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
        setStatus("success")
        setLoading(false)
        formRef.current?.reset()
      })
      .catch(() => {
        setStatus("error")
        setLoading(false)
      })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-2">Subscription Help Form</h1>
      <p className="text-muted-foreground mb-6">
        Fill out this form to cancel a subscription, request a refund, or raise a billing issue.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-zinc-900 p-6 rounded-lg shadow-md">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring focus:ring-sky-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Id: </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring focus:ring-sky-400"
          />
        </div>

        {/* Requested Action */}
        <div>
          <label className="block text-sm font-medium mb-1">Requested Action:</label>
          <div className="flex flex-wrap gap-4">
            {["Performance Issue", "Suggestion Feedback", "Others"].map(action => (
              <label key={action} className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded border border-zinc-600">
                <input type="radio" name="title" value={action} required />
                {action}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Please describe your issue elaborately:</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring focus:ring-sky-400 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-300 text-black font-semibold px-6 py-2 rounded transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </div>

        {/* Status Message */}
        {status === "success" && <p className="text-green-400 text-sm">Message sent successfully!.Please wait patiently, Our Experts are reaching you back</p>}
        {status === "error" && <p className="text-red-500 text-sm">Failed to send message. Try again later.</p>}
      </form>
    </div>
  )
}

export default SubscriptionHelpForm
