// Core identity and links. Edit freely; everything on the page reads from here.

export const profile = {
  name: 'Kazem Faghih',
  // Shown under the name in the hero.
  position: 'PhD Student in Computer Science',
  affiliation: 'University of Maryland, College Park',
  affiliationUrl: 'https://www.cs.umd.edu/',
  advisor: { name: 'Soheil Feizi', url: 'https://www.cs.umd.edu/~sfeizi/' },

  // Used for <meta name="description"> and social previews.
  description:
    'Kazem Faghih is a Computer Science PhD student at the University of Maryland, College Park, working on LLM evaluation, reliability, and agentic AI.',

  // Path under /public. Leave empty ('') to show the monogram placeholder.
  photo: '/images/profile.jpg',

  // Path under /public (e.g. '/cv.pdf') or a full URL. While empty, the CV button
  // shows as a "coming soon" placeholder.
  // TODO: add a website-safe CV (no phone number) at public/cv.pdf and set this to '/cv.pdf'.
  cv: '',

  links: {
    email: 'kazemf@umd.edu',
    scholar: 'https://scholar.google.com/citations?user=57pBrCcAAAAJ',
    github: 'https://github.com/kazemf78',
    linkedin: 'https://www.linkedin.com/in/kazem-faghih/',
  },
};

// Hero introduction. Plain HTML is allowed (links, <em>, <strong>).
export const bio = [
  `I'm a Computer Science PhD student at the University of Maryland, College Park, advised by
   <a href="https://www.cs.umd.edu/~sfeizi/">Prof. Soheil Feizi</a>. I work on
   <strong>LLM evaluation, reliability, and agentic AI</strong>. I study how model behavior changes
   across equivalent user requests, tool descriptions, and agentic interactions, and I develop better
   ways to evaluate and improve the reliability of these systems.`,
  `Before my PhD, I worked across machine learning research, software engineering, and large-scale data
   systems, including GPU-accelerated sequence search at the Max Planck Institute and industry work on
   language models, retrieval-augmented generation, and distributed systems.`,
];

// Short line near the introduction. Set to '' to hide.
export const callout =
  'Open to Summer 2027 research internships in LLM research, AI evaluation, reliability, and agentic AI.';

export const interests = [
  {
    title: 'LLM evaluation & reliability',
    text: 'Looking beyond benchmark accuracy to ask whether a model behaves consistently when equivalent requests are phrased differently.',
  },
  {
    title: 'Agentic & tool-augmented LLMs',
    text: 'How agents choose and use tools, how sensitive those choices are to tool descriptions and context, and the security of the ecosystems agents rely on.',
  },
  {
    title: 'Better evaluation methods',
    text: 'Developing evaluation methods that show where a model can be relied on and where it falls short, so that reliability can be measured and improved.',
  },
];
