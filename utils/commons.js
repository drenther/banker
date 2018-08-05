export const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
