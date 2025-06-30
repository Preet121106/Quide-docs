import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const QuickStart = () => {
  const checks = [
    {
      title: "Download the free app",
      description: (
        <>
          Download the free Interview Coder application from our{" "}
          <span className="text-sky-400 ">website</span>
        </>
      ),
    },
    {
      title: "Share your screen on your meeting provider",
      description:
        "Start a meeting with yourself on your meeting provider of choice (Ex: Google Meet, Zoom) and share your full screen",
    },
    {
      title: "Check visibility",
      description: (
        <>
          If you can see the app while screen sharing, please try updating your system to the newest OS update.
          If on Zoom, go <span className="text-sky-400 ">shows when I share screen</span>&nbsp;section.
        </>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Basic Checks</h1>
        <p className="text-muted-foreground">
          Verify if Interview Coder works on your system before subscribing.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Verification Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {checks.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-primary font-semibold">{index + 1}</div>
              <div>
                <div className="font-semibold text-foreground">{item.title}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default QuickStart
