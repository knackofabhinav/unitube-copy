import { createServer } from "miragejs";

export function setupMockServer() {
  createServer({
    routes() {
      this.get("/api/videos", () => ({
        videos: [
          {
            id: 1,
            name: "Is University Worth it Anymore? My HONEST advice on the state of Universities in 2020.",
            channel: "James Jani",
            views: "336,415",
            likes: "17K",
            dislikes: "231",
            description: `Is university worth it, or is university a scam? 
            How valuable is a degree, and what degree should I choose? 
            
            These are very important questions you must ask yourself when deciding whether or not you should go to university. 
            
            I’ve spoken to so many people about this topic and I break it all down in this video.
            
            NOTE: this video is primarily for those in England, but some information I discuss applies to the US as well. 
            
            
            ******
            👇 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐓𝐡𝐞 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 // 𝐁𝐞𝐜𝐨𝐦𝐞 𝐀 𝐏𝐚𝐭𝐫𝐨𝐧! 
            ►  https://www.patreon.com/jamesvj​
            
            💻𝐖𝐡𝐞𝐫𝐞 𝐈 𝐛𝐞𝐠𝐚𝐧 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐡𝐨𝐰 𝐭𝐨 𝐞𝐝𝐢𝐭 + 𝐨𝐭𝐡𝐞𝐫 𝐜𝐥𝐚𝐬𝐬𝐞𝐬 (𝐒𝐤𝐢𝐥𝐥𝐬𝐡𝐚𝐫𝐞) 
            ► https://skillshare.eqcm.net/Kr3Yn​
            
            📈𝐆𝐞𝐭 𝟐 𝐅𝐑𝐄𝐄 𝐒𝐓𝐎𝐂𝐊𝐒 𝐎𝐍 𝐖𝐄𝐁𝐔𝐋𝐋 𝐰𝐡𝐞𝐧 𝐲𝐨𝐮 𝐝𝐞𝐩𝐨𝐬𝐢𝐭 $𝟏𝟎𝟎 (𝐔𝐒):
            ► https://act.webull.com/kol-us/share.h...​
            
            📹𝗠𝘆 𝗘𝗾𝘂𝗶𝗽𝗺𝗲𝗻𝘁: https://bit.ly/2OfHCTO​
            
            📚 𝐌𝐨𝐬𝐭 𝐈𝐧𝐟𝐥𝐮𝐞𝐧𝐭𝐢𝐚𝐥 𝐁𝐨𝐨𝐤𝐬 𝐈 𝐇𝐚𝐯𝐞 𝐑𝐞𝐚𝐝: https://bit.ly/33pDvw7​
            
            🎶 𝐌𝐮𝐬𝐢𝐜 𝐔𝐬𝐞𝐝: 
            Epidemic Sounds - https://bit.ly/2SblgUB​ 
            Artlist - https://bit.ly/2IzPbVo​ 
            
            📸 Instagram: james.v.j // https://bit.ly/2TOaBBC​
            🐦 Twitter: @jamesvjani // https://bit.ly/2zYPrsT​
            
            
            ******
            
            ARE STUDENT LOANS WORTH IT?
            I don’t think student debt should be a major concern – at least not if you are in England. Here’s how student loans work in England: you begin by choosing your repayment plan. Plans 1 & 2 will only have you paying 9% of your income that goes above the threshold (£25.72k) every month. The threshold is the amount of money you are expected to earn a year before you start paying back student loans. On an income of £40k you will only be repaying £1,285 a year. It’s not a lot, and it all gets written off after 30 years anyway. So what’s my biggest concern with going to university…? 
            
            WHAT DEGREE SHOULD I DO?
            Choosing your degree is the most important factor in this debate. There are so many people that will choose a degree because of parental pressure, societal pressure, or pressure from their friends. They will choose a degree because it looked “fun”, or it seemed “interesting”, but a lot of people do not ask themselves: what career do I want to get into? And even more importantly: do I need this degree to get into a career?
            
            SHOULD YOU TAKE A GAP YEAR?
            One of my biggest solutions to not knowing whether or not you should go to university, and what degree you should pick is taking a gap year. I know it works slightly different in the US, but in England you are given the choice to take a year off after sixth form (otherwise known as a “gap year”). Take it.
            
            WHAT SHOULD I DO IN A GAP YEAR?
            A few of my recommendations are reading, getting a job, going to networking events, and travelling. Generally, you want to experiment and try different things. It’s important to see what you enjoy and are more inclined towards, which can aid you in making a decision on what career you want to get into. Once you know what career you would like to go down, check to see if you need a degree to start working in that field. If you don’t, then it may be that going to university is not needed for you to get a job.
            
            WHAT IS THE VALUE OF A DEGREE?
            Grade inflation is a big problem that universities are tying to tackle. More than half of university students are leaving with a first, or a 2:1. To add to that, the student cap that once prevented universities from letting in as many students as they liked has now been removed. Removing the student cap has increased competition between universities, and now it’s become a major competition to get as many students in as possible. 
            This all becomes problematic when you look at how employable a degree makes you. The more graduates with top classifications there are, the less an employer can differentiate between who is truly the best, and who is not. My personal opinion is that a degree can get you a foot in the door for a job, but that is as far as it goes. The rest is up to how you perform in the interview.
            I would even go as far as to say that some employers (depending on the career) prefer non-graduates, so that they are coming into the company with a ‘clean slate’ and can be moulded through the company and not already enter the job with pre—conceived ideas and notions on how that company may or may not function.
            
            
            ******
            All materials in these videos are used for educational purposes and fall within the guidelines of fair use. No copyright infringement is intended. If you are or represent the copyright owner of materials used in this video and have a problem with the use of said material, please contact me via my email in the "about" page on my channel.
            
            AFFILIATE DISCLOSURE: there may be a few links in this description that, at no cost to you, will earn me a commission if you choose to click them and make a purchase 🙂
            Don’t worry – I only ever promote things that have genuinely helped me.
            
            Copyright © James Jani 2020`,
            duration: "24:43",
            url: "https://www.youtube.com/embed/Xg6CGNoynDI",
            thumbnail:
              "https://img.youtube.com/vi/Xg6CGNoynDI/maxresdefault.jpg",
          },
          {
            id: 2,
            name: "The Untold Truth About Money: How to Build Wealth From Nothing.",
            channel: "James Jani",
            views: "6,221,587",
            likes: "398K",
            dislikes: "8.9K",
            description: `There is an untold truth about money – an actual equation that allows you to build wealth from nothing.

            It’s an equation that is hardly taught in schools if at all, and is often overlooked by those who are trying to get rich, or achieve their dreams of “financial freedom”. 
            
            In this video, we’ll take a look at exactly what that equation is. `,
            duration: "17:25",
            url: "https://www.youtube.com/embed/6mRbDEtDoyA",
            thumbnail:
              "https://img.youtube.com/vi/6mRbDEtDoyA/maxresdefault.jpg",
          },
          {
            id: 3,
            name: "Jordan Peterson On Importance Of Reading",
            channel: "H3 Podcast Highlights",
            views: "2,682,885",
            likes: "70K",
            dislikes: "982",
            description:`Watch Full Episodes here... https://www.youtube.com/h3podcast​
            Watch live every Tuesday and Friday... http://twitch.tv/h3h3productions​
            MERCH... http://h3h3shop.com​
            
            Follow us on Twitter... http://twitter.com/h3h3productions​
            Follow us on Instagram... https://www.instagram.com/h3h3product...​
            Follow us on Facebook... https://www.facebook.com/H3h3producti...`,
            duration: "9:02",
            url: "https://www.youtube.com/embed/U4BoRsPUwUs",
            thumbnail: "https://img.youtube.com/vi/lDb8pe3eewc/hqdefault.jpg",
          },
          {
            id: 4,
            name: "Which Books You Should Read - Shwetabh Gangwar",
            channel: "Shwetabh Gangwar",
            views: "96,366",
            likes: "8.8K",
            dislikes: "152",
            description:`Shwetabh Gangwar, author of the rudest book ever, talks about finding out and developing your own taste in reading books. A lot of people don't discover what they like to read personally but instead rely on popular books suggested by other people.`,
            duration: "5:11",
            url: "https://www.youtube.com/embed/ivMMVtwwVAs",
            thumbnail:
              "https://img.youtube.com/vi/ivMMVtwwVAs/maxresdefault.jpg",
          },
          {
            id: 5,
            name: "15 Books JORDAN PETERSON Thinks Everyone Should Read",
            channel: "Alux.com",
            views: "783,334",
            likes: "28K",
            dislikes: "803",
            description:`15 Books JORDAN PETERSON Thinks Everyone Should Read | THE BOOK CLUB
            SUBSCRIBE to ALUX: https://www.youtube.com/channel/UCNjP...​
            15 Books TIM FERRISS Thinks You Should Read: https://youtu.be/9NXbcM4EKkQ​
            
            Get THE ROAD TO WIGAN PIER Audiobook for free: https://www.alux.com/freebook​
            Buy it on Amazon: https://amzn.to/2XAOGwp​ 
            
            Disclaimer: Signing up for Audible will result in financial compensation for Alux Inc which in turn helps the channel.
            
            Books we display in the video: 
            1. Man’s Search for Meaning by Viktor Frankl; https://amzn.to/2PoQcix​ 
            
            2. How to Spend $50 Billion to Make the World a Better Place by Björn Lomborg; https://amzn.to/2GAqQKC​ 
            
            3. Modern Man in Search of A Soul by Carl Jung; https://amzn.to/2IMqgvU​ 
            
            4. Brave New World by Aldous Huxley; https://amzn.to/2Gtp4uB​ 
            
            5. The Idiot by Fyodor Dostoyevsky; https://amzn.to/2XAOA81​ 
            
            6. Beyond Good And Evil by Friedrich Nietzsche; https://amzn.to/2XHBNAV​ 
            
            7. The Road to Wigan Pier by George Orwell; https://amzn.to/2XAOGwp​ 
            
            8. A History of Religious Ideas by Mircea Eliade;
            PART I: https://amzn.to/2DutFvU​ 
            PART II: https://amzn.to/2DttBMN​ 
            PART III: https://amzn.to/2GsUqBp​ 
            
            9. A Farewell to Arms by Ernest Hemingway; https://amzn.to/2IAmFlj​ 
            
            10. THe World’s Religions by Huston Smith; https://amzn.to/2ICJHbi​ 
            
            11. Affective Neuroscience by Jaak Panksepp; https://amzn.to/2GtuBRO​ 
            
            12. The Grapes of Wrath by John Steinbeck; https://amzn.to/2PscrUu​ 
            
            13. Notes From The Underground by Fyodor Dostoyevsky; https://amzn.to/2VmDyG0​ 
            
            14. The Red and the Black by Stendhal; https://amzn.to/2GAK02G​ 
            
            15. The Gulag Archipelago by Aleksandr Solzhenitsyn; https://amzn.to/2Gzv30L​ 
            
            16. Maps of Meaning: The Architecture of Belief by Jordan Peterson; https://amzn.to/2DtUW1s​ `,
            duration: "5:15",
            url: "https://www.youtube.com/embed/2pWCyUys6lM",
            thumbnail:
              "https://img.youtube.com/vi/2pWCyUys6lM/maxresdefault.jpg",
          },
          {
            id: 6,
            name: `How to Focus on Your Work - 3 Lessons from "Hyperfocus"`,
            channel: "Thomas Frank",
            views: "221,864",
            likes: "11K",
            dislikes: "96",
            description:`Three useful lessons from one of my favorite productivity authors. Get a free trial of Skillshare here: https://skl.sh/thomasfrank12201​

            Ad-free version on Nebula: https://thomasjfrank.com/nebula/​
            
            🛠 My FREE Notion templates for task management, note-taking, and more: https://thomasjfrank.com/templates/​
            
            🎵 I make study/work music, give it a listen: https://www.youtube.com/channel/UCmqK...​
            
            🐦Follow Me:
            Instagram ➔ https://instagram.com/tomfrankly​
            Twitter ➔ https://twitter.com/tomfrankly​
            Podcast ➔ https://www.youtube.com/TheCollegeInf...​
            Spotify Study Playlist ➔ https://open.spotify.com/user/thomasf...​
            
            ⏰Timestamps:
            
            00:00​ - Introduction
            01:12​ - Meta-Awareness
            03:36​ - Hyperfocus and Scatterfocus
            07:03​ - Intention-Setting
            
            🖱Links from the video:
            
            Check out the book: https://www.goodreads.com/book/show/3...​
            
            My book notes: https://thomasjfrank.com/hyperfocus-b...​
            
            Working from Home - How to Set Up Your Workspace: https://www.youtube.com/watch?v=tMTxi...​
            
            Charles Cornell on Deliberate Practice: https://www.youtube.com/watch?v=FbD8n...​
            
            Sensory bandwidth research: https://link.springer.com/chapter/10....​
            
            🎥My Video Gear:
            https://www.amazon.com/shop/thomasfrank​
            
            🎞 Video clips supplied by Getty Images
            
            🎧Background music via Musicbed. Get a 30-day free trial of awesome music for your videos: https://mscbd.fm/thmsfr​
            
            💰 I'm fortunate enough to work with great sponsors who support my work, so I don't use Patreon or any other crowdfunding service. However, if you'd like to support a worthy cause, consider donating to help more children get access to a high-quality education: https://fundraise.pencilsofpromise.or...`,
            duration: "12:21",
            url: "https://www.youtube.com/embed/0ZfLwXF22l4",
            thumbnail:
              "https://img.youtube.com/vi/0ZfLwXF22l4/maxresdefault.jpg",
          },
          {
            id: 7,
            name: `45 Life Lessons From A 90-Year-Old`,
            channel: "RedFrost Motivation",
            views: "1,464,794",
            likes: "69K",
            dislikes: "590",
            description:`Narrated by Shane Morris  

            Written by Regina Brett`,
            duration: "6:45",
            url: "https://www.youtube.com/embed/2k0IkYdgbBE",
            thumbnail:
              "https://img.youtube.com/vi/2k0IkYdgbBE/maxresdefault.jpg",
          },
          {
            id: 8,
            name: `BE UNSHAKEABLE - Ultimate Stoic Quotes Compilation`,
            channel: "RedFrost Motivation",
            views: "2,464,794",
            likes: "99K",
            dislikes: "1.1K",
            description:`Our popular Stoicism series now available to consume in one sitting  

            Powerful wisdom from Marcus Aurelius, Seneca and Epictetus 
            
            Performed by Chris Lines`,
            duration: "12:50",
            url: "https://www.youtube.com/embed/2bguEiUgDA4",
            thumbnail:
              "https://img.youtube.com/vi/2bguEiUgDA4/maxresdefault.jpg",
          },
          {
            id: 9,
            name: `Tiny Changes, Remarkable Results - Atomic Habits by James Clear`,
            channel: "Ali Abdaal",
            views: "1,053,763",
            likes: "45K",
            dislikes: "259",
            description:`In this episode of Book Club we're talking about Atomic Habits by James Clear. We look at the power of 1% change, the importance of adopting better systems rather than setting goals, the need to focus on identity rather than outcomes and, ultimately, how to build better habits through the 4 laws of behavioural change. Enjoy!

            📚 Atomic Habits by James Clear- https://geni.us/atomichabitsbook​
            📕 Book Club Episode 1 - What Makes People Successful? https://www.youtube.com/watch?v=RGbCR...​
            
            TIMESTAMPS:
            01:20​ - Why does 1% matter?
            03:08​ - The Importance of Systems Rather Than Goals
            05:10​ - Identity Change is the North Star of Habit Change
            06:30​ - How to Build A Habit
            06:50​ - The 4 Laws of Behaviour Change
            
            MY FREE ONLINE COURSES:
            🚀  Productivity Masterclass - Principles and Tools to Boost Your Productivity - https://go.aliabdaal.com/course/produ...​
            🎬  Video Editing with Final Cut Pro X - From Beginner to YouTuber - https://go.aliabdaal.com/course/video...​
            🎓  How to Study for Exams - An Evidence-Based Masterclass - https://go.aliabdaal.com/course/studying​
            😃  How to be Happier - Stoicism Masterclass - https://go.aliabdaal.com/course/stoicism​
            
            MY GEAR:
            🎥 My YouTube Camera Gear - https://kit.co/AliAbdaal​
            ⌨️ My Keyboard - Wireless Coral mechanical keyboard (Cherry Blue) - https://iqunix.store/ali​ 
            📝My favourite iPad Screen Protector - Paperlike - https://paperlike.com/ali​ 
            
            BE MY FRIEND:
            💌 Sign up to my weekly email newsletter - https://aliabdaal.com/friendzone​
            🌍 My website / blog - https://www.aliabdaal.com​ 
            🎙My weekly podcast - https://www.notoverthinking.com​
             
            📸 Instagram - https://instagram.com/aliabdaal​
            🐦 Twitter - https://twitter.com/aliabdaal​
            🎮 Twitch - https://twitch.tv/aliabdaal​
            
            WHO AM I:
            I'm Ali, a junior doctor working in Cambridge, UK. I make videos about medicine, technology, productivity and lifestyle design. I also have a weekly podcast with my brother (https://www.notoverthinking.com​), and I write a weekly email newsletter that contains some quick thoughts + links to interesting things (https://aliabdaal.com/friendzone​).
            
            🌍 My website / blog - https://www.aliabdaal.com​ 
            
            GET IN TOUCH:
            If you’d like to talk, I’d love to hear from you. Tweeting @AliAbdaal directly will be the quickest way to get a response, but if your question is very long, feel free to email me at hi@aliabdaal.com. I try my best to reply to things but there sadly aren't enough hours in the day to respond to everyone 😭
            
            PS: Some of the links in this description are affiliate links that I get a kickback from 😜`,
            duration: "11:11",
            url: "https://www.youtube.com/embed/YT7tQzmGRLA",
            thumbnail:
              "https://img.youtube.com/vi/YT7tQzmGRLA/maxresdefault.jpg",
          },
          {
            id: 10,
            name: `THE PSYCHOLOGY OF MONEY (BY MORGAN HOUSEL)`,
            channel: "The Swedish Investor",
            views: "515,046",
            likes: "16K",
            dislikes: "292",
            description:`Support the channel by getting The Psychology of Money by Morgan Housel here: https://amzn.to/3aTPV3a​ 

            As an Amazon Associate I earn from qualified purchases.
            
            ---
            
            Have you heard the story about Ronald Read, the janitor that had 8 million dollars in savings when he died in 2014? Yes, you heard that right. Janitor. $8 millions. And he didn´t win the lottery or inherit the money either. He just saved consistently throughout his life, while letting the wonders of compounding do its thing. The morale is that your behaviour with money is oftentimes more important than how intelligent you are. Even if you don´t have a diploma from Harvard, or work on Wall Street, you can become rich by just behaving in a sound way. As Morgan Housel puts it: “financial success is not a hard science. It’s a soft skill, where how you behave is more important than what you know.” Spend your next ten or fifteen minutes on this video, and you might excel on the soft skill of investing! This is a top 5 takeaways summary of The Psychology of Money, by Morgan Housel.
            
            ---
            
            Want to know more about human psychology and its relation to money? Check out my top 10 (!) takeaways from Thinking Fast and Slow by Daniel Kahneman here: https://youtu.be/cuj2Kq8rvGw​ 
            
            ---
            
            Top 5 takeaway of The Psychology of Money by Morgan Housel:
            
            01:14​ 1. Pay the Price
            04:18​ 2. Never Enough
            07:50​ 3. Crazy is in the Eye of the Beholder
            10:32​ 4. Peek-A-Boo
            12:30​ 5. The Seduction of Pessimism
            
            ---
            
            My goal with this channel is to help you make more money and improve your personal finances. How to become a millionaire? There are many ways to get there – investing in the stock market, becoming a stock trader, doing real estate investing, or why not becoming an entrepreneur? But whether you are interested in how to invest in stocks or investing strategies for creating passive income with rental properties – I hope to be able to provide you with a solution (or at least an idea) here. Warren Buffett - the greatest investor of our time - says that you should fill your mind with competing ideas and then see what makes sense to you. This channel is about filling your mind with those ideas. And in the process – upgrading your money-making toolbox.`,
            duration: "15:34",
            url: "https://www.youtube.com/embed/TJDcGv9OH4Q",
            thumbnail:
              "https://img.youtube.com/vi/TJDcGv9OH4Q/maxresdefault.jpg",
          },
          {
            id: 11,
            name: `Defeat - Kahlil Gibran (A Life Changing Poem for Dark Times)`,
            channel: "BEKNOWN",
            views: "947,322",
            likes: "35K",
            dislikes: "292",
            description:`Read by Shane Morris
            -
            Kahlil Gibran was the key figure in a Romantic movement that transformed Arabic literature in the first half of the twentieth century. 
            -
            Full Poem:
            
            Defeat, my Defeat, my solitude and my aloofness;
            You are dearer to me than a thousand triumphs,
            And sweeter to my heart than all world-glory.
             
            Defeat, my Defeat, my self-knowledge and my defiance,
            Through you I know that I am yet young and swift of foot
            And not to be trapped by withering laurels.
            And in you I have found aloneness
            And the joy of being shunned and scorned.
             
            Defeat, my Defeat, my shining sword and shield,
            In your eyes I have read
            That to be enthroned is to be enslaved,
            And to be understood is to be leveled down,
            And to be grasped is but to reach one’s fullness
            And like a ripe fruit to fall and be consumed.
             
            Defeat, my Defeat, my bold companion,
            You shall hear my songs and my cries and my silences,
            And none but you shall speak to me of the beating of wings,
            And urging of seas,
            And of mountains that burn in the night,
            And you alone shall climb my steep and rocky soul.
             
            Defeat, my Defeat, my deathless courage,
            You and I shall laugh together with the storm,
            And together we shall dig graves for all that die in us,
            And we shall stand in the sun with a will,
            And we shall be dangerous.`,
            duration: "3:19",
            url: "https://www.youtube.com/embed/JE8taOWjVbc",
            thumbnail:
              "https://img.youtube.com/vi/JE8taOWjVbc/maxresdefault.jpg",
          },
          {
            id: 11,
            name: `When I Die - Rumi (Powerful Life Poetry)`,
            channel: "RedFrost Motivation",
            views: "683,322",
            likes: "41K",
            dislikes: "202",
            description:`Read by Shane Morris
            -
            Jalaluddin Rumi was an ancient Persian scholar and Sufi master. Today he is recognised as one of the greatest poets who ever lived, due in part to how his words seem to speak to the divine.
            
            #rumi​ #poetry​ #wisdom​ #death`,
            duration: "3:19",
            url: "https://www.youtube.com/embed/COAAvcpocU4",
            thumbnail:
              "https://img.youtube.com/vi/COAAvcpocU4/maxresdefault.jpg",
          },
          {
            id: 12,
            name: `Jordan Peterson's Ultimate Advice for Students and College Grads - STOP WASTING TIME`,
            channel: "Motivation2Study",
            views: "6,683,322",
            likes: "241K",
            dislikes: "2.2K",
            description:`Stop Wasting Time! This is Jordan Peterson's Ultimate Advice for Students, College Grads, and Everyone Alive!`,
            duration: "15:19",
            url: "https://www.youtube.com/embed/wsNzAuYDgy0",
            thumbnail:
              "https://img.youtube.com/vi/wsNzAuYDgy0/maxresdefault.jpg",
          },
          {
            id: 13,
            name: `Why Self Respect Is More POWERFUL Than You Think - Jordan Peterson Motivation`,
            channel: "SUCCESS CHASERS",
            views: "683,322",
            likes: "41K",
            dislikes: "200",
            description:`Stop Wasting Time! This is Jordan Peterson's Ultimate Advice for Students, College Grads, and Everyone Alive!`,
            duration: "11:40",
            url: "https://www.youtube.com/embed/zlJdRN97DRI",
            thumbnail:
              "https://img.youtube.com/vi/zlJdRN97DRI/maxresdefault.jpg",
          },
          {
            id: 14,
            name: `The Most Eye Opening 10 Minutes Of Your Life | David Goggins`,
            channel: "David Goggins",
            views: "5,783,322",
            likes: "141K",
            dislikes: "2.1K",
            description:`What does it take to be the TOUGHEST MAN ALIVE? Watch this video to find out! 
            Buy David Goggins Best-Selling Book: https://amzn.to/36IFLAe​
            
            David Goggins is a retired Navy SEAL, and accomplished ultra-endurance athlete. He is also the Guinness 24-hour pull-up world record holder with 4030 repetitions. There is a lot we can learn from this inspiring man.`,
            duration: "10:15",
            url: "https://www.youtube.com/embed/TLKxdTmk-zc",
            thumbnail:
              "https://img.youtube.com/vi/TLKxdTmk-zc/maxresdefault.jpg",
          },
          {
            id: 15,
            name: `THE MINDSET OF A WINNER | Kobe Bryant Champions Advice`,
            channel: "Kobe Bryant",
            views: "9,783,322",
            likes: "241K",
            dislikes: "2.1K",
            description:`"You Want First Place Come Play With Me, You Want Second Place Go Somewhere Else." KOBE BRYANT. The Mindset Of A Winner.
            MAMBA MENTALITY book: https://amzn.to/2O5n9C1​
            Kobe's new book: https://amzn.to/2LLkAlC​
            
            Special thanks to Patrick-Bet David from Valuetainment. Subscribe to them for more inspiring interviews: http://bit.ly/ValuetainmentYouTube​
            
            ▶Speaker:
            
            Kobe Bryant`,
            duration: "11:25",
            url: "https://www.youtube.com/embed/VSceuiPBpxY",
            thumbnail:
              "https://img.youtube.com/vi/VSceuiPBpxY/maxresdefault.jpg",
          },
          {
            id: 16,
            name: `The Road Not Taken - Robert Frost (Powerful Life Poetry)`,
            channel: "RedFrost Motivation",
            views: "1,783,322",
            likes: "57K",
            dislikes: "482",
            description:`Read by Robert Frost
            Music by Chris Coleman`,
            duration: "2:30",
            url: "https://www.youtube.com/embed/vrBHd41YqTc",
            thumbnail:
              "https://img.youtube.com/vi/vrBHd41YqTc/maxresdefault.jpg",
          },
          {
            id: 17,
            name: `PSYCHOTHERAPY - Sigmund Freud`,
            channel: "The School Of Life",
            views: "2,784,398",
            likes: "57K",
            dislikes: "482",
            description:`Sigmund Freud, the inventor of psychoanalysis, appreciated the many ways in which our minds are troubled and anxious. It isn't us in particular: it's the human condition. Find out more about how Freud thought in our 'Great Thinkers': https://goo.gl/toR8m8`,
            duration: "7:19",
            url: "https://www.youtube.com/embed/mQaqXK7z9LM",
            thumbnail:
              "https://img.youtube.com/vi/mQaqXK7z9LM/maxresdefault.jpg",
          }
        ],
      }));
    },
  });
}
