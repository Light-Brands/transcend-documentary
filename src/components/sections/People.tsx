'use client';

import { motion } from 'framer-motion';
import { CONTENT, CHARACTERS } from '@/lib/constants';

function CharacterCard({ character, index }: { character: typeof CHARACTERS[0]; index: number }) {
  const isLast = index === CHARACTERS.length - 1;

  return (
    <motion.div
      className={`relative ${isLast ? 'col-span-full flex justify-center' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className={`${isLast ? 'max-w-lg' : ''}`}>
        {/* Portrait placeholder */}
        <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-br from-ash via-smoke/50 to-void-black">
          {/* Ambient glow */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-3/4 h-3/4 rounded-full bg-ember/10 blur-3xl" />
          </motion.div>

          {/* Silhouette placeholder */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-2/3 h-4/5 bg-gradient-to-t from-ash via-smoke/30 to-transparent rounded-t-full" />
          </div>

          {/* Side light effect */}
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-muted-gold/10 to-transparent" />

          {/* Frame border */}
          <div className="absolute inset-0 border border-smoke/30" />
        </div>

        {/* Character info */}
        <div className="space-y-4">
          {/* Role label */}
          <motion.span
            className="font-accent text-[0.6rem] tracking-[0.25em] uppercase text-muted-gold/70 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {character.role}
          </motion.span>

          {/* Name */}
          <h3 className="font-display text-xl md:text-2xl text-bone tracking-wide">
            {character.name}
          </h3>

          {/* One sentence */}
          <p className="font-body text-sm md:text-base text-mist/80 leading-relaxed">
            {character.sentence}
          </p>

          {/* One emotional question */}
          <p className="font-display italic text-base md:text-lg text-sacred-gold/80 leading-relaxed pt-2">
            {character.question}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function People() {
  return (
    <section
      id="people"
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background - warm ambient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-warmth-2 via-warmth-3 to-warmth-4 transition-colors duration-500" />

      {/* Subtle ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-gradient-radial from-ember/[0.03] via-transparent to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Act marker */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-mist/50">
            {CONTENT.people.actLabel}
          </span>
        </motion.div>

        {/* Section header */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-sacred-gold">
            {CONTENT.people.header}
          </h2>
        </motion.div>

        {/* Intro line */}
        <motion.p
          className="text-center font-display italic text-lg md:text-xl text-mist/70 mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {CONTENT.people.intro}
        </motion.p>

        {/* Character grid - 2x2 with Nicholas centered below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {CHARACTERS.slice(0, 4).map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>

        {/* Nicholas - centered, last */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="w-full max-w-sm">
            <CharacterCard character={CHARACTERS[4]} index={4} />
          </div>
        </div>

        {/* Decorative divider */}
        <motion.div
          className="flex justify-center mt-20 md:mt-28"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-smoke" />
            <div className="w-1 h-1 rounded-full bg-muted-gold/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-smoke" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default People;
