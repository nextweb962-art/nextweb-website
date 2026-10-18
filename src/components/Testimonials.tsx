import type { Dictionary } from "@/lib/dictionaries";

type TestimonialsProps = {
  dict: Dictionary;
};

export default function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            {dict.testimonials.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.testimonials.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-3">
          {dict.testimonials.items.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex gap-1 text-blue-600 dark:text-blue-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 3.8 1 5.8L10 14.6l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-7 text-slate-700 dark:text-slate-200">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
