import { useEffect, useState } from 'react';

const metrics = [
  {
    label: 'Frontend',
    value: 'React',
  },
  {
    label: 'Build',
    value: 'Vite',
  },
  {
    label: 'Data layer',
    value: 'Sequelize',
  },
];

export default function App() {
  const [usersRoute, setUsersRoute] = useState('Checking');

  useEffect(() => {
    let active = true;

    fetch('/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        return response.text();
      })
      .then((text) => {
        if (active) {
          setUsersRoute(text || 'Connected');
        }
      })
      .catch(() => {
        if (active) {
          setUsersRoute('Unavailable');
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">node.mysql</p>
        <h1>Database app</h1>
        <p className="summary">
          The previous server-rendered page has been replaced with a Vite React
          front end while the Express routes stay available for backend work.
        </p>
      </section>

      <section className="metric-grid" aria-label="Project overview">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
        <article className="metric-card metric-card--wide">
          <span>/users</span>
          <strong>{usersRoute}</strong>
        </article>
      </section>
    </main>
  );
}
