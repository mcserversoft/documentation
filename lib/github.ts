import { execFileSync } from 'node:child_process';

// Link to the sources used by this build, including local and CI previews.
export function getGithubRef() {
  const configured = process.env.DOCS_GITHUB_REF || process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME;
  if (configured) return configured;
  try {
    const branch = execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim();
    if (branch) return branch;
    return execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  } catch {
    return 'main';
  }
}
