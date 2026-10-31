import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import { PageHero } from '../components/Sections.jsx';
import { company } from '../data/site.js';

const Todo = ({ children }) => <span className="todo-inline">TODO: {children}</span>;

// TODO: have this policy reviewed by a qualified adviser before launch. It is a starting template only.
export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description="How Strivera Global collects, uses and protects your personal data under UK GDPR." />
      <PageHero title="Privacy Policy" lead="How we collect, use and protect your personal data." breadcrumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section">
        <Container>
          <div className="prose">
            <p><strong>Last updated:</strong> <Todo>date</Todo></p>
            <p className="todo-placeholder text-start">
              <strong>Template notice:</strong> this policy is a placeholder written for UK GDPR and the Data Protection Act 2018.
              It must be completed and reviewed before the site goes live.
            </p>

            <h2>1. Who we are</h2>
            <p>
              {company.name} (“we”, “us”) is the data controller for personal data collected through this website. Registered in{' '}
              {company.registeredIn}, company number <Todo>company number</Todo>. Registered address: <Todo>address</Todo>.
              Contact: <a href={`mailto:${company.email}`}>{company.email}</a>. ICO registration number: <Todo>ICO number</Todo>.
            </p>

            <h2>2. What we collect</h2>
            <ul>
              <li>Details you submit through our quote and contact forms: name, email address, phone number, company name, the service you are interested in, budget range and your message.</li>
              <li>Basic technical data needed to run and secure the site, such as IP address in server logs. <Todo>confirm log retention</Todo></li>
              <li>Your cookie preference, stored in your browser.</li>
            </ul>

            <h2>3. How and why we use it</h2>
            <p>We use your details to respond to your enquiry, prepare quotes and, if you become a client, deliver our services.</p>
            <p>Lawful bases: legitimate interests (responding to enquiries), steps prior to entering a contract, and consent where requested. <Todo>confirm lawful bases</Todo></p>

            <h2>4. Who we share it with</h2>
            <p>We do not sell your data. We use trusted processors to run this website and send email, such as our hosting provider and email service. <Todo>list processors, e.g. AWS, email provider</Todo></p>

            <h2>5. International transfers</h2>
            <p><Todo>state whether any data leaves the UK and the safeguards used</Todo></p>

            <h2>6. How long we keep it</h2>
            <p><Todo>retention periods, e.g. enquiries deleted after X months if no contract follows</Todo></p>

            <h2>7. Your rights</h2>
            <p>
              Under UK GDPR you have the right to access, correct, erase, restrict or object to the processing of your data, and to data
              portability. To make a request, email <a href={`mailto:${company.email}`}>{company.email}</a>. You can also complain to the
              Information Commissioner’s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h2>8. Security</h2>
            <p>We use HTTPS, access controls and other appropriate measures to protect your data. <Todo>add detail</Todo></p>

            <h2>9. Cookies</h2>
            <p>See our <Link to="/cookie-policy">Cookie Policy</Link>.</p>

            <h2>10. Changes</h2>
            <p>We may update this policy. The “last updated” date shows when it last changed.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
