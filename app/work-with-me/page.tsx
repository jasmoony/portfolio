import PageWrapper from "../components/PageWrapper";
import Button from "../components/ui/Button";

export default function WorkWithMePage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <h1 className="font-serif text-display-xl text-neptune-900 mb-4">
          work with me
        </h1>
        <p className="text-neptune-700 text-xl mb-16 max-w-2xl">
          i help founders and small teams take the thing they've been thinking
          about and actually ship it.
        </p>

        {/* MVP builds */}
        <section className="mb-20">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
            mvp builds
          </h2>
          <p className="text-neptune-700 text-lg leading-relaxed mb-6">
            you have an idea. you've been thinking about it for months. you need
            someone who can scope it, design it, and build it. without the good
            old communication game between a product manager, a designer, and a
            developer. that's me. i've spent 6+ years in product management, so
            i don't just build what you ask for, i help you figure out what's
            actually worth building first.
          </p>

          <div className="bg-mypink-100 rounded-2xl p-8 mb-8">
            <h3 className="font-serif text-xl text-neptune-900 mb-4">
              what's included
            </h3>
            <ul className="space-y-3 text-neptune-700">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>product scoping & feature prioritization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>ui/ux design in figma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>full-stack development (ios, web, or both)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>deployment & launch support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>weekly updates & async communication</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-mypink-100 rounded-xl p-6">
              <h4 className="font-mono text-sm text-neptune-700 mb-2">
                typical engagement
              </h4>
              <p className="text-neptune-700">4–8 weeks, depending on scope</p>
            </div>
            <div className="bg-mypink-100 rounded-xl p-6">
              <h4 className="font-mono text-sm text-neptune-700 mb-2">
                good fit if
              </h4>
              <p className="text-neptune-700">
                you're a founder or small team with a clear idea but no
                technical co-founder
              </p>
            </div>
          </div>

          <p className="text-neptune-700 text-sm mb-6">
            pricing depends on scope — let's talk about your project and i'll
            give you an honest estimate.
          </p>
        </section>

        {/* Personal websites */}
        <section className="mb-20">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
            personal websites
          </h2>
          <p className="text-neptune-700 text-lg leading-relaxed mb-6">
            let's built the website you've always wanted. clean, fast, with an
            unexpected touch that makes people remember it. seo-ready by
            default.
          </p>

          <div className="bg-mypink-100 rounded-2xl p-8 mb-8">
            <h3 className="font-serif text-xl text-neptune-900 mb-4">
              what's included
            </h3>
            <ul className="space-y-3 text-neptune-700">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>custom design — no templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>responsive development (looks great on any device)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>seo setup & meta tags</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>deployment & domain setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">—</span>
                <span>one round of revisions after launch</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-mypink-100 rounded-xl p-6">
              <h4 className="font-mono text-sm text-neptune-700 mb-2">
                typical engagement
              </h4>
              <p className="text-neptune-700">2–4 weeks</p>
            </div>
            <div className="bg-mypink-100 rounded-xl p-6">
              <h4 className="font-mono text-sm text-neptune-700 mb-2">
                good fit if
              </h4>
              <p className="text-neptune-700">
                you want something personal, not just professional
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-neptune-100/20">
          <h2 className="font-serif text-display-lg text-neptune-900 mb-4">
            let's build something
          </h2>
          <p className="text-neptune-700 text-lg mb-8">
            tell me what you're thinking about and i'll get back to you within a
            day.
          </p>
          <Button href="/contactform" variant="primary">
            get in touch
          </Button>
        </section>
      </div>
    </PageWrapper>
  );
}
