const users = [
  {
    "name": "Aarav Mehta",
    "username": "@aarav_creates",
    "post_image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    "description": "Exploring new perspectives through my lens 📸✨",
    "profile_pic": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "name": "Sofia Sharma",
    "username": "@sofia_inspired",
    "post_image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "description": "Every sunset brings a new dawn 🌅",
    "profile_pic": "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    "name": "Kabir Singh",
    "username": "@kabir_vibes",
    "post_image": "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    "description": "Good food, better company 🍕👫",
    "profile_pic": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "name": "Riya Patel",
    "username": "@riya_journeys",
    "post_image": "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    "description": "Lost in the beauty of the mountains 🏔️💭",
    "profile_pic": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "name": "Devansh Khanna",
    "username": "@dev_code",
    "post_image": "https://images.unsplash.com/photo-1522204501921-1c07c1e93d92",
    "description": "Code. Coffee. Repeat. ☕💻",
    "profile_pic": "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    "name": "Ananya Gupta",
    "username": "@ananya_writes",
    "post_image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "description": "Words create worlds ✨📖",
    "profile_pic": "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    "name": "Vikram Rao",
    "username": "@vikram_travels",
    "post_image": "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    "description": "Chasing horizons, one city at a time 🌍",
    "profile_pic": "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    "name": "Maya Iyer",
    "username": "@maya.art",
    "post_image": "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    "description": "Every color tells a story 🎨💫",
    "profile_pic": "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    "name": "Rohan Verma",
    "username": "@rohan_clicks",
    "post_image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "description": "Moments frozen forever 📷",
    "profile_pic": "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    "name": "Ishita Kapoor",
    "username": "@ishita_style",
    "post_image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "description": "Confidence is my favorite accessory 💄💃",
    "profile_pic": "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    "name": "Aditya Roy",
    "username": "@aditya_music",
    "post_image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    "description": "When words fail, music speaks 🎶",
    "profile_pic": "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    "name": "Tara Deshmukh",
    "username": "@tara_moves",
    "post_image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "description": "Dance like nobody’s watching 💃🔥",
    "profile_pic": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "name": "Ayaan Sheikh",
    "username": "@ayaan_life",
    "post_image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "description": "Adventure fuels my soul 🏕️",
    "profile_pic": "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    "name": "Nisha Agarwal",
    "username": "@nisha_reads",
    "post_image": "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    "description": "Lost in another chapter 📚✨",
    "profile_pic": "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    "name": "Karan Bhatia",
    "username": "@karan_thinks",
    "post_image": "https://images.unsplash.com/photo-1515191107209-c28698631303",
    "description": "Deep thoughts & chill vibes 🧠☕",
    "profile_pic": "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    "name": "Aditi Nair",
    "username": "@aditi_smiles",
    "post_image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "description": "Smiles are contagious 😄🌸",
    "profile_pic": "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    "name": "Rahul Jain",
    "username": "@rahul_runs",
    "post_image": "https://images.unsplash.com/photo-1535909339361-9b66b2b1f3f1",
    "description": "Run wild, stay free 🏃‍♂️💨",
    "profile_pic": "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    "name": "Priya Sinha",
    "username": "@priya_delights",
    "post_image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "description": "Serving happiness, one dish at a time 🍰❤️",
    "profile_pic": "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    "name": "Manav Joshi",
    "username": "@manav_tech",
    "post_image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "description": "Building the future with code 👨‍💻🚀",
    "profile_pic": "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    "name": "Simran Kaur",
    "username": "@simran_creates",
    "post_image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "description": "Creating art from chaos 🖌️🌈",
    "profile_pic": "https://randomuser.me/api/portraits/women/25.jpg"
  }
]

export const setLocalStorage= ()=>{
    localStorage.setItem("users",JSON.stringify(users))
}

export const getLocalStorage = ()=>{
    const user = JSON.parse(localStorage.getItem("users"))
    return users || []
}