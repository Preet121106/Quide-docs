import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Utilities = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Solution Doesn't Load</h1>
        <p className="text-muted-foreground mt-1">
          Follow these steps if solutions are not loading in Interview Coder.
        </p>
      </div>

      {/* Card with Troubleshooting Steps */}
      <Card className="bg-[#0d0d0d] border border-[#1a1a1a] text-white">
        <CardHeader>
          <CardTitle className="text-base text-white">Troubleshooting Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-white text-sm font-medium">
              1
            </div>
            <div>
              <p className="font-medium text-white">
                Check Screen & System Audio Recording Permissions
              </p>
              <p className="text-muted-foreground text-sm">
                Make sure Screen & System Audio Recording permissions are enabled for Interview Coder (also if these are not enabled a yellow pop up might appear)
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-white text-sm font-medium">
              2
            </div>
            <div>
              <p className="font-medium text-white">
                Reinstall the Application
              </p>
              <p className="text-muted-foreground text-sm">
                Delete all existing installations and reinstall from our website
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-white text-sm font-medium">
              3
            </div>
            <div>
              <p className="font-medium text-white">
                Contact Support
              </p>
              <p className="text-muted-foreground text-sm">
                If the issue persists, reach out to our support team for assistance
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Utilities
