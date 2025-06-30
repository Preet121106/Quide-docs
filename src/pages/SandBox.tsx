/* eslint-disable no-irregular-whitespace */
// import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const codeBox =
  "bg-muted/30 rounded-lg p-4 font-mono text-xs overflow-x-auto leading-snug"

  const highlight = {
  sky: "text-sky-400 font-semibold",
  blue: "text-blue-400 font-semibold",
  green: "text-green-400 font-semibold",
}

const Sandbox = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <span className="text-xs bg-sky-300 text-black rounded-full px-3 py-1 font-semibold">
          Tech Explained
        </span>
        <h1 className="text-4xl font-bold leading-tight">
          How Quide is Still Undetectable
        </h1>
        <p className="text-muted-foreground text-lg">
          We’ve heard the concerns. Trust us, Quide still works. Here’s how we know.
        </p>
        </div>

      {/* Section 1: The Browser Bubble */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">The Browser Bubble</h2>
        <p className="text-muted-foreground text-sm">
          Most coding interviews happen right in your web browser (like on Hackerrank, CoderPad, or CodeSignal).
          Browsers are designed like secure bubbles – what happens inside one tab generally can’t see or mess with
          anything outside of it. This is called “sandboxing,” and it’s a core security feature.
        </p>
        <p className="text-muted-foreground text-sm">
          Think of the interview website running in a browser tab. It can show you the coding problem and run its own
          scripts, but it’s walled off from the rest of your computer. It simply doesn’t have permission to peek at
          other apps you might be running.
        </p>
        <img
          src="/your-path/image-browser-bubble.png"
          alt="Browser Bubble"
          width={600}
          height={600}
          className="rounded-lg border"
        />
      </div>

      {/* Section 2: What Interview Platforms Can/Cannot See */}
       <div className="space-y-10">
    {/* ─────────── CAN SEE ─────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          What Interview Platforms{" "}
          <span className={highlight.blue}>*Can*</span> See (Inside the Bubble)
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 text-sm text-muted-foreground">
        {/* Losing Focus */}
        <div className="space-y-2">
          <p>
            <span className={highlight.sky}>Losing Focus / Switching Tabs:</span>{" "}
            They know if you click outside the browser window or switch tabs. But they{" "}
            <span className="italic">don’t</span> know what you switched to.
          </p>
          <pre className={codeBox}>
{`// they can detect this
window.addEventListener("blur", () => {
  console.log("user looked away from the tab!");
});`}
          </pre>
        </div>

        {/* Pasting Code */}
        <div className="space-y-2">
          <p>
            <span className={highlight.sky}>Pasting Code:</span> They can tell if
            you paste something into the code editor, potentially flagging large or
            frequent pastes.
          </p>
          <pre className={codeBox}>
{`// ...and they can detect this.
document.addEventListener("paste", (event) => {
  console.log("Paste detected!");
});`}
          </pre>
        </div>

        <p>
          <span className={highlight.sky}>Webcam Monitoring (Sometimes):</span> Some
          platforms might use your webcam to monitor eye movement,{" "}
          <span className={highlight.green}>flagging excessive looking away</span>.
        </p>

        <p>
          <span className={highlight.sky}>Screen Sharing (If Requested):</span> If
          you’re asked to share your screen via Zoom, Meet, or the platform itself,
          they can see what you choose to share.
        </p>

        <p>
          They might also try to guess based on typing speed, but it’s often unreliable.
        </p>
      </CardContent>
    </Card>

    {/* ─────────── CANNOT SEE ─────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          What They <span className={highlight.blue}>*Cannot*</span> See (Outside the
          Bubble)
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 text-sm text-muted-foreground">
        <p>
          Crucially, because of the browser sandbox and how operating systems work,
          these platforms <span className="font-semibold">cannot</span> reliably:
        </p>

        <p>
          <span className={highlight.sky}>Know *What* App You Switched To:</span> When
          you lose focus (the “blur” event), the browser gives no information about
          which application became active.
        </p>

        {/* Scan running */}
        <div className="space-y-2">
          <p>
            <span className={highlight.sky}>Scan Running Apps:</span> There’s no way
            for a website to get a list of other programs running on your computer.
            This is a fundamental OS security boundary.
          </p>
          <pre className={codeBox}>
{`// This cannot be done in a webpage
function getRunningProcesses() {
  return navigator.appRunningProcesses ?? [];
}

if (getRunningProcesses().includes("someApp.exe")) {
  // impossible check
}`}
          </pre>
        </div>

        <p>
          <span className={highlight.sky}>Read Other App Memory:</span> Accessing the
          memory of other applications is strictly forbidden by your{" "}
          <span className={highlight.green}>operating system</span>.
        </p>

        <p>
          <span className={highlight.sky}>Track Your Every Click/Key Globally:</span>{" "}
          They can only see clicks and keys typed{" "}
          <span className="italic">inside their own page</span>.
        </p>

        <p>
          <span className={highlight.sky}>See Invisible Native Apps During Screen Share:</span>{" "}
          When screen sharing shows your desktop, applications hidden beneath Interview
          Coder won’t appear in the shagreen view or screenshots.
        </p>
      </CardContent>
    </Card>
  </div>
      <img
        src="/your-path/image-browser-limits.png"
        alt="Browser Limits"
        width={600}
        height={600}
        className="rounded-lg border mx-auto"
      />

      {/* Section 3: Why Quide is Different */}
          <div className="bg-[#0A0A0B] text-white p-6 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto border border-[#2a2a2a]">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">
          Why Quide is Different & How It Counters Detection
        </h2>
        <p className="text-[#bbbbbb]">
          <strong className="text-white">Quide</strong> isn’t a browser extension; it’s a separate <strong>native desktop app</strong>. This fundamental difference is key to avoiding detection:
        </p>
        <ul className="list-disc list-inside space-y-3 text-[#bbbbbb]">
          <li>
            <strong className="text-white">It Lives Outside the Bubble:</strong> The browser running the interview has no connection to Quide and simply cannot see it or interact with it.
          </li>
          <li>
            <strong className="text-white">Invisible to Screen Sharing:</strong> It uses system-level APIs to remain hidden from screen sharing/capture tools like Zoom, Meet, etc.
          </li>
          <li>
            <strong className="text-white">No Focus / Alt+Tab Change & Global Hotkeys:</strong> Its toggling doesn’t trigger tab switches or browser events — your browser activity appears unchanged.
          </li>
          <li>
            <strong className="text-white">Whew / Eyes Tracking Caution:</strong> You can position the window over coding areas without visibly leaving the editor.
          </li>
          <li>
            <strong className="text-white">Reasoning Support:</strong> Get contextual support with whispegreen suggestions for logic or reasoning.
          </li>
          <li>
            <strong className="text-white">Uses Standard OS Features:</strong> Acts like accessibility tools — lightweight, local, and unobtrusive.
          </li>
          <li>
            <strong className="text-white">Outside of Platform Sandbox:</strong> Native architecture keeps it undetectable from browser-based monitoring.
          </li>
        </ul>
        <p className="text-[#bbbbbb]">
          While platforms <em>“can’t detect”</em> simple native files or clipboard actions, Quide sidesteps browser sandbox detection entirely.
        </p>
      </section>

      <hr className="my-8 border-[#333]" />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          What About Desktop Proctoring Apps?
        </h2>
        <p className="text-[#bbbbbb]">
          Why not just install a desktop proctoring app? Good platforms avoid this because:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#bbbbbb]">
          <li>It’s a massive <strong className="text-white">security risk</strong> (could be spyware).</li>
          <li>It raises <strong className="text-white">privacy concerns</strong>.</li>
          <li>It would <strong className="text-white">destroy user trust</strong>.</li>
        </ul>
        <p className="text-[#bbbbbb]">
          That’s why almost every coding platform sticks with browser sandbox-based assessments.
        </p>
      </section>

      <hr className="my-8 border-[#333]" />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Bottom Line</h2>
        <p className="text-[#bbbbbb]">
          Quide runs in a secure, separate native desktop environment — not a browser extension. That makes traditional detection and tracking ineffective.
        </p>
        <p className="text-[#bbbbbb]">
          Many companies now recommend, or even require, Quide as part of a fairer, private interview process.
        </p>
      </section>
    </div>

      {/* Section 4: Final Illustration */}
      <img
        src="/your-path/image-browser-native-split.png"
        alt="Browser vs Native App"
        width={600}
        height={600}
        className="rounded-lg border mx-auto"
      />

      {/* Footer */}
      <div className="text-center pt-6 border-t mt-10 text-sm text-muted-foreground">
        Questions? We’re happy to chat more about the tech!
        <br />
        <br />
        Written by <a href="#" className=" font-medium text-sky-400">Preet Biswas</a>
        <br />
        <br />
        <strong className="text-white">Ready to try Quide?</strong>
      </div>
    </div>
  )
}

export default Sandbox
