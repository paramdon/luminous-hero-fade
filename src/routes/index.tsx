import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroBride from "@/assets/hero-bride.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryFacial from "@/assets/gallery-facial.jpg";
import galleryMehndi from "@/assets/gallery-mehndi.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asian Family Salon — Premium Beauty Parlour in Deoghar" },
      {
        name: "description",
        content:
          "Asian Family Salon, Deoghar — Bridal makeup, hair treatments, facials, and family grooming. 5★ rated. Book your appointment on WhatsApp instantly.",
      },
      { property: "og:title", content: "Asian Family Salon — Deoghar" },
      {
        property: "og:description",
        content: "Premium bridal & family salon in Deoghar. Book on WhatsApp.",
      },
      { property: "og:image", content: heroBride },
      { name: "twitter:image", content: heroBride },
    ],
  }),
  component: Index,
});

const OWNER_WHATSAPP = "919507245939"; // wa.me format, no '+'
const ROSE = "#B76E79";
const ROSE_DARK = "#8A4C56";
const CREAM = "#FBF6F1";
const INK = "#1A1413";
const MUTED = "#7A6B66";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#book" },
];

const SERVICES = [
  {
    cat: "Bridal",
    title: "Bridal Makeup",
    desc: "Signature bridal looks with HD makeup, draping & hairstyling.",
    price: "₹15,000+",
  },
  {
    cat: "Makeup",
    title: "Party & Engagement",
    desc: "Glam looks for sangeet, reception, and parties.",
    price: "₹3,500+",
  },
  {
    cat: "Hair",
    title: "Hair Spa & Treatment",
    desc: "Keratin, smoothening, deep conditioning & scalp therapy.",
    price: "₹1,200+",
  },
  {
    cat: "Hair",
    title: "Cut, Color & Styling",
    desc: "Precision cuts, global colour, blow-dry & styling.",
    price: "₹600+",
  },
  {
    cat: "Skin",
    title: "Facials & Clean-up",
    desc: "Gold, hydra, anti-tan and bridal glow facials.",
    price: "₹800+",
  },
  {
    cat: "Nails",
    title: "Manicure & Pedicure",
    desc: "Spa mani-pedi, gel polish and nail art.",
    price: "₹500+",
  },
  {
    cat: "Mehndi",
    title: "Bridal Mehndi",
    desc: "Intricate Rajasthani & Arabic henna designs.",
    price: "₹2,500+",
  },
  {
    cat: "Family",
    title: "Family Grooming",
    desc: "Hair & skincare packages for couples and kids.",
    price: "₹1,500+",
  },
];

const GALLERY = [
  { src: heroBride, alt: "Bridal makeup look" },
  { src: galleryInterior, alt: "Salon interior" },
  { src: galleryHair, alt: "Hair styling" },
  { src: galleryMakeup, alt: "Makeup application" },
  { src: galleryMehndi, alt: "Bridal mehndi" },
  { src: galleryFacial, alt: "Spa & facial therapy" },
  { src: galleryNails, alt: "Nail care" },
];

const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Bride, Deoghar",
    text: "My bridal makeup was beyond stunning. The team made me feel like royalty on my wedding day. Worth every rupee.",
  },
  {
    name: "Anjali Verma",
    role: "Regular Client",
    text: "Best salon in Deoghar, hands down. Their hair spa treatment is magic — and the staff is so warm and professional.",
  },
  {
    name: "Ritu Singh",
    role: "Engagement Party",
    text: "Got my engagement makeup done here. Got compliments all night long! Clean studio, premium products, lovely people.",
  },
  {
    name: "Kavita Jha",
    role: "Family Package",
    text: "We came as a family before a wedding — everyone was taken care of beautifully. Truly a family salon experience.",
  },
];

const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

function Index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    date: "",
    time: "10:00",
    notes: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg =
      `*New Booking — Asian Family Salon*%0A` +
      `%0A👤 *Name:* ${encodeURIComponent(form.name)}` +
      `%0A📞 *Phone:* ${encodeURIComponent(form.phone)}` +
      `%0A💇 *Service:* ${encodeURIComponent(form.service)}` +
      `%0A📅 *Date:* ${encodeURIComponent(form.date)}` +
      `%0A⏰ *Time:* ${encodeURIComponent(form.time)}` +
      (form.notes ? `%0A📝 *Notes:* ${encodeURIComponent(form.notes)}` : "");
    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      id="home"
      className="min-h-screen w-full"
      style={{ backgroundColor: CREAM, color: INK }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur" style={{ backgroundColor: `${CREAM}D9` }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#home" className="font-display text-2xl leading-none md:text-3xl" style={{ color: ROSE_DARK }}>
            Asian Family Salon
            <span className="ml-1 text-xs align-super" style={{ color: ROSE }}>®</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="text-sm transition-opacity hover:opacity-60" style={{ color: INK }}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="rounded-full px-5 py-2.5 text-sm transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ROSE, color: "#FFFFFF" }}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:px-10 md:pt-20">
          <div className="animate-fade-rise">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs" style={{ borderColor: `${ROSE}55`, color: ROSE_DARK }}>
              <span>★ 5.0</span>
              <span style={{ color: MUTED }}>• 21+ reviews on Google</span>
            </div>
            <h1
              className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
              style={{ color: INK }}
            >
              Where Deoghar comes to feel{" "}
              <em style={{ color: ROSE, fontStyle: "italic" }}>beautiful.</em>
            </h1>
            <p className="animate-fade-rise-delay mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
              Bridal makeup, hair therapies, facials and family grooming — crafted by a team that
              treats every chair like its own little ceremony.
            </p>
            <div className="animate-fade-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: INK, color: "#FFFFFF" }}
              >
                Book Appointment
              </a>
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-7 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: INK, color: INK }}
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "10+", v: "Years" },
                { k: "5★", v: "Rated" },
                { k: "20+", v: "Services" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl" style={{ color: ROSE_DARK }}>{s.k}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] opacity-30 blur-3xl" style={{ backgroundColor: ROSE }} />
            <img
              src={heroBride}
              alt="Bridal makeup at Asian Family Salon"
              width={1080}
              height={1600}
              className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: ROSE }}>Our Services</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Curated for every <em style={{ color: ROSE, fontStyle: "italic" }}>occasion.</em>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: `${ROSE}22` }}
            >
              <div className="text-[11px] uppercase tracking-widest" style={{ color: ROSE }}>{s.cat}</div>
              <h3 className="mt-2 font-display text-2xl" style={{ color: INK }}>{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: `${ROSE}22` }}>
                <span className="font-medium" style={{ color: ROSE_DARK }}>{s.price}</span>
                <a href="#book" className="text-xs transition-opacity group-hover:opacity-70" style={{ color: INK }}>
                  Book →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: ROSE }}>Gallery</p>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Real moments. Real <em style={{ color: ROSE, fontStyle: "italic" }}>glow.</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALLERY.map((g, i) => (
              <div
                key={g.alt}
                className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ aspectRatio: i === 0 ? "1 / 1" : "4 / 5" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: ROSE }}>Testimonials</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Loved by <em style={{ color: ROSE, fontStyle: "italic" }}>our family</em> of clients.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border p-7"
              style={{ borderColor: `${ROSE}22`, backgroundColor: "#FFFFFF" }}
            >
              <div style={{ color: ROSE }}>★★★★★</div>
              <blockquote className="mt-4 text-lg leading-relaxed" style={{ color: INK }}>
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium" style={{ color: INK }}>{r.name}</span>
                <span style={{ color: MUTED }}> — {r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" style={{ backgroundColor: INK, color: "#FFFFFF" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: ROSE }}>Book Now</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Reserve your <em style={{ color: ROSE, fontStyle: "italic" }}>chair.</em>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "#CFC2BE" }}>
              Fill the form and tap <strong>Send on WhatsApp</strong> — your booking lands directly
              in our owner's WhatsApp for instant confirmation.
            </p>
            <div className="mt-10 space-y-5 text-sm" style={{ color: "#CFC2BE" }}>
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: ROSE }}>Address</div>
                <div className="mt-1">Dhobiya Tola, Awantika Gali,<br />Front of Eakta International Hotel,<br />Deoghar, Jharkhand 814112</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: ROSE }}>Hours</div>
                <div className="mt-1">Sun, Mon, Wed–Fri: 9:00 AM – 8:30 PM<br />Tue, Sat: 9:30 AM – 8:30 PM</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: ROSE }}>WhatsApp</div>
                <a href={`https://wa.me/${OWNER_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block underline">
                  +91 95072 45939
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-7 md:p-9"
            style={{ backgroundColor: "#FFFFFF", color: INK }}
          >
            <div className="grid gap-4">
              <Field label="Your Name" required>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Priya Sharma"
                  className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: `${ROSE}55` }}
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  required
                  type="tel"
                  pattern="[0-9+\s-]{7,15}"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: `${ROSE}55` }}
                />
              </Field>
              <Field label="Service" required>
                <select
                  required
                  value={form.service}
                  onChange={update("service")}
                  className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: `${ROSE}55` }}
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" required>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    min={new Date().toISOString().slice(0, 10)}
                    className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: `${ROSE}55` }}
                  />
                </Field>
                <Field label="Time" required>
                  <input
                    required
                    type="time"
                    value={form.time}
                    onChange={update("time")}
                    min="09:00"
                    max="20:30"
                    className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: `${ROSE}55` }}
                  />
                </Field>
              </div>
              <Field label="Notes (optional)">
                <textarea
                  value={form.notes}
                  onChange={update("notes")}
                  rows={3}
                  placeholder="Preferred stylist, occasion, etc."
                  className="w-full resize-none rounded-lg border bg-transparent px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: `${ROSE}55` }}
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.518 5.276l-.999 3.648 3.97-1.623z" />
                </svg>
                Send on WhatsApp
              </button>
              <p className="text-center text-xs" style={{ color: MUTED }}>
                Opens WhatsApp with your booking details pre-filled.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: `${ROSE}33`, backgroundColor: CREAM }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
          <div className="font-display text-xl" style={{ color: ROSE_DARK }}>Asian Family Salon</div>
          <div className="text-xs" style={{ color: MUTED }}>
            © {new Date().getFullYear()} Asian Family Salon, Deoghar. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${OWNER_WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.518 5.276l-.999 3.648 3.97-1.623z" />
        </svg>
      </a>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest" style={{ color: MUTED }}>
        {label} {required && <span style={{ color: ROSE }}>*</span>}
      </span>
      {children}
    </label>
  );
}
