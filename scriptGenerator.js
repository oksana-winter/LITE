const places = [
  {
    name: "Kyoto, Japan",
    description:
      "A city famous for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses. Kyoto blends history with serenity and offers an immersive experience into Japanese culture. Visitors can explore ancient shrines, participate in tea ceremonies, and stroll through geisha districts like Gion.",
    coords: [35.0116, 135.7681],
  },
  {
    name: "Machu Picchu, Peru",
    description:
      "An Incan citadel set high in the Andes Mountains in Peru, known for its dry-stone walls. This UNESCO World Heritage Site offers breathtaking views and deep historical significance. Hidden for centuries, it reveals secrets of Incan architecture, agriculture, and astronomical knowledge.",
    coords: [-13.1631, -72.545],
  },
  {
    name: "Santorini, Greece",
    description:
      "A stunning island in the Aegean Sea known for whitewashed houses and blue domes. Santorini's dramatic cliffs, volcanic beaches, and sunsets attract travelers from all over the world. The island also boasts excellent wine, ancient ruins, and charming villages like Oia and Fira.",
    coords: [36.3932, 25.4615],
  },
  {
    name: "Reykjavik, Iceland",
    description:
      "Iceland’s capital and largest city, famous for its vibrant arts scene and geothermal hot springs. Reykjavik is also a gateway to Icelandic natural wonders like glaciers, waterfalls, and volcanoes. Its colorful buildings, modern design, and friendly locals create a welcoming atmosphere year-round.",
    coords: [64.1355, -21.8954],
  },
  {
    name: "Banff National Park, Canada",
    description:
      "A picturesque national park in the Canadian Rockies, known for turquoise lakes and majestic mountains. Banff offers opportunities for hiking, wildlife watching, and skiing. The scenery includes glacial valleys, alpine meadows, and iconic locations like Lake Louise and Moraine Lake.",
    coords: [51.4968, -115.9281],
  },
  {
    name: "Petra, Jordan",
    description:
      "An archaeological city famous for its rock-cut architecture and rose-colored cliffs. Petra was once a thriving trading hub of the Nabataean kingdom. Visitors marvel at The Treasury, Royal Tombs, and the Monastery carved into the sandstone mountains of the desert.",
    coords: [30.3285, 35.4444],
  },
  {
    name: "Cappadocia, Turkey",
    description:
      "A region known for its unique rock formations and hot air balloon rides. Cappadocia is home to ancient cave dwellings, underground cities, and fairy chimneys shaped by volcanic eruptions. The surreal landscape makes it one of the most photogenic regions in the world.",
    coords: [38.6431, 34.8274],
  },
  {
    name: "Bora Bora, French Polynesia",
    description:
      "A tropical paradise known for turquoise waters and luxury overwater bungalows. Bora Bora is ideal for honeymooners and water sports enthusiasts. Surrounded by a lagoon and barrier reef, the island offers diving, snorkeling, and views of Mount Otemanu rising from its center.",
    coords: [-16.5004, -151.7415],
  },
  {
    name: "Queenstown, New Zealand",
    description:
      "A scenic town on the South Island known for adventure sports and mountain landscapes. Queenstown is often called the adventure capital of the world. It offers bungee jumping, skydiving, jet boating, and also provides tranquil lakeside relaxation and access to nearby wine regions.",
    coords: [-45.0312, 168.6626],
  },
  {
    name: "Hallstatt, Austria",
    description:
      "A fairy-tale village on the shores of Lake Hallstatt surrounded by the Alps. With its pastel houses and alpine charm, Hallstatt is often described as one of the most beautiful villages in the world. The area is rich in salt mining history and scenic hiking trails.",
    coords: [47.5615, 13.6493],
  },
  {
    name: "Tuscany, Italy",
    description:
      "A region famous for rolling hills, vineyards, and Renaissance towns. Tuscany delights visitors with medieval villages, art-filled cities like Florence, and rustic cuisine. It’s the birthplace of Italian wine culture and home to iconic landmarks like the Leaning Tower of Pisa.",
    coords: [43.7711, 11.2486],
  },
  {
    name: "Great Barrier Reef, Australia",
    description:
      "The world’s largest coral reef system, home to diverse marine life. It stretches over 2,300 kilometers and includes thousands of reefs and islands. A haven for divers and snorkelers, the reef supports colorful corals, sea turtles, and tropical fish in crystal-clear waters.",
    coords: [-18.2871, 147.6992],
  },
  {
    name: "Florence, Italy",
    description:
      "Renowned as the birthplace of the Renaissance, Florence is a treasure trove of art, architecture, and history. Visitors can admire masterpieces in the Uffizi Gallery, marvel at the Duomo, and walk across the iconic Ponte Vecchio while soaking in the city's rich cultural heritage.",
    coords: [43.7696, 11.2558],
  },
  {
    name: "Cusco, Peru",
    description:
      "Once the capital of the Inca Empire, Cusco is a blend of ancient Andean culture and Spanish colonial architecture. It's the gateway to Machu Picchu and offers vibrant markets, cobblestone streets, and archaeological wonders at every turn.",
    coords: [-13.5319, -71.9675],
  },
  {
    name: "Petra, Jordan",
    description:
      "An archaeological marvel carved into rose-red rock, Petra was once a thriving trading hub. This UNESCO World Heritage Site is famous for the iconic Treasury, the Monastery, and hidden tombs nestled within dramatic desert canyons.",
    coords: [30.3285, 35.4444],
  },
  {
    name: "Luang Prabang, Laos",
    description:
      "A tranquil town at the confluence of two rivers, Luang Prabang captivates with its golden Buddhist temples, French colonial architecture, and morning alms-giving rituals. It’s a peaceful cultural haven surrounded by lush mountains.",
    coords: [19.8851, 102.1347],
  },
  {
    name: "Fez, Morocco",
    description:
      "Fez is a labyrinth of culture and history, home to one of the world’s oldest universities and a vibrant medina. Wander through narrow alleys filled with traditional crafts, tanneries, and centuries-old madrasas.",
    coords: [34.0181, -5.0078],
  },
  {
    name: "Hoi An, Vietnam",
    description:
      "A charming ancient town known for its well-preserved architecture, lantern-lit evenings, and riverside markets. Hoi An blends Vietnamese, Chinese, and Japanese influences, offering a picturesque glimpse into the past.",
    coords: [15.8801, 108.3380],
  },
  {
    name: "Tallinn, Estonia",
    description:
      "Tallinn’s medieval Old Town is a fairy-tale landscape of cobblestone streets, gothic spires, and fortified walls. This Baltic gem blends historical charm with modern innovation and a vibrant café culture.",
    coords: [59.4370, 24.7536],
  },
  {
    name: "Lviv, Ukraine",
    description:
      "A cultural heart of Western Ukraine, Lviv enchants with its Austro-Hungarian architecture, lively squares, and rich coffeehouse traditions. The city boasts a layered history and a creative spirit evident in its vibrant street art and music scenes.",
    coords: [49.8397, 24.0297],
  },
  {
    name: "Zanzibar City, Tanzania",
    description:
      "Located on the exotic island of Zanzibar, this city’s historic Stone Town is a UNESCO site featuring winding alleys, ornate doorways, and a fusion of Arab, Persian, Indian, and European influences.",
    coords: [-6.1659, 39.2026],
  },
  {
    name: "Gjirokastër, Albania",
    description:
      "Known as the ‘City of Stone,’ Gjirokastër is famed for its Ottoman-era houses, dramatic hilltop castle, and cobbled streets. It offers a unique window into Albania’s rich history and traditional Balkan life.",
    coords: [40.0750, 20.1389],
  },
  
];

let map = L.map("map").setView([0, 0], 2); // Initial empty map

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 19
}).addTo(map);

let marker;

function generatePlace() {
  const place = places[Math.floor(Math.random() * places.length)];
  document.getElementById("place-name").textContent = place.name;
  document.getElementById("place-description").textContent = place.description;

  if (marker) {
    marker.remove();
  }

  marker = L.marker(place.coords).addTo(map);
  map.setView(place.coords, 10);
}
