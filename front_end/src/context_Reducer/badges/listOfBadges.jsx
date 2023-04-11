const numOfImages = 156;
const images = [];

for (let i = 1; i <= numOfImages; i++) {
  images[
    i - 1
  ] = require(`../../assets/images/badges/${i}-removebg-preview.png`);
}
const badges = [
  {
    id: 1,
    title: "Cub Scout Environmental Conservation Activity Badge",
    shortDescription: "Cub Scouts learn environmental conservation.",
    picture: images[0],
    longDescription:
      "This badge aims to teach Cub Scouts about the importance of environmental conservation and their role in protecting the planet. Scouts learn about different ecosystems, endangered species, and ways to reduce waste, conserve energy, and protect habitats. The goal is to foster a sense of responsibility for the environment and inspire future eco-conscious leaders.",
  },
  {
    id: 2,
    title: "Beaver Scout Health and Fitness Badge",
    shortDescription: "Beaver Scouts develop healthy habits.",
    picture: images[1],
    longDescription:
      "The Beaver Scout Health and Fitness Badge focuses on educating young Beavers about the importance of maintaining a healthy lifestyle. Scouts learn about proper nutrition, exercise routines, and good hygiene practices. They engage in physical activities, explore the benefits of different types of exercises, and discover ways to incorporate healthy habits into their daily lives.",
  },
  {
    id: 3,
    title: "Hikes Away Stage 50 Activity Badge (Go Outdoors)",
    shortDescription: "Hike 50 times to earn this badge.",
    picture: images[2],
    longDescription:
      "The Hikes Away Stage 50 Activity Badge is designed to encourage and reward Scouts for their outdoor hiking adventures. To earn this badge, Scouts must participate in 50 hikes, gaining valuable experience in navigation, outdoor safety, and teamwork. Along the way, they'll develop a deeper appreciation for nature, learn essential survival skills, and create lasting memories with their fellow Scouts.",
  },
  {
    id: 4,
    title: "Squirrel Scout Be Active Activity Badge",
    shortDescription: "Squirrel Scouts engage in physical activities.",
    picture: images[3],
    longDescription:
      "The Squirrel Scout Be Active Activity Badge promotes physical activity and a healthy lifestyle for young Squirrel Scouts. Scouts participate in various activities, including sports, dance, and outdoor games, while learning about the importance of staying active. This badge encourages children to explore new activities, build physical fitness, and develop teamwork skills.",
  },
  {
    id: 5,
    title: "Squirrel Scout Feel Good Activity Badge",
    shortDescription: "Learn self-care and emotional well-being.",
    picture: images[4],
    longDescription:
      "The Squirrel Scout Feel Good Activity Badge focuses on teaching Squirrel Scouts about self-care and emotional well-being. Scouts learn how to identify and express their emotions, practice mindfulness, and develop coping strategies for stress and challenging situations. The badge emphasizes the importance of mental health and encourages Scouts to support one another in their emotional growth.",
  },
  {
    id: 6,
    title: "Squirrel Scout Brilliant Builder Activity Badge",
    shortDescription: "Develop engineering and building skills.",
    picture: images[5],
    longDescription:
      "The Squirrel Scout Brilliant Builder Activity Badge is designed to inspire Squirrel Scouts to develop their engineering and building skills. Scouts participate in hands-on projects, using a variety of materials and tools to create structures, vehicles, and other objects. This badge encourages creativity, problem-solving, and critical thinking, while also teaching important safety and planning skills.",
  },
  {
    id: 7,
    title: "Squirrel Scout Exciting Experiments Activity Badge",
    shortDescription: "Explore the world of science experiments.",
    picture: images[6],
    longDescription:
      "The Squirrel Scout Exciting Experiments Activity Badge encourages young Scouts to explore the world of science through hands-on experiments and investigations. Scouts learn about scientific concepts, such as gravity, magnetism, and chemical reactions, by conducting experiments in a fun and engaging way. This badge fosters curiosity, critical thinking, and a love for scientific discovery.",
  },
  {
    id: 8,
    title: "Squirrel Scout Get Creative Activity Badge",
    shortDescription: "Unleash creativity through various art forms.",
    picture: images[7],
    longDescription:
      "The Squirrel Scout Get Creative Activity Badge aims to inspire young Scouts to express their creativity through various art forms. Scouts explore painting, drawing, sculpture, photography, and more, while learning about different techniques and styles. This badge encourages self-expression, artistic exploration, and the development of fine motor skills, as well as an appreciation for art and culture.",
  },
  {
    id: 9,
    title: "Squirrel Scout Go Wild Activity Badge",
    shortDescription: "Discover wildlife and their habitats.",
    picture: images[8],
    longDescription:
      "The Squirrel Scout Go Wild Activity Badge encourages young Scouts to explore and appreciate the wonders of wildlife and their natural habitats. Scouts learn about various animal species, their behaviors, and the ecosystems they inhabit. They also discover ways to protect and preserve these habitats, fostering a love for nature and a sense of environmental stewardship.",
  },
  {
    id: 10,
    title: "Squirrel Scout Let it Grow Activity Badge",
    shortDescription: "Learn about plants and gardening.",
    picture: images[9],
    longDescription:
      "The Squirrel Scout Let it Grow Activity Badge teaches young Scouts about the fascinating world of plants and gardening. They learn about plant life cycles, the importance of plants for our environment, and how to grow and care for their own plants. The badge encourages hands-on learning, responsibility, and a greater appreciation for the natural world.",
  },
  {
    id: 11,
    title: "Squirrel Scout Lets Celebrate Activity Badge",
    shortDescription: "Explore traditions and celebrations.",
    picture: images[10],
    longDescription:
      "The Squirrel Scout Lets Celebrate Activity Badge introduces young Scouts to various cultural traditions, holidays, and celebrations from around the world. They learn about the history, customs, and significance of different festivities while participating in fun and engaging activities. This badge promotes cultural awareness, respect for diversity, and a sense of global community.",
  },
  {
    id: 12,
    title: "Squirrel Scout Local Superhero Activity Badge",
    shortDescription: "Make a positive impact in your community.",
    picture: images[11],
    longDescription:
      "The Squirrel Scout Local Superhero Activity Badge inspires young Scouts to become positive role models and make a difference in their local communities. They learn about community heroes, identify local issues, and participate in service projects to address these challenges. The badge encourages civic engagement, empathy, and teamwork, fostering a sense of responsibility and social awareness.",
  },
  {
    id: 13,
    title: "Squirrel Scout Storytime Activity Badge",
    shortDescription: "Delve into the world of stories.",
    picture: images[12],
    longDescription:
      "The Squirrel Scout Storytime Activity Badge encourages young Scouts to explore the magical world of stories, books, and storytelling. They read and discuss a variety of stories, learn about different genres and authors, and even create their own stories. This badge promotes literacy, imagination, and critical thinking skills, while fostering a lifelong love for reading and storytelling.",
  },
  {
    id: 14,
    title: "Squirrel Scout Super Chef Activity Badge",
    shortDescription: "Learn culinary skills and healthy eating.",
    picture: images[13],
    longDescription:
      "The Squirrel Scout Super Chef Activity Badge teaches young Scouts valuable culinary skills and the importance of healthy eating. They learn to prepare simple meals, follow recipes, and practice food safety. Scouts also explore different types of foods and cuisines, developing an appreciation for diverse flavors and cultures while gaining essential life skills.",
  },
  {
    id: 15,
    title: "Squirrel Scout Explore Outdoors Activity Badge",
    shortDescription: "Discover outdoor activities and nature.",
    picture: images[14],
    longDescription:
      "The Squirrel Scout Explore Outdoors Activity Badge encourages young Scouts to embrace outdoor adventures and develop a deeper connection with nature. They participate in various activities, such as hiking, birdwatching, and nature scavenger hunts, while learning about the environment and its inhabitants. The badge fosters curiosity, physical fitness, and a love for the great outdoors.",
  },
  {
    id: 16,
    title: "Beaver Scout Book Reader Activity Badge",
    shortDescription: "Promote reading and literacy skills.",
    picture: images[15],
    longDescription:
      "The Beaver Scout Book Reader Activity Badge encourages young Beavers to develop and improve their reading and literacy skills. They explore a variety of books, genres, and authors, and engage in discussions about their favorite stories. Through reading, Beavers expand their vocabulary, enhance their critical thinking skills, and cultivate a love for literature.",
  },
  {
    id: 17,
    title: "Beaver Scout Builder Activity Badge",
    shortDescription: "Learn building techniques and teamwork.",
    picture: images[16],
    longDescription:
      "The Beaver Scout Builder Activity Badge introduces young Beavers to the world of building and construction. They learn various building techniques, use different materials, and collaborate with their fellow Beavers to create structures and objects. The badge promotes creativity, problem-solving, and teamwork, while also teaching essential planning and safety skills.",
  },
  {
    id: 18,
    title: "Beaver Scout Camp Craft Activity Badge",
    shortDescription: "Master camping skills and outdoor crafts.",
    picture: images[17],
    longDescription:
      "The Beaver Scout Camp Craft Activity Badge teaches young Beavers essential camping skills and outdoor crafts. They learn how to set up tents, build campfires, and practice outdoor cooking. Additionally, they engage in various camp crafts, such as knot-tying and creating natural art. This badge promotes self-reliance, resourcefulness, and a love for outdoor adventures.",
  },
  {
    id: 19,
    title: "Beaver Scout Collector Activity Badge",
    shortDescription: "Discover the world of collecting.",
    picture: images[18],
    longDescription:
      "The Beaver Scout Collector Activity Badge introduces young Beavers to the fascinating world of collecting. They explore various types of collections, learn how to start and maintain their own collection, and share their interests with fellow Beavers. This badge encourages curiosity, organization, and appreciation for the unique qualities of different objects.",
  },
  {
    id: 20,
    title: "Beaver Scout Cook Activity Badge",
    shortDescription: "Learn cooking skills and healthy recipes.",
    picture: images[19],
    longDescription:
      "The Beaver Scout Cook Activity Badge teaches young Beavers valuable cooking skills and the importance of healthy nutrition. They learn to prepare simple meals, follow recipes, and practice food safety. Beavers also explore different types of foods and cuisines, developing an appreciation for diverse flavors and cultures while gaining essential life skills.",
  },
  {
    id: 21,
    title: "Beaver Scout Communicator Activity Badge",
    shortDescription: "Develop communication and listening skills.",
    picture: images[20],
    longDescription:
      "The Beaver Scout Communicator Activity Badge focuses on building strong communication and listening skills in young Beavers. They learn about different methods of communication, practice public speaking, and engage in activities that promote active listening and effective expression. This badge fosters interpersonal skills, self-confidence, and empathy, which are essential for success in various aspects of life.",
  },
  {
    id: 22,
    title: "Beaver Scout Creative Activity Badge",
    shortDescription: "Explore creativity through various art forms.",
    picture: images[21],
    longDescription:
      "The Beaver Scout Creative Activity Badge encourages young Beavers to express their creativity through a range of artistic mediums. They explore painting, drawing, sculpture, photography, and more, while learning about different techniques and styles. This badge promotes self-expression, artistic exploration, and the development of fine motor skills, as well as an appreciation for art and culture.",
  },
  {
    id: 23,
    title: "Beaver Scout Cyclist Activity Badge",
    shortDescription: "Learn cycling skills and road safety.",
    picture: images[22],
    longDescription:
      "The Beaver Scout Cyclist Activity Badge teaches young Beavers essential cycling skills, road safety, and bike maintenance. They learn how to ride confidently, follow traffic rules, and maintain their bicycles to ensure optimal performance. This badge promotes physical fitness, independence, and responsible cycling, while encouraging Beavers to explore their surroundings on two wheels.",
  },
  {
    id: 24,
    title: "Beaver Scout Disability Awareness Activity Badge",
    shortDescription: "Promote understanding and inclusion.",
    picture: images[23],
    longDescription:
      "The Beaver Scout Disability Awareness Activity Badge aims to increase young Beavers' understanding of various disabilities and promote a culture of inclusion and empathy. They learn about different types of disabilities, engage in activities that simulate different conditions, and discuss ways to support and include people with disabilities in their community. This badge fosters compassion, respect, and awareness of diversity.",
  },
  {
    id: 25,
    title: "Beaver Scout Experiment Activity Badge",
    shortDescription: "Explore science through hands-on experiments.",
    picture: images[24],
    longDescription:
      "The Beaver Scout Experiment Activity Badge encourages young Beavers to discover the world of science through engaging, hands-on experiments. They explore various scientific concepts, such as chemical reactions, forces, and energy, by conducting experiments and observing the results. This badge fosters curiosity, critical thinking, and a love for scientific discovery.",
  },
  {
    id: 26,
    title: "Beaver Scout Explore Activity Badge",
    shortDescription: "Embark on adventures and discover new places.",
    picture: images[25],
    longDescription:
      "The Beaver Scout Explore Activity Badge inspires young Beavers to embark on adventures and discover new places. They participate in various outdoor activities, such as hiking, orienteering, and nature walks, while learning about the environment and its inhabitants. This badge fosters curiosity, physical fitness, and a love for exploration and the great outdoors.",
  },
  {
    id: 27,
    title: "Beaver Scout Faith Activity Badge",
    shortDescription: "Learn about different faiths and beliefs.",
    picture: images[26],
    longDescription:
      "The Beaver Scout Faith Activity Badge introduces young Beavers to various faiths, beliefs, and spiritual practices from around the world. They learn about the history, customs, and significance of different religions, and participate in activities that promote understanding and respect for diversity. This badge fosters spiritual growth, tolerance, and a sense of global community.",
  },
  {
    id: 28,
    title: "Beaver Scout Global Issues Activity Badge",
    shortDescription: "Understand global issues and take action.",
    picture: images[27],
    longDescription:
      "The Beaver Scout Global Issues Activity Badge educates young Beavers about pressing global issues, such as climate change, poverty, and inequality. They discuss the causes and consequences of these challenges, and explore ways to take action and make a positive difference. This badge encourages critical thinking, empathy, and a sense of global responsibility.",
  },
  {
    id: 29,
    title: "Beaver Scout Gardener Activity Badge",
    shortDescription: "Cultivate gardening skills and plant knowledge.",
    picture: images[28],
    longDescription:
      "The Beaver Scout Gardener Activity Badge teaches young Beavers about the world of gardening and plants. They learn about plant life cycles, soil types, and how to grow and care for their own plants. The badge encourages hands-on learning, responsibility, and a greater appreciation for the natural world, as well as the benefits of nurturing green spaces.",
  },
  {
    id: 30,
    title: "Beaver Scout Hobbies Activity Badge",
    shortDescription: "Explore and share personal interests.",
    picture: images[29],
    longDescription:
      "The Beaver Scout Hobbies Activity Badge encourages young Beavers to explore and share their personal interests and hobbies. They learn about various hobbies, engage in activities related to their interests, and share their experiences with fellow Beavers. This badge fosters creativity, self-expression, and a sense of community, as Beavers learn from and inspire one another.",
  },
  {
    id: 31,
    title: "Beaver Scout International Activity Badge",
    shortDescription: "Discover cultures and global connections.",
    picture: images[30],
    longDescription:
      "The Beaver Scout International Activity Badge introduces young Beavers to different cultures, customs, and global connections. They learn about various countries, languages, and traditions, and participate in activities that promote cross-cultural understanding and respect. This badge fosters curiosity, empathy, and a sense of global community, as Beavers develop a greater appreciation for the world and its diversity.",
  },
  {
    id: 32,
    title: "Beaver Scout Money Skills Activity Badge",
    shortDescription: "Learn financial literacy and money management.",
    picture: images[31],
    longDescription:
      "The Beaver Scout Money Skills Activity Badge teaches young Beavers the essentials of financial literacy and money management. They learn about budgeting, saving, and making responsible financial decisions through engaging activities and real-life scenarios. This badge promotes financial responsibility, planning, and problem-solving skills, laying the foundation for a lifetime of sound financial habits.",
  },
  {
    id: 33,
    title: "Beaver Scout Photographer Activity Badge",
    shortDescription: "Capture memories through photography.",
    picture: images[32],
    longDescription:
      "The Beaver Scout Photographer Activity Badge helps young Beavers develop their photography skills and express their creativity through visual storytelling. They learn about different types of cameras, photographic techniques, and composition, and practice capturing memories and moments through their own unique perspectives. This badge encourages artistic expression, observation, and the preservation of memories.",
  },
  {
    id: 34,
    title: "Beaver Scout Safety Activity Badge (Network Rail)",
    shortDescription: "Learn essential safety skills and awareness.",
    picture: images[33],
    longDescription:
      "The Beaver Scout Safety Activity Badge (Network Rail) teaches young Beavers essential safety skills and fosters a greater awareness of potential hazards. They learn about various safety topics, including road, rail, and fire safety, and practice responding to emergencies. This badge promotes responsibility, preparedness, and the importance of making safe choices in everyday life.",
  },
  {
    id: 35,
    title: "Beaver Scout Space Activity Badge",
    shortDescription: "Discover the wonders of outer space.",
    picture: images[34],
    longDescription:
      "The Beaver Scout Space Activity Badge introduces young Beavers to the fascinating world of outer space, astronomy, and space exploration. They learn about planets, stars, and space missions, and engage in activities that foster their understanding of the universe beyond Earth. This badge encourages curiosity, scientific inquiry, and a sense of wonder about the cosmos.",
  },
  {
    id: 36,
    title: "Beaver Scout Sports Activity Badge (LTA)",
    shortDescription: "Develop athletic skills and sportsmanship.",
    picture: images[35],
    longDescription:
      "The Beaver Scout Sports Activity Badge (LTA) helps young Beavers develop their athletic skills, sportsmanship, and appreciation for various sports. They learn the rules and techniques for different sports, practice teamwork, and engage in physical activities that promote fitness, coordination, and healthy competition. This badge fosters physical fitness, teamwork, and a love for sports.",
  },
  {
    id: 37,
    title: "Cub Scout Animal Carer Badge (Pets At Home)",
    shortDescription: "Learn to care for and understand animals.",
    picture: images[36],
    longDescription:
      "The Cub Scout Animal Carer Badge (Pets At Home) teaches young Cubs the essentials of responsible pet ownership and animal care. They learn about different types of animals, their needs, and how to care for them properly. The badge promotes empathy, responsibility, and a greater understanding of the natural world, as Cubs learn to respect and care for animals.",
  },
  {
    id: 38,
    title: "Cub Scout Artist Activity Badge",
    shortDescription: "Express creativity through various art forms.",
    picture: images[37],
    longDescription:
      "The Cub Scout Artist Activity Badge encourages young Cubs to express their creativity through various artistic mediums. They explore painting, drawing, sculpture, photography, and more, while learning about different techniques and styles. This badge fosters self-expression, artistic exploration, and the development of fine motor skills, as well as an appreciation for art and culture.",
  },
  {
    id: 39,
    title: "Cub Scout Cyclist Activity Badge",
    shortDescription: "Master cycling skills, safety, and maintenance.",
    picture: images[38],
    longDescription:
      "The Cub Scout Cyclist Activity Badge teaches young Cubs essential cycling skills, road safety, and bike maintenance. They learn how to ride confidently, follow traffic rules, and maintain their bicycles to ensure optimal performance. This badge promotes physical fitness, independence, and responsible cycling, while encouraging Cubs to explore their surroundings on two wheels.",
  },
  {
    id: 40,
    title: "Cub Scout Athletics Activity Badge",
    shortDescription: "Develop athleticism and sportsmanship.",
    picture: images[39],
    longDescription:
      "The Cub Scout Athletics Activity Badge helps young Cubs develop their athletic abilities, sportsmanship, and appreciation for various sports. They learn the rules and techniques for different sports, practice teamwork, and engage in physical activities that promote fitness, coordination, and healthy competition. This badge fosters physical fitness, teamwork, and a love for sports.",
  },
  {
    id: 41,
    title: "Cub Scout Athletics Plus Activity Badge",
    shortDescription: "Advance athletic skills and achievements.",
    picture: images[40],
    longDescription:
      "The Cub Scout Athletics Plus Activity Badge is designed for young Cubs who wish to further develop their athletic abilities and achievements. This badge builds upon the skills learned in the Athletics Activity Badge, encouraging Cubs to set personal goals, participate in competitions, and continually improve their physical fitness and sportsmanship. This badge fosters perseverance, self-discipline, and a commitment to personal growth.",
  },
  {
    id: 42,
    title: "Cub Scout Astronomer Activity Badge",
    shortDescription: "Explore the wonders of astronomy.",
    picture: images[41],
    longDescription:
      "The Cub Scout Astronomer Activity Badge introduces young Cubs to the fascinating world of astronomy. They learn about celestial objects, constellations, and the basics of stargazing, and engage in activities that foster their understanding of the universe. This badge encourages curiosity, scientific inquiry, and a sense of wonder about the cosmos.",
  },
  {
    id: 43,
    title: "Cub Scout Backwoods Cooking Activity Badge",
    shortDescription: "Master outdoor cooking techniques.",
    picture: images[42],
    longDescription:
      "The Cub Scout Backwoods Cooking Activity Badge teaches young Cubs essential outdoor cooking skills and techniques. They learn how to safely build and manage a fire, prepare and cook food in an outdoor setting, and practice Leave No Trace principles. This badge fosters self-sufficiency, resourcefulness, and an appreciation for the outdoors.",
  },
  {
    id: 44,
    title: "Cub Scout Book Reader Activity Badge",
    shortDescription: "Cultivate a love for reading and literature.",
    picture: images[43],
    longDescription:
      "The Cub Scout Book Reader Activity Badge encourages young Cubs to develop a love for reading and literature. They explore various genres, authors, and styles, and engage in discussions and activities related to their reading experiences. This badge fosters critical thinking, empathy, and a greater appreciation for the power of storytelling and the written word.",
  },
  {
    id: 45,
    title: "Cub Scout Chef Activity Badge",
    shortDescription: "Develop culinary skills and healthy eating habits.",
    picture: images[44],
    longDescription:
      "The Cub Scout Chef Activity Badge teaches young Cubs essential culinary skills and fosters healthy eating habits. They learn about food safety, meal planning, and nutrition, and practice preparing and cooking a variety of dishes. This badge promotes self-sufficiency, creativity, and an appreciation for the culinary arts, as well as the importance of a balanced diet.",
  },
  {
    id: 46,
    title: "Cub Scout Communicator Activity Badge",
    shortDescription: "Enhance communication skills and methods.",
    picture: images[45],
    longDescription:
      "The Cub Scout Communicator Activity Badge helps young Cubs develop effective communication skills and explore various methods of communication. They learn about verbal, non-verbal, written, and digital communication techniques and engage in activities that foster clear, concise, and respectful communication. This badge promotes interpersonal skills, empathy, and the importance of active listening.",
  },
  {
    id: 47,
    title: "Cub Scout Disability Awareness Activity Badge",
    shortDescription: "Promote understanding and inclusivity.",
    picture: images[46],
    longDescription:
      "The Cub Scout Disability Awareness Activity Badge introduces young Cubs to the experiences of individuals with disabilities and fosters a greater understanding of, and respect for, their needs and abilities. They learn about various types of disabilities, participate in activities that simulate different challenges, and discuss ways to promote inclusivity. This badge encourages empathy, compassion, and a commitment to accessibility.",
  },
  {
    id: 48,
    title: "Cub Scout DIY Activity Badge",
    shortDescription: "Learn practical DIY skills and techniques.",
    picture: images[47],
    longDescription:
      "The Cub Scout DIY Activity Badge teaches young Cubs essential do-it-yourself skills and techniques. They learn about tools, materials, and safety precautions, and engage in hands-on projects that develop their practical abilities. This badge promotes self-sufficiency, resourcefulness, and an appreciation for craftsmanship, as Cubs learn to tackle everyday tasks and challenges.",
  },
  {
    id: 49,
    title: "Cub Scout Equestrian Activity Badge",
    shortDescription: "Develop horsemanship skills and knowledge.",
    picture: images[48],
    longDescription:
      "The Cub Scout Equestrian Activity Badge introduces young Cubs to the world of horse riding and care. They learn about horse breeds, anatomy, and equipment, and develop their horsemanship skills through riding lessons and hands-on experience. This badge fosters responsibility, confidence, and a greater appreciation for the bond between humans and animals, as well as the joy of equestrian pursuits.",
  },
  {
    id: 50,
    title: "Cub Scout Entertainer Activity Badge",
    shortDescription: "Explore performance arts and self-expression.",
    picture: images[49],
    longDescription:
      "The Cub Scout Entertainer Activity Badge encourages young Cubs to explore the world of performing arts and self-expression. They learn about various performance genres, such as acting, dancing, singing, and comedy, and engage in activities that foster creativity and confidence. This badge promotes self-expression, teamwork, and an appreciation for the arts.",
  },
  {
    id: 51,
    title: "Cub Scout Home Safety Badge (GDN)",
    shortDescription: "Learn essential home safety skills.",
    picture: images[50],
    longDescription:
      "The Cub Scout Home Safety Badge (GDN) teaches young Cubs essential home safety skills and fosters a greater awareness of potential hazards. They learn about various safety topics, including fire prevention, electrical safety, and first aid, and practice responding to emergencies. This badge promotes responsibility, preparedness, and the importance of making safe choices at home.",
  },
  {
    id: 52,
    title: "Cub Scout Money Skills Activity Badge",
    shortDescription: "Master financial literacy and money management.",
    picture: images[51],
    longDescription:
      "The Cub Scout Money Skills Activity Badge teaches young Cubs the essentials of financial literacy and money management. They learn about budgeting, saving, and making responsible financial decisions through engaging activities and real-life scenarios. This badge promotes financial responsibility, planning, and problem-solving skills, laying the foundation for a lifetime of sound financial habits.",
  },
  {
    id: 53,
    title: "Cub Scout Fire Safety Activity Badge",
    shortDescription: "Understand fire safety and prevention.",
    picture: images[52],
    longDescription:
      "The Cub Scout Fire Safety Activity Badge introduces young Cubs to the essentials of fire safety, prevention, and emergency response. They learn about fire hazards, fire prevention measures, and how to safely respond in case of a fire. This badge fosters responsibility, preparedness, and an understanding of the importance of fire safety in everyday life.",
  },
  {
    id: 54,
    title: "Cub Scout Gardener Activity Badge",
    shortDescription: "Learn gardening skills and plant cultivation.",
    picture: images[53],
    longDescription:
      "The Cub Scout Gardener Activity Badge teaches young Cubs essential gardening skills and the basics of plant cultivation. They learn about soil, seeds, and plant care, and engage in hands-on activities that foster a love for gardening and an appreciation for nature. This badge promotes environmental stewardship, patience, and a greater understanding of the natural world.",
  },
  {
    id: 55,
    title: "Cub Scout Global Issues Activity Badge",
    shortDescription: "Explore global challenges and solutions.",
    picture: images[54],
    longDescription:
      "The Cub Scout Global Issues Activity Badge introduces young Cubs to the challenges facing our world today and encourages them to think critically about potential solutions. They learn about topics such as climate change, poverty, and human rights, and engage in discussions and activities that promote global awareness and empathy. This badge fosters critical thinking, problem-solving, and a commitment to making a positive impact on the world.",
  },
  {
    id: 56,
    title: "Cub Scout Hobbies Activity Badge",
    shortDescription: "Discover new interests and develop skills.",
    picture: images[55],
    longDescription:
      "The Cub Scout Hobbies Activity Badge encourages young Cubs to explore their interests and develop new skills through engaging in various hobbies. They learn about different types of hobbies, how to choose and pursue a hobby, and the benefits of having a pastime. This badge promotes creativity, curiosity, and personal growth, as Cubs discover their unique passions and talents.",
  },
  {
    id: 57,
    title: "Cub Scout Home Help Activity Badge",
    shortDescription: "Develop essential home maintenance skills.",
    picture: images[56],
    longDescription:
      "The Cub Scout Home Help Activity Badge teaches young Cubs the fundamentals of home maintenance and household chores. They learn about various tasks, tools, and safety precautions, and engage in hands-on activities that develop their practical abilities. This badge promotes self-sufficiency, responsibility, and an appreciation for the skills required to maintain a clean, safe, and well-functioning home.",
  },
  {
    id: 58,
    title: "Cub Scout International Activity Badge",
    shortDescription: "Discover different cultures and global awareness.",
    picture: images[57],
    longDescription:
      "The Cub Scout International Activity Badge encourages young Cubs to explore different cultures and develop global awareness. They learn about various customs, traditions, and languages, and engage in activities that foster an appreciation for diversity and the interconnectedness of our world. This badge promotes cultural understanding, empathy, and a broader perspective on global issues.",
  },
  {
    id: 59,
    title: "Cub Scout Local Knowledge Activity Badge",
    shortDescription: "Learn about local history and community.",
    picture: images[58],
    longDescription:
      "The Cub Scout Local Knowledge Activity Badge teaches young Cubs about their local history, geography, and community. They explore the unique features, landmarks, and traditions of their area and engage in activities that foster a greater appreciation for their surroundings. This badge promotes curiosity, a sense of belonging, and a deeper connection to one's community.",
  },
  {
    id: 60,
    title: "Cub Scout Martial Arts Activity Badge",
    shortDescription: "Explore martial arts disciplines and skills.",
    picture: images[59],
    longDescription:
      "The Cub Scout Martial Arts Activity Badge introduces young Cubs to the world of martial arts and the various disciplines and skills associated with it. They learn about the history, techniques, and principles of different martial arts styles and engage in activities that promote physical fitness, self-discipline, and respect. This badge fosters confidence, perseverance, and a commitment to personal growth.",
  },
  {
    id: 61,
    title: "Cub Scout My Faith Activity Badge",
    shortDescription: "Explore personal faith and spiritual growth.",
    picture: images[60],
    longDescription:
      "The Cub Scout My Faith Activity Badge encourages young Cubs to explore their personal faith and develop their spiritual growth. They learn about various religious beliefs and practices, engage in discussions and activities related to their own faith, and develop a greater appreciation for the diverse spiritual beliefs of others. This badge fosters empathy, reflection, and a commitment to personal values.",
  },
  {
    id: 62,
    title: "Cub Scout Naturalist Activity Badge",
    shortDescription: "Explore nature and develop environmental awareness.",
    picture: images[61],
    longDescription:
      "The Cub Scout Naturalist Activity Badge encourages young Cubs to explore the natural world and develop a greater understanding of and appreciation for nature. They learn about various plants, animals, and ecosystems, and engage in activities that foster environmental awareness and stewardship. This badge promotes curiosity, observation skills, and a commitment to preserving the natural world.",
  },
  {
    id: 63,
    title: "Cub Scout Photographer Activity Badge",
    shortDescription: "Learn photography skills and creative expression.",
    picture: images[62],
    longDescription:
      "The Cub Scout Photographer Activity Badge teaches young Cubs the fundamentals of photography and encourages creative expression through this art form. They learn about camera equipment, composition, lighting, and various photographic techniques, and engage in hands-on activities that foster their artistic abilities. This badge promotes creativity, self-expression, and a greater appreciation for the power of visual storytelling.",
  },
  {
    id: 64,
    title: "Cub Scout Pioneer Activity Badge",
    shortDescription: "Master pioneering skills and outdoor challenges.",
    picture: images[63],
    longDescription:
      "The Cub Scout Pioneer Activity Badge introduces young Cubs to the world of pioneering and the skills required to tackle outdoor challenges. They learn about knots, lashings, and basic construction techniques, and engage in activities that develop their problem-solving and teamwork abilities. This badge fosters self-reliance, resourcefulness, and a greater appreciation for the outdoors and traditional pioneering skills.",
  },
  {
    id: 65,
    title: "Cub Scout Physical Recreation Activity Badge",
    shortDescription: "Promote physical fitness and healthy habits.",
    picture: images[64],
    longDescription:
      "The Cub Scout Physical Recreation Activity Badge encourages young Cubs to engage in physical fitness activities and develop healthy habits. They explore various sports, games, and exercises, and learn about the importance of staying active and maintaining a healthy lifestyle. This badge promotes physical fitness, teamwork, and a lifelong commitment to health and well-being.",
  },
  {
    id: 66,
    title: "Cub Scout Personal Safety Activity Badge (Network Rail)",
    shortDescription: "Learn personal safety and accident prevention.",
    picture: images[65],
    longDescription:
      "The Cub Scout Personal Safety Activity Badge (Network Rail) teaches young Cubs the importance of personal safety and accident prevention. They learn about various safety topics, including personal awareness, risk assessment, and emergency response, and engage in activities that foster a greater understanding of how to stay safe in various situations. This badge promotes responsibility, preparedness, and the importance of making safe choices.",
  },
  {
    id: 67,
    title: "Cub Scout Road Safety Activity Badge",
    shortDescription: "Master road safety skills and awareness.",
    picture: images[66],
    longDescription:
      "The Cub Scout Road Safety Activity Badge helps young Cubs develop essential road safety skills and awareness. They learn about traffic rules, pedestrian safety, and the importance of being alert and attentive while near roads. This badge fosters responsibility, situational awareness, and an understanding of the importance of road safety in everyday life.",
  },
  {
    id: 68,
    title: "Cub Scout Scientist Badge (Rolls Royce)",
    shortDescription: "Explore scientific principles and experimentation.",
    picture: images[67],
    longDescription:
      "The Cub Scout Scientist Badge (Rolls Royce) introduces young Cubs to the exciting world of science and the principles that govern our universe. They learn about various scientific concepts, engage in hands-on experiments, and develop their critical thinking and problem-solving skills. This badge, sponsored by Rolls Royce, fosters curiosity, creativity, and a lifelong passion for scientific discovery.",
  },
  {
    id: 69,
    title: "Cub Scout Skater Activity Badge",
    shortDescription: "Learn skating skills and enjoy the sport.",
    picture: images[68],
    longDescription:
      "The Cub Scout Skater Activity Badge encourages young Cubs to develop their skating skills and enjoy the sport, whether it's roller skating, skateboarding, or ice skating. They learn about the necessary equipment, safety precautions, and various techniques, and engage in activities that promote physical fitness, balance, and coordination. This badge fosters confidence, perseverance, and a love for the sport of skating.",
  },
  {
    id: 70,
    title: "Cub Scouts Sports Enthusiast Activity Badge",
    shortDescription: "Discover various sports and develop skills.",
    picture: images[69],
    longDescription:
      "The Cub Scouts Sports Enthusiast Activity Badge encourages young Cubs to explore various sports and develop their skills in physical activities. They learn about different sports, their rules, and techniques, and engage in activities that promote physical fitness, teamwork, and sportsmanship. This badge fosters a lifelong love for sports and a commitment to maintaining an active lifestyle.",
  },
  {
    id: 71,
    title: "Cub Scouts Water Activities Activity Badge",
    shortDescription: "Experience water-based activities and safety.",
    picture: images[70],
    longDescription:
      "The Cub Scouts Water Activities Activity Badge introduces young Cubs to the exciting world of water-based activities and promotes water safety. They learn about various water sports, safety precautions, and techniques, and engage in activities that develop their swimming, boating, or other water-based skills. This badge fosters confidence, physical fitness, and a love for water activities.",
  },
  {
    id: 72,
    title: "Cub Scouts World Faith Activity Badge",
    shortDescription: "Explore world religions and spiritual beliefs.",
    picture: images[71],
    longDescription:
      "The Cub Scouts World Faith Activity Badge encourages young Cubs to explore various world religions and spiritual beliefs. They learn about different faith traditions, customs, and practices, and engage in activities that promote understanding and appreciation for the diverse spiritual beliefs of others. This badge fosters empathy, open-mindedness, and a broader perspective on global faiths.",
  },
  {
    id: 73,
    title: "Scout Adventure Centre Service Activity Badge",
    shortDescription: "Contribute to Scout Adventure Centres.",
    picture: images[72],
    longDescription:
      "The Scout Adventure Centre Service Activity Badge recognizes Scouts who have made a significant contribution to their local Scout Adventure Centre. They learn about the importance of service, teamwork, and community involvement, and engage in activities that support the operation, maintenance, and improvement of the Adventure Centre. This badge promotes leadership, responsibility, and a commitment to giving back to the Scouting community.",
  },
  {
    id: 74,
    title: "Scout Air Researcher Activity Badge",
    shortDescription: "Explore aviation history and modern developments.",
    picture: images[73],
    longDescription:
      "The Scout Air Researcher Activity Badge encourages Scouts to delve into the fascinating world of aviation, exploring its history, advancements, and modern developments. They learn about various aircraft, aviation pioneers, and milestones in aviation history, as well as the latest innovations in the field. This badge fosters curiosity, knowledge, and an appreciation for the world of aviation.",
  },
  {
    id: 75,
    title: "Scout Air or Sea Navigation Activity Badge",
    shortDescription: "Master air and sea navigation techniques.",
    picture: images[74],
    longDescription:
      "The Scout Air or Sea Navigation Activity Badge teaches Scouts the essential skills and techniques for navigating in air or sea environments. They learn about various navigation tools, methods, and principles, and engage in activities that develop their navigational abilities. This badge fosters resourcefulness, critical thinking, and a deeper understanding of the challenges and skills required for air and sea navigation.",
  },
  {
    id: 76,
    title: "Scout Air Spotter Activity Badge",
    shortDescription: "Learn aircraft identification and spotting skills.",
    picture: images[75],
    longDescription:
      "The Scout Air Spotter Activity Badge introduces Scouts to the skill of aircraft identification and spotting. They learn about different types of aircraft, their features, and how to identify them from various angles and distances. They also engage in activities that hone their observation and identification skills. This badge promotes attention to detail, patience, and a greater appreciation for the world of aviation.",
  },
  {
    id: 77,
    title: "Scout Angler Activity Badge",
    shortDescription: "Develop fishing skills and responsible angling.",
    picture: images[76],
    longDescription:
      "The Scout Angler Activity Badge encourages Scouts to develop their fishing skills and practice responsible angling. They learn about various fishing techniques, equipment, and safety precautions, as well as the importance of conservation and responsible fishing practices. This badge fosters patience, appreciation for nature, and a commitment to preserving aquatic ecosystems for future generations.",
  },
  {
    id: 78,
    title: "Scout Artist Activity Badge",
    shortDescription: "Develop artistic skills and creative expression.",
    picture: images[77],
    longDescription:
      "The Scout Artist Activity Badge fosters artistic skills and creative expression among Scouts. They explore various art forms, techniques, and materials, and engage in hands-on activities that help them develop their artistic abilities. This badge promotes creativity, self-expression, and a greater appreciation for the power of visual arts.",
  },
  {
    id: 79,
    title: "Scout Astronautics Activity Badge (The Space Agency)",
    shortDescription: "Discover space exploration and astronautics.",
    picture: images[78],
    longDescription:
      "The Scout Astronautics Activity Badge (The Space Agency) introduces Scouts to the exciting world of space exploration and astronautics. Sponsored by The Space Agency, they learn about the history of space exploration, major milestones, and current developments in the field. They also engage in activities that develop their understanding of space missions and technologies. This badge fosters curiosity, critical thinking, and a passion for space exploration.",
  },
  {
    id: 80,
    title: "Scout Astronomer Activity Badge",
    shortDescription: "Explore astronomy and the wonders of the cosmos.",
    picture: images[79],
    longDescription:
      "The Scout Astronomer Activity Badge encourages Scouts to explore the fascinating world of astronomy and the wonders of the cosmos. They learn about celestial objects, phenomena, and basic principles of astronomy, and engage in activities such as stargazing and using telescopes. This badge fosters curiosity, observation skills, and a greater appreciation for the vastness and beauty of the universe.",
  },
  {
    id: 81,
    title: "Scout Athletics Activity Badge",
    shortDescription: "Participate in athletics and improve physical fitness.",
    picture: images[80],
    longDescription:
      "The Scout Athletics Activity Badge promotes participation in athletics and the development of physical fitness among Scouts. They explore various athletic disciplines, learn about training techniques, and engage in activities that help them improve their athletic abilities. This badge fosters physical fitness, discipline, and a commitment to maintaining an active and healthy lifestyle.",
  },
  {
    id: 82,
    title: "Scout Athletics Plus Activity Badge",
    shortDescription: "Enhance athletic skills and reach new milestones.",
    picture: images[81],
    longDescription:
      "The Scout Athletics Plus Activity Badge builds upon the Athletics Activity Badge and encourages Scouts to enhance their athletic skills and reach new milestones. They set personal goals, learn advanced techniques, and engage in activities that challenge them to improve their performance. This badge fosters discipline, perseverance, and a dedication to personal growth and achievement in athletics.",
  },
  {
    id: 83,
    title: "Scout Camper Activity Badge",
    shortDescription: "Develop camping skills and outdoor living.",
    picture: images[82],
    longDescription:
      "The Scout Camper Activity Badge promotes the development of camping skills and outdoor living among Scouts. They learn about camping equipment, planning, safety, and essential outdoor skills, and engage in activities that help them become proficient campers. This badge fosters self-reliance, teamwork, and a greater appreciation for nature and the outdoors.",
  },
  {
    id: 84,
    title: "Scout Caver Activity Badge",
    shortDescription: "Experience caving and underground exploration.",
    picture: images[83],
    longDescription:
      "The Scout Caver Activity Badge introduces Scouts to the exciting world of caving and underground exploration. They learn about various types of caves, caving equipment, safety precautions, and techniques, and engage in activities that develop their caving skills. This badge promotes adventure, courage, and a greater appreciation for the hidden wonders of the underground world.",
  },
  {
    id: 85,
    title: "Scout Chef Activity Badge",
    shortDescription: "Learn cooking skills and create delicious meals.",
    picture: images[84],
    longDescription:
      "The Scout Chef Activity Badge teaches Scouts essential cooking skills and the art of creating delicious meals. They learn about various cooking techniques, ingredients, and equipment, and engage in hands-on activities that help them become proficient in preparing a variety of dishes. This badge fosters self-reliance, creativity, and a greater appreciation for the culinary arts.",
  },
  {
    id: 86,
    title: "Scout Circus Skills Activity Badge",
    shortDescription: "Learn circus skills and perform thrilling acts.",
    picture: images[85],
    longDescription:
      "The Scout Circus Skills Activity Badge introduces Scouts to the thrilling world of circus arts and encourages them to learn various circus skills. They explore different circus disciplines, techniques, and equipment, and engage in activities that develop their abilities in performing acts such as juggling, acrobatics, or balancing. This badge fosters creativity, dexterity, and self-confidence.",
  },
  {
    id: 87,
    title: "Scout Climber Activity Badge",
    shortDescription: "Master climbing skills and conquer new heights.",
    picture: images[86],
    longDescription:
      "The Scout Climber Activity Badge teaches Scouts essential climbing skills and encourages them to conquer new heights. They learn about various types of climbing, safety precautions, and techniques, and engage in activities that develop their climbing abilities. This badge promotes physical fitness, courage, and a sense of accomplishment in overcoming challenges.",
  },
  {
    id: 88,
    title: "Scout Craft Activity Badge",
    shortDescription: "Create crafts and develop artistic talents.",
    picture: images[87],
    longDescription:
      "The Scout Craft Activity Badge encourages Scouts to explore various crafts and develop their artistic talents. They learn about different crafting techniques, materials, and tools, and engage in hands-on activities that help them create unique and imaginative crafts. This badge fosters creativity, self-expression, and a greater appreciation for the art of crafting.",
  },
  {
    id: 89,
    title: "Scout Communicator Activity Badge",
    shortDescription: "Enhance communication skills and effective expression.",
    picture: images[88],
    longDescription:
      "The Scout Communicator Activity Badge aims to enhance Scouts' communication skills and their ability to express themselves effectively. They explore various modes of communication, develop their listening, speaking, and writing skills, and engage in activities that promote clear, concise, and persuasive expression. This badge fosters interpersonal skills, empathy, and confidence in communication.",
  },
  {
    id: 90,
    title: "Scout Cyclist Activity Badge",
    shortDescription: "Develop cycling skills and promote safe riding.",
    picture: images[89],
    longDescription:
      "The Scout Cyclist Activity Badge encourages Scouts to develop their cycling skills and promote safe riding practices. They learn about various types of bicycles, cycling equipment, safety precautions, and maintenance techniques, and engage in activities that help them become proficient cyclists. This badge fosters physical fitness, responsibility, and a commitment to a healthy and eco-friendly lifestyle.",
  },
  {
    id: 91,
    title: "Scout DIY Activity Badge",
    shortDescription: "Learn DIY skills and complete home projects.",
    picture: images[90],
    longDescription:
      "The Scout DIY Activity Badge teaches Scouts essential do-it-yourself skills and encourages them to complete home projects. They learn about various tools, materials, and techniques, and engage in hands-on activities that help them become proficient in tackling various DIY tasks. This badge fosters self-reliance, problem-solving, and a greater appreciation for craftsmanship.",
  },
  {
    id: 92,
    title: "Scout Dragon Boating Activity Badge",
    shortDescription: "Experience dragon boating and develop teamwork.",
    picture: images[91],
    longDescription:
      "The Scout Dragon Boating Activity Badge introduces Scouts to the exhilarating sport of dragon boating and encourages them to develop teamwork and paddling skills. They learn about the history of the sport, equipment, safety precautions, and techniques, and engage in activities that help them become proficient dragon boat paddlers. This badge promotes physical fitness, teamwork, and a sense of accomplishment in working together.",
  },
  {
    id: 93,
    title: "Scout Electronics Activity Badge (IET)",
    shortDescription: "Explore electronics and create innovative projects.",
    picture: images[92],
    longDescription:
      "The Scout Electronics Activity Badge (IET), sponsored by the Institution of Engineering and Technology, encourages Scouts to explore the world of electronics and create innovative projects. They learn about electronic components, circuits, and safety precautions, and engage in hands-on activities that help them design and build electronic devices. This badge fosters creativity, problem-solving, and a passion for technology and innovation.",
  },
  {
    id: 94,
    title: "Scout Entertainer Activity Badge (Dungeons & Dragons)",
    shortDescription: "Learn and play the tabletop game Dungeons & Dragons.",
    picture: images[93],
    longDescription:
      "The Scout Entertainer Activity Badge (Dungeons & Dragons), sponsored by Wizards of the Coast, introduces Scouts to the world of tabletop gaming and the popular game of Dungeons & Dragons. They learn about the rules, character creation, and gameplay, and engage in fun and challenging adventures that develop their critical thinking, creativity, and social skills. This badge fosters imagination, camaraderie, and a love of gaming.",
  },
  {
    id: 95,
    title: "Scout Environmental Conservation Activity Badge",
    shortDescription: "Promote environmental awareness and conservation.",
    picture: images[94],
    longDescription:
      "The Scout Environmental Conservation Activity Badge encourages Scouts to promote environmental awareness and conservation practices. They learn about environmental issues, the impact of human activities on the planet, and ways to reduce their ecological footprint. They engage in activities such as conservation projects, waste reduction, and energy-saving initiatives. This badge fosters a sense of responsibility, environmental stewardship, and a commitment to protecting the natural world.",
  },
  {
    id: 96,
    title: "Scout Equestrian Activity Badge",
    shortDescription: "Experience horse riding and care for horses.",
    picture: images[95],
    longDescription:
      "The Scout Equestrian Activity Badge introduces Scouts to the world of horse riding and encourages them to develop equestrian skills and knowledge. They learn about horse care, safety, and riding techniques, and engage in activities that help them become proficient riders. This badge fosters responsibility, discipline, and a connection with animals and nature.",
  },
  {
    id: 97,
    title: "Scout Farming Activity Badge",
    shortDescription: "Learn about farming and agricultural practices.",
    picture: images[96],
    longDescription:
      "The Scout Farming Activity Badge teaches Scouts about the world of farming and agricultural practices. They learn about crops, livestock, equipment, and techniques, and engage in activities that help them understand the challenges and rewards of farming. This badge fosters appreciation for the importance of agriculture, sustainability, and a connection with the land.",
  },
  {
    id: 98,
    title: "Scout Fire Safety Activity Badge",
    shortDescription: "Learn about fire safety and prevention.",
    picture: images[97],
    longDescription:
      "The Scout Fire Safety Activity Badge teaches Scouts about fire safety and prevention practices. They learn about the causes of fires, the different types of fires, and how to prevent and extinguish fires. They engage in activities such as fire drills, fire safety inspections, and fire extinguisher training. This badge fosters a sense of responsibility, safety awareness, and preparedness in case of a fire.",
  },
  {
    id: 99,
    title: "Scout Forester Activity Badge",
    shortDescription: "Learn about forestry and conservation practices.",
    picture: images[98],
    longDescription:
      "The Scout Forester Activity Badge teaches Scouts about forestry and conservation practices. They learn about tree identification, forest management, and conservation efforts, and engage in activities that help them understand the importance of forests and the impact of human activities on the environment. This badge fosters a sense of responsibility, environmental stewardship, and a commitment to preserving natural resources.",
  },
  {
    id: 100,
    title: "Scout Geocaching Activity Badge",
    shortDescription: "Explore the outdoors and search for hidden treasures.",
    picture: images[99],
    longDescription:
      "The Scout Geocaching Activity Badge encourages Scouts to explore the outdoors and discover hidden treasures through the popular activity of geocaching. They learn about GPS technology, geocaching rules, and techniques, and engage in activities that help them find hidden caches and solve puzzles. This badge fosters a sense of adventure, problem-solving, and a greater appreciation for the outdoors.",
  },
  {
    id: 101,
    title: "Scout Global Issues Activity Badge",
    shortDescription: "Learn about global issues and promote social awareness.",
    picture: images[100],
    longDescription:
      "The Scout Global Issues Activity Badge encourages Scouts to learn about global issues and promotes social awareness and action. They learn about issues such as poverty, inequality, and environmental degradation, and engage in activities that promote awareness and advocacy for social justice and sustainable development. This badge fosters empathy, critical thinking, and a commitment to making a positive impact on the world.",
  },
  {
    id: 102,
    title: "Scout Hill Walker Activity Badge",
    shortDescription: "Learn hill walking skills and enjoy the outdoors.",
    picture: images[101],
    longDescription:
      "The Scout Hill Walker Activity Badge encourages Scouts to learn essential hill walking skills and enjoy the outdoors. They learn about navigation, weather, equipment, and safety precautions, and engage in activities that help them become proficient hill walkers. This badge fosters physical fitness, self-reliance, and a greater appreciation for the natural world.",
  },
  {
    id: 103,
    title: "Scout Hobbies Activity Badge (Magic the Gathering)",
    shortDescription:
      "Learn and play the trading card game Magic the Gathering.",
    picture: images[102],
    longDescription:
      "The Scout Hobbies Activity Badge (Magic the Gathering), sponsored by Wizards of the Coast, introduces Scouts to the world of trading card games and the popular game of Magic the Gathering. They learn about the rules, deck construction, and gameplay, and engage in fun and challenging battles that develop their critical thinking, strategy, and social skills. This badge fosters creativity, camaraderie, and a love of gaming.",
  },
  {
    id: 104,
    title: "Scout International Activity Badge",
    shortDescription:
      "Explore different cultures and promote global understanding.",
    picture: images[103],
    longDescription:
      "The Scout International Activity Badge encourages Scouts to explore different cultures and promotes global understanding and friendship. They learn about the history, customs, and traditions of different countries, engage in cultural exchange activities, and promote cross-cultural communication and understanding. This badge fosters empathy, respect for diversity, and a commitment to building a better world.",
  },
  {
    id: 105,
    title: "Scout Librarian Activity Badge",
    shortDescription: "Learn about library systems and promote literacy.",
    picture: images[104],
    longDescription:
      "The Scout Librarian Activity Badge teaches Scouts about library systems and promotes literacy and a love of reading. They learn about the Dewey Decimal system, book organization, and library services, and engage in activities that promote reading and community outreach. This badge fosters a sense of responsibility, intellectual curiosity, and a commitment to promoting literacy.",
  },
  {
    id: 106,
    title: "Scout Lifesaver Activity Badge",
    shortDescription: "Learn lifesaving skills and promote safety.",
    picture: images[105],
    longDescription:
      "The Scout Lifesaver Activity Badge teaches Scouts essential lifesaving skills and promotes safety awareness. They learn about water safety, first aid, and emergency procedures, and engage in activities that help them become proficient lifesavers. This badge fosters a sense of responsibility, safety awareness, and a commitment to helping others.",
  },
  {
    id: 107,
    title: "Scout Martial Arts Activity Badge",
    shortDescription: "Learn martial arts techniques and values.",
    picture: images[106],
    longDescription:
      "The Scout Martial Arts Activity Badge introduces Scouts to the world of martial arts and encourages them to learn martial arts techniques and values. They learn about the history, philosophy, and basic techniques of different martial arts styles, and engage in activities that help them become proficient martial artists. This badge fosters physical fitness, self-discipline, and a commitment to personal growth and respect for others.",
  },
  {
    id: 108,
    title: "Scout Master at Arms Activity Badge",
    shortDescription: "Learn about weapons and practice safe handling.",
    picture: images[107],
    longDescription:
      "The Scout Master at Arms Activity Badge teaches Scouts about different types of weapons and promotes safe handling practices. They learn about the history, function, and safe use of weapons such as firearms, bows, and knives, and engage in activities that help them become proficient in handling these tools. This badge fosters a sense of responsibility, safety awareness, and respect for the power and danger of weapons.",
  },
  {
    id: 109,
    title: "Scout Mechanic Activity Badge (Army)",
    shortDescription: "Learn mechanical skills and equipment maintenance.",
    picture: images[108],
    longDescription:
      "The Scout Mechanic Activity Badge (Army) introduces Scouts to the world of mechanics and equipment maintenance. They learn about the basic principles of mechanics, equipment inspection, and preventive maintenance, and engage in activities that help them become proficient in mechanical skills. This badge fosters a sense of responsibility, technical knowledge, and a commitment to maintaining equipment in good condition.",
  },
  {
    id: 110,
    title: "Scout Media Relations and Marketing Activity Badge",
    shortDescription: "Learn about media and marketing strategies.",
    picture: images[109],
    longDescription:
      "The Scout Media Relations and Marketing Activity Badge teaches Scouts about media and marketing strategies and techniques. They learn about media relations, branding, advertising, and public relations, and engage in activities that help them understand the power and influence of media and marketing. This badge fosters a sense of creativity, critical thinking, and a commitment to ethical communication and responsible marketing practices.",
  },
  {
    id: 111,
    title: "Scout Meteorologist Activity Badge",
    shortDescription: "Learn about weather patterns and meteorology.",
    picture: images[110],
    longDescription:
      "The Scout Meteorologist Activity Badge introduces Scouts to the world of meteorology and weather patterns. They learn about the basic principles of weather forecasting, climate, and natural disasters, and engage in activities that help them become proficient in predicting and tracking weather patterns. This badge fosters a sense of scientific curiosity, environmental awareness, and a greater understanding of the natural world.",
  },
  {
    id: 112,
    title: "Scout Model Maker Activity Badge (Warhammer)",
    shortDescription: "Learn and play the tabletop game Warhammer.",
    picture: images[111],
    longDescription:
      "The Scout Model Maker Activity Badge (Warhammer), sponsored by Games Workshop, introduces Scouts to the world of tabletop gaming and the popular game of Warhammer. They learn about the rules, painting, and gameplay, and engage in fun and challenging battles that develop their critical thinking, strategy, and social skills. This badge fosters creativity, camaraderie, and a love of gaming.",
  },
  {
    id: 113,
    title: "Scout My Faith Activity Badge",
    shortDescription: "Learn about your faith and beliefs.",
    picture: images[112],
    longDescription:
      "The Scout My Faith Activity Badge encourages Scouts to explore their faith and beliefs and learn about different religions and cultures. They learn about the history, beliefs, and practices of their faith and engage in activities that promote understanding and respect for diversity. This badge fosters empathy, critical thinking, and a deeper understanding of one's own faith and those of others.",
  },
  {
    id: 114,
    title: "Scout Naturalist Activity Badge",
    shortDescription: "Learn about the natural world and conservation.",
    picture: images[113],
    longDescription:
      "The Scout Naturalist Activity Badge teaches Scouts about the natural world and conservation efforts. They learn about wildlife, plants, ecosystems, and conservation strategies, and engage in activities that help them appreciate the beauty and fragility of the natural world. This badge fosters a sense of environmental stewardship, scientific curiosity, and a commitment to protecting natural resources.",
  },
  {
    id: 115,
    title: "Scout Orienteer Activity Badge",
    shortDescription: "Learn orienteering skills and navigate in the outdoors.",
    picture: images[114],
    longDescription:
      "The Scout Orienteer Activity Badge teaches Scouts essential orienteering skills and promotes outdoor exploration and adventure. They learn about map and compass reading, navigation, and survival skills, and engage in activities that help them become proficient orienteers. This badge fosters a sense of self-reliance, adventure, and a deeper appreciation for the natural world.",
  },
  {
    id: 116,
    title: "Scout Parascending Activity Badge",
    shortDescription: "Learn and practice parascending skills.",
    picture: images[115],
    longDescription:
      "The Scout Parascending Activity Badge introduces Scouts to the world of parascending and teaches them basic parascending skills. They learn about safety procedures, equipment, and techniques, and engage in activities that help them become proficient parascenders. This badge fosters a sense of adventure, physical fitness, and a love of outdoor sports.",
  },
  {
    id: 117,
    title: "Scout Photographer Activity Badge",
    shortDescription: "Learn photography skills and techniques.",
    picture: images[116],
    longDescription:
      "The Scout Photographer Activity Badge teaches Scouts about photography skills and techniques. They learn about camera settings, composition, lighting, and editing, and engage in activities that help them become proficient photographers. This badge fosters creativity, technical knowledge, and a passion for visual storytelling.",
  },
  {
    id: 118,
    title: "Scout Pioneer Activity Badge",
    shortDescription: "Learn pioneering skills and create structures.",
    picture: images[117],
    longDescription:
      "The Scout Pioneer Activity Badge teaches Scouts pioneering skills and encourages them to create structures in the outdoors. They learn about knots, lashings, and structural design, and engage in activities that help them become proficient pioneers. This badge fosters creativity, teamwork, and a love of outdoor exploration and adventure.",
  },
  {
    id: 119,
    title: "Scout Power Coxswain Activity Badge",
    shortDescription: "Learn and practice power boating skills.",
    picture: images[118],
    longDescription:
      "The Scout Power Coxswain Activity Badge introduces Scouts to the world of power boating and teaches them basic power boating skills. They learn about safety procedures, equipment, and techniques, and engage in activities that help them become proficient power coxswains. This badge fosters a sense of adventure, physical fitness, and a love of water sports.",
  },
  {
    id: 120,
    title: "Scout Physical Recreation Activity Badge",
    shortDescription: "Learn and practice physical fitness and exercise.",
    picture: images[119],
    longDescription:
      "The Scout Physical Recreation Activity Badge encourages Scouts to engage in physical fitness and exercise. They learn about different types of physical activities, such as running, swimming, and weightlifting, and engage in activities that promote healthy habits and a love of exercise. This badge fosters a sense of physical fitness, self-discipline, and a commitment to a healthy lifestyle.",
  },
  {
    id: 121,
    title: "Scout Pulling Activity Badge",
    shortDescription: "Learn and practice rowing and pulling skills.",
    picture: images[120],
    longDescription:
      "The Scout Pulling Activity Badge teaches Scouts about rowing and pulling skills and encourages them to practice these skills on the water. They learn about safety procedures, equipment, and techniques, and engage in activities that help them become proficient rowers and pullers. This badge fosters a sense of adventure, physical fitness, and a love of water sports.",
  },
  {
    id: 122,
    title: "Scout Local Knowledge Activity Badge",
    shortDescription: "Learn about local history and geography.",
    picture: images[121],
    longDescription:
      "The Scout Local Knowledge Activity Badge encourages Scouts to learn about the history and geography of their local community. They learn about landmarks, historical events, and cultural traditions, and engage in activities that help them understand and appreciate their surroundings. This badge fosters a sense of community pride, curiosity, and a deeper appreciation for local heritage.",
  },
  {
    id: 123,
    title: "Scout Quartermaster Activity Badge",
    shortDescription: "Learn about equipment and supply management.",
    picture: images[122],
    longDescription:
      "The Scout Quartermaster Activity Badge teaches Scouts about equipment and supply management and encourages them to become proficient in this essential skill. They learn about inventory control, equipment maintenance, and supply procurement, and engage in activities that help them develop strong organizational and management skills. This badge fosters a sense of responsibility, efficiency, and a commitment to good stewardship of resources.",
  },
  {
    id: 124,
    title: "Scout Scientist Activity Badge (Rolls Royce)",
    shortDescription: "Learn about science and engineering.",
    picture: images[123],
    longDescription:
      "The Scout Scientist Activity Badge (Rolls Royce) introduces Scouts to the world of science and engineering and teaches them about the basic principles of physics, chemistry, and engineering. They engage in activities that help them develop a scientific mindset and foster a sense of curiosity, critical thinking, and problem-solving. This badge is sponsored by Rolls Royce and provides Scouts with an opportunity to learn from industry experts and gain practical knowledge in the field of science and engineering.",
  },
  {
    id: 125,
    title: "Scout Sports Enthusiast Activity Badge",
    shortDescription:
      "Learn about different sports and engage in physical activities.",
    picture: images[124],
    longDescription:
      "The Scout Sports Enthusiast Activity Badge encourages Scouts to learn about different sports and engage in physical activities. They learn about the history, rules, and techniques of various sports, and engage in activities that help them become proficient athletes. This badge fosters a sense of physical fitness, teamwork, and a love of sports.",
  },
  {
    id: 126,
    title: "Scout Street Sports Activity Badge",
    shortDescription: "Learn and practice urban sports and activities.",
    picture: images[125],
    longDescription:
      "The Scout Street Sports Activity Badge introduces Scouts to the world of urban sports and activities and teaches them basic skills and techniques. They learn about safety procedures, equipment, and techniques, and engage in activities that help them become proficient in street sports. This badge fosters a sense of adventure, physical fitness, and a love of urban sports.",
  },
  {
    id: 127,
    title: "Scout Survival Skills Activity Badge (Victorinox)",
    shortDescription: "Learn and practice survival skills in the outdoors.",
    picture: images[126],
    longDescription:
      "The Scout Survival Skills Activity Badge (Victorinox) teaches Scouts essential survival skills in the outdoors and promotes outdoor exploration and adventure. They learn about shelter building, fire starting, navigation, and first aid, and engage in activities that help them become proficient in survival skills. This badge is sponsored by Victorinox and provides Scouts with an opportunity to learn from industry experts and gain practical knowledge in the field of outdoor survival.",
  },
  {
    id: 128,
    title: "Scout Water Activities Activity Badge",
    shortDescription: "Learn and practice water sports and activities.",
    picture: images[127],
    longDescription:
      "The Scout Water Activities Activity Badge encourages Scouts to learn and practice different water sports and activities. They learn about safety procedures, equipment, and techniques for various water sports, such as swimming, kayaking, and sailing, and engage in activities that help them become proficient in these activities. This badge fosters a sense of adventure, physical fitness, and a love of water sports.",
  },
  {
    id: 129,
    title: "Scout World Faith Activity Badge",
    shortDescription: "Learn about different faiths and cultural traditions.",
    picture: images[128],
    longDescription:
      "The Scout World Faith Activity Badge encourages Scouts to learn about different faiths and cultural traditions. They learn about religious beliefs, customs, and practices, and engage in activities that help them understand and appreciate different cultures. This badge fosters a sense of curiosity, tolerance, and a deeper understanding of the diversity of the world.",
  },
  {
    id: 130,
    title: "Scout Writer Activity Badge",
    shortDescription: "Learn and practice writing skills.",
    picture: images[129],
    longDescription:
      "The Scout Writer Activity Badge encourages Scouts to develop their writing skills and express themselves through different forms of writing. They learn about different writing genres, such as fiction, non-fiction, and poetry, and engage in activities that help them become proficient writers. This badge fosters a sense of creativity, self-expression, and a love of literature.",
  },
  {
    id: 131,
    title: "Explorer Scout Adventure Centre Service Activity Badge",
    shortDescription: "Serve as a volunteer at an adventure center.",
    picture: images[130],
    longDescription:
      "The Explorer Scout Adventure Centre Service Activity Badge encourages Scouts to serve as volunteers at adventure centers and develop leadership skills while serving the community. They engage in activities that help them become proficient in customer service, teamwork, and project management. This badge fosters a sense of responsibility, service, and a commitment to making a positive impact in the community.",
  },
  {
    id: 132,
    title: "Explorer Scout Athletes Activity Badge",
    shortDescription: "Learn and practice athletic skills.",
    picture: images[131],
    longDescription:
      "The Explorer Scout Athletes Activity Badge encourages Scouts to learn and practice different athletic skills and engage in physical activities. They learn about the history, rules, and techniques of various sports, and engage in activities that help them become proficient athletes. This badge fosters a sense of physical fitness, teamwork, and a love of sports.",
  },
  {
    id: 133,
    title: "Explorer Scout Camper Activity Badge",
    shortDescription: "Learn and practice camping skills.",
    picture: images[132],
    longDescription:
      "The Explorer Scout Camper Activity Badge encourages Scouts to learn and practice camping skills and engage in outdoor activities. They learn about shelter building, fire starting, outdoor cooking, and navigation, and engage in activities that help them become proficient campers. This badge fosters a sense of adventure, self-reliance, and a love of the outdoors.",
  },
  {
    id: 134,
    title: "Explorer Scout Caving Activity Badge",
    shortDescription: "Learn and practice caving skills.",
    picture: images[133],
    longDescription:
      "The Explorer Scout Caving Activity Badge encourages Scouts to learn and practice caving skills and engage in outdoor exploration. They learn about safety procedures, equipment, and techniques for caving, and engage in activities that help them become proficient in this activity. This badge fosters a sense of adventure, physical fitness, and a love of outdoor exploration.",
  },
  {
    id: 135,
    title: "Explorer Scout Climber Activity Badge",
    shortDescription: "Learn and practice rock climbing skills.",
    picture: images[134],
    longDescription:
      "The Explorer Scout Climber Activity Badge encourages Scouts to learn and practice rock climbing skills and engage in outdoor activities. They learn about safety procedures, equipment, and techniques for climbing, and engage in activities that help them become proficient climbers. This badge fosters a sense of adventure, physical fitness, and a love of outdoor exploration.",
  },
  {
    id: 136,
    title: "Explorer Scout Creative Arts Activity Badge",
    shortDescription: "Learn and practice creative arts skills.",
    picture: images[135],
    longDescription:
      "The Explorer Scout Creative Arts Activity Badge encourages Scouts to develop their creative skills and express themselves through different forms of art. They learn about different art genres, such as painting, sculpture, and photography, and engage in activities that help them become proficient artists. This badge fosters a sense of creativity, self-expression, and a love of the arts.",
  },
  {
    id: 137,
    title: "Explorer Scout Global Issues Activity Badge",
    shortDescription: "Learn about global issues and take action.",
    picture: images[136],
    longDescription:
      "The Explorer Scout Global Issues Activity Badge encourages Scouts to learn about global issues, such as poverty, inequality, and climate change, and take action to address these issues in their communities. They learn about the causes and effects of these issues, as well as strategies for effecting change, and engage in activities that help them become effective advocates for global issues. This badge fosters a sense of social responsibility, leadership, and a commitment to making a positive impact in the world.",
  },
  {
    id: 138,
    title: "Explorer Scout Hill Walker Activity Badge",
    shortDescription: "Learn and practice hill walking skills.",
    picture: images[137],
    longDescription:
      "The Explorer Scout Hill Walker Activity Badge encourages Scouts to learn and practice hill walking skills and engage in outdoor exploration. They learn about safety procedures, equipment, and techniques for hill walking, and engage in activities that help them become proficient hill walkers. This badge fosters a sense of adventure, physical fitness, and a love of outdoor exploration.",
  },
  {
    id: 139,
    title: "Explorer Scout International Activity Badge",
    shortDescription: "Learn about different cultures and customs.",
    picture: images[138],
    longDescription:
      "The Explorer Scout International Activity Badge encourages Scouts to learn about different cultures and customs from around the world. They learn about the history, traditions, and practices of different countries, as well as strategies for effective communication and collaboration across cultures. This badge fosters a sense of curiosity, tolerance, and a deeper understanding of the diversity of the world.",
  },
  {
    id: 140,
    title: "Explorer Scout Leadership Activity Badge (Army)",
    shortDescription: "Learn and practice leadership skills.",
    picture: images[139],
    longDescription:
      "The Explorer Scout Leadership Activity Badge (Army) encourages Scouts to develop leadership skills and practice them in a military context. They learn about leadership styles, effective communication, and decision-making, and engage in activities that help them become effective leaders. This badge fosters a sense of responsibility, discipline, and a commitment to making a positive impact as a leader.",
  },
  {
    id: 141,
    title: "Explorer Scout Media Relations and Marketing Activity Badge",
    shortDescription: "Learn about media relations and marketing strategies.",
    picture: images[140],
    longDescription:
      "The Explorer Scout Media Relations and Marketing Activity Badge encourages Scouts to learn about media relations and marketing strategies and engage in activities that help them become effective communicators and marketers. They learn about different media platforms, such as social media, and engage in activities that help them develop effective marketing strategies. This badge fosters a sense of creativity, effective communication, and a deeper understanding of media relations and marketing.",
  },
  {
    id: 142,
    title: "Explorer Scout Motor Sports Activity Badge",
    shortDescription: "Learn and practice motor sports skills.",
    picture: images[141],
    longDescription:
      "The Explorer Scout Motor Sports Activity Badge encourages Scouts to learn and practice different motor sports skills and engage in activities that help them become proficient drivers and riders. They learn about safety procedures, equipment, and techniques for different motor sports, such as karting and motocross, and engage in activities that help them become effective drivers and riders. This badge fosters a sense of adventure, physical fitness, and a love of motor sports.",
  },
  {
    id: 143,
    title: "Explorer Scout Mountain Biking Activity Badge",
    shortDescription: "Learn and practice mountain biking skills.",
    picture: images[142],
    longDescription:
      "The Explorer Scout Mountain Biking Activity Badge encourages Scouts to learn and practice different mountain biking skills and engage in outdoor exploration. They learn about safety procedures, equipment, and techniques for mountain biking, and engage in activities that help them become proficient mountain bikers. This badge fosters a sense of adventure, physical fitness, and a love of outdoor exploration.",
  },
  {
    id: 144,
    title: "Explorer Scout Nautical Lifesaver Activity Badge",
    shortDescription: "Learn and practice nautical lifesaving skills.",
    picture: images[143],
    longDescription:
      "The Explorer Scout Nautical Lifesaver Activity Badge encourages Scouts to learn and practice different nautical lifesaving skills and engage in water-based activities. They learn about safety procedures, equipment, and techniques for nautical lifesaving, and engage in activities that help them become proficient nautical lifesavers. This badge fosters a sense of adventure, physical fitness, and a commitment to safety and rescue in water-based environments.",
  },
  {
    id: 145,
    title: "Explorer Scout Chef Activity Badge",
    shortDescription: "Learn and practice cooking skills.",
    picture: images[144],
    longDescription:
      "The Explorer Scout Chef Activity Badge encourages Scouts to learn and practice cooking skills and engage in culinary exploration. They learn about different cuisines, ingredients, and cooking techniques, and engage in activities that help them become proficient chefs. This badge fosters a sense of creativity, self-expression, and a love of food.",
  },
  {
    id: 146,
    title: "Explorer Scout Naturalist Activity Badge",
    shortDescription: "Learn about nature and ecology.",
    picture: images[145],
    longDescription:
      "The Explorer Scout Naturalist Activity Badge encourages Scouts to learn about nature and ecology and engage in activities that help them become effective stewards of the environment. They learn about different ecosystems, animal and plant species, and environmental issues, and engage in activities that help them appreciate and protect the natural world. This badge fosters a sense of environmental awareness, conservation, and a love of nature.",
  },
  {
    id: 147,
    title: "Explorer Scout Performing Arts Activity Badge",
    shortDescription: "Learn and practice performing arts skills.",
    picture: images[146],
    longDescription:
      "The Explorer Scout Performing Arts Activity Badge encourages Scouts to learn and practice different performing arts skills, such as singing, dancing, and acting, and engage in creative expression. They learn about different performance genres and engage in activities that help them become proficient performers. This badge fosters a sense of creativity, self-expression, and a love of the arts.",
  },
  {
    id: 148,
    title: "Explorer Scout Physical Recreation Activity Badge",
    shortDescription: "Learn and practice physical fitness skills.",
    picture: images[147],
    longDescription:
      "The Explorer Scout Physical Recreation Activity Badge encourages Scouts to learn and practice different physical fitness skills, such as running, swimming, and weightlifting, and engage in activities that help them become physically fit. They learn about different fitness training techniques and engage in activities that help them become proficient in physical fitness. This badge fosters a sense of physical fitness, self-improvement, and a love of healthy living.",
  },
  {
    id: 149,
    title: "Explorer Scout Pioneer Activity Badge",
    shortDescription: "Learn and practice pioneering skills.",
    picture: images[148],
    longDescription:
      "The Explorer Scout Pioneer Activity Badge encourages Scouts to learn and practice pioneering skills and engage in creative building projects. They learn about different pioneering techniques and equipment, such as knots and lashings, and engage in activities that help them become proficient pioneers. This badge fosters a sense of creativity, self-reliance, and a love of building.",
  },
  {
    id: 150,
    title: "Explorer Scout Racquet Sports Activity Badge",
    shortDescription: "Learn and practice racquet sports skills.",
    picture: images[149],
    longDescription:
      "The Explorer Scout Racquet Sports Activity Badge encourages Scouts to learn and practice different racquet sports skills, such as tennis, badminton, and squash, and engage in physical fitness activities. They learn about different racquet sports techniques and equipment and engage in activities that help them become proficient racquet sports players. This badge fosters a sense of physical fitness, self-improvement, and a love of racquet sports.",
  },
  {
    id: 151,
    title: "Explorer Scout Science and Technology Activity Badge",
    shortDescription: "Learn and practice science and technology skills.",
    picture: images[150],
    longDescription:
      "The Explorer Scout Science and Technology Activity Badge encourages Scouts to learn and practice different science and technology skills, such as coding, electronics, and robotics, and engage in creative problem-solving. They learn about different scientific principles and engage in activities that help them become proficient in science and technology. This badge fosters a sense of creativity, innovation, and a love of science and technology.",
  },
  {
    id: 152,
    title: "Explorer Scout Street Sports Activity Badge",
    shortDescription: "Learn and practice street sports skills.",
    picture: images[151],
    longDescription:
      "The Explorer Scout Street Sports Activity Badge encourages Scouts to learn and practice different street sports skills, such as skateboarding, BMX biking, and parkour, and engage in physical fitness activities. They learn about different street sports techniques and equipment and engage in activities that help them become proficient street sports athletes. This badge fosters a sense of physical fitness, self-expression, and a love of street sports.",
  },
  {
    id: 153,
    title: "Explorer Scout Survival Skills Activity Badge",
    shortDescription: "Learn and practice survival skills.",
    picture: images[152],
    longDescription:
      "The Explorer Scout Survival Skills Activity Badge encourages Scouts to learn and practice different survival skills, such as building shelters, starting fires, and finding food and water in the wilderness. They learn about different survival techniques and engage in activities that help them become proficient in survival skills. This badge fosters a sense of self-reliance, resourcefulness, and a love of the outdoors.",
  },
  {
    id: 154,
    title: "Explorer Scout Water Activities Activity Badge",
    shortDescription: "Learn and practice water activities skills.",
    picture: images[153],
    longDescription:
      "The Explorer Scout Water Activities Activity Badge encourages Scouts to learn and practice different water activities skills, such as swimming, canoeing, and sailing, and engage in physical fitness activities. They learn about different water activities techniques and equipment and engage in activities that help them become proficient in water activities. This badge fosters a sense of physical fitness, self-improvement, and a love of water activities.",
  },
  {
    id: 155,
    title: "Cub Scout Collector Activity Badge",
    shortDescription: "Learn and practice collecting skills.",
    picture: images[154],
    longDescription:
      "The Cub Scout Collector Activity Badge encourages Cubs to learn and practice collecting skills and engage in creative exploration. They learn about different collecting techniques and engage in activities that help them become proficient collectors. This badge fosters a sense of creativity, self-expression, and a love of collecting.",
  },
  {
    id: 156,
    title: "Beaver Scout Animal Friend Activity Badge",
    shortDescription: "Learn about animal welfare and care.",
    picture: images[155],
    longDescription:
      "The Beaver Scout Animal Friend Activity Badge encourages Beavers to learn about animal welfare and care and engage in activities that help them become effective animal friends. They learn about different animal species and habitats, and engage in activities that help them appreciate and protect animals. This badge fosters a sense of environmental awareness, conservation, and a love of animals.",
  },
];

export default badges;
