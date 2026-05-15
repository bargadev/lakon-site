import Image from 'next/image';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { LAKON_VERSION } from '@/lib/version';
import { RELEASES } from '@/lib/releases';
import styles from '../page.module.css';
import releaseStyles from './releases.module.css';

export const metadata = {
  title: 'lakon — releases',
  description: 'Release notes for lakon, the spartan output filter for AI coding agents.',
};

export default function ReleasesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoRow}>
            <Image
              src={asset('/logo.svg')}
              alt="lakon"
              width={28}
              height={28}
              className={styles.logoIcon}
              priority
            />
            <span className={styles.logoName}>lakon</span>
            <span className={styles.versionPill} aria-label={`current version ${LAKON_VERSION}`}>
              v{LAKON_VERSION}
            </span>
          </Link>
          <nav className={styles.headerNav}>
            <Link href="/#story">story</Link>
            <Link href="/#what">what it does</Link>
            <Link href="/#install">install</Link>
            <Link href="/releases" aria-current="page">releases</Link>
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

      <section className={releaseStyles.hero}>
        <h1 className={releaseStyles.title}>Releases</h1>
        <p className={releaseStyles.lead}>
          What changed, when. Latest first.
        </p>
        <div className={releaseStyles.heroLinks}>
          <a
            href="https://www.npmjs.com/package/@bargadev/lakon?activeTab=versions"
            target="_blank"
            rel="noreferrer"
          >
            npm versions →
          </a>
          <a
            href="https://github.com/bargadev/lakon-lib/releases"
            target="_blank"
            rel="noreferrer"
          >
            github releases →
          </a>
        </div>
      </section>

      <section className={releaseStyles.timeline}>
        {RELEASES.map((r, i) => (
          <article key={r.version} className={releaseStyles.entry}>
            <header className={releaseStyles.entryHeader}>
              <h2 className={releaseStyles.version}>
                v{r.version}
                {i === 0 && <span className={releaseStyles.latestBadge}>latest</span>}
              </h2>
              <time className={releaseStyles.date} dateTime={r.date}>
                {r.date}
              </time>
            </header>
            <ul className={releaseStyles.highlights}>
              {r.highlights.map((h, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: renderInlineCode(h) }} />
              ))}
            </ul>
            <div className={releaseStyles.installLine}>
              <code>npm install -g @bargadev/lakon@{r.version}</code>
            </div>
          </article>
        ))}
      </section>

      <footer className={releaseStyles.footer}>
        <Link href="/" className={releaseStyles.backLink}>← back to home</Link>
      </footer>
    </main>
  );
}

function renderInlineCode(text: string): string {
  // very small inline-code renderer: `code` -> <code>code</code>
  // safe enough for our hand-curated release notes
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
}
