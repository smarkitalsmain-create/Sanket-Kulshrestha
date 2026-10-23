import { useRef, useState, FormEvent } from "react";
import { Mail, Send, MessageSquare, Linkedin, MapPin, Copy, Check } from "lucide-react";
import PortraitBlurredFill from "./PortraitBlurredFill";
import { CONTACT, SERVICES } from "../data";

const CONTACT_PORTRAIT = "/images/contact-portrait.webp";

/**
 * Optional form backend (e.g. a Formspree endpoint) that accepts a JSON POST.
 * Without it the form opens a pre-filled email draft instead of pretending to send.
 */
const FORM_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim();

const TOPICS = [...SERVICES.map((s) => s.title), "Something else"];

type Fields = { name: string; email: string; organisation: string; topic: string; message: string };
type FieldErrors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "sent" | "draft-opened" | "error";

const EMPTY: Fields = { name: "", email: "", organisation: "", topic: TOPICS[0], message: "" };

function validate(f: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!f.name.trim()) errors.name = "Please enter your name.";
  if (!f.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.email = "Please enter a valid email address, like name@company.com.";
  if (f.message.trim().length < 10) errors.message = "Please describe what you need in at least a sentence.";
  return errors;
}

function buildMailto(f: Fields) {
  const subject = `Project enquiry: ${f.topic}`;
  const signature = [f.name, f.organisation, f.email].map((s) => s.trim()).filter(Boolean);
  const body = [f.message.trim(), "", "—", ...signature].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputClass = (invalid: boolean) =>
  `w-full bg-[#0B101A] border rounded px-4 py-3 text-sm text-white placeholder:text-[#94A3B8]/70 transition ${
    invalid ? "border-red-400/70" : "border-white/15 hover:border-[#8A96A6]/50 focus:border-[#8A96A6]"
  }`;

const labelClass = "font-mono text-[10px] text-[#CBD5E1] tracking-widest uppercase font-bold";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-red-300">
      {message}
    </p>
  );
}

export default function ContactSection() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      window.location.href = buildMailto(fields);
      setStatus("draft-opened");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, _subject: `Project enquiry: ${fields.topic}` })
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("sent");
    } catch {
      // Keep everything the visitor typed so they can retry or copy it
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col mb-14">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-widest text-[#8A96A6] uppercase font-bold">Contact</span>
          </div>
          <h2 id="contact-title" className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            Discuss a Project
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="relative overflow-hidden rounded-xl bg-[#0B101A] border border-white/5 h-[300px] md:h-[360px] lg:h-[400px]">
              <PortraitBlurredFill src={CONTACT_PORTRAIT} alt="Sanket Kulshrestha with arms crossed" />
            </div>

            <p className="font-serif text-lg font-light text-[#CBD5E1] leading-relaxed">
              Tell me briefly what you are working on and where you are stuck. I will reply by email to set up a first conversation.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="p-3 bg-[#111827] text-[#8A96A6] rounded border border-white/[0.04] h-fit shrink-0">
                  <Mail size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold">Email</p>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a href={`mailto:${CONTACT.email}`} className="text-sm text-[#F8FAFC] hover:text-[#8A96A6] underline underline-offset-4 decoration-[#5F7082]">
                      {CONTACT.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1 text-xs text-[#94A3B8] hover:text-white cursor-pointer"
                    >
                      {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="p-3 bg-[#111827] text-[#8A96A6] rounded border border-white/[0.04] h-fit shrink-0">
                  <MessageSquare size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold">Elsewhere</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1.5 text-sm text-[#CBD5E1]">
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                      <Linkedin size={13} className="text-[#8A96A6]" aria-hidden="true" />
                      LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                      <MessageSquare size={13} className="text-[#8A96A6]" aria-hidden="true" />
                      WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="p-3 bg-[#111827] text-[#8A96A6] rounded border border-white/[0.04] h-fit shrink-0">
                  <MapPin size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase font-bold">Base</p>
                  <p className="text-sm text-[#CBD5E1] mt-1">
                    {CONTACT.base}. {CONTACT.availability}.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-[#111827] border border-white/[0.05] p-6 sm:p-8 md:p-10 rounded-xl">
            {status === "sent" ? (
              <div className="text-center py-12" role="status">
                <h3 className="text-2xl font-serif text-[#F8FAFC] font-bold">Message sent</h3>
                <p className="text-sm text-[#CBD5E1] mt-3 max-w-md mx-auto leading-relaxed">
                  Thank you, {fields.name.trim()}. Your message has been received and I will reply to {fields.email.trim()}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFields(EMPTY);
                    setStatus("idle");
                  }}
                  className="mt-8 px-6 py-2.5 rounded border border-white/15 hover:border-[#8A96A6] text-[#CBD5E1] hover:text-white text-xs font-mono font-bold tracking-widest uppercase cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="contact-form-note">
                <p id="contact-form-note" className="text-xs text-[#94A3B8] leading-relaxed">
                  Fields marked * are required.{" "}
                  {FORM_ENDPOINT
                    ? "Your message is sent securely to my inbox."
                    : "Submitting opens your email app with your message filled in. Nothing is sent until you press send there."}
                </p>

                {errorCount > 0 && (
                  <div role="alert" className="p-3 text-sm bg-red-500/10 border border-red-400/30 text-red-200 rounded">
                    Please fix {errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`} below.
                  </div>
                )}

                {status === "error" && (
                  <div role="alert" className="p-4 text-sm bg-red-500/10 border border-red-400/30 text-red-200 rounded leading-relaxed">
                    Your message could not be sent. Everything you typed is still here, so you can try again, or email me
                    directly at{" "}
                    <a className="underline font-semibold" href={buildMailto(fields)}>
                      {CONTACT.email}
                    </a>
                    .
                  </div>
                )}

                {status === "draft-opened" && (
                  <div role="status" className="p-4 text-sm bg-[#5F7082]/10 border border-[#5F7082]/30 text-[#CBD5E1] rounded leading-relaxed">
                    Your email app should now be open with this message. It has not been sent yet, so please send it from
                    there. If nothing opened, email me at{" "}
                    <a className="underline font-semibold text-white" href={`mailto:${CONTACT.email}`}>
                      {CONTACT.email}
                    </a>
                    .
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className={labelClass}>Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      value={fields.name}
                      onChange={update("name")}
                      className={inputClass(!!errors.name)}
                    />
                    <FieldError id="contact-name-error" message={errors.name} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className={labelClass}>Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      value={fields.email}
                      onChange={update("email")}
                      className={inputClass(!!errors.email)}
                    />
                    <FieldError id="contact-email-error" message={errors.email} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-organisation" className={labelClass}>Organisation</label>
                    <input
                      id="contact-organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      value={fields.organisation}
                      onChange={update("organisation")}
                      className={inputClass(false)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-topic" className={labelClass}>Area of work</label>
                    <select
                      id="contact-topic"
                      name="topic"
                      value={fields.topic}
                      onChange={update("topic")}
                      className={`${inputClass(false)} cursor-pointer`}
                    >
                      {TOPICS.map((t) => (
                        <option key={t} value={t} className="bg-[#111827] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className={labelClass}>What would you like to discuss? *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    value={fields.message}
                    onChange={update("message")}
                    placeholder="A few lines on your organisation, the problem and any timelines."
                    className={`${inputClass(!!errors.message)} resize-y leading-relaxed`}
                  />
                  <FieldError id="contact-message-error" message={errors.message} />
                </div>

                <div className="pt-4 border-t border-white/[0.05]">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                    className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-[#5F7082] hover:bg-[#6D7E90] disabled:opacity-60 disabled:cursor-wait text-xs font-mono font-bold text-white tracking-widest uppercase transition-colors"
                  >
                    <Send size={13} aria-hidden="true" />
                    <span>
                      {status === "submitting"
                        ? "Sending…"
                        : FORM_ENDPOINT
                          ? "Send message"
                          : "Open email draft"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
