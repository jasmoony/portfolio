interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <blockquote className="bg-mypink-100 rounded-2xl p-8 md:p-10 shadow-card">
      <p className="text-neptune-700 text-lg md:text-xl leading-relaxed font-serif italic mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="text-neptune-700 text-sm">
        <span className="font-medium text-neptune-700">{author}</span>
        {role && <span className="ml-2">&mdash; {role}</span>}
      </footer>
    </blockquote>
  );
}
