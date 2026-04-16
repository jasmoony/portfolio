export const chorus = [
  { text: "you can dance", duration: 1600 },
  { text: "you can jive", duration: 1600 },
  { text: "having the time of your life", duration: 2600 },
  { text: "see that girl", duration: 1600 },
  { text: "watch that scene", duration: 1600 },
  { text: "digging the dancing queen", duration: 3000 },
];

export const TOTAL_DURATION = chorus.reduce((s, l) => s + l.duration, 0);
