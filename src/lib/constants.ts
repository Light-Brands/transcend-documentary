// ===================================
// TRANSCEND DOCUMENTARY
// Constants & Content Data
// ===================================

export const COLORS = {
  voidBlack: '#0A0A0A',
  ash: '#1A1A1A',
  smoke: '#2D2D2D',
  mist: '#8A8A8A',
  cloud: '#C9C9C9',
  light: '#F5F5F5',
  sacredGold: '#C9A962',
  ember: '#D4A574',
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1440,
} as const;

// Episode Data
export interface Episode {
  id: string;
  number: string;
  title: string;
  theme: string;
  themeSecondary: string;
  hook: string;
  extendedHook: string;
}

export const EPISODES: Episode[] = [
  {
    id: 'catalyst',
    number: 'PILOT',
    title: 'THE CATALYST',
    theme: 'Resurrection',
    themeSecondary: 'Calling',
    hook: 'The man who walks with others because he was once lost himself.',
    extendedHook:
      'Nicholas spent most of his life imprisoned by addiction and despair. A single transformative experience didn\'t just change his life—it revealed his calling. Now he walks with others into the places where truth becomes possible.',
  },
  {
    id: 'fighter',
    number: 'EPISODE 1',
    title: 'THE FIGHTER',
    theme: 'Performance',
    themeSecondary: 'Identity',
    hook: 'Brain injuries. Championship belts. A father afraid of who he\'s becoming.',
    extendedHook:
      'Championship belts. Neurological damage. A father watching his hands shake while holding his daughter. The MMA fighter must decide: who is he without the fight?',
  },
  {
    id: 'pastor',
    number: 'EPISODE 2',
    title: 'THE PASTOR',
    theme: 'Faith',
    themeSecondary: 'Trauma',
    hook: 'Decades preaching salvation. Still wrestling with his own.',
    extendedHook:
      'For thirty years, he told others how to be saved. Beneath the pulpit, his own trauma remained unspoken. What happens when the shepherd finally admits he\'s lost?',
  },
  {
    id: 'businessman',
    number: 'EPISODE 3',
    title: 'THE BUSINESSMAN',
    theme: 'Success',
    themeSecondary: 'Armor',
    hook: 'Built an empire. Couldn\'t quiet the noise in his head.',
    extendedHook:
      'He built companies, accumulated wealth, achieved everything society promised would bring peace. The noise in his head only grew louder. Success, he discovered, makes excellent armor—and a terrible prison.',
  },
  {
    id: 'wife',
    number: 'EPISODE 4',
    title: 'THE WIFE',
    theme: 'Sacrifice',
    themeSecondary: 'Survival',
    hook: 'She saved everyone else. Almost lost herself.',
    extendedHook:
      'She held the family together through every crisis. She saved her husband, her children, her marriage. In the process, she almost disappeared entirely. This is the story of a woman who finally chose herself.',
  },
  {
    id: 'carrier',
    number: 'EPISODE 5',
    title: 'THE CARRIER',
    theme: 'Integrity',
    themeSecondary: 'Preservation',
    hook: 'Protecting the medicine\'s sacred relationship with humanity.',
    extendedHook:
      'Some medicines are not products—they\'re relationships. This is the story of someone who dedicated their life to protecting that relationship, ensuring the ancient intelligence reaches those who need it with integrity intact.',
  },
];

// Section content
export const CONTENT = {
  hero: {
    title: 'TRANSCEND',
    tagline: 'Bringing the Lost Traveler Back Home',
    scrollHint: 'Begin the journey',
  },
  truth: {
    lines: [
      'The darkest parts of us—',
      'addiction, fear, shame, trauma—',
      'are not defects.',
      '',
      'They are maps.',
    ],
  },
  turning: {
    lines: [
      'When we stop running from them,',
      'we don\'t just heal.',
      '',
      'We remember who we are.',
    ],
  },
  catalyst: {
    intro: {
      lines: [
        'For most of my life,',
        'I was imprisoned.',
        '',
        'Addiction. Mental illness.',
        'Despair.',
        '',
        'Then something happened',
        'that changed everything.',
      ],
      attribution: '— Nicholas',
    },
    continuation: {
      lines: [
        'Six months after my own transformation,',
        'I understood my calling:',
        '',
        'To walk with others',
        'into the places where they can come home.',
      ],
    },
  },
  container: {
    header: 'TRANSCEND CLINIC',
    description: [
      'A place where people are received with seriousness.',
      'Where ancient intelligence meets modern care.',
      'Where healing is not rushed, promised,',
      'or commodified.',
    ],
  },
  journeys: {
    header: 'A DOCUMENTARY SERIES',
    intro: [
      'This is not a story about substances.',
      'This is a story about people—',
      'and the places that help them come home.',
    ],
  },
  promise: {
    lines: [
      'Every journey in this series asks the same question:',
      '',
      'What happens when we stop running',
      'and finally turn toward ourselves?',
    ],
  },
  invitation: {
    header: 'PARTNERSHIP',
    lines: [
      'We\'re not looking for approval.',
      'We\'re looking for partners willing to steward',
      'something meaningful.',
    ],
    cta: 'Begin the Conversation',
    footer: {
      presented: 'Presented by TRANSCEND CLINIC',
      production: 'A Light Brands Collective Production',
    },
  },
} as const;
