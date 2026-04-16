export const lyrics = [
  // Intro (instrumental ~ first 16 seconds)
  { text: "♪ ♪ ♪", duration: 5300 },
  { text: "♪ ♪ ♪", duration: 5300 },
  { text: "♪ ♪ ♪", duration: 5400 },

  // Chorus
  { text: "ooh-ooh, you can dance, you can jive", duration: 3200 },
  { text: "having the time of your life", duration: 2600 },
  { text: "ooh, see that girl, watch that scene", duration: 3200 },
  { text: "digging the dancing queen", duration: 3600 },

  // Verse 1
  { text: "friday night and the lights are low", duration: 3200 },
  { text: "looking out for a place to go", duration: 3200 },
  { text: "mmm, where they play the right music", duration: 2800 },
  { text: "getting in the swing", duration: 2400 },
  { text: "you come to look for a king", duration: 3200 },

  // Verse 2
  { text: "anybody could be that guy", duration: 3200 },
  { text: "night is young and the music's high", duration: 3200 },
  { text: "with a bit of rock music, everything is fine", duration: 3200 },
  { text: "you're in the mood for a dance", duration: 2800 },
  { text: "and when you get the chance", duration: 3200 },

  // Pre-Chorus
  { text: "you are the dancing queen", duration: 3200 },
  { text: "young and sweet, only seventeen", duration: 3200 },
  { text: "dancing queen", duration: 2400 },
  { text: "feel the beat from the tambourine, oh, yeah", duration: 4000 },

  // Chorus repeat
  { text: "you can dance, you can jive", duration: 3200 },
  { text: "having the time of your life", duration: 2600 },
  { text: "ooh, see that girl, watch that scene", duration: 3200 },
  { text: "digging the dancing queen", duration: 3600 },

  // Outro
  { text: "♪ dancing queen ♪", duration: 4000 },
];

export const TOTAL_DURATION = lyrics.reduce((s, l) => s + l.duration, 0);
