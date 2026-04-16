import PageWrapper from "../components/PageWrapper";

export default function ColophonPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-4">
          colophon
        </h1>
        <p className="text-neptune-700 text-lg mb-12">
          how this site is built.
        </p>

        <div className="space-y-10 text-neptune-700">
          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-3">
              typography
            </h2>
            <ul className="space-y-2 text-lg">
              <li>
                <span className="font-serif">fraunces</span> — headlines
              </li>
              <li>
                <span>inter</span> — body text
              </li>
              <li>
                <span className="font-mono">jetbrains mono</span> — labels &
                metadata
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-3">
              built with
            </h2>
            <ul className="space-y-2 text-lg">
              <li>next.js 14 — framework</li>
              <li>react 18 — ui library</li>
              <li>typescript — type safety</li>
              <li>tailwind css — styling</li>
              <li>framer motion — animations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-3">
              hosting
            </h2>
            <ul className="space-y-2 text-lg">
              <li>vercel — hosting & deployment</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-neptune-400 uppercase tracking-wider mb-3">
              design
            </h2>
            <ul className="space-y-2 text-lg">
              <li>figma — design & prototyping</li>
              <li>
                — add your design inspiration sources here
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
