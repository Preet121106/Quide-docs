import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
// import Image from "next/image" // if using Next.js

const Troubleshooting = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Shows When Sharing Screen</h1>
        <p className="text-muted-foreground mt-1">
          Quick fixes for visibility issues during screen sharing.
        </p>
      </div>

      {/* Zoom Card */}
      <Card className="bg-[#0d0d0d] border border-[#1a1a1a] text-white">
        <CardHeader>
          <CardTitle className="text-base text-white">
            The app works with current Zoom versions.
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            All you have to do is enable <strong className="text-white">Advanced capture with window filtering</strong>.
          </p>
          <div className="rounded-md overflow-hidden border border-[#333]">
            {/* Replace this Image with your actual screenshot */}
            <img
              src="/zoom-settings.png" // Update this path to your actual static image
              alt="Zoom advanced screen share setting"
              width={800}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </CardContent>
      </Card>

      {/* MacOS Alert */}
      <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-red-400 text-sm flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 text-red-400" />
        <div>
          <p className="font-semibold mb-1">MacOS Screen Sharing Error</p>
          <p>
            Due to an unresolved bug in Electron, some WebRTC-based screen-sharing software may be able to see Interview Coder on macOS while sharing your full screen.
            To see if you're affected, download the application without subscribing and try to screen-share. If it shows, then you're affected.
            Please be careful to note this as we do not offer refunds.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Troubleshooting
