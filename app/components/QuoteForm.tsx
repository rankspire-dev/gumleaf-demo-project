"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const suburb = String(data.get("suburb") ?? "").trim();

    if (!name || !suburb || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please add your name, suburb and a valid email so we can reply.");
      return;
    }
    setMessage(
      `Thanks ${name.split(" ")[0]}. On a live site, we'd now be in touch to book your free visit in ${suburb}.`
    );
    form.reset();
  }

  return (
    <form id="quote-form" noValidate onSubmit={handleSubmit}>
      <div className="row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="suburb">Suburb</label>
          <input id="suburb" name="suburb" placeholder="e.g. Mitcham" required />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service">
          <option>Regular lawn mowing</option>
          <option>Garden maintenance plan</option>
          <option>Hedging and pruning</option>
          <option>One-off garden clean-up</option>
          <option>Planting or new garden beds</option>
          <option>Landscaping or paving</option>
          <option>Commercial or large block</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">About your garden</label>
        <textarea id="message" name="message" placeholder="Rough size, what needs doing, how often" />
      </div>
      <button className="btn btn-primary" type="submit">
        Send my quote request
      </button>
      <p className="form-note">This is a demo site. Your details are not sent anywhere.</p>
      <div className={`form-msg${message ? " show" : ""}`} id="form-msg" role="status">
        {message}
      </div>
    </form>
  );
}
