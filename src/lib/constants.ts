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
    id: 'catalyst',
    number: 'PILOT',
    title: 'THE CATALYST',
    theme: 'Resurrection',
    themeSecondary: 'Calling',
    hook: 'The man who walks with others because he was once lost himself.',
    extendedHook:
      'Nicholas spent most of his life imprisoned by addiction and despair. A single transformative experience didn\'t just change his life—it revealed his calling. Now he walks with others into the places where truth becomes possible.',
    synopsis: [
      'Nicholas grew up in the shadow of expectation, but found himself drawn into darkness early. Addiction became his companion, then his captor. For decades, he cycled through attempts at recovery, each failure deepening the conviction that he was beyond saving.',
      'Then came the experience that changed everything—not a cure, but a doorway. In a single night, Nicholas confronted the parts of himself he had spent a lifetime running from. What he found there wasn\'t the monster he expected, but something far more surprising: purpose.',
      'Now Nicholas walks with others into these sacred spaces, not as a guide who has all the answers, but as someone who knows what it means to be lost—and found.',
    ],
    pullQuote: 'I didn\'t find healing. I found myself. The healing came after.',
    quoteAttribution: 'Nicholas',
    runtime: '58 min',
    themes: ['Addiction', 'Transformation', 'Purpose', 'Service', 'Redemption'],
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
    synopsis: [
      'Marcus built his identity in the cage. Every punch thrown, every championship won became evidence of his worth. But the body keeps score, and years of trauma have left their mark—tremors in his hands, gaps in his memory, a temper he can barely control.',
      'When his daughter asks why daddy\'s hands shake, Marcus faces a question he\'s spent his life avoiding: Who is he if he can\'t fight? The warrior who only knows combat must learn a different kind of strength.',
      'This is the story of a man deconstructing the only identity he\'s ever known, discovering that true strength might look nothing like what he imagined.',
    ],
    pullQuote: 'I spent my whole life learning how to fight. Nobody taught me how to stop.',
    quoteAttribution: 'Marcus',
    runtime: '52 min',
    themes: ['Identity', 'Fatherhood', 'Trauma', 'Masculinity', 'Surrender'],
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
    synopsis: [
      'For three decades, Pastor David stood before his congregation with answers. His sermons brought comfort to thousands. His certainty was his gift—and his armor.',
      'But beneath the robes, David carried wounds he never spoke of. Childhood trauma buried so deep he convinced himself it was gone. Until the nightmares returned, and the anxiety became impossible to ignore.',
      'Now David must reconcile the faith he preached with the healing he avoided. Can the shepherd who guided so many finally allow himself to be led?',
    ],
    pullQuote: 'I taught everyone else how to be saved. I never learned how to ask for help.',
    quoteAttribution: 'Pastor David',
    runtime: '55 min',
    themes: ['Faith', 'Hypocrisy', 'Vulnerability', 'Childhood Trauma', 'Authenticity'],
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
    synopsis: [
      'Richard achieved everything he set out to achieve. Multiple successful companies. Properties around the world. The respect of his peers. By every external measure, he had won.',
      'But success didn\'t bring silence—it brought louder noise. The anxiety that drove him to succeed became the prison that held him captive. More deals, more zeros, more achievements, and still the emptiness remained.',
      'When Richard finally stopped running, he discovered that everything he built was an elaborate fortress protecting a terrified child who never felt worthy of love.',
    ],
    pullQuote: 'I built an empire trying to outrun a feeling. The feeling was always faster.',
    quoteAttribution: 'Richard',
    runtime: '49 min',
    themes: ['Success', 'Anxiety', 'Worthiness', 'Childhood Wounds', 'Letting Go'],
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
    synopsis: [
      'Elena was the one who held everything together. When her husband\'s addiction spiraled, she managed it. When her children struggled, she carried them. When the marriage crumbled, she rebuilt it—again and again.',
      'In saving everyone else, Elena forgot one person: herself. The caretaker became a ghost in her own life, present for everyone except the woman in the mirror.',
      'This is the story of Elena\'s journey back to herself—the radical, terrifying, necessary act of a woman who finally said: "I matter too."',
    ],
    pullQuote: 'I was so busy saving everyone else, I didn\'t notice I was drowning.',
    quoteAttribution: 'Elena',
    runtime: '54 min',
    themes: ['Codependency', 'Self-Worth', 'Boundaries', 'Marriage', 'Reclamation'],
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
    synopsis: [
      'Dr. Sarah Chen didn\'t set out to become a guardian. A researcher by training, she stumbled upon something that changed her understanding of healing itself—and recognized immediately that it was in danger.',
      'As interest in these medicines grows, so do the forces that would commercialize, dilute, or exploit them. Sarah has dedicated her life to a different path: ensuring that this ancient intelligence reaches people with its integrity intact.',
      'This is not just Sarah\'s story—it\'s a meditation on what we owe to the things that heal us, and what happens when commerce meets the sacred.',
    ],
    pullQuote: 'Some things are not meant to be products. They\'re meant to be relationships.',
    quoteAttribution: 'Dr. Sarah Chen',
    runtime: '51 min',
    themes: ['Integrity', 'Stewardship', 'Ancient Wisdom', 'Commercialization', 'Sacred Medicine'],
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
