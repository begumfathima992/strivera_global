import Icon from './Icon.jsx';

// Illustrative mock-ups built in HTML/CSS. All names and figures are sample data, not real customers.
export default function RestaurantShowcase() {
  const bars = [38, 52, 46, 61, 84, 92, 70];
  return (
    <div className="showcase">
      <figure className="mock-dashboard m-0" aria-label="Illustration of the restaurant admin dashboard with sample data">
        <div className="bar" aria-hidden="true"><i /><i /><i /><span>admin.yourrestaurant.co.uk</span></div>
        <div className="layout" aria-hidden="true">
          <aside>
            <b>Your Restaurant</b>
            <span className="on"><Icon name="dashboard" /> Overview</span>
            <span><Icon name="calendar" /> Bookings</span>
            <span><Icon name="menu" /> Menu</span>
            <span><Icon name="bagCheck" /> Orders</span>
            <span><Icon name="gift" /> Loyalty</span>
            <span><Icon name="megaphone" /> Offers</span>
          </aside>
          <div className="mock-main">
            <div className="mock-kpis">
              <div><small>Bookings today</small><strong>24</strong></div>
              <div><small>Online orders</small><strong>17</strong></div>
              <div><small>Points issued</small><strong>1,260</strong></div>
            </div>
            <div className="mock-chart">
              {bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
            <div className="mock-table">
              <div><span>Guest</span><span>Time</span><span>Party</span><span>Status</span></div>
              <div><span>Sample Guest A</span><span>18:30</span><span>4</span><span className="mock-pill">Confirmed</span></div>
              <div><span>Sample Guest B</span><span>19:00</span><span>2</span><span className="mock-pill">Confirmed</span></div>
              <div><span>Sample Guest C</span><span>19:45</span><span>6</span><span className="mock-pill wait">Pending</span></div>
            </div>
          </div>
        </div>
        <figcaption className="visually-hidden">Sample dashboard showing bookings, orders and loyalty points. Illustrative data only.</figcaption>
      </figure>

      <figure className="mock-phone" aria-label="Illustration of the customer app with loyalty points and menu">
        <div className="screen" aria-hidden="true">
          <div className="notch" />
          <header>
            <small>Good evening</small>
            <strong>Your Restaurant</strong>
          </header>
          <div className="points">
            <span>320 points<br /><small style={{ fontWeight: 600 }}>80 to your next reward</small></span>
            <Icon name="qr" />
          </div>
          <div className="menu-item"><div><b>Chargrilled halloumi</b><em>V</em></div><span>£7.50</span></div>
          <div className="menu-item"><div><b>Slow-cooked lamb</b><em>GF</em></div><span>£18.00</span></div>
          <div className="menu-item"><div><b>Seasonal sorbet</b><em>VG</em></div><span>£5.50</span></div>
          <div className="book">Book a table</div>
        </div>
        <figcaption className="visually-hidden">Sample customer app screen with loyalty points, a QR code and menu items with dietary labels. Illustrative data only.</figcaption>
      </figure>
    </div>
  );
}
