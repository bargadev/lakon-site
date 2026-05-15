export type ReleaseEntry = {
  version: string;
  date: string;
  highlights: string[];
};

export const RELEASES: ReleaseEntry[] = [
  {
    version: '0.6.1',
    date: '2026-05-15',
    highlights: [
      'Docs-only patch: README brought in line with 0.5.0/0.6.0 features (Stop hook, SessionStart hook, `lakon version`, `CLAUDE_CONFIG_DIR`, new env vars, updated `lakon gain` output, coverage gate).',
    ],
  },
  {
    version: '0.6.0',
    date: '2026-05-14',
    highlights: [
      'Update notifications via SessionStart hook (checks npm 1×/day, opt-out with `LAKON_NO_UPDATE_CHECK=1`).',
      '`lakon version` command (also `--version` / `-v`).',
      'Visual revamp of `lakon gain` — headline summary, ANSI colors when TTY, no Unicode box-drawing (avoids terminal font fallbacks).',
      '100% test coverage (lines / branches / functions / statements) via c8.',
    ],
  },
  {
    version: '0.5.0',
    date: '2026-05-14',
    highlights: [
      'Stop hook records per-turn LLM token usage in `lakon gain` — separate "session output" block.',
      'Multi-profile Claude Code support: `CLAUDE_CONFIG_DIR=$HOME/.claude-arco lakon install` works for `claude-my` / `claude-arco` style wrappers.',
      'Generalized installer to register Stop event hooks (no matcher) cleanly.',
    ],
  },
  {
    version: '0.4.0',
    date: '2026-05-13',
    highlights: [
      'Per-project rules (Cursor / Windsurf / Cline) now scoped behind `--here` flag.',
      'Install no longer touches the current dir unless explicitly asked.',
    ],
  },
  {
    version: '0.3.0',
    date: '2026-05-12',
    highlights: [
      'Grep guard: auto-cap `head_limit=30` with one-shot hint (throttled).',
      'Read denylist expanded (lockfiles, build artifacts, `.next`, `.cache`, etc.).',
      '"Think in code" rule — model writes one-off scripts instead of ingesting bulk data.',
    ],
  },
];
