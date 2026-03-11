import { useState } from 'react'
import './App.css'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('yearly-subscription')

  const topPlans = [
    {
      id: 'basic-subscription',
      title: 'Subscription',
      badge: 'RENTED',
      description: 'Use our software and updates as long as you subscribe, with support-level: Advantage.',
      price: '+$0',
      priceSubtext: '',
      yearlyAfterFirst: '$366 yearly after first year',
      footer: {
        updates: 'Latest versions',
        support: 'Advantage'
      },
      cart: {
        licenseType: 'SaaS License',
        productName: 'Highcharts Core',
        seatPrice: 366,
        subscription: 'Advantage Subscription',
        subscriptionNote: 'Included in license',
        total: 366
      }
    },
    {
      id: 'yearly-subscription',
      title: 'Subscription+',
      badge: 'RENTED',
      description: 'Use our software and updates as long as you subscribe, with support-level: Advantage+.',
      price: '+$146',
      priceSubtext: 'yearly',
      yearlyAfterFirst: '$512 yearly after first year',
      footer: {
        updates: 'Latest versions',
        support: 'Advantage+'
      },
      cart: {
        licenseType: 'SaaS License',
        productName: 'Highcharts Core',
        seatPrice: 366,
        subscription: 'Advantage+ Subscription',
        subscriptionNote: '146.00 USD yearly',
        total: 512
      }
    },
    {
      id: 'lifetime-license',
      title: 'Lifetime',
      badge: 'OWNED',
      description: 'Use our software forever, and have access to support and updates for a whole year for free. Subscribe to Advantage+ to always have the newest version.',
      price: '+ $473',
      priceSubtext: 'one-time fee',
      yearlyAfterFirst: '$336 yearly for updates after first year',
      footer: {
        extra: 'Lifetime access to the version available at purchase.',
        updates: 'Access to version-updates as long as you subscribe to Advantage+.',
        support: 'Advantage+ 1 year included'
      },
      cart: {
        licenseType: 'perpetual SaaS License',
        productName: 'Highcharts Core',
        seatPrice: 839,
        subscription: 'Advantage+ Subscription',
        subscriptionNote: 'First year included, then 335.60 USD yearly',
        total: 839
      }
    }
  ]

  return (
    <div className="App">
      <h1 className="main-heading">Rent or own?</h1>
      <p className="main-description">Choose the plan that best suits your needs.</p>
      
      <div className="main-content-wrapper">
        <div className="rent-own-container">
        {topPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rent-own-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.badge.toLowerCase()}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="yearly-after-first">
              <span className="yearly-label">{plan.badge === 'RENTED' ? 'RENT' : 'OWN'}</span>
              <span className="yearly-price">{plan.yearlyAfterFirst}</span>
            </div>
            <div className="rent-own-header">
              <div className="rent-own-title-section">
                <input
                  type="radio"
                  name="main-plan"
                  value={plan.id}
                  checked={selectedPlan === plan.id}
                  onChange={() => setSelectedPlan(plan.id)}
                  className="plan-radio"
                />
                <div>
                  <div className="rent-own-title-row">
                    <h2 className="rent-own-title">{plan.title}</h2>
                  </div>
                </div>
              </div>
              <div className="rent-own-price-section">
                <div className="rent-own-price">{plan.price}</div>
                <div className="rent-own-price-subtext">{plan.priceSubtext || '\u00A0'}</div>
              </div>
            </div>
            
            <p className="rent-own-description">{plan.description}</p>
            
            <div className="rent-own-footer">
              <h3 className="footer-heading">What's included</h3>
              
              <h4 className="footer-subheading">Version</h4>
              {plan.footer.extra && (
                <div className="footer-item">
                  <span className="footer-icon">✓</span>
                  <span>{plan.footer.extra}</span>
                </div>
              )}
              <div className="footer-item">
                <span className="footer-icon">✓</span>
                <span>{plan.footer.updates}</span>
              </div>
              
              <h4 className="footer-subheading">Support-level</h4>
              <div className="footer-item">
                <span className="footer-icon">✓</span>
                <span>{plan.footer.support}</span>
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Shopping Cart */}
        {(() => {
          const selectedPlanData = topPlans.find(p => p.id === selectedPlan);
          if (!selectedPlanData) return null;
          return (
            <div className="shopping-cart">
              <div className="cart-header">
                <h2 className="cart-title">Cart</h2>
              </div>
              
              <div className="cart-product">
                <span className="cart-product-name">{selectedPlanData.cart.productName}</span>
              </div>
              
              <div className="cart-divider"></div>
              
              <div className="cart-seat-info">
                <div className="cart-seat-count">x 1 Developer Seat</div>
                <div className="cart-seat-price">{selectedPlanData.cart.seatPrice.toFixed(2)} USD</div>
              </div>
              
              <div className="cart-divider"></div>
              
              <div className="cart-subscription">
                <div className="cart-subscription-name">{selectedPlanData.cart.subscription}</div>
                <div className="cart-subscription-note">{selectedPlanData.cart.subscriptionNote}</div>
              </div>
              
              <div className="cart-divider"></div>
              
              <div className="cart-total-section">
                <div className="cart-total-label">Total</div>
                <div className="cart-total-row">
                  <span className="cart-total-amount">{selectedPlanData.cart.total.toFixed(2)}</span>
                  <span className="cart-total-currency">USD</span>
                </div>
              </div>
              
              <button className="cart-checkout-btn">Checkout</button>
            </div>
          );
        })()}
      </div>
    </div>
  )
}

export default App
