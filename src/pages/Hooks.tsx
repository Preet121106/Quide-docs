import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Hooks = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Can’t See Screen</h1>
        <p className="text-muted-foreground mt-1">
          Follow these steps to resolve screen visibility issues.
        </p>
      </div>

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
                Press ⌘ + B to toggle visibility
              </p>
              <p className="text-muted-foreground text-sm">
                Your application might be hidden, press ⌘ + B to toggle visibility
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
                Uninstall and reinstall the app using the link below.
              </p>
              <p className="text-muted-foreground text-sm">
                Sometimes a simple refresh can fix display issues
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Hooks
