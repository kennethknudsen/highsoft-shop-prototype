import { useState } from 'react'
import './App.css'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('annual-adv')

  const topPlans = [
    {
      id: 'annual-adv',
      title: 'Support',
      description: '10 hours support per year',
      price: '+ $0'
    },
    {
      id: 'annual-advplus',
      title: 'Premium Support',
      description: '20 hours support per year',
      price: '+ $487'
    },
    {
      id: 'perpetual-advplus',
      title: 'Premium Support incl.',
      description: '20 hours support per year',
      price: '+ $839'
    }
  ]

  const bottomPlans = [
    {
      id: 'annual-adv',
      title: 'Subscription + Support',
      description: 'Pay yearly for continuous access to latest versions and support. Active subscription required for software use.',
      price: '+ $0'
    },
    {
      id: 'annual-advplus',
      title: 'Subscription + Premium Support',
      description: 'Annual subscription with premium support, latest releases, and dedicated engineering guidance.',
      price: '+ $487'
    },
    {
      id: 'perpetual-advplus',
      title: 'Pay once + Premium Support for 1 year',
      description: 'Own forever with one payment. Includes 1 year of updates and premium support. Continue using your version indefinitely.',
      price: '+ $839'
    }
  ]

  return (
    <div className="App">
      <h1 className="main-heading">License configuration</h1>
      
      <div className="license-groups">
        {/* Subscription Group */}
        <div className="license-group">
          <div className="group-label">Subscription-based access</div>          <p className="group-description">
            You can use our software with the newest version as long as you subscribe.
          </p>          <div className="group-plans">
            {topPlans.filter(p => p.id.startsWith('annual')).map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="plan-header">
                  <div className="plan-title-section">
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={() => setSelectedPlan(plan.id)}
                      className="plan-radio"
                    />
                    <h2 className="plan-title">{plan.title}</h2>
                  </div>
                </div>
                
                <p className="plan-description">{plan.description}</p>
                
                <div className="plan-price">{plan.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Perpetual Group */}
        <div className="license-group">
          <div className="group-label">Forever access</div>          <p className="group-description">
            You can use our software forever, but only update to newest versions as long as you subscribe to support. First year is free!
          </p>          <div className="group-plans">
            {topPlans.filter(p => p.id.startsWith('perpetual')).map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="plan-header">
                  <div className="plan-title-section">
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={() => setSelectedPlan(plan.id)}
                      className="plan-radio"
                    />
                    <h2 className="plan-title">{plan.title}</h2>
                  </div>
                </div>
                
                <p className="plan-description">{plan.description}</p>
                
                <div className="plan-price">{plan.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="compact-plans-section">
        <h2 className="section-heading">How would you pay?</h2>
        <div className="compact-plans-list">
          {bottomPlans.map((plan) => (
            <div 
              key={`compact-${plan.id}`} 
              className="compact-plan-item"
              onClick={() => setSelectedPlan(plan.id)}
            >
              <input
                type="radio"
                name="plan"
                value={plan.id}
                checked={selectedPlan === plan.id}
                onChange={() => setSelectedPlan(plan.id)}
                className="compact-plan-radio"
              />
              <div className="compact-plan-content">
                <h3 className="compact-plan-title">{plan.title}</h3>
                <p className="compact-plan-description">{plan.description}</p>
              </div>
              <div className="compact-plan-price">{plan.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
