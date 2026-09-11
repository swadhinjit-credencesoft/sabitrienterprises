'use client';

import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '../../data/navigation';
import styles from './contact.module.scss';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: 'Homestay',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const messageText = `Hi Sabitri Enterprises!%0A%0AName: ${encodeURIComponent(form.name)}%0A${form.phone ? `Phone: ${encodeURIComponent(form.phone)}%0A` : ''}${form.email ? `Email: ${encodeURIComponent(form.email)}%0A` : ''}Service: ${encodeURIComponent(form.service)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${messageText}`, '_blank');
    setSent(true);
  };

  const handleEmail = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `${form.service} Enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`,
    )}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91"
          />
        </div>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="service">Service *</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option>Homestay</option>
            <option>Tours & Travels</option>
            <option>Jewellery</option>
            <option>Handicrafts</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you need — dates, tour ideas, product enquiries…"
        />
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.whatsappBtn} onClick={handleWhatsApp}>
          <MessageCircle size={18} />
          Send via WhatsApp
        </button>
        <button type="button" className={styles.emailBtn} onClick={handleEmail}>
          <Send size={16} />
          Send via Email
        </button>
      </div>

      {sent && (
        <p className={styles.success}>
          Your message is ready to send — hit send in your email or WhatsApp app.
        </p>
      )}
    </form>
  );
}
