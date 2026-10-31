import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import { PageHero } from '../components/Sections.jsx';
import { company } from '../data/site.js';

const Todo = ({ children }) => <span className="todo-inline">TODO: {children}</span>;

function resetConsent() {
  try {
    localStorage.removeItem('sg-cookie-consent');
  } catch {
    /* ignore */
  }
  window.location.reload();
}

// TODO: review before launch, and update the table if analytics or other cookies are added.
export default function CookiePolicy() {
  return (
    <>
      <Seo title="Cookie Policy" description="Which cookies and similar technologies the Strivera Global website uses and how to control them." />
      <PageHero title="Cookie Policy" lead="Which cookies we use and how you can control them." breadcrumbs={[{ label: 'Cookie Policy' }]} />
      <section className="section">
        <Container>
          <div className="prose">
            <p><strong>Last updated:</strong> <Todo>date</Todo></p>
            <h2>What are cookies?</h2>
            <p>Cookies are small files stored on your device. Similar technologies, such as browser local storage, work in a similar way.</p>

            <h2>Cookies we use</h2>
            <p>This website uses essential storage only. We do not use advertising or tracking cookies.</p>
            <Table responsive bordered className="mt-3">
              <thead>
                <tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr>
              </thead>
              <tbody>
                <tr><td><code>sg-cookie-consent</code></td><td>Essential (local storage)</td><td>Remembers your cookie choice so the banner is not shown again.</td><td>Until cleared</td></tr>
              </tbody>
            </Table>
            <p>
              Fonts are loaded from Google Fonts, which receives your IP address to deliver the font files. <Todo>decide whether to self-host fonts</Todo>
            </p>

            <h2>Managing cookies</h2>
            <p>You can block or delete cookies in your browser settings. You can also reset your choice on this site:</p>
            <button type="button" className="btn btn-outline-navy btn-sm" onClick={resetConsent}>Reset my cookie choice</button>

            <h2>Contact</h2>
            <p>
              Questions? Email <a href={`mailto:${company.email}`}>{company.email}</a> or read our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
