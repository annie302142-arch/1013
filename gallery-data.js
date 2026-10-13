/**
 * ANSEL LIN PHOTOGRAPHY - PORTFOLIO DATA
 * Editorial Curated Photography Works & Projects
 */

const GALLERY_DATA = [
  {
    id: "gal-01",
    title: "凝望之隙",
    titleEn: "Silence in Gaze",
    category: "portrait",
    categoryLabel: "人像攝影 · PORTRAIT",
    year: "2025",
    location: "Taipei, Taiwan",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "午後三點，窗櫺落下的側光如刀鋒般切過面頰。在沒有任何補光燈的自然光陰影中，眼神褪去了一切偽裝，只留下最純粹的思緒殘影。",
    exif: {
      camera: "Leica M11",
      lens: "Summilux-M 50mm f/1.4 ASPH",
      aperture: "f/1.6",
      shutter: "1/400s",
      iso: "ISO 100",
      focalLength: "50mm"
    }
  },
  {
    id: "gal-02",
    title: "暴風雪的序幕",
    titleEn: "Overture to the Blizzard",
    category: "landscape",
    categoryLabel: "風景攝影 · LANDSCAPE",
    year: "2024",
    location: "Highlands, Iceland",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-8",
    story: "零下十五度的冰島高地，濃霧在玄武岩山脊間湧動。站在寂靜無聲的荒野邊緣，彷彿能聽見大地心跳與萬年冰川消融的微弱聲響。",
    exif: {
      camera: "Hasselblad 907X 50C",
      lens: "XCD 45mm f/4 P",
      aperture: "f/8.0",
      shutter: "1/60s",
      iso: "ISO 200",
      focalLength: "45mm"
    }
  },
  {
    id: "gal-03",
    title: "雨夜新宿·藍調",
    titleEn: "Neon Veins, Shinjuku",
    category: "street",
    categoryLabel: "街頭攝影 · STREET",
    year: "2024",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "初冬驟雨洗刷著東京柏油路面，車尾紅燈與霓虹廣告牌在雨窪中交融成流動的抽象畫。穿著風衣的行人匆匆走過，是城市中最美麗的孤獨孤島。",
    exif: {
      camera: "Leica M11",
      lens: "Summicron-M 35mm f/2 ASPH",
      aperture: "f/2.0",
      shutter: "1/125s",
      iso: "ISO 800",
      focalLength: "35mm"
    }
  },
  {
    id: "gal-04",
    title: "陶藝師的指紋",
    titleEn: "Memory in Clay",
    category: "documentary",
    categoryLabel: "生活紀實 · DOCUMENTARY",
    year: "2024",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[4/5]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "京都近郊百年窯場內，師傅雙手沾滿泥漿，在轆轤旋轉中注入生命。光線穿過灰塵漫布的木格窗，每一道手感紋理都是時光的證明。",
    exif: {
      camera: "Leica MP (35mm Film)",
      lens: "Summilux-M 50mm f/1.4",
      aperture: "f/2.8",
      shutter: "1/250s",
      iso: "Kodak Tri-X 400",
      focalLength: "50mm"
    }
  },
  {
    id: "gal-05",
    title: "微光輪廓",
    titleEn: "Chiaroscuro Silhouette",
    category: "portrait",
    categoryLabel: "人像攝影 · PORTRAIT",
    year: "2025",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "向文藝復興明暗對照法（Chiaroscuro）致敬的黑白人像。光線勾勒出鎖骨與頸線的起伏，黑色背景吞噬了多餘細節，沉澱出如雕塑般的永恆感。",
    exif: {
      camera: "Leica M11-Monochrom",
      lens: "Noctilux-M 75mm f/1.25 ASPH",
      aperture: "f/1.4",
      shutter: "1/500s",
      iso: "ISO 125",
      focalLength: "75mm"
    }
  },
  {
    id: "gal-06",
    title: "霧隱群峰",
    titleEn: "Peaks in Mist",
    category: "landscape",
    categoryLabel: "風景攝影 · LANDSCAPE",
    year: "2024",
    location: "Dolomites, Italy",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "黎明破曉前十分鐘，白雲如潮水般湧入白雲石山谷。在巨峰的沉默威嚴面前，人類的所有焦慮都顯得微不足道。",
    exif: {
      camera: "Hasselblad 907X 50C",
      lens: "XCD 90mm f/3.2",
      aperture: "f/11",
      shutter: "1/15s",
      iso: "ISO 100",
      focalLength: "90mm"
    }
  },
  {
    id: "gal-07",
    title: "朝陽晨霧森境",
    titleEn: "Sanctuary of Light",
    category: "landscape",
    categoryLabel: "風景攝影 · LANDSCAPE",
    year: "2025",
    location: "Alishan, Taiwan",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 md:col-span-12 lg:col-span-8",
    story: "清晨六點，阿里山檜木林迎來第一縷金光（丁達爾效應）。光束如同大自然的管風琴弦，將薄霧切成一片片神聖而溫柔的金紗。",
    exif: {
      camera: "Leica SL2",
      lens: "Vario-Elmarit-SL 24-70mm f/2.8 ASPH",
      aperture: "f/5.6",
      shutter: "1/160s",
      iso: "ISO 200",
      focalLength: "38mm"
    }
  },
  {
    id: "gal-08",
    title: "暮色沉思",
    titleEn: "The Contemplative Mind",
    category: "portrait",
    categoryLabel: "人像攝影 · PORTRAIT",
    year: "2024",
    location: "Taipei, Taiwan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "在自然光的柔和過渡下，捕捉友人於咖啡館靠窗長桌沉思的一瞬。沒有過度修飾的皮膚紋理，流露歲月沈澱下的溫和與篤定。",
    exif: {
      camera: "Leica M11",
      lens: "Summilux-M 50mm f/1.4 ASPH",
      aperture: "f/2.0",
      shutter: "1/320s",
      iso: "ISO 250",
      focalLength: "50mm"
    }
  },
  {
    id: "gal-09",
    title: "雨中漫步者",
    titleEn: "Solitary Crossing",
    category: "street",
    categoryLabel: "街頭攝影 · STREET",
    year: "2024",
    location: "Shibuya, Tokyo",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[4/5]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "深夜涉谷的十字路口，雨傘撐起的微型個人世界。透過減光鏡與慢速快門，將喧囂的人潮化為朦朧光流，只留下一抹逆光中的深邃剪影。",
    exif: {
      camera: "Leica M11",
      lens: "Elmarit-M 28mm f/2.8 ASPH",
      aperture: "f/2.8",
      shutter: "1/45s",
      iso: "ISO 1600",
      focalLength: "28mm"
    }
  },
  {
    id: "gal-10",
    title: "午後茶寮之靜",
    titleEn: "Tea Master's Interval",
    category: "documentary",
    categoryLabel: "生活紀實 · DOCUMENTARY",
    year: "2023",
    location: "Uji, Kyoto",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[4/3]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "宇治川畔的百年茶室，水沸時升騰的白煙在榻榻米上映出柔和陰影。紀錄茶人在沖泡一碗抹茶前短暫的屏息與專注。",
    exif: {
      camera: "Hasselblad 907X 50C",
      lens: "XCD 45mm f/4 P",
      aperture: "f/4.0",
      shutter: "1/100s",
      iso: "ISO 400",
      focalLength: "45mm"
    }
  },
  {
    id: "gal-11",
    title: "晨曦湖泊倒影",
    titleEn: "Mirror of Stillness",
    category: "landscape",
    categoryLabel: "風景攝影 · LANDSCAPE",
    year: "2024",
    location: "Hallstatt, Austria",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "沒有一絲風的清晨，湖面平靜如水銀。一葉小舟悄然劃破鏡面，水波推開薄霧，將阿爾卑斯的蒼翠倒影揉碎成層層詩意。",
    exif: {
      camera: "Leica SL2",
      lens: "APO-Summicron-SL 35mm f/2 ASPH",
      aperture: "f/8.0",
      shutter: "1/80s",
      iso: "ISO 100",
      focalLength: "35mm"
    }
  },
  {
    id: "gal-12",
    title: "暗房之光",
    titleEn: "Architecture of Shadow",
    category: "street",
    categoryLabel: "街頭攝影 · STREET",
    year: "2024",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "包浩斯風格美術館內的階梯轉角。午後斜陽在粗糙混凝土牆面上劃出俐落的斜對角幾何，極簡至極，光影即是空間唯一的裝飾。",
    exif: {
      camera: "Leica M11",
      lens: "Super-Elmar-M 21mm f/3.4 ASPH",
      aperture: "f/5.6",
      shutter: "1/320s",
      iso: "ISO 200",
      focalLength: "21mm"
    }
  },
  {
    id: "gal-13",
    title: "旅人的地平線",
    titleEn: "The Solitary Pilgrim",
    category: "documentary",
    categoryLabel: "生活紀實 · DOCUMENTARY",
    year: "2024",
    location: "Scottish Highlands",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/9]",
    gridSpan: "col-span-12 md:col-span-12 lg:col-span-8",
    story: "背著行囊的孤獨行者在廣袤石南花原中駐足。天與地在遠方交接為一道低沉的灰線，每一步丈量都是對自我的深刻對話。",
    exif: {
      camera: "Leica M11",
      lens: "Summilux-M 35mm f/1.4 ASPH",
      aperture: "f/4.0",
      shutter: "1/250s",
      iso: "ISO 200",
      focalLength: "35mm"
    }
  },
  {
    id: "gal-14",
    title: "深邃側顏",
    titleEn: "Profile of Identity",
    category: "portrait",
    categoryLabel: "人像攝影 · PORTRAIT",
    year: "2025",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "為日本現代舞者拍攝的排練空檔肖像。深邃的輪廓在逆光下宛若黑曜石浮雕，眼神中燃燒著對身體極限與舞步的偏執狂想。",
    exif: {
      camera: "Leica M11-Monochrom",
      lens: "APO-Summicron-M 50mm f/2 ASPH",
      aperture: "f/2.0",
      shutter: "1/640s",
      iso: "ISO 160",
      focalLength: "50mm"
    }
  },
  {
    id: "gal-15",
    title: "大都會幾何線條",
    titleEn: "Canyon of Glass",
    category: "street",
    categoryLabel: "街頭攝影 · STREET",
    year: "2024",
    location: "New York City",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    aspect: "aspect-[3/4]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "漫步曼哈頓高樓巨峽之間，玻璃幕牆將夕陽反照為縱橫交錯的金色網格。仰望視角強化了現代文明的崇高感與渺小感的衝突。",
    exif: {
      camera: "Leica SL2",
      lens: "Super-Vario-Elmar-SL 16-35mm f/3.5-4.5 ASPH",
      aperture: "f/6.3",
      shutter: "1/200s",
      iso: "ISO 320",
      focalLength: "18mm"
    }
  },
  {
    id: "gal-16",
    title: "海平面落日晚鐘",
    titleEn: "Tide of Gold",
    category: "documentary",
    categoryLabel: "生活紀實 · DOCUMENTARY",
    year: "2024",
    location: "Kenting, Taiwan",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/10]",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    story: "墾丁後壁湖海角，老漁夫收整漁網後的片刻休憩。暮色將海面染成無垠熔金，在日常勞動的平凡剪影中，展現對海洋最敬虔的敬畏。",
    exif: {
      camera: "Leica M11",
      lens: "Summilux-M 35mm f/1.4 ASPH",
      aperture: "f/2.8",
      shutter: "1/500s",
      iso: "ISO 100",
      focalLength: "35mm"
    }
  }
];

const PROJECTS_DATA = [
  {
    id: "proj-01",
    number: "01",
    title: "荒野迴響",
    titleEn: "Echoes of Silence",
    theme: "冰島極北與高地寂靜風貌 · Landscape & Solitude",
    year: "2024 — 2025",
    location: "South Coast & Highlands, Iceland",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85",
    intro: "在零度以下的極北之地，天地只剩下風聲與玄武岩黑沙。這組專案紀錄了冰川消融的紋理、晨曦穿透暴風雪的冷藍光線，探索孤獨與時間永恆的本質。黑與白不再只是色溫，而是大自然最宏大而冷靜的詩句。",
    curatorNote: "歷時三週深入冰島無人高地，使用 Hasselblad 中片幅相機紀錄地貌在萬年間的細微演變。摒棄明豔色彩，以低飽和與黑白調性，捕捉大地在人類涉足前的原始寧謐。",
    client: "Editorial for CEREAL Magazine & Solo Exhibition at Leica Gallery",
    series: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        caption: "霧與冰川前緣 · Glacial Moraine in Mist"
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
        caption: "高地黑土之脈 · Veins of Volcanic Earth"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        caption: "玄武岩尖峰與暴風雪 · Basalt Spire in Blizzard"
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85",
        caption: "極夜星野孤寂 · Celestial Emptiness"
      }
    ]
  },
  {
    id: "proj-02",
    number: "02",
    title: "日光陰翳",
    titleEn: "In Praise of Shadows",
    theme: "京都古寺與現代建築光影 · Architecture & Form",
    year: "2024",
    location: "Kyoto & Naoshima, Japan",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
    intro: "取材自日本文學巨擘谷崎潤一郎《陰翳禮讚》，穿梭於京都古寺木格柵與直島現代清水模之間。透過深邃的暗部與濾過的柔和斜光，探索東方空間哲學中「美非存在於物體，而存在於陰翳的波紋與明暗之中」的意境。",
    curatorNote: "系列聚焦於室內無直射光環境，完全依賴反射漫射光營造沉靜感。每一處陰影皆非死黑，而是蘊藏著豐富灰階與空氣質感的微光溫床。",
    client: "Kyoto Architecture Biennial & Monocle Feature",
    series: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
        caption: "木格柵斜影 · Lattice & Grazing Noon"
      },
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
        caption: "古茶寮之隙光 · Ray Through Old Shoji"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        caption: "清水混凝土幾何 · Concrete Geometry"
      },
      {
        url: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1400&q=85",
        caption: "工藝的暗室冥想 · Hands in Quiet Light"
      }
    ]
  },
  {
    id: "proj-03",
    number: "03",
    title: "台北街角游標",
    titleEn: "Urban Solitude",
    theme: "城市雨夜與霓虹孤獨身影 · Street & Cinematic",
    year: "2023 — 2024",
    location: "Taipei, Taiwan",
    coverImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1800&q=85",
    intro: "紀錄台北盆地夜幕降臨後的濕潤街角與流動光影。在午夜騎樓雨絲、末班捷運車廂及小巷麵攤的蒸氣中，定格每一位擦肩而過的過客那短暫卻真實的凝視，猶如一部未上映的新浪潮黑色電影。",
    curatorNote: "採用經典旁軸相機 35mm 定焦鏡頭近距離跟拍，刻意保留高感光度底片顆粒感，以高對比度的冷暖交融色溫，呈現繁華都會背後無處安放的孤獨心靈。",
    client: "Taipei Arts Festival Commission & PX3 Gold Award",
    series: [
      {
        url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85",
        caption: "霓虹反光街角 · Rain Reflections"
      },
      {
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85",
        caption: "末班車的傘客 · Umbrella in Transit"
      },
      {
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
        caption: "垂直迷宮 · Vertical Labyrinth"
      },
      {
        url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=85",
        caption: "夜行十字交界 · Nocturnal Crossroad"
      }
    ]
  },
  {
    id: "proj-04",
    number: "04",
    title: "靈魂面相",
    titleEn: "Monologue",
    theme: "自然光純粹黑白肖像 · Portrait & Identity",
    year: "2024 — 2025",
    location: "Taipei & Paris",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85",
    intro: "捨棄商業打光棚的複雜燈組與華麗造型，僅以一扇朝北天窗的漫射冷光為唯一光源。邀請作家、編舞家、雕塑師在安靜的空間對坐，讓鏡頭耐心等待神情放鬆、防備瓦解的那一個深呼吸瞬間。",
    curatorNote: "使用 Leica M-Monochrom 專屬黑白感光元件拍攝，取消色彩濾鏡以獲取極致的動態範圍與細膩灰階過渡。眼神中的微光，即是靈魂未經修剪的自白。",
    client: "Vogue Taiwan Editorial & Solo Book Publication",
    series: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
        caption: "面龐的留白 · Space Around the Face"
      },
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
        caption: "雕塑般的頸線 · Sculptural Form"
      },
      {
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
        caption: "舞者的沈默凝視 · Dancer's Gaze"
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85",
        caption: "歲月刻度 · Marks of Existence"
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.GALLERY_DATA = GALLERY_DATA;
  window.PROJECTS_DATA = PROJECTS_DATA;
}
