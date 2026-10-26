// Publications, newest first. To add a paper, copy an entry and edit it.
//
// - authors: list names as they appear on the paper. Your own name is
//   highlighted automatically (see `me` below). Append '*' for equal contribution.
// - status: 'published' | 'preprint' | 'under-review'
// - venue: short label shown as a tag (e.g. 'EMNLP 2025', 'arXiv').
// - links: any of paper / arxiv / code / project / bibtex. Empty or missing ones are hidden.
// - selected: true shows the paper by default; others appear under "Show all".

export const me = 'K Faghih';

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  venueFull?: string;
  year: number;
  status: 'published' | 'preprint' | 'under-review';
  selected?: boolean;
  links?: { paper?: string; arxiv?: string; code?: string; project?: string; bibtex?: string };
  note?: string;
};

export const publications: Publication[] = [
  {
    title:
      'Revealing What Benchmark Scores Hide: Jointly Measuring the Breadth and Reliability of LLM Capabilities Using Accessibility Profiles',
    authors: ['K Faghih', 'Y Cheng', 'S Saha', 'M Pournemat', 'A Gerami', 'S Feizi'],
    venue: 'arXiv',
    year: 2026,
    status: 'preprint',
    selected: true,
    links: { arxiv: 'https://arxiv.org/abs/2610.24957', code: 'https://github.com/kazemf78/access-eval' },
  },
  {
    title: 'Same Question, Different Answers: Evaluating LLM Reliability Beyond Accuracy',
    authors: ['K Faghih*', 'Y Cheng*', 'S Saha', 'M Pournemat', 'A Gerami', 'S Feizi'],
    venue: 'arXiv',
    year: 2026,
    status: 'preprint',
    links: { arxiv: 'https://arxiv.org/abs/2607.22554', code: 'https://github.com/kazemf78/llm-consistency-study' },
  },
  {
    title: 'Under the Hood of SKILL.md: Semantic Supply-Chain Attacks on AI Agent Skill Registry',
    authors: ['S Saha', 'K Faghih', 'S Feizi'],
    venue: 'arXiv',
    year: 2026,
    status: 'preprint',
    links: { arxiv: 'https://arxiv.org/abs/2605.11418', code: 'https://github.com/ShoumikSaha/agent-skill-security' },
  },
  {
    title: 'Quantifying Document Impact in RAG-LLMs',
    authors: ['A Gerami', 'K Faghih', 'R Duraiswami'],
    venue: 'arXiv',
    year: 2026,
    status: 'preprint',
    links: { arxiv: 'https://arxiv.org/abs/2601.05260' },
  },
  {
    title:
      'Your LLM Agents are Temporally Blind: The Misalignment Between Tool Use Decisions and Human Time Perception',
    authors: ['Y Cheng*', 'A S Moakhar*', 'C Fan*', 'P Hosseini', 'K Faghih', 'Z Sodagar', 'W Wang', 'S Feizi'],
    venue: 'Findings of ACL 2026',
    year: 2026,
    status: 'published',
    selected: true,
    links: {
      paper: 'https://aclanthology.org/2026.findings-acl.1848/',
      arxiv: 'https://arxiv.org/abs/2510.23853',
      code: 'https://github.com/chengez/TicToc',
    },
  },
  {
    title: 'Tool Preferences in Agentic LLMs are Unreliable',
    authors: ['K Faghih*', 'W Wang*', 'Y Cheng*', 'S Bharti', 'G Sriramanan', 'S Balasubramanian', 'P Hosseini', 'S Feizi'],
    venue: 'EMNLP 2025',
    venueFull: 'EMNLP 2025 (Main Conference)',
    year: 2025,
    status: 'published',
    selected: true,
    links: {
      paper: 'https://aclanthology.org/2025.emnlp-main.1060/',
      arxiv: 'https://arxiv.org/abs/2505.18135',
      code: 'https://github.com/kazemf78/llm-unreliable-tool-preferences',
    },
    note: 'Shows that surface-level edits to tool descriptions can raise selection probability by more than 20× in some settings.',
  },
];
