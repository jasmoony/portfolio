import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "9",
    title: "what I'd give, to give it all I got",
    content: `The song "Metamorphosis" by Infinity Song has a lyric that really resonated with me this week. It's a song about chasing your goals but struggling to get there. In the chorus they sing "what I'd give, to give it all I got". I feel so stuck sometimes trying to do a thousand things at the same time, being a mum and working on my career. From what I've learned about talking to other mums, this is such a common feeling - to not be able to give your 100% to a single thing. Because of time, but also because of fear. What would happen if I did truly commit to a thing? Ah, the beautiful ruminations of motherhood.`,
    date: "2026-05-07",
    slug: "metamorphosis",
    readTime: 2,
  },
  {
    id: "8",
    title: "beauty next to the highway",
    content: `This morning, I did my usual Tuesday morning running lap where I pass the highway. It's bricks, stone, exhaustion fumes and loud noises. Completely the opposite of the peaceful coastline where I was the week before. Where nature is showing its beauty off in full spring extravaganza. The smell of the salty sea, the sound of the waves and the gentle breeze. It's just so easy to love and admire. Thinking about it, I felt a longing to be back there again, running next to my dear old friend, the North Sea. But then a bright pop of colour caught my eye; a bunch of pink dune roses waving at me. I guess there's beauty next to the highway as well, once you know where to look.`,
    date: "2026-04-30",
    slug: "beauty-next-to-the-highway",
    readTime: 2,
  },
  {
    id: "7",
    title: "rosalía and the urge to create",
    content: `What could be more inspiring than to be able to witness an artist giving everything they've got? I got so inspired by Rosalia's concert. Even though it was in a full stadium with my parents shamelessly twerking next to me, her performance moved me so very deeply. The creativity, the joy, the dedication. Just being able to be there, it sparked a creativity inside of me. I spent the days after just writing, drawing, painting, crocheting. It was the only way to get this restless urge to just create outside of me. "I fit in the world / And the world fits into me"`,
    date: "2026-04-22",
    slug: "rosalia-and-the-urge-to-create",
    readTime: 2,
  },
  {
    id: "6",
    title: "too many cheers (a good problem)",
    content: `The first version of my app Huphup CRASHED at the start of my 10k race. I was waiting with thousands of other runners at the start line and I could not get my own app working. I spent weeks, months, preparing for this race. So why did it crash? The app did not yet account for the many friends and family that would send me cheers during the run. Well... of all the reasons your app crashes, too many users is like a pretty okay one.`,
    date: "2026-04-13",
    slug: "too-many-cheers",
    readTime: 2,
  },
  {
    id: "5",
    title: "how do we learn best?",
    content: `How do we learn best? I was thinking about this when we were visiting potential schools for my daughter. There are so many options here in Rotterdam, and so many different styles of teaching. There are schools that emphasise structure and discipline, others creativity and independence. Some believe children learn best through creativity, others through repetition and routine. Walking through all these classrooms made me realise how differently we all imagine growth. And how personal it is. I am still trying to figure out how to learn new programming languages and frameworks. Maybe we'll never know the answer truly and most likely that is not even the point. Maybe the point is simply to keep being curious.`,
    date: "2026-03-26",
    slug: "how-do-we-learn-best",
    readTime: 2,
  },
  {
    id: "4",
    title: "everything has a name #1",
    content: `everything has a name in the world of coding. this week i learned what the gutter is - the vertical space in your code editor on the left of the line numbers.`,
    date: "2025-10-31",
    slug: "everything-has-a-name-1",
    readTime: 5,
  },
  {
    id: "3",
    title: "what knitting and coding have in common",
    content: `both have their own language you need to learn. for both, it's trying, failing, learning and trying again. for me personally, the challenge in both of them is to see a project through to the end.`,
    date: "2025-10-22",
    slug: "knitting-and-coding-have-in-common",
    readTime: 5,
  },
  {
    id: "2",
    title: "using claude code",
    content: `saves a ton of work, but as someone still learning, it's easy to get stuck in a loop. the speed of it makes it less of a conversation, and it's harder to remain sharp on the code it writes. still really cool and a bit scary to see how fast ai is progressing.`,
    date: "2025-10-15",
    slug: "using-claude-code",
    readTime: 8,
  },
  {
    id: "1",
    title: "what swift taught me about async",
    content: `i got stuck working with the photospicker api, which was very annoying but it taught me more about async functions and how they work. this is quite a difficult concept to grasp when learning to code. but basically; the key takeaway for me was : don't trigger ui changes from inside async operations - trigger them from state changes instead.`,
    date: "2025-10-3",
    slug: "swift-async",
    readTime: 8,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
