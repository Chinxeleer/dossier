import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"
import { HugeiconsIcon } from "@hugeicons/react"
import { TickDouble01Icon } from "@hugeicons/core-free-icons"
import { ProblemCards } from "@/components/ProblemSectionCard"

export const Route = createFileRoute("/")({ component: App })

function App() {
  const trustBarList = [
    "POPIA compliant",
    "Law Society audit ready",
    "SA ID Number validation built in",
    "Priced in ZAR",
    "Files stored in South Africa servers",
  ]

  const problemsList = [
    {
      title: "Chasing documents manually",
      description:
        "Attorneys spend hours following up on WhatsApp, email, and phone calls to get the necessary FICA documents from clients for weeks.",
    },
    {
      title: "No expiry tracking",
      description:
        "Proof of address expires every 3 months under FICA. Most firms have no system to catch this before inspection.",
    },
    {
      title: "No audit trail",
      description:
        "When the Law Society inspects, you need proof of when documents were received and who verified them. Email threads don't cut it.",
    },
    {
      title: "Foreign tools don't fit SA",
      description:
        "Global software charges in USD, doesn't know FICA rules and has never heard of a green ID book or a CIPC certificate.",
    },
  ]
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex max-h-screen w-full flex-col items-center justify-center gap-2">
        <div className="flex max-w-3xl flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Stop chasing clients for FICA documents over WhatsApp
          </h2>
          <p className="text-lg text-muted-foreground">
            Dossier sends your client a secure link. They upload everything. You
            get a compliant file with a full audit trail in minutes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-center gap-4">
            <Button className="mt-4" variant="default">
              Get Started
            </Button>
            <Button className="mt-4 ml-4" variant="outline">
              See how it works
            </Button>
          </div>

          <small className="text-muted-foreground">
            No credit card required R1000/customer after free trial. Cancel
            anytime.
          </small>
        </div>
      </section>
      <section className="w-full bg-accent-foreground py-22">
        <div className="flex justify-center gap-8 text-sm text-background">
          {trustBarList.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <HugeiconsIcon icon={TickDouble01Icon} color="green" />
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4 py-22">
          {problemsList.map((problem) => (
            <ProblemCards
              key={problem.title}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
