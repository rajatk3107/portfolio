export const siteConfig = {
  name: 'Rajat Kumar Yadav',
  title: 'Backend Developer (Node.js & MongoDB)',
  description:
    'Backend-focused developer with professional experience building APIs and scalable systems using Node.js and MongoDB. Familiar with Vue.js for frontend development.',
  location: 'India',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  image: '/man.png',
  siteUrl: '',
}

export const contactMethods = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: 'LinkedIn',
    value: siteConfig.linkedin.replace(/^https?:\/\//, ''),
    href: siteConfig.linkedin,
  },
  {
    label: 'GitHub',
    value: siteConfig.github.replace(/^https?:\/\//, ''),
    href: siteConfig.github,
  },
]
