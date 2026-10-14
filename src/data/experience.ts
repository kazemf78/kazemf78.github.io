// Experience, newest first. `kind` sets the small label next to each role.
// `summary` is one line. Keep it short; the CV has the details.

export type Experience = {
  org: string;
  url?: string;
  role: string;
  kind: 'Research' | 'Industry';
  dates: string;
  location?: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    org: 'University of Maryland',
    url: 'https://www.cs.umd.edu/',
    role: 'Research Assistant · Advisor: Prof. Soheil Feizi',
    kind: 'Research',
    dates: 'Jan 2025 – Present',
    location: 'College Park, MD',
    summary:
      'Research on LLM and agent reliability: how model behavior varies across user formulations, tool interfaces, and agentic settings.',
  },
  {
    org: 'Yektanet',
    role: 'Software Engineer',
    kind: 'Industry',
    dates: 'Apr 2024 – Nov 2024',
    location: 'Tehran, Iran',
    summary:
      'Built retention-marketing infrastructure for 100M+ contacts delivering 100K+ SMS/push messages per minute, and a user-location service at ~4K requests/second.',
  },
  {
    org: 'Mofid Securities',
    role: 'ML Engineer & Data Scientist',
    kind: 'Industry',
    dates: 'Jun 2023 – Apr 2024',
    location: 'Tehran, Iran',
    summary:
      'Led development of a Persian generative language model (data curation, pre-training, fine-tuning, evaluation) and built a production retrieval-augmented chatbot.',
  },
  {
    org: 'Max Planck Institute for Multidisciplinary Sciences',
    role: 'Research Assistant · Prof. Johannes Söding, with Prof. Martin Steinegger',
    kind: 'Research',
    dates: 'Aug 2022 – Apr 2023',
    location: 'Göttingen, Germany',
    summary:
      'Developed a new GPU prefilter for MMseqs2, the protein sequence-search tool used in workflows such as AlphaFold and ColabFold, using CUDA-parallelized ungapped alignment. It ran about 2× faster than the optimized CPU version at comparable sensitivity.',
  },
  {
    org: 'Sharif University of Technology',
    role: 'Research Assistant · Prof. Ali Sharif-Zarchi',
    kind: 'Research',
    dates: 'Jun 2022 – Jan 2023',
    location: 'Tehran, Iran',
    summary:
      'Studied representation learning for peptide-HLA binding prediction using protein language models, AlphaFold-derived representations, and multiple-sequence alignments.',
  },
  {
    org: 'Cafebazaar / Balad Maps',
    role: 'Software Engineer & Data Engineer',
    kind: 'Industry',
    dates: 'Jul 2020 – Sep 2021',
    location: 'Tehran, Iran',
    summary:
      'Ran backend and data services processing ~200M map records per day; migrated high-throughput services from Django/REST to Go/gRPC on Kubernetes.',
  },
  {
    org: 'Nimbo',
    role: 'Big Data Intern',
    kind: 'Industry',
    dates: 'Jun 2019 – Sep 2019',
    location: 'Tehran, Iran',
    summary:
      'Built a distributed search-engine prototype over ~100M documents with Hadoop, Spark, Kafka, Elasticsearch, and PageRank.',
  },
];
