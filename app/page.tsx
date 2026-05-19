import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f172a] text-white">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/20 blur-3xl" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-[0.2em] text-white">
              OSCAR
            </h1>

            <span className="text-xs tracking-[0.3em] text-cyan-400">
              DESARROLLADOR FULLSTACK
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="#sobremi"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              Sobre mí
            </a>

            <a
              href="#experiencia"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              Experiencia
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              Proyectos
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#projects"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-900"
          >
            Ver proyectos
          </a>
        </div>
      </header>

      {/* MAIN */}
      <section className="relative py-24">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-16 px-6 lg:grid-cols-[1fr_420px] lg:px-12">
          {/* LEFT SIDE */}
          <div>
            {/* HERO */}
            <div className="flex flex-col">
              <span className="mb-6 w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Disponible 
              </span>

              {/* Imagen */}
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-400/20 bg-[#111827] shadow-[0_0_45px_rgba(34,211,238,0.25)]">
                <Image
                  src="/images/oscar.jpg"
                  alt="Oscar Encarnación"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <h2 className="mt-10 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
                Creando experiencias web modernas e inmersivas.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Desarrollador Fullstack enfocado en crear aplicaciones modernas,
                responsivas y escalables utilizando Next.js, Angular,
                TypeScript y tecnologías web modernas.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.03]"
                >
                  Explorar proyectos
                </a>

                <a
                  href="#sobremi"
                  className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  Sobre mí
                </a>
              </div>
            </div>

            {/* SOBRE MI */}
            <section id="sobremi" className="mt-[18vh]">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-16 bg-cyan-400/40" />

                <p className="text-lg font-medium tracking-wide text-slate-300">
                  Sobre mí
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
                Desarrollador Fullstack apasionado
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Soy Oscar Encarnación, desarrollador Fullstack apasionado por
                crear aplicaciones web modernas y experiencias digitales
                inmersivas. Disfruto construir interfaces responsivas, sistemas
                escalables y experiencias de usuario visualmente atractivas.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                Mi stack principal incluye Next.js, Angular, TypeScript,
                Tailwind CSS y Supabase. Me enfoco en escribir código limpio,
                crear interfaces modernas y continuar mejorando mis habilidades
                profesionales constantemente.
              </p>

              {/* Skills */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Desarrollo Fullstack",
                  "Diseño Responsive",
                  "UI/UX Moderna",
                  "Integración de Bases de Datos",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCIA */}
            <section id="experiencia" className="mt-[18vh]">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-16 bg-cyan-400/40" />

                <p className="text-lg font-medium tracking-wide text-slate-300">
                  Experiencia
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
                Trayectoria profesional
              </h2>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-white">
                      Pasantía en Desarrollo de Software ARS Semma
                    </h3>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-300 w-[20vh]">
                      Experiencia profesional
                    </span>
                  </div>

                  <p className="text-slate-400">
                    Experiencia trabajando en desarrollo de software,
                    colaboración en proyectos y aprendizaje de tecnologías web
                    modernas.
                  </p>
                </div>
              </div>
            </section>

            {/* PROYECTOS */}
            <section id="projects" className="mt-[18vh]">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-16 bg-cyan-400/40" />

                <p className="text-lg font-medium tracking-wide text-slate-300">
                  Proyectos
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
                Proyectos destacados
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Colección de proyectos enfocados en desarrollo web moderno,
                aplicaciones fullstack y experiencias digitales responsivas.
              </p>

              {/* GRID */}
              <div className="mt-14 grid gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "TelaTrendy Ecommerce Platform",
                    image: "/images/scree3.png",
                    status: "En desarrollo",
                    completed: false,
                    description:
                      "Plataforma de venta print on demand escalable con base de datos PostgreSQL.",
                    repo: "https://github.com/Revolumax/telatrendy",
                  },
                  {
                    title: "Sistema Punto de Ventas",
                    image: "/images/sistemapoint.png",
                    status: "Finalizado",
                    completed: true,
                    description:
                      "Proyecto académico de administración de inventario, ventas y control de usuarios utilizando arquitectura MVC.",
                    repo: "https://github.com/Revolumax/Proyecto_Puntodeventa",
                  },
                  {
                    title: "Plataforma SphereWatch",
                    image: "/images/scren4.png",
                    status: "En desarrollo",
                    completed: false,
                    description:
                      "Plataforma de creación de contenidos y blogs administrados con Supabase y Next.js.",
                    repo: "https://github.com/Revolumax/Spherewatch",
                  },
                ].map((project) => (
                  <div
                    key={project.title}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                  >
                    {/* IMAGE */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-7">
                      {/* STATUS */}
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={`rounded-full border px-4 py-1 text-xs font-medium backdrop-blur-xl ${
                            project.completed
                              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                              : "border-yellow-400/20 bg-yellow-400/10 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.15)]"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {project.description}
                      </p>

                      <a
                        href={project.repo}
                        target="_blank"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                      >
                        Ver repositorio →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT CARD */}
          <div className="relative hidden lg:block">
            <div className="lg:sticky lg:top-28 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-indigo-500/10" />

              <div className="relative z-10">
                {/* Profile */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/20 text-2xl font-bold text-cyan-300">
                    O
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Oscar Encarnación
                    </h3>

                    <p className="text-sm text-slate-400">
                      Desarrollador Fullstack
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Angular",
                    "Tailwind CSS",
                    "Supabase",
                    "UI/UX Design",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
                    <h4 className="text-3xl font-bold text-cyan-300">3+</h4>

                    <p className="mt-1 text-sm text-slate-400">
                      Proyectos personales
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
                    <h4 className="text-3xl font-bold text-cyan-300">1+</h4>

                    <p className="mt-1 text-sm text-slate-400">
                      Experiencia profesional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT CARD */}
        </div>
      </section>
    </main>
  );
}