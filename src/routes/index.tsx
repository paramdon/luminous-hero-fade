import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aethera — Beyond silence, we build the eternal." },
      { name: "description", content: "Aethera builds platforms for brilliant minds, fearless makers, and thoughtful souls — digital havens for deep work and pure flows." },
      { property: "og:title", content: "Aethera — Beyond silence, we build the eternal." },
      { property: "og:description", content: "Digital havens for deep work and pure flows." },
    ],
  }),
  component: Index,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

const NAV_ITEMS = [
  { label: "Home", active: true },
  { label: "Studio" },
  { label: "About" },
  { label: "Journal" },
  { label: "Reach Us" },
];

function Index() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE = 0.5;
    video.style.opacity = "0";

    const tick = () => {
      const d = video.duration;
      const t = video.currentTime;
      if (Number.isFinite(d) && d > 0) {
        let op = 1;
        if (t < FADE) op = t / FADE;
        else if (t > d - FADE) op = Math.max(0, (d - t) / FADE);
        video.style.opacity = String(Math.max(0, Math.min(1, op)));
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
      }, 100);
    };

    video.addEventListener("ended", handleEnded);
    rafRef.current = requestAnimationFrame(tick);
    void video.play().catch(() => {});

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background video */}
      <div
        className="pointer-events-none absolute z-0"
        style={{ top: "300px", inset: "auto 0 0 0" }}
      >
        <div className="relative w-full">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            muted
            playsInline
            autoPlay
            preload="auto"
            className="block h-auto w-full transition-opacity"
            style={{ opacity: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <a
            href="/"
            className="font-display text-3xl tracking-tight"
            style={{ color: "#000000" }}
          >
            Aethera<sup className="text-xs align-super">®</sup>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: item.active ? "#000000" : "#6F6F6F" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="rounded-full px-6 py-2.5 text-sm transition-transform duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
          >
            Begin Journey
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: "calc(8rem - 75px)" }}
      >
        <h1
          className="animate-fade-rise font-display font-normal text-5xl sm:text-7xl md:text-8xl max-w-7xl"
          style={{
            color: "#000000",
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
          }}
        >
          Beyond <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>silence,</em> we build{" "}
          <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>the eternal.</em>
        </h1>

        <p
          className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "#6F6F6F" }}
        >
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through
          the noise, we craft digital havens for deep work and pure flows.
        </p>

        <button
          type="button"
          className="animate-fade-rise-delay-2 mt-12 rounded-full px-14 py-5 text-base transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
        >
          Begin Journey
        </button>
      </section>
    </div>
  );
}
