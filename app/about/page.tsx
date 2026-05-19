export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-[#111827]/60 py-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:px-12">
        {/* Left Side */}
        <div className="flex-1">
          <span className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            About Me
          </span>

          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            Passionate about creating clean and modern digital experiences.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I am a frontend developer focused on building responsive,
            accessible and visually polished web applications. I enjoy
            transforming ideas into modern digital products with clean
            interfaces and smooth user experiences.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            My main technologies include Next.js, Angular, TypeScript and
            Tailwind CSS. I also enjoy working on personal projects related
            to language learning platforms, dashboards and internationalized
            applications.
          </p>

          {/* Info Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">
                Frontend Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Creating responsive and scalable interfaces using modern
                frontend technologies and best UI practices.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">
                UI / UX Focus
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Designing experiences with attention to usability,
                hierarchy, spacing, accessibility and visual harmony.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 backdrop-blur-xl">
              {/* Decorative Glow */}
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    Tech Stack
                  </h3>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    Current Skills
                  </span>
                </div>

                {/* Technologies */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Next.js",
                    "React",
                    "Angular",
                    "TypeScript",
                    "Tailwind CSS",
                    "Supabase",
                    "JavaScript",
                    "Git & GitHub",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6">
                  <p className="text-sm leading-7 text-slate-400">
                    Focused on building modern applications with strong
                    visual design, performance optimization and clean
                    frontend architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}