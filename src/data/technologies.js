// Technologies shown on the Home page grid, Technologies page and service detail pages.
// `icon` is a key from src/components/Icon.jsx (generic icons; no third-party logos).
// `home: true` includes it in the Home page grid.
export const technologies = [
  { id: 'html', name: 'HTML', icon: 'html', group: 'Front end', home: true, text: 'Semantic, accessible page structure that search engines understand.' },
  { id: 'css', name: 'CSS', icon: 'css', group: 'Front end', home: true, text: 'Responsive layouts and polished styling for every screen size.' },
  { id: 'javascript', name: 'JavaScript', icon: 'js', group: 'Front end', home: true, text: 'Interactive features that make websites and apps feel fast.' },
  { id: 'react', name: 'React', icon: 'atom', group: 'Front end', home: true, text: 'Modern, component-based interfaces for websites and web apps.' },
  { id: 'react-bootstrap', name: 'React Bootstrap', icon: 'grid', group: 'Front end', home: true, text: 'Accessible, responsive UI components built for React.' },
  { id: 'wordpress', name: 'WordPress', icon: 'pencil', group: 'CMS', home: true, text: 'Easy-to-edit websites when you want to manage content yourself.' },
  { id: 'nodejs', name: 'Node.js', icon: 'server', group: 'Back end', home: true, text: 'Fast, scalable APIs and servers for web and mobile apps.' },
  { id: 'react-native', name: 'React Native', icon: 'phone', group: 'Mobile', home: true, text: 'iOS and Android apps from a single codebase.' },
  { id: 'django', name: 'Django', icon: 'database', group: 'Back end', home: true, text: 'Robust Python framework for data-heavy web applications.' },
  { id: 'php', name: 'PHP', icon: 'php', group: 'Back end', home: true, text: 'Reliable server-side code for websites and WordPress builds.' },
  { id: 'express', name: 'Express', icon: 'route', group: 'Back end', text: 'Lightweight Node.js framework for APIs and form handling.' },
  { id: 'postgresql', name: 'PostgreSQL', icon: 'database', group: 'Data and cloud', text: 'Dependable relational database for business records.' },
  { id: 'aws', name: 'AWS EC2 and Nginx', icon: 'cloud', group: 'Data and cloud', text: 'Secure cloud hosting with a production-grade web server.' },
  { id: 'ai-tools', name: 'AI image generation', icon: 'magic', group: 'Content', text: 'Promotional images and product visuals for social and delivery platforms.' }
];

export const getTechnology = (id) => technologies.find((t) => t.id === id);
