
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Zap, Shield, Smartphone } from "lucide-react"

const Introduction = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            v2.0.0
          </Badge>
          <Badge variant="outline">Latest</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Our Documentation
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Comprehensive guides and API reference to help you build amazing applications. 
          Get started quickly with our modern development framework.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>Fast & Modern</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built with the latest technologies for optimal performance and developer experience.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>Secure by Default</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Security best practices built-in with comprehensive testing and validation.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>Responsive Design</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Fully responsive components that work seamlessly across all devices.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>Comprehensive Docs</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Detailed documentation with examples, guides, and best practices.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Get up and running in minutes with our streamlined setup process:
          </p>
          <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
            <div className="space-y-2">
              <div className="text-muted-foreground"># Install the package</div>
              <div className="text-foreground">npm install our-framework</div>
              <div className="text-muted-foreground mt-4"># Start developing</div>
              <div className="text-foreground">npm run dev</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Check out our <a href="/installation" className="text-primary hover:underline">Installation Guide</a> for detailed setup instructions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Introduction
