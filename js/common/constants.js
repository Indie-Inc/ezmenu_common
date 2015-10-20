export default {

  userRoles: [
    {text: 'Administrator', value: 'administrator'},
    {text: 'Menu Operator', value: 'menu_operator'}
  ],

  restaurantSortOptions: [
    {text: 'Recently updated', value: '-system.updated_by_system'},
    {text: 'Least recently updated', value: 'system.updated_by_system'},
    {text: 'Newest', value: '-system.created_by_system'},
    {text: 'Oldest', value: 'system.created_by_system'}
  ],

  priceRangeTypes: [
    {text: 'N/A', value: ''},
    {text: 'Up to ¥3,000', value: '_¥3000'},
    {text: '¥3,000 - ¥4,000', value: '¥3000_¥4000'},
    {text: '¥4,000 - ¥5,000', value: '¥4000_¥5000'},
    {text: '¥5,000 - ¥8,000', value: '¥5000_¥8000'},
    {text: '¥8,000 - ¥10,000', value: '¥8000_¥10000'},
    {text: 'Over ¥10,000', value: '¥10000_'}
  ],
  
  city: {
    "tokyo":  [
      {value: "hachiōji", text: "Hachiōji / 八王子市"},
      {value: "tachikawa", text: "Tachikawa / 立川市"},
      {value: "musashino", text: "Musashino / 武蔵野市"},
      {value: "mitaka", text: "Mitaka / 三鷹市"},
      {value: "ōme", text: "Ōme / 青梅市"},
      {value: "fuchū", text: "Fuchū / 府中市"},
      {value: "akishima", text: "Akishima / 昭島市"},
      {value: "chōfu", text: "Chōfu / 調布市"},
      {value: "machida", text: "Machida / 町田市"},
      {value: "koganei", text: "Koganei / 小金井市"},
      {value: "kodaira", text: "Kodaira / 小平市"},
      {value: "hino", text: "Hino / 日野市"},
      {value: "higashimurayama", text: "Higashimurayama / 東村山市"},
      {value: "kokubunji", text: "Kokubunji / 国分寺市"},
      {value: "kunitachi", text: "Kunitachi / 国立市"},
      {value: "fussa", text: "Fussa / 福生市"},
      {value: "komae", text: "Komae / 狛江市"},
      {value: "higashiyamato", text: "Higashiyamato / 東大和市"},
      {value: "kiyose", text: "Kiyose / 清瀬市"},
      {value: "higashikurume", text: "Higashikurume / 東久留米市"},
      {value: "nusashimurayama", text: "Musashimurayama / 武蔵村山市"},
      {value: "tama", text: "Tama / 多摩市"},
      {value: "inagi", text: "Inagi / 稲城市"},
      {value: "hamura", text: "Hamura / 羽村市"},
      {value: "akiruno", text: "Akiruno / あきる野市"},
      {value: "nishitōkyō", text: "Nishitōkyō / 西東京市"},
      {value: "adachi", text: "Adachi / 足立区"},
      {value: "arakawa", text: "Arakawa / 荒川区"},
      {value: "bunkyo", text: "Bunkyo / 文京区"},
      {value: "chiyoda", text: "Chiyoda / 千代田区"},
      {value: "chūō", text: "Chūō / 中央区"},
      {value: "edogawa", text: "Edogawa / 江戸川区"},
      {value: "itabashi", text: "Itabashi / 板橋区"},
      {value: "katsushika", text: "Katsushika / 葛飾区"},
      {value: "kita", text: "Kita / 北区"},
      {value: "koto", text: "Koto / 江東区"},
      {value: "meguro", text: "Meguro / 目黒区"},
      {value: "minato", text: "Minato / 港区"},
      {value: "nakano", text: "Nakano / 中野区"},
      {value: "nerima", text: "Nerima / 練馬区"},
      {value: "ōta", text: "Ōta / 大田区"},
      {value: "setagaya", text: "Setagaya / 世田谷区"},
      {value: "shibuya", text: "Shibuya / 渋谷区"},
      {value: "shinagawa", text: "Shinagawa / 品川区"},
      {value: "shinjuku", text: "Shinjuku / 新宿区"},
      {value: "suginami", text: "Suginami / 杉並区"},
      {value: "sumida", text: "Sumida / 墨田区"},
      {value: "taitō", text: "Taitō / 台東区"},
      {value: "toshima", text: "Toshima / 豊島区"}
    ]
  },

  cardAvailabilities: [
    {text: 'N/A', value: ''},
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'}
  ],

  cardTypes: ['visa', 'master', 'jcb'],

  smokingAvailabilities: [
    {text: 'N/A', value: ''},
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'},
    {text: 'Sectionalized', value: 'sectionalized'}
  ],

  parkingAvailabilities: [
    {text: 'N/A', value: ''},
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'}
  ],

  wifiAvailabilities: [
    {text: 'N/A', value: ''},
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'}
  ],

  reservationAvailabilities: [
    {text: 'N/A', value: ''},
    {text: 'Yes', value: 'yes'},
    {text: 'No', value: 'no'}
  ],

  daysOfWeek: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],

  openHoursTypes: [
    {text: 'Default', value: 'default'},
    {text: 'Holiday', value: 'holiday'},
    {text: 'Sunday', value: 'sunday'},
    {text: 'Monday', value: 'monday'},
    {text: 'Tuesday', value: 'tuesday'},
    {text: 'Wednesday', value: 'wednesday'},
    {text: 'Thursday', value: 'thursday'},
    {text: 'Friday', value: 'friday'},
    {text: 'Saturday', value: 'saturday'}
  ],

  times: [
    {text: "-", value: ""},
    {text: "06:00", value: "06:00"},
    {text: "06:30", value: "06:30"},
    {text: "07:00", value: "07:00"},
    {text: "07:30", value: "07:30"},
    {text: "08:00", value: "08:00"},
    {text: "08:30", value: "08:30"},
    {text: "09:00", value: "09:00"},
    {text: "09:30", value: "09:30"},
    {text: "10:00", value: "10:00"},
    {text: "10:30", value: "10:30"},
    {text: "11:00", value: "11:00"},
    {text: "11:30", value: "11:30"},
    {text: "12:00", value: "12:00"},
    {text: "12:30", value: "12:30"},
    {text: "13:00", value: "13:00"},
    {text: "13:30", value: "13:30"},
    {text: "14:00", value: "14:00"},
    {text: "14:30", value: "14:30"},
    {text: "15:00", value: "15:00"},
    {text: "15:30", value: "15:30"},
    {text: "16:00", value: "16:00"},
    {text: "16:30", value: "16:30"},
    {text: "17:00", value: "17:00"},
    {text: "17:30", value: "17:30"},
    {text: "18:00", value: "18:00"},
    {text: "18:30", value: "18:30"},
    {text: "19:00", value: "19:00"},
    {text: "19:30", value: "19:30"},
    {text: "20:00", value: "20:00"},
    {text: "20:30", value: "20:30"},
    {text: "21:00", value: "21:00"},
    {text: "21:30", value: "21:30"},
    {text: "22:00", value: "22:00"},
    {text: "22:30", value: "22:30"},
    {text: "23:00", value: "23:00"},
    {text: "23:30", value: "23:30"},
    {text: "24:00", value: "24:00"},
    {text: "24:30", value: "24:30"},
    {text: "25:00", value: "25:00"},
    {text: "25:30", value: "25:30"},
    {text: "26:00", value: "26:00"},
    {text: "26:30", value: "26:30"},
    {text: "27:00", value: "27:00"},
    {text: "27:30", value: "27:30"},
    {text: "28:00", value: "28:00"},
    {text: "28:30", value: "28:30"},
    {text: "29:00", value: "29:00"},
    {text: "29:30", value: "29:30"}
  ],

  dataStatuses: [
    {text: 'N/A', value: ''},
    {text: 'Crawl Completed', value: 'crawled'},
    {text: 'Input Data Completed', value: 'completed'},
  ],

  categories: [
    {value: "kappo_kaiseki", text: "Kappo-Kaiseki (Traditional Japanese)"},
    {value: "seafood", text: "Seafood"},
    {value: "izakaya", text: "Izakaya (tavern)"},
    {value: "sushi", text: "Sushi"},
    {value: "yakitori_kushiyaki", text: "Yakitori-Kushiyaki (grilled chicken)"},
    {value: "ramen_noodles", text: "Ramen-Noodles"},
    {value: "soba", text: "Soba"},
    {value: "shabu_shabu", text: "Shabu Shabu (japanese steamboat)"},
    {value: "sukiyaki", text: "Sukiyaki"},
    {value: "kyoto_cuisine", text: "Kyoto Cuisine"},
    {value: "tonkatsu", text: "Tonkatsu (pork cutlet)"},
    {value: "unagi", text: "Unagi (freshwater eel)"},
    {value: "oden", text: "Oden"},
    {value: "tenpura", text: "Tenpura"},
    {value: "teppanyaki", text: "Teppanyaki"},
    {value: "chicken", text: "Chicken"},
    {value: "sake", text: "Sake"},
    {value: "hot_pot", text: "Hot Pot"},
    {value: "yakiniku", text: "Yakiniku (bbq beef)"},
    {value: "kushiage", text: "Kushiage (fried skewer)"},
    {value: "okinawa_cuisine", text: "Okinawa Cuisine"},
    {value: "japanese_food", text: "Japanese Food"},
    {value: "regional_cuisine", text: "Regional Cuisine"},
    {value: "grilled_tripe", text: "Grilled Tripe"},
    {value: "bar", text: "Bar"},
    {value: "fried_foods", text: "Fried Foods"},
    {value: "japanese_fusion_cuisine", text: "Japanese Fusion Cuisine"},
    {value: "horumon", text: "Horumon (bbq offel)"},
    {value: "chinese", text: "Chinese"},
    {value: "donburi", text: "Donburi (rice bowl)"},
    {value: "tendon", text: "Tendon"},
    {value: "stand_bar", text: "Stand Bar"},
    {value: "standing_style", text: "Standing Style"},
    {value: "fugu", text: "Fugu (blowfish)"},
    {value: "steak", text: "Steak"},
    {value: "suppon", text: "Suppon"},
    {value: "french", text: "French"},
    {value: "beef", text: "Beef"},
    {value: "dishes", text: "Dishes"},
    {value: "robatayaki", text: "Robatayaki"},
    {value: "pork", text: "Pork"},
    {value: "udon", text: "Udon"},
    {value: "tsukemen", text: "Tsukemen"},
    {value: "tempura", text: "Tempura"},
    {value: "creative_cuisine", text: "Creative Cuisine"},
    {value: "grilled_pork", text: "Grilled Pork"},
    {value: "genghis_khan", text: "Genghis Khan"},
    {value: "barfowl", text: "Barfowl"},
    {value: "western", text: "Western"},
    {value: "curry", text: "Curry"},
    {value: "mizutaki", text: "Mizutaki"},
    {value: "champon", text: "Champon"},
    {value: "bistro", text: "Bistro"},
    {value: "oyster_bar", text: "Oyster Bar"},
    {value: "wine_bar", text: "Wine Bar"},
    {value: "motsunabe", text: "Motsunabe (offel hot pot)"},
    {value: "vegetable_dishes", text: "Vegetable Dishes"},
    {value: "sumibiyaki", text: "Sumibiyaki"},
    {value: "shojin_cuisine", text: "Shojin Cuisine"},
    {value: "cafe_bar", text: "Cafe Bar"},
    {value: "oyakodon", text: "Oyakodon"},
    {value: "gyutan", text: "Gyutan"},
    {value: "crab", text: "Crab"},
    {value: "shochu", text: "Shochu"},
    {value: "cafe", text: "Cafe"},
    {value: "kaitenzushi", text: "Kaitenzushi"},
    {value: "takoyaki", text: "Takoyaki"},
    {value: "tofu", text: "Tofu"},
    {value: "yuba", text: "Yuba"},
    {value: "ryokan", text: "Ryokan"},
    {value: "bento", text: "Bento (lunch box)"},
    {value: "okonomiyaki", text: "Okonomiyaki"},
    {value: "monjyayaki", text: "Monjayaki"},
    {value: "croquette", text: "croquette"},
    {value: "dumplings", text: "dumplings"},
    {value: "sweets", text: "sweets"},
    {value: "onigiri", text: "onigiri (rice ball)"},
    {value: "spain", text: "Spain"},
    {value: "shochu", text: "shochu (japanese spirits)"},
    {value: "whale", text: "Whale"},
  ],

  areaOptions: {
    tokyo: [
      {
        text: "銀座・新橋・有楽町",
        value: "A1301"
      },
      {
        text: "六本木・麻布・広尾",
        value: "A1307"
      },
      {
        text: "渋谷・恵比寿・代官山",
        value: "A1303"
      },
      {
        text: "原宿・表参道・青山",
        value: "A1306"
      },
      {
        text: "上野・浅草・日暮里",
        value: "A1311"
      },
      {
        text: "東京・日本橋",
        value: "A1302"
      },
      {
        text: "秋葉原・神田・水道橋",
        value: "A1310"
      },
      {
        text: "新宿・代々木・大久保",
        value: "A1304"
      },
      {
        text: "築地・湾岸・お台場",
        value: "A1313"
      }
    ]
  },

  langOptions: [
    {
      value: "ja",
      text: "日本語"
    },
    {
      value: "en",
      text: "English"
    },
    {
      value: "ch",
      text: "中文"
    }
  ]

}