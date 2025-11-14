/* festival data — add or modify objects */
const FESTIVALS = [
  {
    slug: 'phool-dei',
    name: 'Phool Dei',
    state: 'Uttarakhand',
    month: 'March',
    image: 'images/phooldei.png',
    short: 'A spring festival of flowers and blessings.',
    description: 'Phool Dei is a springtime ritual in Uttarakhand where children sing, offer flowers and receive blessings. Traditional songs and floral offerings are central to the festival.',
    howToReach: 'Nearest city: Dehradun. Bus & taxi connections available.',
    audio: ''
  },
  {
    slug: 'bhogali-bihu',
    name: 'Bhogali Bihu',
    state: 'Assam',
    month: 'January',
    image: 'images/bhogali-bihu.jpg',
    short: 'Harvest celebrations with feasts and bonfires.',
    description: 'Bhogali Bihu marks the harvest completion. The festival includes feasting, bonfires and community dances. A great time to experience Assamese rural life.',
    howToReach: 'Nearest city: Guwahati. Regular buses and trains connect to villages.',
    audio: ''
  },
  {
    slug: 'theyyam',
    name: 'Theyyam',
    state: 'Kerala',
    month: 'October',
    image: '',
    short: 'Ancient ritual dance honoring local deities.',
    description: 'Theyyam is a ritual performance where performers embody deities via elaborate makeup and costumes. It is practiced primarily in North Kerala and is a vivid visual spectacle.',
    howToReach: 'Nearest city: Kannur. Local transport and guide recommended.',
    audio: ''
  }
  ,
  {
    slug: 'pola-nagpur',
    name: 'Pola',
    state: 'Maharashtra',
    month: 'September',
  image: 'images/pola1.png',
    short: 'A cattle-worship festival where farmers honor their bulls and oxen.',
    description: 'Pola is a traditional Maharashtrian festival celebrating the contribution of bulls and oxen to farming. Farmers decorate their animals, offer prayers, and parade them through villages. In Nagpur and surrounding districts, the festival is marked with community gatherings and folk songs.',
    howToReach: 'Nearest city: Nagpur. Local buses and taxis available; rural village access may require a short drive.',
    audio: ''
  }
  ,
  {
    slug: 'lohri',
    name: 'Lohri',
    state: 'Punjab',
    month: 'January',
    image: 'images/pola2.png',
    short: 'Winter solstice fire festival celebrating harvest and new beginnings.',
    description: 'Lohri is celebrated on the eve of Makar Sankranti across Punjab. Bonfires are lit, and people gather to burn crops and sweets in the fire as offerings. Folk songs and dances (Giddha and Bhangra) fill the night. A deeply rooted agrarian festival of gratitude and joy.',
    howToReach: 'Nearest city: Amritsar or Ludhiana. Villages around Punjab celebrate with vibrant community gatherings.',
    audio: ''
  }
  ,
  {
    slug: 'hornbill-nagaland',
    name: 'Hornbill Festival',
    state: 'Nagaland',
    month: 'December',
    image: 'images/pola2.png',
    short: 'Indigenous tribal festival celebrating Naga culture, music and crafts.',
    description: 'The Hornbill Festival in Kohima showcases the rich heritage of Naga tribes. Named after the Hornbill bird, a sacred symbol, the festival features tribal dances, indigenous music, warrior ceremonies, and vibrant handicraft markets. A window into Naga traditions and tribal unity.',
    howToReach: 'Nearest city: Kohima. Flights to Dimapur; 2-3 hours by road. Best visited during the festival season.',
    audio: ''
  }
  ,
  {
    slug: 'baisakhi-punjab',
    name: 'Baisakhi',
    state: 'Punjab',
    month: 'April',
    image: 'images/pola2.png',
    short: 'Spring harvest festival marking the new year in Punjab.',
    description: 'Baisakhi celebrates the spring harvest and the Punjabi new year. Farmers celebrate their hard work through vibrant fairs, processions, and the iconic Bhangra dance. Also significant in Sikh history as Guru Gobind Singh founded the Khalsa on Baisakhi. Fields are golden, spirits are high.',
    howToReach: 'Nearest city: Amritsar. Small towns and villages across Punjab host major Baisakhi melas (fairs).',
    audio: ''
  }
  ,
  {
    slug: 'gudi-padwa',
    name: 'Gudi Padwa',
    state: 'Maharashtra',
    month: 'March',
    image: 'images/pola2.png',
    short: 'Marathi new year festival with symbolic pole and traditional sweets.',
    description: 'Gudi Padwa marks the new year in Maharashtra and Karnataka. Homes display a Gudi (a decorated pole) and families celebrate with traditional sweets like puran poli. The festival symbolizes victory and new beginnings. Streets come alive with colorful rangoli and joyous gatherings.',
    howToReach: 'Nearest city: Pune or Bangalore. Celebrate in local neighborhoods or traditional villages.',
    audio: ''
  }
  ,
  {
    slug: 'nav-ratri-garba',
    name: 'Navratri & Garba',
    state: 'Gujarat',
    month: 'September-October',
    image: 'images/pola2.png',
    short: 'Nine nights of goddess worship with folk circle dances.',
    description: 'Navratri in Gujarat celebrates the nine forms of the divine goddess through Garba—a circular dance performed in groups. Women wear colorful traditional attire, and nights are filled with music, dance, and community. Ancient roots in fertility rites and harvest, now a symbol of women\'s strength and togetherness.',
    howToReach: 'Nearest city: Ahmedabad or Vadodara. Garba events held in community grounds and cultural centers across Gujarat.',
    audio: ''
  }
];

