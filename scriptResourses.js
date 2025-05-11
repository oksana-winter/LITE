function openRandomResource() {
    const resources = [
      "https://www.rome2rio.com",
      "https://www.skyscanner.com",
      "https://www.omio.com",
      "https://www.booking.com",
      "https://www.airbnb.com",
      "https://www.hostelworld.com",
      "https://www.packpnt.com",
      "https://www.onebag.com",
      "https://maps.google.com",
      "https://maps.me",
      "https://www.komoot.com",
      "https://translate.google.com",
      "https://www.duolingo.com",
      "https://wise.com",
      "https://www.xe.com",
      "https://www.couchsurfing.com",
      "https://www.workaway.info",
      "https://www.worldpackers.com",
      "https://www.alltrails.com"
    ];
    const randomURL = resources[Math.floor(Math.random() * resources.length)];
    window.open(randomURL, "_blank");
  }
