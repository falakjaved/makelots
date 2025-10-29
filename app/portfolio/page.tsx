/* eslint-disable @next/next/no-img-element */
import { portfolio } from "../../data/portfolio";

export default function Portfolio() {
  return (
    <div style={{ padding: '24px 0' }}>
      <h1>Portfolio</h1>
      <div className="grid">
        {portfolio.map(item => (
          <div key={item.title} className="card">
            <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '12px' }} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
