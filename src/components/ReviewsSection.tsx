import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Elle B.", date: "September 2026", text: "Max was great on our wedding day, playing live during our ceremony, cocktail hour and then DJ for our reception. He even played some metal that we had requested later on in the night which was a hit! He brought awesome vibes to the day and everything ran smoothly. Thanks Max!" },
  { name: "Sophie K.", date: "September 2026", text: "Max was so personable and flexible. Nothing was too hard for him and managed everything with a big smile. Max is such a talented DJ and musician. I would highly recommend him for any event especially your wedding! What an awesome night made possible by him!" },
  { name: "Cameron Y.", date: "August 2026", text: "Max was absolutely perfect for our day. He smashed our aisle song, and everything he did throughout the day was amazing. Everyone commented on how good the music was in the ceremony, the cocktail hour and the dancefloor was pumping! We would 100% recommend Max to anyone looking to get a great musician/DJ for their event!" },
  { name: "Alina C.", date: "June 2026", text: "We had Max as our musician and DJ. Max was amazing and super professional. He had his own set up including speakers and microphone. He switched seamlessly from ceremony to reception and really brought the vibes on the dance floor!!! Thank you for everything" },
  { name: "Amy R.", date: "March 2026", text: "Max was amazing! Max performed live during the wedding ceremony, and then created such a fun and lively dance floor as the DJ! We also had Max as our MC, we really appreciated Max’s advice and flexibility with our runsheet, he kept the transitions smooth and fun! Our guests have raved about the dance floor and the fun vibes from Max!" },
  { name: "Leanne L.", date: "March 2026", text: "We loved having Max at our wedding! The whole process from booking him for our wedding, briefing, to him playing such fun songs on the night was so smooth sailing! Thank you so much Max for being part of our amazing night!" },
  { name: "Calum C.", date: "March 2026", text: "Max was a delight to work with, laid back easy going, however punctual and attentive to requests. He made us feel at ease and his acoustic set was amazing! We had Max play an acoustic set at our canapé hour, he then DJ’d during the reception, filling in any dead space with the perfect background music. Would highly recommend for any wedding or function!" },
  { name: "Georgia L.", date: "December 2025", text: "We were absolutely blown away by Max at our wedding. From the moment he began performing, we knew we’d chosen someone truly special. His voice was nothing short of incredible — effortlessly captivating and powerful. Every song we requested was performed to absolute perfection, and he brought such emotion and energy that our guests are still talking about it! He didn’t just sing; he created an atmosphere. His presence, professionalism, and genuine passion for his craft elevated our day in ways we couldn’t have imagined. We honestly could not have asked for a better person to be part of our wedding. If you’re looking for someone who will exceed every expectation, he is the one. Completely unforgettable and wholeheartedly recommended!" },
  { name: "Megan S.", date: "November 2025", text: "Max was amazing! He absolutely nailed our ceremony songs and kept the vibes going from cocktail hour all the way through to the last song. The dance floor was pumping all night and all our guests had a fantastic time. It was the best day of our lives!" },
  { name: "Alyssa D.", date: "November 2025", text: "So glad we booked Max — he is the most talented (& flexible) wedding muso ever! We had issues with rain, transport delays etc etc and we even asked him to move spots twice and he was SO amazing and able to adapt to all the craziness thrown at him. His rendition of \"Somewhere Over The Rainbow\" during our ceremony was stunning and we have never danced harder during the reception while he DJ'd. Love you Max, thanks again so much!!" },
  { name: "Caitlin T.", date: "November 2025", text: "We loved Max! We got him for the ceremony, cocktails and reception. He played the exact kind of music my partner and I love. We loved his laid back vibe to put our guests at ease during cocktails. He was really flexible when we wanted to change our first dance song at the last minute! Thanks again for that! He was happy to adjust the volume to make some of the older guests comfortable. We were really happy with him and would definitely recommend using him." },
  { name: "Indy C.", date: "November 2025", text: "Max was such a lovely addition to our Wedding, we are so pleased we booked him. We had a tiny wedding of just 50 people and so Max was a crucial part of the day going so well, which it did. He performed absolutely beautifully during the ceremony and at the canapes and then had our entire guest list dancing all night behind the decks. Thank you so much Max, we made the best decision booking you for our wedding music! All the best :) Indy & Luke" },
  { name: "Mary B.", date: "October 2025", text: "We got married back in Ireland in August this year and apart from the venue, Max was our #1 booking priority! We had seen him at our friends wedding earlier in the year in Sydney and LOVED him so much we decided to fly him out to Ireland for our special day. We are so glad that we did as he made our day that much more magical — he is so talented and easy going, it is a dream to work with him. His voice reverberated throughout the church so beautifully during the ceremony, everyone was in tears! And then our late night dance party in the old castle went SUPER LATE because no one wanted to leave — and Max was such a champion he kept the hits playing all night! Thank you Max — you will always be such a lovely memory for us in our marriage!! Everyone book Max, he's the best haha!" },
  { name: "Mitch O.", date: "October 2025", text: "Max is such a fun Wedding DJ — he had everyone at our wedding dancing all night, including the grandparents! Honestly everyone that sent us messages about our wedding mentioned \"the world's best DJ\" making it such a fun wedding! And not only that, Max performed so beautifully during our ceremony and canape hour. Thanks Max — we know you are so busy, so we're so glad we managed to book you for our big day!!" },
  { name: "Sabrina W.", date: "October 2025", text: "I am a Wedding Florist, so I have attended hundreds of Weddings and when the time came to pick a musician for my own wedding it had to be Max Mac! I had seen him play 3x before at other Weddings and every single time I was completely blown away. His rendition of \"All You Need Is Love\" by the Beatles as I walked down the aisle brought so much joy to the ceremony and had my husband and I both crying with happiness. And of course as the other reviews say — his dancefloor has the best energy of any I've been on — he really DJ's the absolute hits and our whole wedding party was dancing all night long. Thanks so much Max — and can't wait to see you perform at my sister's wedding in April lol! Sabrina and Lukas xx" },
  { name: "Pia C.", date: "October 2025", text: "Max is THE BEST wedding DJ and musician you could ever ask for!!! We got him for the full day — he played beautifully during our Ceremony and our Canapes and then DJ'd our reception; and from start to the end he was unbelievable!!! All of our guests were so moved by his performance at the ceremony and then on the dancefloor, his DJ'ing was such an amazing vibe setter! He played all of our requested music and added in some real bangers that we had forgot too! We were on the dance floor from our first dance until the buses arrived! He also has such an impressive gear set up — everything is super professional and fancy, we felt like we were at a proper dance venue haha! Can 100% recommend Max, he was one of our best decisions for our wedding." },
  { name: "Kai L.", date: "October 2025", text: "Having Max handle the music at our wedding was the best decision we made! We had an amazing phone call with him about 3 months out from our wedding day and after that, we never worried about the music again because he was ALL OVER IT! He is talented, professional, charming and a really really good DJ haha. Ticked every box — ceremony, canape hour, dinner and dancefloor — everything was 10/10 perfect and we look back on the day so pleased that we booked Max Mac!!!" },
  { name: "Annie M.", date: "October 2025", text: "Max is simply the best, there's no other way to put it. The passion and talent he brings to both performing (vocals, guitar) and DJing is something truly special. We felt so lucky he was available for our big day as he’s in such high demand, and it’s easy to see why! His live rendition of “Perfect,” which he learned just for us, still brings tears to our eyes. And when it came time to party, Max had every guest up dancing, reading the crowd perfectly and curating the vibe exactly how we imagined. He’s that rare mix of incredible musician and top-tier DJ all in one. On top of that, he was an absolute professional; extremely easy to work with, super organised, and made the whole process stress-free. Max, thank you for making our wedding unforgettable. We’re so grateful we had you there! Love Annie and TJ xx" },
  { name: "Leanne S.", date: "October 2025", text: "We honestly couldn’t have asked for a better musician than Max for our wedding. From the first conversation, it was clear that he’s not only incredibly talented, but also thoughtful and professional in every way. Max made the whole process effortless — he was responsive, organised, and had a great instinct for what would work best with our guests. His voice and presence is amaaaazing! During the canapes, guests were completely drawn in by his acoustic set and afterward, so many people came up to us asking, “Where did you find him?” Max didn’t just play music; he added something really special to the atmosphere of the day. Calm, confident, and exceptionally skilled — he’s the kind of performer who makes you feel like everything is under control, and that you're in for something memorable — and our dancefloor was definitely memorable all thanks to Max's DJing and awesome song choices! We couldn’t recommend Max more highly!!!" },
  { name: "Ariana M.", date: "September 2025", text: "We got married in August and ever since then everyone has commented about how good Max was on the day! He is such a beautiful singer and guitarist and an even more impressive DJ! We loved working with him as he was quick to respond, did everything we asked in terms of song choice and timings etc and even stepped in as MC on a day's notice! He is super professional and his DJ setup with the lights was so professional, so our dancefloor was so so full of energy! 2 of our friends already said they want to book him for their weddings. Thanks Max!!" },
  { name: "Pearce J.", date: "September 2025", text: "Max is THE BEST! We booked Max as we had seen him play at a friend's wedding the year before and he absolutely was the star of both weddings! He has such an amazing soulful voice and his performance during the ceremony and canapes was truly magic. Our dancefloor was exactly what we wanted — non-stop dancing all night long! Working with Max was a dream — super kind and relaxed, he DJ'd all the music we wanted him to on the dancefloor and his performance as we walked down the aisle was unbelievable." },
  { name: "Ruby S.", date: "September 2025", text: "Max was SO good to work with! Super fast communication and his relaxed style kept us at ease in the lead up and on our wedding day! His version of \"All of Me\" as I walked down the aisle had everyone in tears and the dancefloor was UNBELIEVABLE! So many of our guests have commented about how good the DF was and that was all because of Max's amazing song choices! I would 100% recommend him!!!" },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">What Couples Say</h2>
          <p className="text-muted-foreground font-body mb-4">5.0 out of 5 · {reviews.length} reviews on Easy Weddings</p>
          <div className="gold-divider mb-16" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl p-7 mb-6 break-inside-avoid"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-7 h-7 text-gold-light/40" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-foreground">{review.name}</span>
                <span className="text-muted-foreground text-sm font-body">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
