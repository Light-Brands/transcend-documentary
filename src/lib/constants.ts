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
  synopsis: string[];
  pullQuote: string;
  quoteAttribution?: string;
  runtime: string;
  themes: string[];
}

export const EPISODES: Episode[] = [
  {
    id: 'container',
    number: 'EPISODE 1',
    title: 'THE PLACE THAT HOLDS THE JOURNEY',
    theme: 'Foundation',
    themeSecondary: 'Integrity',
    hook: 'Every journey in this series passes through a place.',
    extendedHook:
      'A place where people are received with seriousness. Where ancient intelligence is approached with modern care. Where healing is not rushed, promised, or commodified. That place is Transcend.',
    synopsis: [
      'This episode is not about success stories. It is about what it takes to hold transformation responsibly. We step inside the realities most people never see: legal and legislative challenges, ethical responsibility, regulatory and financial pressure, the daily work of preserving the integrity of the medicine.',
      'Transcend is not positioned as a solution—but as a container. A place where individuals are prepared, supported, and integrated, so confrontation leads to return—not fragmentation.',
      'The series reveals Transcend\'s work not through explanation, but through how people are held.',
    ],
    pullQuote: 'The work is not about fixing people. It\'s about holding space for what wants to emerge.',
    quoteAttribution: 'Transcend',
    runtime: '55 min',
    themes: ['Responsibility', 'Integrity', 'Legal Challenges', 'Ethics', 'Sacred Container'],
  },
  {
    id: 'fighter',
    number: 'EPISODE 2',
    title: 'THE FIGHTER',
    theme: 'Performance',
    themeSecondary: 'Identity',
    hook: 'An elite MMA fighter chooses to face the one opponent he cannot out-punch.',
    extendedHook:
      'Julien Leblanc has spent fifteen years training his body to endure violence, pressure, and pain. But when the noise in his mind became louder than the crowd, he realized something terrifying: Strength does not heal fear—it hides it.',
    synopsis: [
      'This is not a sports documentary. Beyond the Fight is the story of a man unlearning survival and discovering who he is when he no longer has to fight to be worthy.',
      'The episode explores high performance, neurological risk, identity, fatherhood, and vulnerability. In choosing healing over armor, Julien enters the most dangerous fight of his life—learning how to live without needing to survive.',
      'Millions of men are living like Julien—successful, disciplined, high-performing, emotionally numb, terrified of slowing down, and secretly exhausted from carrying themselves. This film is not about being fixed. It is about realizing you were never broken.',
    ],
    pullQuote: 'Strength does not heal fear—it hides it.',
    quoteAttribution: 'Julien Leblanc',
    runtime: '52 min',
    themes: ['High Performance', 'Neurological Risk', 'Identity', 'Fatherhood', 'Vulnerability'],
  },
  {
    id: 'businessman',
    number: 'EPISODE 3',
    title: 'THE BUSINESSMAN',
    theme: 'Power',
    themeSecondary: 'Loss',
    hook: 'A man who spent decades building empires comes to a devastating realization.',
    extendedHook:
      'His success was fueled by unresolved trauma. Years of relational heartbreak with former partners, unbearable pressure, and silently dying on the inside. After his Ibogaine experience at Transcend, something unfamiliar emerges: silence. Not escape. Not numbness. Peace.',
    synopsis: [
      'This episode follows a businessman who tried to answer his longing for meaning through achievement—enduring years of relational heartbreak with former partners, carrying unbearable pressure, and silently dying on the inside.',
      'After his Ibogaine experience at Transcend, something unfamiliar emerges: silence. Not escape. Not numbness. Peace. Now comes the harder work—integration.',
      'Learning how to live without anger. Without rage. Without letting the survival patterns of his past sabotage the life he is trying to build. This is a story about power, loss, and what happens when a man finally stops running from himself.',
    ],
    pullQuote: 'What emerged was not escape, not numbness. It was peace.',
    quoteAttribution: 'The Businessman',
    runtime: '49 min',
    themes: ['Power', 'Loss', 'Integration', 'Anger', 'Survival Patterns'],
  },
  {
    id: 'pastor',
    number: 'EPISODE 4',
    title: 'THE FORMER PASTOR',
    theme: 'Faith',
    themeSecondary: 'Fear',
    hook: 'A man who used ministry as refuge—and as escape.',
    extendedHook:
      'This episode follows a former pastor wrestling with why he keeps self-sabotaging despite faith, calling, and service. Beneath the surface lives unprocessed childhood trauma: war, displacement, abandonment.',
    synopsis: [
      'A man who used ministry as refuge—and as escape. This episode follows a former pastor wrestling with why he keeps self-sabotaging despite faith, calling, and service.',
      'Beneath the surface lives unprocessed childhood trauma: war, displacement, abandonment. He finds himself drawn to a treatment that challenges his theology, his certainty, and his understanding of God.',
      'Peace comes from the last place he ever expected. This is a story about faith, fear, and what happens when healing does not look the way belief systems said it should.',
    ],
    pullQuote: 'Peace came from the last place I ever expected.',
    quoteAttribution: 'The Former Pastor',
    runtime: '55 min',
    themes: ['Faith', 'Fear', 'War', 'Displacement', 'Abandonment'],
  },
  {
    id: 'wife',
    number: 'EPISODE 5',
    title: 'THE WIFE',
    theme: 'Loyalty',
    themeSecondary: 'Grief',
    hook: 'For over twenty years, she lived alongside addiction.',
    extendedHook:
      'Refusing to let go. Refusing to abandon. Holding the family together through trauma, codependence, and unconditional love. This episode is not about the addict. It is about the one who stayed.',
    synopsis: [
      'For over twenty years, she lived alongside addiction. Refusing to let go. Refusing to abandon. Holding the family together through trauma, codependence, and unconditional love.',
      'This episode is not about the addict. It is about the one who stayed. As her husband changes, she realizes something unsettling: his healing has revealed her own pain.',
      'This is a story about loyalty, grief, and a woman discovering that loving someone else through addiction does not mean she escaped it herself. Her journey is about reclaiming voice, identity, and wholeness.',
    ],
    pullQuote: 'His healing revealed my own pain.',
    quoteAttribution: 'The Wife',
    runtime: '54 min',
    themes: ['Loyalty', 'Grief', 'Codependence', 'Voice', 'Wholeness'],
  },
  {
    id: 'catalyst',
    number: 'EPISODE 6',
    title: 'THE CATALYST',
    theme: 'Calling',
    themeSecondary: 'Return',
    hook: 'The one who returns last—because he is the one who keeps returning with others.',
    extendedHook:
      'Nicholas spent most of his life imprisoned by addiction, mental illness, and despair—until a chance encounter and a profound plant-medicine experience altered the trajectory of his life, marriage, and purpose.',
    synopsis: [
      'Nicholas spent most of his life imprisoned by addiction, mental illness, and despair—until a chance encounter and a profound plant-medicine experience altered the trajectory of his life, marriage, and purpose.',
      'Six months later, he begins walking with others. Not as a healer. Not as an expert. But as someone obedient to a calling: to bring lost travelers home—by walking with them into places where truth, safety, and integration are possible.',
      'Nicholas is the living through-line of the series. The one who returns last—because he is the one who keeps returning with others.',
    ],
    pullQuote: 'I walk with others into places where truth, safety, and integration are possible.',
    quoteAttribution: 'Nicholas',
    runtime: '58 min',
    themes: ['Calling', 'Obedience', 'Service', 'Return', 'Purpose'],
  },
];

// Character data for THE PEOPLE section
export interface Character {
  id: string;
  name: string;
  role: string;
  sentence: string;
  question: string;
  episode: number;
}

export const CHARACTERS: Character[] = [
  {
    id: 'julien',
    name: 'Julien',
    role: 'The Fighter',
    sentence: 'Fifteen years of training his body to endure violence. The noise in his mind became louder than the crowd.',
    question: 'What happens when strength stops protecting you?',
    episode: 2,
  },
  {
    id: 'businessman',
    name: 'The Businessman',
    role: 'The Builder',
    sentence: 'Decades building empires. His success was fueled by unresolved trauma.',
    question: 'What survives when the empire falls?',
    episode: 3,
  },
  {
    id: 'pastor',
    name: 'The Former Pastor',
    role: 'The Seeker',
    sentence: 'Ministry as refuge. Ministry as escape. Beneath it all: war, displacement, abandonment.',
    question: 'What happens when faith meets the medicine?',
    episode: 4,
  },
  {
    id: 'wife',
    name: 'The Wife',
    role: 'The Witness',
    sentence: 'Twenty years alongside addiction. Refusing to let go. His healing revealed her own pain.',
    question: 'Who heals the one who stayed?',
    episode: 5,
  },
  {
    id: 'nicholas',
    name: 'Nicholas',
    role: 'The Catalyst',
    sentence: 'The one who returns last—because he keeps returning with others.',
    question: 'What does it mean to walk someone home?',
    episode: 6,
  },
];

// Section content
export const CONTENT = {
  hero: {
    // Kinetic typography sequence
    kineticWords: ['PAIN', 'PURPOSE'],
    tagline: 'BRINGING THE LOST TRAVELER BACK HOME',
    subtitle: 'A documentary series about return.',
    scrollHint: 'Enter',
  },
  // ACT I - DISSONANCE: Modern world, performance, addiction, silence, disconnection
  dissonance: {
    actLabel: 'Act I — Dissonance',
    lines: [
      'Modern world.',
      'Performance.',
      'Addiction.',
      '',
      'Silence.',
      '',
      'Disconnection.',
    ],
  },
  // Blackout moment
  blackout: {
    line: 'Most people never come home.',
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
        'Then a chance encounter',
        'changed everything.',
      ],
      attribution: '— Nicholas',
    },
    continuation: {
      lines: [
        'Six months later,',
        'I began walking with others.',
        '',
        'Not as a healer. Not as an expert.',
        'But as someone obedient to a calling:',
        '',
        'To bring lost travelers home.',
      ],
    },
  },
  // ACT II - THE CONTAINER
  container: {
    actLabel: 'Act II — The Container',
    header: 'TRANSCEND',
    tagline: 'Every story passes through a place.',
    description: [
      'A place where people are received with seriousness.',
      'Where ancient intelligence meets modern care.',
      'Where healing is not rushed, promised,',
      'or commodified.',
    ],
  },
  // ACT III - THE PEOPLE
  people: {
    actLabel: 'Act III — The People',
    header: 'THE JOURNEYS',
    intro: 'Five stories. One return.',
  },
  journeys: {
    header: 'A DOCUMENTARY SERIES',
    intro: [
      'This is not a story about substances.',
      'This is a story about people—',
      'and the places that help them come home.',
    ],
    closeLine: [
      'Different lives.',
      'One place.',
      'One return.',
    ],
  },
  // ACT IV - RETURN
  promise: {
    actLabel: 'Act IV — Return',
    lines: [
      'Integration.',
      'Shadow.',
      'Wholeness.',
      '',
      'Responsibility.',
    ],
    closingLine: 'Bringing the Lost Traveler Back Home.',
  },
  // Ecosystem signal
  ecosystem: {
    line: 'This series is the narrative foundation for a larger ecosystem of care, intelligence, and integration.',
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
      presented: 'TRANSCEND CLINIC',
      production: 'A Light Brands Collective Production',
    },
  },
} as const;
