import './LayoutNav.css'

const layouts = [
  { hash: '#/', label: '1' },
  { hash: '#/v2', label: '2' },
  { hash: '#/v3', label: '3' },
  { hash: '#/v4', label: '4' },
]

function LayoutNav({ current }) {
  return (
    <div className="layout-nav">
      <span className="layout-nav-label">Layout</span>
      {layouts.map((l) => (
        <a
          key={l.hash}
          href={l.hash}
          className={`layout-nav-item ${current === l.hash ? 'layout-nav-item--active' : ''}`}
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}

export default LayoutNav
