export const SITE_TITLE = 'William Peytz';
export const SITE_DESCRIPTION =
  'AI engineer and startup builder. MSc Human-Centered AI student at DTU. Projects, writing, and CV.';
export const SITE_URL = 'https://williampeytz.com';
export const AUTHOR = 'William Peytz';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: 'https://peytzgames.com', label: 'Games', external: true },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = {
  email: 'mailto:williamhkp@gmail.com',
  github: 'https://github.com/WPeytz',
  linkedin: 'https://www.linkedin.com/in/William-Peytz/',
  rss: '/rss.xml',
} as const;

export const REPO = {
  owner: 'WPeytz',
  name: 'PersonalWebsite', // TODO: confirm the actual GitHub repo name
  branch: 'main',
} as const;

export const REPO_URL = `https://github.com/${REPO.owner}/${REPO.name}`;

export function editUrl(filePathFromRepoRoot: string) {
  return `${REPO_URL}/edit/${REPO.branch}/${filePathFromRepoRoot}`;
}
