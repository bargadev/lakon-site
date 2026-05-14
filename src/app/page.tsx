import Image from 'next/image';
import CopyButton from '@/components/CopyButton';
import styles from './page.module.css';

const INSTALL_CMD = 'npm install -g @bargadev/lakon && lakon install';

const PLATFORMS = [
  'Claude Code',
  'Codex',
  'Cursor',
  'Windsurf',
  'Cline',
  'Gemini CLI',
];

const SAVINGS = [
  { cmd: 'git log -50', before: '1,859', after: '173', delta: '-91%' },
  { cmd: 'git diff HEAD~5', before: '7,965', after: '2,523', delta: '-68%' },
  { cmd: 'ls -la', before: '317', after: '70', delta: '-78%' },
  { cmd: 'git status', before: '57', after: '18', delta: '-68%' },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#top" className={styles.logoRow}>
            <Image
              src="/logo.svg"
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
          src="/logo.svg"
          alt=""
          width={88}
          height={88}
          className={styles.heroLogo}
          priority
        />
        <h1 className={styles.heroTitle}>Spartan replies for AI agents.</h1>
        <p className={styles.heroTagline}>
          Terse model output + filtered CLI output. Cuts LLM tokens on both ends.
        </p>
        <p className={styles.heroSubTagline}>Less words. Win wars.</p>

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
        <h2 className={styles.sectionTitle}>Two fronts</h2>
        <p className={styles.sectionLead}>
          Wasted tokens come from the model and from the tools it reads. lakon
          handles both.
        </p>
        <div className={styles.fronts}>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>output side</p>
            <h3 className={styles.frontTitle}>Terse the model</h3>
            <p className={styles.frontBody}>
              Installs a Spartan-style response rule into your agent&apos;s
              config — no preamble, no restating, no recap. Fragments are fine.
              Precision is preserved.
            </p>
          </div>
          <div className={styles.frontCard}>
            <p className={styles.frontLabel}>input side</p>
            <h3 className={styles.frontTitle}>Filter the tools</h3>
            <p className={styles.frontBody}>
              Wraps shell commands and compresses output before it enters
              context. <code>git log</code> becomes one line per commit.{' '}
              <code>git diff</code> drops the noise. Same exit code, same
              behavior.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Real savings</h2>
        <p className={styles.sectionLead}>
          Measured on real commands from the lakon repo.
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
          One install auto-detects what you have and configures each.
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
