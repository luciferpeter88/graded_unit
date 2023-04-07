const games = [
  {
    id: 1,
    name: "Fairy Puzzle",
    description:
      "Fairy Puzzle is a jigsaw puzzle game where you must match puzzle pieces and complete the images. The game has 50 levels with different colorful pictures.",
    imageSrc:
      "https://images.crazygames.com/fairy-puzzle/20211123091033/fairy-puzzle-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=215&h=121&fit=crop%20216w,",
    gamUrl: "https://www.crazygames.com/embed/fairy-puzzle",
  },
  {
    id: 2,
    name: "Monopoly Clicker",
    description:
      "Monopoly Clicker, an idle game inspired by the classic board game, features charging and dice-throwing to progress your chip across the board, amassing wealth.",
    imageSrc:
      "https://images.crazygames.com/monopoly-clicker/20221201091139/monopoly-clicker-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=236&h=133&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/monopoly-clicker",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    description:
      "Experience Tic Tac Toe online for free, competing against other players, the computer, or friends in the timeless naughts and crosses game, now digitally accessible.",
    imageSrc:
      "https://images.crazygames.com/games/tic-tac-toe/thumb-1579168809142.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/tic-tac-toe",
  },
  {
    id: 4,
    name: "Classic Hangman",
    description:
      "Test your vocabulary prowess, deduce hidden words, and conquer challenges in this timeless Hangman classic. Prove your linguistic mastery now!",
    imageSrc:
      "https://images.crazygames.com/games/classic-hangman/thumb-1563966337640.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/classic-hangman",
  },
  {
    id: 5,
    name: "Matches Puzzle Game",
    description:
      "Embark on a whimsical journey through enchanted lands, meeting magical creatures and solving delightful puzzles, as you discover your own extraordinary story.",
    imageSrc:
      "https://images.crazygames.com/matches-puzzle-game/20230320181416/matches-puzzle-game-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/matches-puzzle-game",
  },
  {
    id: 6,
    name: "Wood Blocks",
    description:
      "Wood Blocks, a captivating puzzle-strategy game, challenges you to skillfully place diverse wooden shapes into the play area, reminiscent of 10x10, utilizing gravity.",
    imageSrc:
      "https://images.crazygames.com/games/wood-block-puzzle/cover-1678975549982.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=236&h=133&fit=crop 237w",
    gamUrl: "https://www.crazygames.com/embed/wood-blocks",
  },
  {
    id: 7,
    name: "QuizzLand Trivia",
    description:
      "QuizzLand, a free and engaging trivia game, offers progression-based levels and unique questions, challenging you to correctly answer and conquer each stage.",
    imageSrc:
      "https://images.crazygames.com/quizzland-lite/20201023141515/quizzland-lite-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/quizzland-lite",
  },
  {
    id: 8,
    name: "Escape or Die",
    description:
      "Escape or Die, a thrilling escape room game, tests your wits with a 10-minute countdown to defuse a bomb. Think fast, survive, and triumph!",
    imageSrc:
      "https://images.crazygames.com/escape-or-die/20211015090606/escape-or-die-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=206&h=116&fit=crop 207w",
    gamUrl: "https://www.crazygames.com/embed/escape-or-die",
  },
  {
    id: 9,
    name: "Gold Digger FRVR",
    description:
      "Gold Digger FRVR, a 2D mining adventure by FRVR developers, challenges you to unearth hidden gems and valuable metals in a subterranean world.",
    imageSrc:
      "https://images.crazygames.com/games/gold-digger-frvr/cover-1608107647188.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=236&h=133&fit=crop 237w",
    gamUrl: "https://www.crazygames.com/embed/gold-digger-frvr",
  },
  {
    id: 10,
    name: "Monster Sanctuary",
    description:
      "Monster Sanctuary, a 2D RPG adventure, invites you to become a proud Monster Keeper, joined by a faithful spirit animal, taming creatures in a magical world.",
    imageSrc:
      "https://images.crazygames.com/monstersanctuary.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=206&h=116&fit=crop 207w",
    gamUrl: "https://www.crazygames.com/embed/monster-sanctuary",
  },
  {
    id: 11,
    name: "Planet Life",
    description:
      "It's an exhilarating resource-management game, empowers you to guide a lonely planet, fostering growth to explore the universe and meet other celestial bodies.",
    imageSrc:
      "https://images.crazygames.com/planetlife.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=236&h=133&fit=crop 237w",
    gamUrl: "https://www.crazygames.com/embed/planet-life",
  },
  {
    id: 12,
    name: "Bubble Shooter POP",
    description:
      "Bubble Shooter Pop, a captivating match-3 game, tasks you with shooting bubbles strategically to burst them and achieve high scores.",
    imageSrc:
      "https://images.crazygames.com/bubble-shooter-pop/20221212114549/bubble-shooter-pop-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=206&h=116&fit=crop 207w",
    gamUrl: "https://www.crazygames.com/embed/bubble-shooter-pop",
  },
  {
    id: 13,
    name: "Brain Teaser",
    description:
      "Brain Teaser, akin to World's Capitals Quiz, challenges your intellect with tricky questions, demanding out-of-the-box thinking to avoid getting duped.",
    imageSrc:
      "https://images.crazygames.com/brain-teaser-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=236&h=133&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/brain-teaser",
  },
  {
    id: 14,
    name: "World's Capitals Quiz",
    description:
      "World's Capitals Quiz, an educational game, enriches your knowledge by teaching capital cities and corresponding flags for all nations across the globe.",
    imageSrc:
      "https://images.crazygames.com/world-s-capitals-quiz/20210816150829/world-s-capitals-quiz-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/world-s-capitals-quiz",
  },
  {
    id: 15,
    name: "Mahjongg Solitaire",
    description:
      "Mahjongg Solitaire, a modern yet classic mahjong game, offers traditional rules and appealing visuals, with a relaxed, untimed pace for an enjoyable experience.",
    imageSrc:
      "https://images.crazygames.com/mahjongg-solitaire/20220803154042/mahjongg-solitaire-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    gamUrl: "https://www.crazygames.com/embed/mahjongg-solitaire",
  },
];

export default games;
