import PageWrapper from "../components/PageWrapper";

export default function NowPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-3">
          /now
        </h1>
        <p className="text-neptune-400 text-sm font-mono mb-12">
          last updated: april 2026
        </p>

        <div className="space-y-8 text-neptune-700 text-lg leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-neptune-900 mb-3">
              building
            </h2>
            <ul className="space-y-2">
              <li>
                — launching boekhoek, a secondhand book marketplace for the
                netherlands
              </li>
              <li>— polishing huphup, a cheering app for runners</li>
              <li>— redesigning this website (you're looking at it)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-neptune-900 mb-3">
              learning
            </h2>
            <ul className="space-y-2">
              <li>— getting better at swift animations</li>
              <li>— learning payment integrations with stripe and mollie</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-neptune-900 mb-3">
              reading
            </h2>
            <p>— update this with what you're currently reading</p>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
