export const profile = {
  name: 'Abhishek Smitha Biju',
  firstName: 'Abhishek',
  role: 'Software Engineer & Founder',
  location: 'Chennai & Goa, India',
  email: 'abhishekbijuw2005@gmail.com',
  availability: 'Open to SWE internship roles',
  headline: 'I ship software end to end — then prove it works.',
  subheadline:
    'Third-year CS at BITS Pilani, Goa. Founder of Versor, a restaurant menu platform with five paying customers. Currently automating end-to-end tests at FourKites. Codeforces Specialist.',
  resumeFile: 'Abhishek_Smitha_Biju_Resume.pdf',
  links: {
    github: 'https://github.com/abhishek-sbiju',
    linkedin: 'https://www.linkedin.com/in/abhishek-smitha-biju-7a739b321',
    codeforces: 'https://codeforces.com/profile/Abhishek_S_Biju',
    versor: 'https://versor.in',
  },
  // Live rating is fetched from the Codeforces API (useCodeforces);
  // these values only show if the request fails.
  codeforces: {
    handle: 'Abhishek_S_Biju',
    fallbackRating: 1512,
    fallbackRank: 'Specialist',
  },
  // No public API exposes private-repo data, so these are curated —
  // update them when the numbers change (last counted Jul 2026).
  github: {
    privateRepos: 17,
    privateLanguages: { TypeScript: 16, JavaScript: 1 } as Record<string, number>,
  },
}

export const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`
