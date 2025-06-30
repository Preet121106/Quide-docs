import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle } from "lucide-react"

const Installation = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="flex font-semibold text-2xl">Get Started</h1>
        <p>Welcome to Quide. This Guide will help you to setup the app Quickly.</p>
      </div>
      {/* Quick Start Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Quick Start Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {[
            {
              title: "Download the Quide App",
              description: <>Download from <span className="text-sky-400">our website</span></>,
            },
            {
              title: "Unzip the folder",
              description: "Move the main folder into your Applications folder",
            },
            {
              title: "Launch",
              description: "Run the vbs file",
            },
            {
              title: "Perform basic checks",
              description: <>Before starting, ensure you pass the <span className="text-sky-400">basic checks</span>.</>,
            },
            {
              title: "Learn all the commands",
              description: <>Before using memorize the shortcuts ( ⌘ + ) in the <span className="text-sky-400">settings</span> page.</>,
            },
            {
              title: "All done",
              description: "Start acing your technicals!",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-primary font-semibold">{i + 1}</div>
              <div>
                <div className="font-semibold text-foreground">{item.title}</div>
                <div className="text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle className="text-xl">How to Use</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-hidden rounded-lg">
          {/* 
            Replace /how-to-use.mp4 with your actual file
            You can also swap this <video> for a ReactPlayer or
            an <iframe>‑based embed if you’re hosting on YouTube/Vimeo. 
          */}
          <video
            className="w-full h-auto block rounded-lg "
            src="/how-to-use.mp4"
            controls
            poster="/how-to-use-thumb.jpg"   /* optional poster image */
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default Installation
