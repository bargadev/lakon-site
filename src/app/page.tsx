import Image from 'next/image';
import CopyButton from '@/components/CopyButton';
import { asset } from '@/lib/asset';
import styles from './page.module.css';

const INSTALL_CMD = 'npm install -g @bargadev/lakon && lakon install';

const PLATFORMS = [
  'Claude Code (CLI + IDE)',
  'Codex',
  'Cursor',
  'Windsurf',
  'Cline',
  'Gemini CLI',
];

const SAVINGS = [
  { cmd: 'git log -p -10', before: '10,497', after: '78', delta: '-94%' },
  { cmd: 'ls -laR (deep dir)', before: '23,624', after: '117', delta: '-94%' },
  { cmd: 'git diff HEAD~5', before: '13,230', after: '798', delta: '-89%' },
  { cmd: 'git log --stat -50', before: '4,845', after: '439', delta: '-86%' },
  { cmd: 'git status', before: '17', after: '1', delta: '-89%' },
  { cmd: 'Read pnpm-lock.yaml', before: '~56,000', after: 'blocked', delta: '-95%' },
  { cmd: 'Grep (head_limit auto)', before: 'unbounded', after: '30 matches', delta: 'capped' },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#top" className={styles.logoRow}>
            <Image
              src={asset('/logo.svg')}
              alt="lakon"
              width={28}
              height={28}
              className={styles.logoIcon}
              priority
            />
            <span className={styles.logoName}>lakon</span>
          </a>
          <nav className={styles.headerNav}>
            <a href="#story">story</a>
            <a href="#what">what it does</a>
            <a href="#install">install</a>
            <a
              href="https://github.com/bargadev/lakon-lib"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </nav>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <Image
          src={asset('/logo.svg')}
          alt=""
          width={88}
          height={88}
          className={styles.heroLogo}
          priority
        />
        <h1 className={styles.heroTitle}>
          Cut LLM tokens by up to <span className={styles.heroAccent}>94%</span>.
        </h1>
        <p className={styles.heroTagline}>
          Three fronts, one install: terse model output, filtered shell output,
          blocked junk reads. Without losing a single identifier.
        </p>
        <p className={styles.heroSubTagline}>Spartan replies for AI agents. Less words. Win wars.</p>

        <div className={styles.installRow} id="install">
          <div className={styles.installBlock}>
            <span className={styles.prompt}>$</span>
            <span className={styles.installCmd}>{INSTALL_CMD}</span>
            <CopyButton text={INSTALL_CMD} className={styles.copyBtn} />
          </div>
          <div className={styles.heroLinks}>
            <a
              href="https://github.com/bargadev/lakon-lib"
              target="_blank"
              rel="noreferrer"
            >
              github →
            </a>
            <a
              href="https://www.npmjs.com/package/@bargadev/lakon"
              target="_blank"
              rel="noreferrer"
            >
              npm →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="story">
        <h2 className={styles.sectionTitle}>The story behind the name</h2>
        <p className={styles.sectionLead}>
          Where the word <em>laconic</em> came from — and why your agent
          shouldn&apos;t open with &ldquo;Great question!&rdquo;.
        </p>
        <div className={styles.story}>
          <p>
            In 346 BC, Philip II of Macedon — father of Alexander the Great —
            sent the Spartans a message:
          </p>
          <blockquote>
            &ldquo;If I invade Lakonía, I will raze your cities to the
            ground.&rdquo;
          </blockquote>
          <p>The Spartans replied with a single word:</p>
          <blockquote>&ldquo;If.&rdquo;</blockquote>
          <p>
            That region was <strong>Lakonía</strong>. Its people gave the
            English language the word <strong>laconic</strong> — using as few
            words as possible. They didn&apos;t waste breath, didn&apos;t waste
            arrows, didn&apos;t waste anything.
          </p>
          <p>
            Your AI coding agent does. It opens with{' '}
            <em>&ldquo;Sure! I&apos;d be happy to help…&rdquo;</em>, repeats your
            question back, and explains what the diff already shows. Every
            wasted token is a soldier you didn&apos;t need to send.
          </p>
          <p>
            <strong>lakon trims both sides.</strong>
          </p>
        </div>
      </section>

      <section className={styles.section} id="what">
        <h2 className={styles.sectionTitle}>Five fronts</h2>
        <p className={styles.sectionLead}>
          Other tools stop at one. lakon covers all five transparently — your
          agent doesn&apos;t have to remember anything.
        </p>
        <div className={styles.fronts}>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>output</p>
            <h3 className={styles.frontTitle}>Terse the model</h3>
            <p className={styles.frontBody}>
              Installs a Spartan response rule. No preamble, no restating, no
              recap. Fragments are fine. Identifiers, paths, and errors stay
              verbatim.
            </p>
          </div>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>shell</p>
            <h3 className={styles.frontTitle}>Filter the tools</h3>
            <p className={styles.frontBody}>
              <code>PreToolUse</code> on <code>Bash</code> auto-prefixes{' '}
              <code>git</code>/<code>ls</code>/<code>grep</code>/<code>cat</code>{' '}
              with <code>lakon</code> and compresses output before it enters
              context.
            </p>
          </div>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>reads</p>
            <h3 className={styles.frontTitle}>Block junk reads</h3>
            <p className={styles.frontBody}>
              <code>PreToolUse</code> on <code>Read</code> denies 30+ junk
              paths (<code>node_modules/</code>, lockfiles, build artifacts,
              caches). Caps files &gt;800 lines.
            </p>
          </div>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>search</p>
            <h3 className={styles.frontTitle}>Cap the Grep</h3>
            <p className={styles.frontBody}>
              <code>PreToolUse</code> on <code>Grep</code> auto-sets{' '}
              <code>head_limit=30</code>. First call hints{' '}
              <code>output_mode:&quot;count&quot;</code> for tallies; rest cap
              silently.
            </p>
          </div>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>analysis</p>
            <h3 className={styles.frontTitle}>Think in code</h3>
            <p className={styles.frontBody}>
              For count/filter/parse tasks the rule pushes a one-shot{' '}
              <code>node -e</code> or <code>awk</code> script. The script reads
              the data; you read the answer.
            </p>
          </div>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>throttle</p>
            <h3 className={styles.frontTitle}>Hint once, then silent</h3>
            <p className={styles.frontBody}>
              Atomic <code>O_EXCL</code> markers in <code>/tmp</code> mean each
              guidance line fires once per session. No spam, no token bloat
              from repeated hints.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Real savings</h2>
        <p className={styles.sectionLead}>
          Conservative numbers from real commands — peaks go higher in
          practice. Run <code>lakon inspect &lt;cmd&gt;</code> on your own
          machine to measure.
        </p>
        <div className={styles.savings}>
          <div className={`${styles.savingsRow} ${styles.header}`}>
            <span>command</span>
            <span>tokens (raw → filtered)</span>
            <span style={{ textAlign: 'right' }}>delta</span>
          </div>
          {SAVINGS.map((row) => (
            <div className={styles.savingsRow} key={row.cmd}>
              <span className={styles.cmd}>{row.cmd}</span>
              <span className={styles.tokens}>
                {row.before} → {row.after}
              </span>
              <span className={styles.delta}>{row.delta}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Use the filter directly</h2>
        <p className={styles.sectionLead}>
          The CLI works standalone too. Prefix any command with{' '}
          <code>lakon</code> (or <code>lak</code>).
        </p>
        <pre className={styles.codeBlock}>
          <code>
            {`lakon git status        `}
            <span className={styles.comment}>{`# compressed status`}</span>
            {`\nlakon git log -50       `}
            <span className={styles.comment}>{`# one line per commit`}</span>
            {`\nlakon git diff          `}
            <span className={styles.comment}>{`# only +/- lines`}</span>
            {`\nlakon ls -la            `}
            <span className={styles.comment}>{`# size + name only`}</span>
            {`\nlakon grep -r foo src/  `}
            <span className={styles.comment}>{`# truncates at 40 matches`}</span>
          </code>
        </pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Works with every major agent</h2>
        <p className={styles.sectionLead}>
          One install auto-detects what you have and configures the{' '}
          <strong>global</strong> agents (Claude Code, Codex, Gemini) in{' '}
          <code>~/</code> — never touches your current directory. For
          per-project rules (Cursor, Windsurf, Cline), add{' '}
          <code>--here</code> from inside the repo.
        </p>
        <p className={styles.sectionLead}>
          Claude Code support covers <strong>every frontend</strong> —
          terminal, VS Code, JetBrains, desktop — they share the same{' '}
          <code>~/.claude/</code> config.
        </p>
        <div className={styles.platforms}>
          {PLATFORMS.map((p) => (
            <span className={styles.platformChip} key={p}>
              {p}
            </span>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>MIT · zero dependencies · node ≥ 18</span>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com/bargadev/lakon-lib"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://www.npmjs.com/package/@bargadev/lakon"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
