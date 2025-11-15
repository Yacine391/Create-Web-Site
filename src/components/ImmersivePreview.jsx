const ImmersivePreview = ({ preview = {}, accent }) => {
  const navItems = preview.nav ?? [];
  const cards = preview.cards ?? [];

  return (
    <div className="immersive-preview" style={{ borderColor: accent }}>
      <header className="immersive-preview__header">
        <span className="immersive-preview__brand">{preview.brand ?? 'Concept'}</span>
        {navItems.length > 0 && (
          <nav className="immersive-preview__nav" aria-label="Navigation d’aperçu">
            {navItems.map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
          </nav>
        )}
        <button type="button" className="immersive-preview__toggle" aria-label="Ouvrir le menu">
          ···
        </button>
      </header>

      <div className="immersive-preview__hero">
        {preview.hero?.eyebrow && <p className="immersive-preview__eyebrow">{preview.hero.eyebrow}</p>}
        {preview.hero?.title && <h4>{preview.hero.title}</h4>}
        {preview.hero?.text && <p>{preview.hero.text}</p>}
        {preview.pill && <span className="immersive-preview__pill">{preview.pill}</span>}
      </div>

      {cards.length > 0 && (
        <div className="immersive-preview__cards" role="list">
          {cards.map((card) => (
            <article key={`${card.title}-${card.value}`} role="listitem">
              <p className="immersive-preview__card-label">{card.title}</p>
              <strong>{card.value}</strong>
              <span>{card.meta}</span>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImmersivePreview;

