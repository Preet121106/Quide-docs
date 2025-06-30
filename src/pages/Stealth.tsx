/* eslint-disable no-irregular-whitespace */
// src/pages/Undetectability.tsx
// -----------------------------------------------------------------------------
// Renders the “Undetectability” information block with detection methods and
// counter‑measures exactly as in the reference screenshot.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShieldAlert, ShieldCheck } from "lucide-react"

const Undetectability = () => {
  // Detection methods + green counter‑measures
  const methods = [
    {
      title: "Screen Sharing Detection",
      detection:
        "Interviewers will ask you to share your screen on platforms like Zoom, Google Meet, Hackerrank, and Coderpad.",
      counter:
        "App is invisible to screen‑sharing software and screenshots.",
    },
    {
      title: "Asking for reasoning behind solutions",
      detection:
        "Interviewers will ask you to explain your solution and don’t just want code.",
      counter:
        "Interview Coder comes with every line of code commented, plus a few sentences of thoughts that naturally lead you to a solution.",
    },
    {
      title: "Webcam Monitoring",
      detection:
        "Platforms track eye movements and suspicious looking away from screen.",
      counter:
        "Use ⌘ +  arrow keys to move the app with the solutions over your coding area so your eyes never move from the code area.",
    },
    {
      title: "Active tab monitoring",
      detection:
        "Platforms will check if your cursor becomes inactive, or if you move from the active tab.",
      counter:
        "Interview Coder is designed so that when you toggle visibility with ⌘ + B, your cursor will stay focused, and your active tab will not change at all.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Undetectability</h1>
        <p className="text-muted-foreground">
          Learn how Interview Coder remains completely undetectable during
          interviews.
        </p>
      </div>

      <Separator />

      {/* Intro copy */}
      <div className="space-y-3 text-sm">
        <p>
          Coding‑interview platforms employ various detection methods to prevent
          cheating. Here’s how they try to detect tools like Interview Coder,
          and how we counter each measure.
        </p>
        <p className="text-green-400 font-medium">
          Interview Coder has never been detected in our real interview tests
          by any coding platform.
        </p>
      </div>

      <Separator />

      {/* Detection methods + counter‑measures */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">
          Detection Methods &amp; Our Counter‑Measures
        </h2>

        {methods.map((m) => (
          <Card key={m.title}>
            <CardHeader>
              <CardTitle className="text-base">{m.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Detection (red) */}
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-red-500 mt-0.5" />
                <p className="text-sm text-red-300">{m.detection}</p>
              </div>

              {/* Counter‑measure (green) */}
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-green-500 mt-0.5" />
                <p className="text-sm text-green-400">{m.counter}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Undetectability
