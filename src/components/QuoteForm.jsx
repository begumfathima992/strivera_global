import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import { enquirySchema } from '../lib/formSchema.js';
import { serviceOptions } from '../data/services.js';
import { budgetRanges, company } from '../data/site.js';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

/**
 * Quote / contact form.
 * - variant "short": name, email, phone, service, message (used in the Home hero)
 * - variant "full": adds company and budget range
 * - endpoint: "quote" or "contact"
 */
export default function QuoteForm({ variant = 'full', endpoint = 'quote', defaultService = '', submitLabel = 'Get my free quote' }) {
  const uid = useId();
  const id = (name) => `${uid}-${name}`;
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const full = variant === 'full';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(enquirySchema),
    mode: 'onTouched',
    defaultValues: { name: '', email: '', phone: '', company: '', service: defaultService, budget: '', message: '', consent: false, website: '' }
  });

  const onSubmit = async (data) => {
    setStatus({ type: 'idle', message: '' });
    try {
      const res = await fetch(`${API_BASE}/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, page: window.location.pathname })
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'Something went wrong.');
      reset();
      setStatus({
        type: 'success',
        message: 'Thank you, your message has been sent. We will reply within one working day, and a confirmation is on its way to your inbox.'
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: `${err.message} Please try again, email us at ${company.email} or call ${company.phone}.`
      });
    }
  };

  const field = (name) => ({
    id: id(name),
    isInvalid: !!errors[name],
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? id(`${name}-err`) : undefined,
    ...register(name)
  });
  const err = (name) =>
    errors[name] && (
      <Form.Control.Feedback type="invalid" id={id(`${name}-err`)}>
        {errors[name].message}
      </Form.Control.Feedback>
    );
  const Req = () => <span className="req" aria-hidden="true"> *</span>;

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} aria-label={endpoint === 'quote' ? 'Request a free quote' : 'Contact form'}>
      <p className="small text-muted mb-3">Fields marked <span className="req" aria-hidden="true">*</span><span className="visually-hidden">with an asterisk</span> are required.</p>
      <Row className="g-3">
        <Col sm={full ? 6 : 12}>
          <Form.Label htmlFor={id('name')}>Full name<Req /></Form.Label>
          <Form.Control type="text" autoComplete="name" required {...field('name')} />
          {err('name')}
        </Col>
        <Col sm={6}>
          <Form.Label htmlFor={id('email')}>Email<Req /></Form.Label>
          <Form.Control type="email" autoComplete="email" required {...field('email')} />
          {err('email')}
        </Col>
        <Col sm={6}>
          <Form.Label htmlFor={id('phone')}>Phone <span className="text-muted fw-normal">(optional)</span></Form.Label>
          <Form.Control type="tel" autoComplete="tel" {...field('phone')} />
          {err('phone')}
        </Col>
        {full && (
          <Col sm={6}>
            <Form.Label htmlFor={id('company')}>Company <span className="text-muted fw-normal">(optional)</span></Form.Label>
            <Form.Control type="text" autoComplete="organization" {...field('company')} />
            {err('company')}
          </Col>
        )}
        <Col sm={full ? 6 : 12}>
          <Form.Label htmlFor={id('service')}>Service<Req /></Form.Label>
          <Form.Select required {...field('service')}>
            <option value="">Choose a service…</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </Form.Select>
          {err('service')}
        </Col>
        {full && (
          <Col sm={6}>
            <Form.Label htmlFor={id('budget')}>Budget range <span className="text-muted fw-normal">(optional)</span></Form.Label>
            <Form.Select {...field('budget')}>
              <option value="">Choose a range…</option>
              {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
            </Form.Select>
            {err('budget')}
          </Col>
        )}
        <Col xs={12}>
          <Form.Label htmlFor={id('message')}>{full ? 'Tell us about your project' : 'Message'}<Req /></Form.Label>
          <Form.Control as="textarea" rows={full ? 5 : 3} required {...field('message')} />
          {err('message')}
        </Col>

        {/* Honeypot: hidden from people and screen readers; bots tend to fill it in. */}
        <div className="visually-hidden-honeypot" aria-hidden="true">
          <label htmlFor={id('website')}>Leave this field empty</label>
          <input type="text" id={id('website')} tabIndex={-1} autoComplete="off" {...register('website')} />
        </div>

        <Col xs={12}>
          <Form.Check id={id('consent')} isInvalid={!!errors.consent}>
            <Form.Check.Input
              type="checkbox"
              isInvalid={!!errors.consent}
              aria-describedby={errors.consent ? id('consent-err') : undefined}
              {...register('consent')}
            />
            <Form.Check.Label>
              I agree to Strivera Global using these details to respond to my enquiry, as described in the{' '}
              <Link to="/privacy-policy" target="_blank" rel="noopener">Privacy Policy<span className="visually-hidden"> (opens in a new tab)</span></Link>.<Req />
            </Form.Check.Label>
            {errors.consent && (
              <Form.Control.Feedback type="invalid" id={id('consent-err')}>{errors.consent.message}</Form.Control.Feedback>
            )}
          </Form.Check>
        </Col>
        <Col xs={12}>
          <button type="submit" className="btn btn-accent w-100" disabled={isSubmitting}>
            {isSubmitting ? (<><Spinner size="sm" aria-hidden="true" className="me-2" />Sending…</>) : submitLabel}
          </button>
        </Col>
      </Row>
      <div aria-live="polite" aria-atomic="true">
        {status.type !== 'idle' && (
          <p className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
            {status.message}
          </p>
        )}
      </div>
    </Form>
  );
}
