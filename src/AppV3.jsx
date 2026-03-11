import { useState } from 'react'
import LayoutNav from './LayoutNav.jsx'
import './AppV4.css'
import './AppV2Extra.css'

function AppV3() {
  const [selectedPlan, setSelectedPlan] = useState('subscription')
  const [advantagePlus, setAdvantagePlus] = useState(false)
  const [showCompare, setShowCompare] = useState(false)

  const subTotal = advantagePlus ? 512 : 366

  const cartData = selectedPlan === 'subscription'
    ? {
        licenseType: 'SaaS License',
        productName: 'Highcharts Core',
        seatPrice: 366,
        subscription: advantagePlus ? 'Advantage+' : 'Advantage',
        subscriptionNote: advantagePlus ? '146.00 USD yearly' : 'Included in license',
        total: subTotal,
      }
    : {
        licenseType: 'Perpetual License',
        productName: 'Highcharts Core',
        seatPrice: 839,
        subscription: 'Advantage+',
        subscriptionNote: 'First year included, then 335.60 USD yearly',
        total: 839,
      }

  return (
    <div className="v2">
      <LayoutNav current="#/v3" />

      <nav className="v2-nav">
        <div className="v2-nav-inner">
          <div className="v2-logo">Highcharts</div>
        </div>
      </nav>

      <div className="v2-hero">
        <div className="v2-hero-inner">
          <h1 className="v2-hero-title">Choose your plan</h1>
          <p className="v2-hero-subtitle">
            Flexible licensing to match how you build. Subscribe for continuous access, or own it forever.
          </p>
        </div>
      </div>

      <div className="v2-content">
        <div className="v2x-main">
          {/* ── 2 Plan cards ── */}
          <div className="v2x-cards-grid v2x-cards-grid--2">
            {/* Subscription card */}
            <div
              className={`v2-card v2x-card--selectable ${selectedPlan === 'subscription' ? 'v2x-card--selected' : ''}`}
              onClick={() => setSelectedPlan('subscription')}
            >
              <div className="v2-card-top">
                <div className="v2x-card-title-row">
                  <input
                    type="radio"
                    name="plan-v3"
                    value="subscription"
                    checked={selectedPlan === 'subscription'}
                    onChange={() => setSelectedPlan('subscription')}
                    className="v2-radio"
                  />
                  <h2 className="v2-card-title">Subscription</h2>
                </div>
                <p className="v2-card-tagline">Use our software and updates as long as you subscribe.</p>
              </div>

              <div className="v2-card-price-block">
                <span className="v2-card-price">${advantagePlus ? '512' : '366'}</span>
                <span className="v2-card-price-period">/year</span>
              </div>

              <ul className="v2-card-features">
                <li className="v2-feature-row">
                  <svg className="v2-feature-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="v2-feature-label">Always the latest version</span>
                    <span className="v2-feature-desc">Access to all updates during your subscription</span>
                  </div>
                </li>
                <li className="v2-feature-row">
                  <svg className="v2-feature-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="v2-feature-label">Advantage support</span>
                    <span className="v2-feature-desc">Standard support included with your license</span>
                  </div>
                </li>
              </ul>

              {/* Advantage+ add-on */}
              <label className="v2-addon" onClick={(e) => e.stopPropagation()}>
                <div className="v2-addon-check">
                  <input
                    type="checkbox"
                    checked={advantagePlus}
                    onChange={(e) => setAdvantagePlus(e.target.checked)}
                    className="v2-addon-input"
                  />
                </div>
                <div className="v2-addon-content">
                  <div className="v2-addon-header">
                    <span className="v2-addon-title">Upgrade to Advantage+</span>
                    <span className="v2-addon-price">+$146/year</span>
                  </div>
                  <span className="v2-addon-desc">Priority support with faster response times and dedicated assistance.</span>
                </div>
              </label>
              <button className="v2-compare-link" onClick={(e) => { e.stopPropagation(); setShowCompare(true) }}>
                Compare Advantage vs Advantage+
              </button>
            </div>

            {/* Lifetime card */}
            <div
              className={`v2-card v2x-card--selectable ${selectedPlan === 'lifetime' ? 'v2x-card--selected' : ''}`}
              onClick={() => setSelectedPlan('lifetime')}
            >
              <div className="v2-card-top">
                <div className="v2x-card-title-row">
                  <input
                    type="radio"
                    name="plan-v3"
                    value="lifetime"
                    checked={selectedPlan === 'lifetime'}
                    onChange={() => setSelectedPlan('lifetime')}
                    className="v2-radio"
                  />
                  <h2 className="v2-card-title">Lifetime</h2>
                </div>
                <p className="v2-card-tagline">Own the software forever with a one-time purchase.</p>
              </div>

              <div className="v2-card-price-block">
                <span className="v2-card-price">$839</span>
                <span className="v2-card-price-period">one-time</span>
              </div>

              <ul className="v2-card-features">
                <li className="v2-feature-row">
                  <svg className="v2-feature-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="v2-feature-label">Permanent access</span>
                    <span className="v2-feature-desc">Lifetime access to the version available at purchase</span>
                  </div>
                </li>
                <li className="v2-feature-row">
                  <svg className="v2-feature-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="v2-feature-label">Advantage+ support — 1 year included</span>
                    <span className="v2-feature-desc">Priority support with faster response times</span>
                  </div>
                </li>
              </ul>

              <div className="v2-renewal-note">
                <svg className="v2-renewal-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>After the first year, updates and support renew at $336/year.</span>
              </div>
            </div>
          </div>

          {/* ── Cart ── */}
          <aside className="v2-cart">
            <div className="v2-cart-inner">
              <h3 className="v2-cart-heading">Order Summary</h3>

              <div className="v2-cart-product-row">
                <span className="v2-cart-product-name">{cartData.productName}</span>
                <span className="v2-cart-license-badge">{cartData.licenseType}</span>
              </div>

              <div className="v2-cart-line-items">
                <div className="v2-cart-line">
                  <span className="v2-cart-line-label">1 Developer Seat</span>
                  <span className="v2-cart-line-value">${cartData.seatPrice.toFixed(2)}</span>
                </div>
                <div className="v2-cart-line">
                  <span className="v2-cart-line-label">{cartData.subscription}</span>
                  <span className="v2-cart-line-value-sub">{cartData.subscriptionNote}</span>
                </div>
              </div>

              <div className="v2-cart-total">
                <span className="v2-cart-total-label">Total</span>
                <div className="v2-cart-total-amount">
                  <span className="v2-cart-total-number">${cartData.total.toFixed(2)}</span>
                  <span className="v2-cart-total-currency">USD</span>
                </div>
              </div>

              <button className="v2-cart-checkout">Proceed to Checkout</button>
              <p className="v2-cart-secure">Secure checkout powered by Highsoft</p>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Compare modal (reused from V4) ── */}
      {showCompare && (
        <div className="v2-modal-overlay" onClick={() => setShowCompare(false)}>
          <div className="v2-modal" onClick={(e) => e.stopPropagation()}>
            <div className="v2-modal-header">
              <h2 className="v2-modal-title">Compare plans</h2>
              <button className="v2-modal-close" onClick={() => setShowCompare(false)}>&times;</button>
            </div>
            <div className="v2-compare-table">
              <div className="v2-compare-row v2-compare-row--header">
                <div className="v2-compare-cell v2-compare-cell--label"></div>
                <div className="v2-compare-cell v2-compare-cell--adv">Advantage</div>
                <div className="v2-compare-cell v2-compare-cell--advplus">Advantage Plus</div>
              </div>
              <div className="v2-compare-section-label">Support</div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Tech support hours</div><div className="v2-compare-cell v2-compare-cell--adv">10 hrs / developer</div><div className="v2-compare-cell v2-compare-cell--advplus v2-compare-cell--bold">20 hrs / developer</div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Initial response time</div><div className="v2-compare-cell v2-compare-cell--adv">36 hours</div><div className="v2-compare-cell v2-compare-cell--advplus v2-compare-cell--bold">17 hours</div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Dedicated Support Engineer</div><div className="v2-compare-cell v2-compare-cell--adv"><span className="v2-compare-dash">&mdash;</span></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Video calls</div><div className="v2-compare-cell v2-compare-cell--adv"><span className="v2-compare-dash">&mdash;</span></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-section-label">Access</div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">All new releases</div><div className="v2-compare-cell v2-compare-cell--adv"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Emergency hotfixes</div><div className="v2-compare-cell v2-compare-cell--adv"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">2nd line support by core devs</div><div className="v2-compare-cell v2-compare-cell--adv"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Online chat support</div><div className="v2-compare-cell v2-compare-cell--adv"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-section-label">Guidance</div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Implementation guidance</div><div className="v2-compare-cell v2-compare-cell--adv"><span className="v2-compare-dash">&mdash;</span></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
              <div className="v2-compare-row"><div className="v2-compare-cell v2-compare-cell--label">Code reviews & best practices</div><div className="v2-compare-cell v2-compare-cell--adv"><span className="v2-compare-dash">&mdash;</span></div><div className="v2-compare-cell v2-compare-cell--advplus"><svg className="v2-compare-check" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppV3
