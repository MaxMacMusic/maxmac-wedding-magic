export type ServicePage = {
  path: string;
  name: string; // short name for links/breadcrumbs
  title: string;
  description: string;
  h1: string;
  intro: string;
  benefitsHeading: string;
  benefits: { title: string; text: string }[];
  timelineHeading: string;
  timeline: { when: string; text: string }[];
  image: "hero" | "dj" | "singer";
  imageAlt: string;
  reviewNames: string[];
  packages: string[];
  faqs: { q: string; a: string }[];
  showSignatureTimeline?: boolean;
};

export const PACKAGES: Record<string, { name: string; text: string }> = {
  "full-duo": { name: "Full Day Duo Package (Duo Acoustic + DJ)", text: "Most popular. A duo acoustic performance for the ceremony and canapés, followed by Max on DJ duties for the reception." },
  "full-solo": { name: "Full Day Solo Package (Solo Acoustic + DJ)", text: "Max solo on vocals and acoustic guitar for the ceremony and canapés, then DJ for the reception." },
  ceremony: { name: "Ceremony Only (Acoustic)", text: "Live acoustic vocals and guitar for your ceremony, including songs of your choice." },
  reception: { name: "Reception Only (DJ)", text: "DJ entertainment for your reception, formalities and dance floor." },
  "full-mc": { name: "Full Day Package + MC", text: "Any full day package with Max also hosting as your MC." },
};

export const servicePages: ServicePage[] = [
  {
    path: "/sydney-wedding-singer-dj/",
    name: "Wedding Singer & DJ",
    title: "Sydney Wedding Singer & DJ | Acoustic + DJ Packages | Max Mac",
    description: "Book one entertainer for your whole wedding. Max Mac is a Sydney wedding singer and DJ offering live acoustic ceremony music, canapé sets and dance-floor DJ entertainment.",
    h1: "Sydney Wedding Singer & DJ",
    intro: "Max Mac's signature service combines live acoustic music and DJ entertainment in one booking. Max sings and plays guitar through your ceremony and canapés, then moves straight into DJ mode for the reception — so the music, the energy and the communication all come from one person who knows your day.",
    benefitsHeading: "Why couples book acoustic music and DJ for weddings in one package",
    benefits: [
      { title: "One contact, one plan", text: "A single planning call covers your ceremony songs, cocktail hour vibe, formalities and dance-floor requests." },
      { title: "Seamless transitions", text: "No handover between a musician and a separate DJ — the move from live music to dancing happens without gaps." },
      { title: "Own sound setup", text: "Max brings his own speakers and microphone setup for performances and DJ sets." },
      { title: "Your music taste", text: "Requests and must-play songs shape both the acoustic sets and the dance floor — couples have even requested metal!" },
    ],
    timelineHeading: "How full-day wedding entertainment flows",
    timeline: [],
    image: "singer",
    imageAlt: "Max Mac singing and playing acoustic guitar as a Sydney wedding singer and DJ",
    reviewNames: ["Elle B.", "Alina C.", "Pia C."],
    packages: ["full-duo", "full-solo", "full-mc"],
    showSignatureTimeline: true,
    faqs: [
      { q: "How does an acoustic + DJ package work on the day?", a: "Max plays acoustic guitar and vocals for the first half of the wedding — ceremony, canapés and dinner sets if booked — then switches to DJ for the dance floor." },
      { q: "What's the difference between the solo and duo packages?", a: "The solo package features Max on his own for the acoustic sets; the duo package features a duo acoustic performance. Both include Max as your DJ — ask in your enquiry for full details." },
      { q: "Can we add MC services?", a: "Yes — the Full Day Package + MC adds hosting for introductions, speeches and formalities." },
      { q: "Do you travel outside Sydney?", a: "Yes. Max is based in Sydney and has performed at weddings across Australia and internationally, including NZ, Europe, the USA and the UK. Travel is arranged on enquiry." },
    ],
  },
  {
    path: "/wedding-acoustic-musician-sydney/",
    name: "Acoustic Musician",
    title: "Acoustic Wedding Musician & Guitarist Sydney | Max Mac",
    description: "Live acoustic wedding music in Sydney. Max Mac is a wedding singer and guitarist for ceremonies, canapés, cocktail hour and dinner. Watch videos and check your date.",
    h1: "Acoustic Wedding Musician & Guitarist in Sydney",
    intro: "Live acoustic music creates a warm, personal atmosphere that a playlist can't. Max Mac is a Sydney wedding guitarist and vocalist who performs soulful acoustic sets for ceremonies, canapés, cocktail hour and dinner — reading the room and adjusting the mood as your day unfolds.",
    benefitsHeading: "What live acoustic wedding music adds",
    benefits: [
      { title: "Personal ceremony moments", text: "Your chosen aisle, signing and exit songs, performed live." },
      { title: "Atmosphere for mingling", text: "Relaxed acoustic sets fill the gap while you're away for photos." },
      { title: "Flexible volume", text: "Music that lets guests talk over dinner without fading into the background." },
      { title: "Indoors or outdoors", text: "From garden ceremonies to reception rooms, Max brings his own sound setup." },
    ],
    timelineHeading: "Where acoustic music fits in your wedding timeline",
    timeline: [
      { when: "Guest arrival", text: "Gentle acoustic covers as guests take their seats." },
      { when: "Ceremony", text: "Processional, signing of the register and recessional songs." },
      { when: "Canapés & cocktail hour", text: "Upbeat acoustic sets while you're having photos." },
      { when: "Dinner (optional)", text: "Relaxed live music during the meal." },
    ],
    image: "hero",
    imageAlt: "Max Mac in a tuxedo playing acoustic guitar outdoors at a Sydney wedding",
    reviewNames: ["Calum C.", "Georgia L.", "Ariana M."],
    packages: ["ceremony", "full-solo", "full-duo"],
    faqs: [
      { q: "Can you learn songs for our ceremony?", a: "Yes — Max is happy to learn three songs of your choice for the processional, signing of the register and exit." },
      { q: "What style of acoustic music do you play?", a: "A mix of modern and classic covers on vocals and acoustic guitar. See the repertoire on the homepage for examples." },
      { q: "Can acoustic music continue into dinner?", a: "Yes, dinner sets can be included. Mention it in your enquiry so it's part of your quote." },
      { q: "What do you need for a quote?", a: "Your ceremony and reception addresses, the date, the services you'd like and any other details." },
    ],
  },
  {
    path: "/wedding-dj-sydney/",
    name: "Wedding DJ",
    title: "Wedding DJ Sydney | Reception DJ & Live Music | Max Mac",
    description: "Wedding DJ in Sydney for receptions and dance floors. Max Mac builds your set around your music taste and requests, with live acoustic music available too.",
    h1: "Wedding DJ in Sydney",
    intro: "A great wedding DJ reads the room. Max Mac plays a curated mix of classics and current hits shaped around your requests, keeping your dance floor full from the first dance to the last song — and because he's also a live musician, you can add acoustic music to the same booking.",
    benefitsHeading: "What you get with Max as your wedding reception DJ",
    benefits: [
      { title: "Built around you", text: "Your must-plays, do-not-plays and key formality songs planned in advance." },
      { title: "Every generation dancing", text: "Couples regularly mention grandparents on the dance floor." },
      { title: "Formalities covered", text: "Entrance, cake, first dance, bouquet and leaving songs cued at the right moment." },
      { title: "Wedding DJ and live music", text: "Add acoustic ceremony and canapé sets for full-day entertainment." },
    ],
    timelineHeading: "DJ entertainment through your reception",
    timeline: [
      { when: "Reception entrance", text: "Your chosen entrance song as you're introduced." },
      { when: "Formalities", text: "Cake cutting, first dance and optional father/daughter dance." },
      { when: "Dance floor", text: "A set that builds through the night around your taste." },
      { when: "Send-off", text: "Your leaving song(s) to finish the night." },
    ],
    image: "dj",
    imageAlt: "Max Mac giving two thumbs up behind the DJ decks at a wedding reception",
    reviewNames: ["Mitch O.", "Sophie K.", "Megan S."],
    packages: ["reception", "full-solo", "full-duo"],
    faqs: [
      { q: "Can we give you a song list?", a: "Yes. Max asks for your entrance, cake, first dance, optional father/daughter, bouquet & garter and leaving songs, plus any requests." },
      { q: "Do you take requests on the night?", a: "Yes — Max is attentive to requests from you and your guests within the style you've chosen." },
      { q: "Do you bring your own equipment?", a: "Yes, Max brings his own speakers and microphone setup." },
      { q: "Can we combine DJ with live music?", a: "Yes. The full day packages combine acoustic sets with DJ entertainment." },
    ],
  },
  {
    path: "/wedding-mc-sydney/",
    name: "Wedding MC",
    title: "Wedding MC Sydney | Wedding Entertainer & MC | Max Mac",
    description: "Professional wedding MC in Sydney. Max Mac can host your introductions, speeches and formalities alongside live acoustic music and DJ entertainment.",
    h1: "Wedding MC in Sydney",
    intro: "A good MC keeps your reception on time and takes pressure off friends and family. Max Mac can host your formalities as part of a full day package, so the person running your music is also the person running the schedule — no miscommunication between MC and DJ.",
    benefitsHeading: "Why choose a wedding entertainer and MC in one",
    benefits: [
      { title: "Timing in sync", text: "Announcements and music cues come from the same person." },
      { title: "Friends can relax", text: "No need to ask a guest to host — everyone gets to enjoy the night." },
      { title: "Calm under pressure", text: "Couples describe Max handling rain and delays with a smile." },
      { title: "Natural, warm style", text: "Hosting that suits your crowd rather than a scripted routine." },
    ],
    timelineHeading: "What a wedding MC handles",
    timeline: [
      { when: "Arrival", text: "Welcome guests and explain the run of the evening." },
      { when: "Entrance", text: "Introduce the bridal party and newlyweds." },
      { when: "Speeches", text: "Introduce speakers and keep formalities flowing." },
      { when: "Key moments", text: "Announce cake cutting, first dance and the send-off." },
    ],
    image: "singer",
    imageAlt: "Max Mac on microphone as wedding MC and singer in Sydney",
    reviewNames: ["Amy R.", "Alyssa D.", "Kai L."],
    packages: ["full-mc"],
    faqs: [
      { q: "Can we book you as MC only?", a: "MC services are offered with the Full Day Package. Get in touch to discuss your plans." },
      { q: "Do you help with the run sheet?", a: "Max talks through your formalities during planning so the night runs smoothly." },
      { q: "Will you pronounce names correctly?", a: "Share names with your enquiry and planning call so introductions are right on the night." },
    ],
  },
  {
    path: "/wedding-ceremony-music-sydney/",
    name: "Ceremony Music",
    title: "Wedding Ceremony Singer Sydney | Live Aisle Songs | Max Mac",
    description: "Live wedding ceremony music in Sydney. Max Mac sings and plays acoustic guitar for your aisle song, signing and exit, and can learn songs of your choice.",
    h1: "Wedding Ceremony Singer in Sydney",
    intro: "Your ceremony is the moment guests remember most. Max Mac performs live vocals and acoustic guitar for your walk down the aisle, signing of the register and exit, and can learn songs that mean something to you as a couple.",
    benefitsHeading: "Live wedding ceremony music, done personally",
    benefits: [
      { title: "Songs of your choice", text: "Up to three songs learnt for the processional, signing and recessional." },
      { title: "Acoustic aisle songs", text: "Stripped-back versions that suit the emotion of the moment." },
      { title: "Pre-ceremony atmosphere", text: "Live music as guests arrive and settle in." },
      { title: "Continue the day", text: "Extend into canapés and DJ with a full day package." },
    ],
    timelineHeading: "Your ceremony music, step by step",
    timeline: [
      { when: "Guests arrive", text: "Relaxed acoustic songs while guests take their seats." },
      { when: "Processional", text: "Your aisle song, performed live." },
      { when: "Signing", text: "A song or two while you sign the register." },
      { when: "Recessional", text: "An upbeat exit song as you walk out married." },
    ],
    image: "hero",
    imageAlt: "Max Mac playing acoustic guitar at an outdoor wedding ceremony in Sydney",
    reviewNames: ["Cameron Y.", "Caitlin T.", "Ruby S."],
    packages: ["ceremony", "full-solo", "full-duo"],
    faqs: [
      { q: "Which songs do you need for the ceremony?", a: "Processional, signing of the register and recessional." },
      { q: "Can you learn a song you don't already play?", a: "Yes, Max is happy to learn three songs of your choice for the ceremony." },
      { q: "Can you play an outdoor ceremony?", a: "Yes — Max brings his own speakers and microphone. Share your venue details for a quote." },
    ],
  },
];
