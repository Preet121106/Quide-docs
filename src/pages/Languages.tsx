// languages.tsx
// -----------------------------------------------------------------------------
// A standalone React component that renders the “Configuration → Application
// Settings” block exactly like the screenshot.
//
// Drop it anywhere in your Vite/React project (e.g. src/pages/languages.tsx)
// and route to it as needed.
//

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Languages = () => {
  // Supported languages list (feel free to extend)
  const supported = [
"ABAP", "ActionScript", "Ada", "Agda", "ALGOL", "Alice", "AMPL", "Apex",
  "APL", "Assembly", "AutoHotkey", "Awk", "Ballerina", "Bash", "Batch",
  "bc", "Befunge", "Berry", "BlitzBasic", "C", "C#", "C++", "Ceylon",
  "Chapel", "Clojure", "COBOL", "CoffeeScript", "Common Lisp", "Crystal",
  "CSS", "CUDA", "D", "Dart", "Delphi/Object Pascal", "Elixir", "Elm",
  "Emacs Lisp", "Erlang", "F#", "Factor", "Fantom", "Forth", "Fortran",
  "GAMS", "GDScript", "GML", "Go", "Golang", "Grafana Loki LQL", "Groovy",
  "Hack", "Haskell", "Haxe", "HTML", "IDL", "Idris", "Io", "J", "J#",
  "JScript", "Java", "JavaScript", "JSONiq", "Julia", "Kotlin", "LabVIEW",
  "Ladder Logic", "Less", "LFE", "Lisp", "LiveScript", "Logo", "Lua",
  "MATLAB", "Mercury", "Nim", "Nix", "Objective-C", "OCaml", "OpenCL",
  "OpenSCAD", "Oz", "Pascal", "Perl", "PHP", "PL/I", "PL/SQL", "PostScript",
  "PowerBuilder", "PowerShell", "Processing", "Prolog", "Puppet", "PureScript",
  "Python", "Q#", "QML", "R", "Racket", "Raku", "ReasonML", "Red", "Ring",
  "Ruby", "Rust", "Sass", "Scala", "Scheme", "Scratch", "Sed", "Shell",
  "Smalltalk", "Solidity", "SPARK", "SQL", "Squirrel", "Standard ML",
  "Swift", "SystemVerilog", "Tcl", "TeX", "TypeScript",
  ]

  // Helper to produce the comma‑separated string with “and” before the last item
  const supportedString =
    supported.slice(0, -1).join(", ") + ", and " + supported.at(-1)

  return (
    <div className="space-y-4">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
        <p className="text-muted-foreground">
          Customize Quide to match your needs and preferences.
        </p>
      </div>

      <Separator />

      {/* Settings card */}
      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            You can manage your language preferences in the{" "}
            <a href="/settings" className="underline">
              settings
            </a>{" "}
            page.
          </p>

          <p>
            Currently, we offer support for<br /><br />{supportedString}.<br /><br /> and even more.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Languages
