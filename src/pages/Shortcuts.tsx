// src/pages/shortcuts.tsx
// -----------------------------------------------------------------------------
// Commands we love — emoji version (no Lucide icons, so no union typing)

import { Separator } from "@/components/ui/separator"
import clsx from "clsx"

/* ────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────── */
type KeyDef = { label: string }

const KeyCap = ({ k }: { k: KeyDef }) => (
  <span
    className={clsx(
      "inline-flex min-w-[48px] items-center justify-center",
      "rounded-md border border-border bg-muted px-3 py-1 text-sm font-semibold"
    )}
  >
    {k.label}
  </span>
)

/* ────────────────────────────────────────────
   Page component
   ──────────────────────────────────────────── */
const Shortcuts = () => {
  const shortcuts: {
    title: string
    description: string
    keys: KeyDef[]
  }[] = [
    {
      title: "Hide/Show Window",
      description: "Hide or show Interview Coder",
      keys: [{ label: "⌘" }, { label: "B" }],
    },
    {
      title: "Take Screenshot",
      description: "Capture screenshots of the interview question",
      keys: [{ label: "⌘" }, { label: "H" }],
    },
    {
      title: "Move Window",
      description:
        "Move the window around your screen without touching the mouse",
      keys: [
        { label: "⌘" },
        { label: "↑" },
        { label: "↓" },
        { label: "←" },
        { label: "→" },
      ],
    },
    {
      title: "Generate Solution",
      description: "Generate an initial solution with explanations",
      keys: [{ label: "⌘" }, { label: "⏎" }],
    },
    {
      title: "Reset Context",
      description: "Reset everything to start fresh with a new problem",
      keys: [{ label: "⌘" }, { label: "R" }],
    },
    {
      title: "Quit Application",
      description: "Quit the application",
      keys: [{ label: "⌘" }, { label: "Q" }],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold">Commands we love</h1>
        <p className="text-muted-foreground">
          These commands are designed to be natural and easy to remember.
        </p>
      </header>

      <Separator />

      {/* Shortcut list */}
      <ul className="space-y-8">
        {shortcuts.map((s) => (
          <li key={s.title} className="grid grid-cols-[1fr_auto] gap-4">
            {/* Textual info */}
            <div className="space-y-1">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>

            {/* Key combo */}
            <div className="flex items-center gap-1 flex-wrap justify-end">
              {s.keys.map((k, idx) => (
                <span key={idx} className="flex items-center gap-1">
                  {idx !== 0 && <span className="font-semibold">+</span>}
                  <KeyCap k={k} />
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shortcuts
