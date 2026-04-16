import PageWrapper from "../components/PageWrapper";

export default function UsesPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-4">
          /uses
        </h1>
        <p className="text-neptune-700 text-lg mb-12">
          tools, hardware, and software i use daily.
        </p>

        <div className="space-y-10 text-neptune-700">
          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-4">
              hardware
            </h2>
            <ul className="space-y-2 text-lg">
              <li>— update with your hardware setup</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-4">
              development
            </h2>
            <ul className="space-y-2 text-lg">
              <li>xcode — ios development</li>
              <li>vs code — web development</li>
              <li>claude code — ai pair programming</li>
              <li>iterm2 — terminal</li>
              <li>github — version control</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-4">
              design
            </h2>
            <ul className="space-y-2 text-lg">
              <li>figma — ui/ux design</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-4">
              productivity
            </h2>
            <ul className="space-y-2 text-lg">
              <li>— update with your productivity tools</li>
            </ul>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
