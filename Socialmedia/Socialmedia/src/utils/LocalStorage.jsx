const users = [
  {
    "name": "Neha Kapoor",
    "username": "@neha_dreamer",
    "email": "neha.kapoor@example.com",
    "password": "neha123",
    "post_image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    "description": "Dreamer by night, achiever by day ✨. Turning ideas into reality one step at a time.",
    "profile_pic": "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    "name": "Vikram Malhotra",
    "username": "@vikram_techie",
    "email": "vikram.malhotra@example.com",
    "password": "vikram123",
    "post_image": "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
    "description": "Code | Create | Innovate 💻. Building the future one line of code at a time.",
    "profile_pic": "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    "name": "Ananya Reddy",
    "username": "@ananya_reader",
    "email": "ananya.reddy@example.com",
    "password": "ananya123",
    "post_image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    "description": "Lost in the world of books and stories 📚. Every book is a new adventure waiting to be explored.",
    "profile_pic": "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    "name": "Rohan Iyer",
    "username": "@rohan_music",
    "email": "rohan.iyer@example.com",
    "password": "rohan123",
    "post_image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    "description": "Strumming emotions through strings 🎸. Music is the language of my soul.",
    "profile_pic": "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    "name": "Pooja Gupta",
    "username": "@pooja_yogi",
    "email": "pooja.gupta@example.com",
    "password": "pooja123",
    "post_image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    "description": "Finding peace in every pose 🧘‍♀️. Yoga is my journey to inner harmony.",
    "profile_pic": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "name": "Aditya Choudhary",
    "username": "@aditya_gamer",
    "email": "aditya.choudhary@example.com",
    "password": "aditya123",
    "post_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    "description": "Leveling up in life and games 🎮. Every challenge is an opportunity to grow.",
    "profile_pic": "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    "name": "Meera Srinivasan",
    "username": "@meera_artist",
    "email": "meera.srinivasan@example.com",
    "password": "meera123",
    "post_image": "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    "description": "Painting my emotions on canvas 🎨. Art speaks where words fail.",
    "profile_pic": "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    "name": "Karan Mehra",
    "username": "@karan_chef",
    "email": "karan.mehra@example.com",
    "password": "karan123",
    "post_image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "description": "Creating magic in the kitchen 👨‍🍳. Every dish tells a delicious story.",
    "profile_pic": "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    "name": "Divya Nair",
    "username": "@divya_dancer",
    "email": "divya.nair@example.com",
    "password": "divya123",
    "post_image": "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea",
    "description": "Dancing to the rhythm of life 💃. Movement is my meditation.",
    "profile_pic": "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    "name": "Siddharth Rao",
    "username": "@siddharth_writer",
    "email": "siddharth.rao@example.com",
    "password": "siddharth123",
    "post_image": "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    "description": "Weaving worlds with words ✍️. Every story begins with a single thought.",
    "profile_pic": "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    "name": "Tanvi Desai",
    "username": "@tanvi_gardener",
    "email": "tanvi.desai@example.com",
    "password": "tanvi123",
    "post_image": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    "description": "Growing happiness, one plant at a time 🌱. Nature's beauty never fails to amaze me.",
    "profile_pic": "https://randomuser.me/api/portraits/women/27.jpg"
  },
  {
    "name": "Rohit Banerjee",
    "username": "@rohit_runner",
    "email": "rohit.banerjee@example.com",
    "password": "rohit123",
    "post_image": "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    "description": "Running towards my goals 🏃‍♂️. Every mile tells a story of perseverance.",
    "profile_pic": "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    "name": "Anjali Menon",
    "username": "@anjali_poet",
    "email": "anjali.menon@example.com",
    "password": "anjali123",
    "post_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    "description": "Painting emotions with poetry 📝. Words have the power to heal and inspire.",
    "profile_pic": "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    "name": "Varun Pillai",
    "username": "@varun_astronomy",
    "email": "varun.pillai@example.com",
    "password": "varun123",
    "post_image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06",
    "description": "Exploring the universe through my telescope 🔭. The cosmos reminds us how small we are yet how connected.",
    "profile_pic": "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    "name": "Nisha Thakur",
    "username": "@nisha_baker",
    "email": "nisha.thakur@example.com",
    "password": "nisha123",
    "post_image": "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0",
    "description": "Baking sweet memories 🍰. Every recipe is made with love and precision.",
    "profile_pic": "https://randomuser.me/api/portraits/women/31.jpg"
  },
  {
    "name": "Amit Trivedi",
    "username": "@amit_entrepreneur",
    "email": "amit.trivedi@example.com",
    "password": "amit123",
    "post_image": "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    "description": "Building dreams into reality 💼. Innovation drives progress and change.",
    "profile_pic": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Shreya Basu",
    "username": "@shreya_volunteer",
    "email": "shreya.basu@example.com",
    "password": "shreya123",
    "post_image": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
    "description": "Spreading kindness and hope ❤️. Small acts can create big changes in the world.",
    "profile_pic": "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    "name": "Rajeev Nambiar",
    "username": "@rajeev_cyclist",
    "email": "rajeev.nambiar@example.com",
    "password": "rajeev123",
    "post_image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    "description": "Pedaling through life's adventures 🚴‍♂️. Two wheels, endless possibilities.",
    "profile_pic": "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    "name": "Ishaani Chatterjee",
    "username": "@ishaani_meditator",
    "email": "ishaani.chatterjee@example.com",
    "password": "ishaani123",
    "post_image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    "description": "Finding stillness in chaos 🕉️. Meditation is my anchor in turbulent times.",
    "profile_pic": "https://randomuser.me/api/portraits/women/35.jpg"
  },
  {
    "name": "Deepak Sharma",
    "username": "@deepak_photographer",
    "email": "deepak.sharma@example.com",
    "password": "deepak123",
    "post_image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    "description": "Capturing moments that tell stories 📷. Every click freezes time and emotion.",
    "profile_pic": "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    "name": "Kavya Rajput",
    "username": "@kavya_scientist",
    "email": "kavya.rajput@example.com",
    "password": "kavya123",
    "post_image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    "description": "Unraveling nature's mysteries 🔬. Science is the poetry of reality.",
    "profile_pic": "https://randomuser.me/api/portraits/women/37.jpg"
  },
  {
    "name": "Nitin Agarwal",
    "username": "@nitin_investor",
    "email": "nitin.agarwal@example.com",
    "password": "nitin123",
    "post_image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    "description": "Navigating the world of finance and investments 📈. Smart decisions today shape tomorrow's success.",
    "profile_pic": "https://randomuser.me/api/portraits/men/38.jpg"
  },
  {
    "name": "Maya Krishnan",
    "username": "@maya_fashion",
    "email": "maya.krishnan@example.com",
    "password": "maya123",
    "post_image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    "description": "Expressing myself through style 👗. Fashion is wearable art that tells your story.",
    "profile_pic": "https://randomuser.me/api/portraits/women/39.jpg"
  },
  {
    "name": "Pranav Joshi",
    "username": "@pranav_surfer",
    "email": "pranav.joshi@example.com",
    "password": "pranav123",
    "post_image": "https://images.unsplash.com/photo-1502680390469-be75c86b636f",
    "description": "Riding waves and chasing horizons 🏄‍♂️. The ocean teaches us to go with the flow.",
    "profile_pic": "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    "name": "Ritika Sen",
    "username": "@ritika_teacher",
    "email": "ritika.sen@example.com",
    "password": "ritika123",
    "post_image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    "description": "Shaping young minds, building futures 👩‍🏫. Education is the most powerful weapon to change the world.",
    "profile_pic": "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    "name": "Sanjay Mishra",
    "username": "@sanjay_coffee",
    "email": "sanjay.mishra@example.com",
    "password": "sanjay123",
    "post_image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    "description": "Brewing perfection in every cup ☕. Coffee is more than a drink, it's an experience.",
    "profile_pic": "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    "name": "Aditi Kapoor",
    "username": "@aditi_traveler",
    "email": "aditi.kapoor@example.com",
    "password": "aditi123",
    "post_image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    "description": "Collecting memories across continents ✈️. The world is a book, and those who don't travel read only one page.",
    "profile_pic": "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    "name": "Manish Reddy",
    "username": "@manish_filmmaker",
    "email": "manish.reddy@example.com",
    "password": "manish123",
    "post_image": "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    "description": "Telling stories through moving images 🎬. Every frame is a canvas for emotions.",
    "profile_pic": "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    "name": "Sneha Iyer",
    "username": "@sneha_architect",
    "email": "sneha.iyer@example.com",
    "password": "sneha123",
    "post_image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    "description": "Designing spaces that inspire 🏛️. Architecture is frozen music in concrete form.",
    "profile_pic": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "name": "Vishal Chavan",
    "username": "@vishal_minimalist",
    "email": "vishal.chavan@example.com",
    "password": "vishal123",
    "post_image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    "description": "Living with less, experiencing more 🌿. Minimalism is the intentional promotion of what we value most.",
    "profile_pic": "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    "name": "Anika Das",
    "username": "@anika_vegan",
    "email": "anika.das@example.com",
    "password": "anika123",
    "post_image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "description": "Plant-based and thriving 🌱. Good food should nourish both body and soul.",
    "profile_pic": "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    "name": "Rahul Nair",
    "username": "@rahul_woodworker",
    "email": "rahul.nair@example.com",
    "password": "rahul123",
    "post_image": "https://images.unsplash.com/photo-1449257868234-b01c731c7ac4",
    "description": "Creating beauty from timber 🪚. Woodworking connects me to nature's raw materials.",
    "profile_pic": "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    "name": "Priyanka Mehta",
    "username": "@priyanka_activist",
    "email": "priyanka.mehta@example.com",
    "password": "priyanka123",
    "post_image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    "description": "Fighting for a better world 🌍. Change begins with awareness and action.",
    "profile_pic": "https://randomuser.me/api/portraits/women/49.jpg"
  },
  {
    "name": "Abhishek Kumar",
    "username": "@abhishek_comedian",
    "email": "abhishek.kumar@example.com",
    "password": "abhishek123",
    "post_image": "https://images.unsplash.com/photo-1541336032412-2048a678540d",
    "description": "Spreading laughter and joy 😄. Humor is the best medicine for life's challenges.",
    "profile_pic": "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    "name": "Divya Menon",
    "username": "@divya_psychologist",
    "email": "divya.menon@example.com",
    "password": "divya123",
    "post_image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    "description": "Understanding the human mind 🧠. Mental health is just as important as physical health.",
    "profile_pic": "https://randomuser.me/api/portraits/women/51.jpg"
  },
  {
    "name": "Kiran Patel",
    "username": "@kiran_stargazer",
    "email": "kiran.patel@example.com",
    "password": "kiran123",
    "post_image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    "description": "Lost in the cosmic dance of stars ✨. The night sky is nature's greatest show.",
    "profile_pic": "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    "name": "Rina Sharma",
    "username": "@rina_potter",
    "email": "rina.sharma@example.com",
    "password": "rina123",
    "post_image": "https://images.unsplash.com/photo-1574737331253-33ddee7ec6c8",
    "description": "Shaping clay into art 🪴. Pottery teaches patience and the beauty of imperfection.",
    "profile_pic": "https://randomuser.me/api/portraits/women/53.jpg"
  },
  {
    "name": "Suresh Yadav",
    "username": "@suresh_hiker",
    "email": "suresh.yadav@example.com",
    "password": "suresh123",
    "post_image": "https://images.unsplash.com/photo-1551632811-561732d1e306",
    "description": "Conquering peaks and personal limits ⛰️. Mountains call and I must answer.",
    "profile_pic": "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    "name": "Lakshmi Nambiar",
    "username": "@lakshmi_historian",
    "email": "lakshmi.nambiar@example.com",
    "password": "lakshmi123",
    "post_image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    "description": "Uncovering stories from the past 📜. History teaches us about today through yesterday.",
    "profile_pic": "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    "name": "Gaurav Singh",
    "username": "@gaurav_engineer",
    "email": "gaurav.singh@example.com",
    "password": "gaurav123",
    "post_image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    "description": "Building solutions for tomorrow's problems 🔧. Engineering turns ideas into reality.",
    "profile_pic": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "name": "Mona Chatterjee",
    "username": "@mona_birdwatcher",
    "email": "mona.chatterjee@example.com",
    "password": "mona123",
    "post_image": "https://images.unsplash.com/photo-1444464666168-49d633b867af",
    "description": "Observing nature's winged wonders 🐦. Birds teach us freedom and resilience.",
    "profile_pic": "https://randomuser.me/api/portraits/women/57.jpg"
  }
]

export const setLocalStorage = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users))
  }
}

export const getLocalStorage = () => {
  const storedUsers = JSON.parse(localStorage.getItem("users"))
  return storedUsers || []
}