import { Link } from 'react-router-dom';

const galleryFallbacks = {
  restauration: [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80',
  ],
  coiffure: [
    'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1427088625471-da8a7193afd3?auto=format&fit=crop&w=900&q=80',
  ],
  immobilier: [
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=900&q=80',
  ],
  evenementiel: [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  ],
  photographie: [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  ],
  tech: [
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  ],
  default: [
    'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80',
  ],
};

const moduleTemplates = {
  restauration: [
    (demo) => ({
      title: 'Menu sensoriel',
      description: `Cartes modulaires et mises en bouche interactives dédiées à ${demo.title}.`,
    }),
    () => ({
      title: 'Expérience table',
      description: 'Timeline de service avec mise en avant des accords mets & vins.',
    }),
    () => ({
      title: 'Réservations intelligentes',
      description: 'Formulaire fluide avec rappels SMS et gestion des listes d’attente.',
    }),
  ],
  coiffure: [
    (demo) => ({
      title: 'Lookbook dynamique',
      description: `Avant / Après immersifs pour révéler le style ${demo.title}.`,
    }),
    () => ({
      title: 'Moteur de rendez-vous',
      description: 'Slots en temps réel synchronisés avec les stylistes.',
    }),
    () => ({
      title: 'Offres & abonnements',
      description: 'Packaging clair pour forfaits colorations, soins et barbers.',
    }),
  ],
  immobilier: [
    (demo) => ({
      title: 'Explorer les programmes',
      description: `Fiches détaillées, vues 3D et filtres vocations pour ${demo.title}.`,
    }),
    () => ({
      title: 'Parcours investisseur',
      description: 'Calculs de rendement, comparateurs et documents téléchargeables.',
    }),
    () => ({
      title: 'Contact instantané',
      description: 'CTA sticky, WhatsApp et demandes de visite contextualisées.',
    }),
  ],
  evenementiel: [
    (demo) => ({
      title: 'Storyline immersive',
      description: `Narration en scroll pour projeter l’univers de ${demo.title}.`,
    }),
    () => ({
      title: 'Modules sponsors',
      description: 'Vitrines partenaires, logos animés et carrousels médias.',
    }),
    () => ({
      title: 'CTA devis rapide',
      description: 'Formulaire court avec logique conditionnelle selon l’événement.',
    }),
  ],
  photographie: [
    (demo) => ({
      title: 'Galeries plein écran',
      description: `Mosaïques adaptatives mettant en scène ${demo.title}.`,
    }),
    () => ({
      title: 'Packs & prestations',
      description: 'Tableaux comparatifs, modules licences et options d’impression.',
    }),
    () => ({
      title: 'Espace clients',
      description: 'Accès sécurisé pour livrer, commenter et télécharger les séries.',
    }),
  ],
  tech: [
    (demo) => ({
      title: 'Hero produit',
      description: `Mise en scène pitch deck & KPI pour ${demo.title}.`,
    }),
    () => ({
      title: 'Modules fonctionnalités',
      description: 'Grilles dynamiques, sliders et comparateurs plans.',
    }),
    () => ({
      title: 'Preuve sociale',
      description: 'Logos clients, reviews G2 et intégration métriques.',
    }),
  ],
  default: [
    (demo, category) => ({
      title: 'Hero narratif',
      description: `Section d’ouverture immersive adaptée à ${demo.title} (${category.label}).`,
    }),
    () => ({
      title: 'Section storytelling',
      description: 'Blocs éditoriaux pour contextualiser l’offre.',
    }),
    () => ({
      title: 'CTA principal',
      description: 'Bouton sticky multi-devices pour maximiser la conversion.',
    }),
  ],
};

const metricTemplates = {
  restauration: [
    { value: '+41%', label: 'Réservations' },
    { value: '0.9s', label: 'Temps de chargement' },
    { value: 'AA', label: 'Contraste' },
  ],
  coiffure: [
    { value: '+32%', label: 'Rendez-vous' },
    { value: '98/100', label: 'Score UX' },
    { value: '2.1%', label: 'Bounce rate' },
  ],
  immobilier: [
    { value: '+57%', label: 'Leads qualifiés' },
    { value: '1.2s', label: 'LCP' },
    { value: '3 langues', label: 'Localisation' },
  ],
  evenementiel: [
    { value: '+64%', label: 'Demandes devis' },
    { value: '90+', label: 'Événements/an' },
    { value: '0.8s', label: 'Interaction' },
  ],
  photographie: [
    { value: '+48%', label: 'Demandes shooting' },
    { value: '4K', label: 'Galeries' },
    { value: '99%', label: 'Disponibilité' },
  ],
  tech: [
    { value: '+35%', label: 'Signups' },
    { value: '<1s', label: 'TTFB' },
    { value: 'SOC2', label: 'Confiance' },
  ],
  default: [
    { value: '+40%', label: 'Conversion' },
    { value: '1s', label: 'Performance' },
    { value: '100%', label: 'Accessibilité' },
  ],
};

const DemoSite = ({ category, demo }) => {
  const normalizedFeatures =
    demo.highlights && demo.highlights.length > 0
      ? demo.highlights
      : demo.style
          .split(',')
          .map((item) => item.replace('.', '').trim())
          .filter(Boolean);

  const features = normalizedFeatures.length
    ? normalizedFeatures
    : ['Scénographie immersive', 'Micro-interactions accessibles', 'Design system cohérent'];

  const modulesFactories = moduleTemplates[category.slug] ?? moduleTemplates.default;
  const modules = modulesFactories.map((factory) => factory(demo, category));

  const metrics = metricTemplates[category.slug] ?? metricTemplates.default;

  const galleryPool = galleryFallbacks[category.slug] ?? galleryFallbacks.default;
  const gallerySources = [demo.image, ...galleryPool].slice(0, 3).filter(Boolean);

  return (
    <section id="demo-site" className="demo-site" aria-label={`Démo ${demo.title}`}>
      <div className="demo-site__hero" style={{ borderColor: category.accent }}>
        <div className="demo-site__hero-copy">
          <p className="hero__eyebrow">{category.label}</p>
          <h2>{demo.title}</h2>
          <p>{demo.summary}</p>
          <div className="stat-pills" role="list">
            {metrics.map((metric) => (
              <div key={metric.label} className="stat-pill" role="listitem">
                <span className="stat-pill__value">{metric.value}</span>
                <span className="stat-pill__label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="demo-site__hero-preview" aria-hidden="true">
          <div className="mockup-frame" style={{ borderColor: category.accent }}>
            <img src={demo.image} alt="" loading="lazy" />
          </div>
          <span>Preview haute-fidélité</span>
        </div>
      </div>

      <div className="demo-site__section" aria-labelledby="intentions-heading">
        <div className="section__header">
          <h3 id="intentions-heading">Intentions clés</h3>
          <p>Les éléments UI qui différencient ce concept.</p>
        </div>
        <div className="feature-grid" role="list">
          {features.map((feature) => (
            <article key={feature} className="feature-card" role="listitem">
              <h4>{feature}</h4>
              <p>
                Optimisé pour {category.label.toLowerCase()} avec une attention particulière à la lecture mobile.
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="demo-site__section" aria-labelledby="modules-heading">
        <div className="section__header">
          <h3 id="modules-heading">Modules interactifs</h3>
          <p>Blocs construits sur notre design system pour prototyper rapidement.</p>
        </div>
        <div className="module-grid" role="list">
          {modules.map((module) => (
            <article key={module.title} className="module-card" role="listitem">
              <h4>{module.title}</h4>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="demo-site__section" aria-labelledby="gallery-heading">
        <div className="section__header">
          <h3 id="gallery-heading">Aperçus responsives</h3>
          <p>Variations desktop, tablette et mobile pour valider chaque viewport.</p>
        </div>
        <div className="gallery-mosaic">
          {gallerySources.map((source, index) => (
            <figure key={source} className="gallery-mosaic__item">
              <img src={source} alt={`Écran ${index + 1} de ${demo.title}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="demo-site__cta">
        <h3>Prêt à activer {demo.title} ?</h3>
        <p>
          Nous adaptons cette base aux contenus, branding et contraintes techniques de votre équipe. Livraison
          sous 10 jours avec recettes croisées QA + accessibilité.
        </p>
        <div className="hero__actions">
          <a href="mailto:hello@novacraft.studio" className="btn btn--primary">
            Planifier un atelier
          </a>
          <Link to={`/categorie/${category.slug}`} className="btn btn--ghost">
            Voir d’autres univers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSite;

