import { Link, Navigate, useParams } from 'react-router-dom';
import { categories } from '../data/categories.js';
import DemoSite from '../components/DemoSite.jsx';

const Demo = () => {
  const { slug, demoId } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const demo = category?.demos.find((item) => item.id === demoId);

  if (!category || !demo) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page fade-in">
      <div className="demo-breadcrumb">
        <Link to={`/categorie/${slug}`}>← Retour {category.label}</Link>
      </div>

      <section className="demo-hero" style={{ borderColor: category.accent }}>
        <div className="demo-hero__content">
          <p className="hero__eyebrow">{category.label}</p>
          <h1>{demo.title}</h1>
          <p>{demo.summary}</p>
          <div className="demo-hero__actions">
            <a href="#demo-site" className="btn btn--primary">
              Voir la démo immersive
            </a>
            <a href="mailto:hello@novacraft.studio" className="btn btn--ghost">
              Co-créer ce concept
            </a>
          </div>
        </div>
        <div className="demo-hero__mockup">
          <div className="mockup-frame" style={{ borderColor: category.accent }}>
            <img src={demo.image} alt={demo.title} loading="lazy" />
          </div>
          <span>Mock-up haute-fidélité</span>
        </div>
      </section>

      <DemoSite category={category} demo={demo} />
    </div>
  );
};

export default Demo;

