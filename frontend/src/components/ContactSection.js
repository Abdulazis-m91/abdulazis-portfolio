import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SectionShell } from "./SectionShell";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { PROFILE } from "../data/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!emailRe.test(form.email)) e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Please enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildText = () =>
    `Halo Abdul, saya ${form.name} (${form.email}).%0A%0A${encodeURIComponent(
      form.message
    )}`;

  const openWhatsApp = () => {
    const url = `https://wa.me/${PROFILE.whatsapp}?text=${buildText()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message ready! Opening WhatsApp...", {
        description: "Your message was also saved.",
      });
      openWhatsApp();
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      // Even if persistence fails, still let the user reach out.
      toast.error("Couldn't save message, opening WhatsApp anyway");
      openWhatsApp();
    } finally {
      setSubmitting(false);
    }
  };

  const openMail = () => {
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Hi Abdul,\n\n${form.message}\n\n- ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const infoItems = [
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      testId: "contact-email-link",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: `+${PROFILE.whatsapp}`,
      href: `https://wa.me/${PROFILE.whatsapp}`,
      testId: "contact-whatsapp-link",
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      href: null,
      testId: "contact-location",
    },
  ];

  return (
    <SectionShell id="contact" testId="contact-section" eyebrow="Get in touch" title="Let's Work Together 🚀">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Have a project in mind or need a developer for your institution? Reach out —
            I usually respond within a day.
          </p>
          <div className="space-y-3 pt-2">
            {infoItems.map((it) => {
              const Icon = it.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-[var(--radius)] border border-[var(--border-hex)] bg-[var(--surface)] p-4 transition-colors hover:bg-[rgba(37,99,235,0.06)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[rgba(37,99,235,0.12)] text-[var(--primary-hex)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">{it.label}</p>
                    <p className="text-sm font-medium text-[var(--fg)]">{it.value}</p>
                  </div>
                </div>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-testid={it.testId}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={it.label} data-testid={it.testId}>
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          data-testid="contact-form"
          className="space-y-4 rounded-[var(--radius-lg)] border border-[var(--border-hex)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)]"
          noValidate
        >
          <div>
            <Label htmlFor="name" className="text-sm text-[var(--fg)]">Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={update("name")}
              placeholder="Your name"
              data-testid="contact-form-name-input"
              className="mt-1.5 h-11 rounded-xl border-[var(--border-hex)] bg-[var(--bg)]"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-sm text-[var(--fg)]">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              data-testid="contact-form-email-input"
              className="mt-1.5 h-11 rounded-xl border-[var(--border-hex)] bg-[var(--bg)]"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-sm text-[var(--fg)]">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about your project..."
              rows={5}
              data-testid="contact-form-message-textarea"
              className="mt-1.5 rounded-xl border-[var(--border-hex)] bg-[var(--bg)]"
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              type="submit"
              disabled={submitting}
              data-testid="contact-form-send-button"
              className="h-11 flex-1 rounded-xl bg-[var(--primary-hex)] text-white hover:bg-[#1D4ED8]"
            >
              {submitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send via WhatsApp
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={openMail}
              data-testid="contact-form-email-button"
              className="h-11 rounded-xl border-[var(--border-hex)] hover:bg-[rgba(37,99,235,0.08)]"
            >
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
};
