/* grain of taste — EN / SR / RU.
   The site is written in English. This file swaps every visible English string for its
   Serbian (Latin) or Russian version, picked automatically from the browser language
   and switchable in the header. Unknown strings stay in English.
   To add a translation: one line  "english text": ["српски/srpski", "русский"],  */
(function () {
  var T = {
    /* ---------- header / nav / footer ---------- */
    "bread, backed by science": ["hleb, potkrepljen naukom", "хлеб, подкреплённый наукой"],
    "recipes": ["recepti", "рецепты"],
    "starters": ["kisela testa", "закваски"],
    "science & bread": ["nauka i hleb", "наука и хлеб"],
    "myths": ["mitovi", "мифы"],
    "calculator": ["kalkulator", "калькулятор"],
    "what you need": ["šta vam treba", "что нужно"],
    "about": ["o meni", "обо мне"],
    "home": ["početna", "главная"],
    "home →": ["početna →", "на главную →"],
    "@grain_of_taste · belgrade": ["@grain_of_taste · beograd", "@grain_of_taste · белград"],
    "no magic, just scales": ["bez magije, samo vaga", "никакой магии, только весы"],
    "instagram →": ["instagram →", "instagram →"],
    "follow": ["prati", "подписаться"],
    "open": ["otvori", "открыть"],
    "read": ["čitaj", "читать"],

    /* ---------- recipe: rye tin loaf ---------- */
    "rye tin loaf": ["raženi hleb u kalupu", "ржаной формовой"],
    "rye": ["raženi", "ржаной"],
    "tin loaf": ["hleb u kalupu", "формовой"],
    "Bread on rye starter that bakes in a tin and needs no talent for shaping. About 20 minutes of your hands in total — the rest of the time the dough works on its own. Rye is not about gluten. Rye is about patience.": ["Hleb na raženom kiselom testu koji se peče u kalupu i ne traži talenat za oblikovanje. Ukupno oko 20 minuta vašeg rada — ostatak vremena testo radi samo. Raž nije priča o glutenu. Raž je priča o strpljenju.", "Хлеб на ржаной закваске, который печётся в форме и не требует таланта к формовке. Всего около 20 минут работы ваших рук — остальное время тесто работает само. Рожь не про клейковину. Рожь про терпение."],
    "of your work": ["vašeg rada", "вашей работы"],
    "rye / whole wheat / white": ["raž / integralno / belo", "рожь / цельнозерн. / белая"],
    "rye, but soft": ["raženi, a mekan", "ржаной, но мягкий"],
    "the reel": ["rilsa", "рилс"],
    "into the tin": ["u kalup", "в форму"],
    "proof": ["narastanje", "расстойка"],
    "cool": ["hlađenje", "остывание"],
    "loaf tin": ["kalup za hleb", "форма для хлеба"],
    "big enough for the dough": ["dovoljno velik za testo", "достаточно большая для теста"],
    "tray for steam": ["pleh za paru", "противень для пара"],
    "or any oven-safe dish": ["ili bilo koja posuda za rernu", "или любая посуда для духовки"],
    "No banneton, no dutch oven, no shaping. The tin does the shaping for you. Wet hands do the rest.": ["Bez korpe, bez livenog lonca, bez oblikovanja. Kalup oblikuje umesto vas. Mokre ruke rade ostalo.", "Без корзинки, без чугунка, без формовки. Форму хлебу даёт сама форма. Остальное делают мокрые руки."],
    "two tin sizes": ["dve veličine kalupa", "два размера формы"],
    "rye starter · 100%": ["raženo kiselo testo · 100%", "ржаная закваска · 100%"],
    "rye flour": ["raženo brašno", "ржаная мука"],
    "tin, about": ["kalup, oko", "форма, примерно"],
    "Inside the starter: 68 g rye flour + 68 g water (600 g loaf), 130 g + 130 g (1150 g loaf). All the flour together is 339 / 650 g, all the water 254 / 487 g. The starter is 40% of all the flour, and its flour and water are already counted in the 75%.": ["U kiselom testu: 68 g raženog brašna + 68 g vode (hleb od 600 g), 130 g + 130 g (hleb od 1150 g). Ukupno brašna 339 / 650 g, vode 254 / 487 g. Kiselo testo je 40% od ukupnog brašna, a njegovo brašno i voda su već uračunati u 75%.", "В закваске: 68 г ржаной муки + 68 г воды (хлеб 600 г), 130 г + 130 г (хлеб 1150 г). Вся мука вместе — 339 / 650 г, вся вода — 254 / 487 г. Закваска — 40% от всей муки, её мука и вода уже учтены в 75%."],
    "starter of all flour": ["kiselog testa od brašna", "закваски от всей муки"],
    "I baked the big one: 1150 g of dough. Take a roomy tin — rye grows up, not sideways, and it needs space to do it.": ["Ja sam pekla veliki: 1150 g testa. Uzmite prostran kalup — raž raste nagore, ne u stranu, i treba joj mesta.", "Я пекла большой: 1150 г теста. Берите вместительную форму — рожь растёт вверх, а не вширь, и ей нужно место."],
    "sticky is normal": ["lepljivo je normalno", "липкое — это нормально"],
    "the whole thing": ["sve odjednom", "всё целиком"],
    "in under a minute": ["za manje od minuta", "меньше чем за минуту"],
    "20 minutes of you. ~6 hours of bread.": ["20 minuta vas. ~6 sati hleba.", "20 минут вас. ~6 часов хлеба."],
    "Mixing, salt, one fold, a log into the tin. Then you go live your life while the dough rises, and come back to bake. The reel shows every step; below, each step has its own video and the details.": ["Mešanje, so, jedno presavijanje, valjak u kalup. Onda idete da živite svoj život dok testo raste, i vraćate se da pečete. Rils pokazuje svaki korak; ispod svaki korak ima svoj video i detalje.", "Замес, соль, одна складка, колбаска в форму. Дальше живёте свою жизнь, пока тесто растёт, и возвращаетесь печь. В рилсе все шаги, а ниже у каждого шага своё видео и подробности."],
    "Hands-on: mixing, salt, the fold, the shaping, scoring — about 20 min.": ["Rad rukama: mešanje, so, presavijanje, oblikovanje, zasecanje — oko 20 min.", "Руками: замес, соль, складка, формовка, надрез — около 20 мин."],
    "Waiting: 40 + 30 min of rest, 3–4 h of proofing, about 40 min in the oven.": ["Čekanje: 40 + 30 min odmora, 3–4 h narastanja, oko 40 min u rerni.", "Ожидание: 40 + 30 мин отдыха, 3–4 ч расстойки, около 40 мин в духовке."],
    "And then the hardest part: 6–8 h of cooling before you cut it.": ["A onda najteže: 6–8 h hlađenja pre sečenja.", "И самое сложное: 6–8 ч остывания, прежде чем резать."],
    "step by step below ↓": ["korak po korak ispod ↓", "по шагам ниже ↓"],
    "mix & leave it alone": ["izmešajte i ostavite na miru", "замесить и оставить в покое"],
    "Feed the starter 4–6 h before. It's ready when it has about doubled, the dome is just starting to sink, and it smells sour and fruity, not like vinegar.": ["Nahranite kiselo testo 4–6 h ranije. Spremno je kada se otprilike udvostruči, kupola tek počinje da se spušta, a miriše kiselo i voćno, ne na sirće.", "Покормите закваску за 4–6 ч. Она готова, когда выросла примерно вдвое, куполок только начинает проседать, а пахнет кисло-фруктово, не уксусом."],
    "Water + starter, then all the flour: rye, whole wheat, white.": ["Voda + kiselo testo, pa sve brašno: raženo, integralno, belo.", "Вода + закваска, затем вся мука: ржаная, цельнозерновая, белая."],
    "Mix until there are no dry lumps left. That's it — no kneading yet.": ["Mešajte dok ne nestanu suve grudvice. To je sve — bez mešenja za sada.", "Перемешайте, пока не останется сухих комочков. И всё — пока без вымешивания."],
    "Cover and leave for 40 min.": ["Pokrijte i ostavite 40 min.", "Накройте и оставьте на 40 мин."],
    "min rest": ["min odmora", "мин отдыха"],
    "dough temperature": ["temperatura testa", "температура теста"],
    "no dry flour — and walk away": ["bez suvog brašna — i idite", "без сухой муки — и уходите"],
    "salt & one fold": ["so i jedno presavijanje", "соль и одна складка"],
    "Salt in. Knead it in with a wet hand until you can't feel the grains.": ["Dodajte so. Umesite je mokrom rukom dok ne prestanete da osećate zrnca.", "Соль в тесто. Вмешайте мокрой рукой, пока не перестанете чувствовать крупинки."],
    "The dough is sticky — that's rye, it's meant to be. Wet hands, not more flour.": ["Testo je lepljivo — to je raž, tako treba. Mokre ruke, ne više brašna.", "Тесто липкое — это рожь, так и задумано. Мокрые руки, а не больше муки."],
    "One fold: stretch one side up and fold it over, turn the bowl, repeat on all four sides.": ["Jedno presavijanje: istegnite jednu stranu nagore i preklopite, okrenite činiju, ponovite sa sve četiri strane.", "Одна складка: растяните один край вверх и заверните, поверните миску, повторите со всех четырёх сторон."],
    "Cover and leave for 30 min.": ["Pokrijte i ostavite 30 min.", "Накройте и оставьте на 30 мин."],
    "fold": ["presavijanje", "складка"],
    "sticky? good. wet your hands": ["lepljivo? odlično. nakvasite ruke", "липнет? отлично. намочите руки"],
    "a log into the tin": ["valjak u kalup", "колбаска в форму"],
    "Grease the tin with oil or line it with parchment.": ["Namažite kalup uljem ili ga obložite papirom za pečenje.", "Смажьте форму маслом или застелите пергаментом."],
    "Wet hands: roll the dough into a log and put it in seam down.": ["Mokrim rukama oblikujte testo u valjak i stavite ga spojem nadole.", "Мокрыми руками скатайте тесто в колбаску и положите швом вниз."],
    "Smooth the top with a wet palm.": ["Zagladite vrh mokrim dlanom.", "Разгладьте верх мокрой ладонью."],
    "The dough should fill about 2/3 of the tin. More than that — take a bigger tin, or the loaf will spill over.": ["Testo treba da zauzme oko 2/3 kalupa. Ako je više — uzmite veći kalup, inače će hleb prekipeti.", "Тесто должно занимать около 2/3 формы. Если больше — возьмите форму побольше, иначе хлеб вылезет через край."],
    "of the tin": ["kalupa", "формы"],
    "seam ↓": ["spoj ↓", "шов ↓"],
    "down": ["nadole", "вниз"],
    "this is all the shaping there is": ["to je celo oblikovanje", "вот и вся формовка"],
    "proof. go live your life": ["narastanje. idite živite svoj život", "расстойка. живите свою жизнь"],
    "Cover the tin and leave it at room temperature for 3–4 h.": ["Pokrijte kalup i ostavite ga na sobnoj temperaturi 3–4 h.", "Накройте форму и оставьте при комнатной температуре на 3–4 ч."],
    "It's ready when the dough has rounded into a dome, almost up to the rim, with small bubbles on top.": ["Spremno je kada se testo zaobli u kupolu, skoro do ivice, sa sitnim mehurićima na vrhu.", "Готово, когда тесто округлилось куполом почти до края формы, а сверху мелкие пузырьки."],
    "Watch the dough, not the clock: in a warm kitchen it's faster, in a cool one slower.": ["Gledajte testo, ne sat: u toploj kuhinji ide brže, u hladnoj sporije.", "Смотрите на тесто, а не на часы: в тёплой кухне быстрее, в прохладной медленнее."],
    "When it's nearly there, heat the oven to 250 °C with a tray at the bottom for steam.": ["Kad je skoro spremno, zagrejte rernu na 250 °C sa plehom na dnu za paru.", "Когда почти готово, разогрейте духовку до 250 °C с противнем внизу для пара."],
    "room temperature": ["sobna temperatura", "комнатная температура"],
    "dome": ["kupola", "купол"],
    "not the clock": ["ne sat", "а не часы"],
    "domed and nearly at the rim — time to heat the oven": ["kupola i skoro do ivice — vreme je da zagrejete rernu", "купол почти до края — пора греть духовку"],
    "how ready looks": ["kako izgleda spremno", "как выглядит готовое"],
    "before the oven": ["pre rerne", "перед печью"],
    "from above": ["odozgo", "сверху"],
    "smooth, a few bubbles": ["glatko, par mehurića", "гладкое, пара пузырьков"],
    "the dome": ["kupola", "купол"],
    "bubbles on top": ["mehurići na vrhu", "пузырьки сверху"],
    "score & bake": ["zasecanje i pečenje", "надрез и выпечка"],
    "One score along the loaf, not deep.": ["Jedan zasek duž hleba, ne dubok.", "Один надрез вдоль, неглубокий."],
    "Into the oven at 250 °C, with steam from the tray at the bottom, for 15 min.": ["U rernu na 250 °C, sa parom iz pleha na dnu, 15 min.", "В духовку на 250 °C, с паром от противня внизу, на 15 мин."],
    "At 15 min take the steam out, turn the oven down to 220 °C and bake another 20–25 min.": ["Posle 15 min izvadite paru, smanjite rernu na 220 °C i pecite još 20–25 min.", "На 15-й минуте уберите пар, убавьте духовку до 220 °C и допекайте ещё 20–25 мин."],
    "It's done at 96–98 °C inside, or when the bottom sounds hollow. Want crust all around? Take it out of the tin for the last 5–10 min.": ["Gotov je na 96–98 °C unutra, ili kada dno zvuči šuplje. Želite koricu svuda? Izvadite ga iz kalupa poslednjih 5–10 min.", "Готов при 96–98 °C внутри или когда дно звучит глухо и полое. Хотите корочку со всех сторон? Последние 5–10 мин пеките без формы."],
    "15 min with steam": ["15 min sa parom", "15 мин с паром"],
    "20–25 min, steam out": ["20–25 min, bez pare", "20–25 мин, без пара"],
    "inside = done": ["unutra = gotovo", "внутри = готов"],
    "a dark crust on rye is flavour, not a mistake": ["tamna korica na raži je ukus, ne greška", "тёмная корка у ржаного — это вкус, а не ошибка"],
    "cool. really. then slice": ["ohladite. stvarno. pa secite", "остудить. правда. потом резать"],
    "Out of the tin and onto a rack straight away.": ["Odmah iz kalupa na rešetku.", "Сразу из формы на решётку."],
    "Cool for at least 6–8 h, overnight is even better. The rye crumb keeps setting after the oven.": ["Hladite najmanje 6–8 h, preko noći je još bolje. Ražena sredina se steže i posle rerne.", "Остужайте минимум 6–8 ч, а лучше ночь. Ржаной мякиш дозревает после печи."],
    "Cut it hot and it's gummy — and it's not the starter's fault, it's impatience.": ["Isečete ga vrućeg i lepljiv je — i nije kriv kiselo testo, nego nestrpljenje.", "Разрежете горячим — будет липко, и виновата не закваска, а нетерпение."],
    "on the rack": ["na rešetki", "на решётке"],
    "even better": ["još bolje", "ещё лучше"],
    "the hardest step in the whole recipe": ["najteži korak u celom receptu", "самый сложный шаг во всём рецепте"],
    "Feed the starter 4–6 h before → mix everything, rest 40 min": ["Nahranite kiselo testo 4–6 h ranije → izmešajte sve, odmor 40 min", "Покормить закваску за 4–6 ч → замесить всё, отдых 40 мин"],
    "Salt, knead it in → one fold → rest 30 min": ["So, umesite → jedno presavijanje → odmor 30 min", "Соль, вмешать → одна складка → отдых 30 мин"],
    "A log into the tin, seam down → proof 3–4 h at room temperature until domed": ["Valjak u kalup, spojem nadole → narastanje 3–4 h na sobnoj temperaturi do kupole", "Колбаска в форму швом вниз → расстойка 3–4 ч при комнатной температуре до купола"],
    "Bake 250 °C with steam 15 min + 220 °C without steam 20–25 min → cool 6–8 h": ["Pečenje 250 °C sa parom 15 min + 220 °C bez pare 20–25 min → hlađenje 6–8 h", "Выпечка 250 °C с паром 15 мин + 220 °C без пара 20–25 мин → остывание 6–8 ч"],
    "variation": ["varijacija", "вариант"],
    "want it more sour and more rye?": ["želite kiselije i raženije?", "хотите кислее и «ржанее»?"],
    "more sour, more rye": ["kiselije, raženije", "кислее и ржанее"],
    "Starter at 70% instead of 40% — all the rye flour goes through the starter, and you don't add separate rye to the dough. The bread will be more sour and denser, and fermentation will run faster: watch the dough, not the clock.": ["Kiselo testo 70% umesto 40% — sve raženo brašno ide kroz kiselo testo, i ne dodajete posebno raž u testo. Hleb će biti kiseliji i gušći, a fermentacija brža: gledajte testo, ne sat.", "Закваска 70% вместо 40% — вся ржаная мука идёт через закваску, отдельно рожь в замес не добавляете. Хлеб будет кислее и плотнее, а брожение пойдёт быстрее: следите за тестом, а не за часами."],
    "Gummy, sticky crumb": ["Lepljiva, gnjecava sredina", "Липкий, влажный мякиш"],
    "Cut too early, or underbaked — check 96–98 °C inside": ["Isečen prerano ili nedopečen — proverite 96–98 °C unutra", "Разрезали рано или недопекли — проверьте 96–98 °C внутри"],
    "The top sank or went flat": ["Vrh je propao ili se spljoštio", "Верх провалился или стал плоским"],
    "Overproofed — bake earlier next time": ["Prenaraslo — sledeći put pecite ranije", "Перестоял — в следующий раз пеките раньше"],
    "Dense crumb, torn sides": ["Gusta sredina, pocepane strane", "Плотный мякиш, разрывы по бокам"],
    "Underproofed — wait for the dome": ["Nedovoljno naraslo — sačekajte kupolu", "Недостоял — дождитесь купола"],
    "Spilled over the tin": ["Prekipelo preko kalupa", "Вылез за край формы"],
    "Tin too small for the dough": ["Kalup premali za testo", "Форма мала для теста"],
    "Starter too ripe, or the proof ran long in a warm kitchen": ["Prezrelo kiselo testo ili predugo narastanje u toploj kuhinji", "Перезревшая закваска или долгая расстойка в тёплой кухне"],
    "A slice of about 40 g is around 90 kcal. The whole loaf is about 2300 kcal · protein 73 g · fat 12 g · carbs 478 g.": ["Kriška od oko 40 g ima oko 90 kcal. Ceo hleb ima oko 2300 kcal · proteini 73 g · masti 12 g · ugljeni hidrati 478 g.", "Ломтик около 40 г — примерно 90 ккал. Весь хлеб — около 2300 ккал · белки 73 г · жиры 12 г · углеводы 478 г."],
    "Only the flour counts: 228 g rye (98 g in the dough + 130 g inside the starter), 97 g whole wheat and 325 g white. Water and salt have no calories.": ["Računa se samo brašno: 228 g raženog (98 g u testu + 130 g u kiselom testu), 97 g integralnog i 325 g belog. Voda i so nemaju kalorije.", "Считается только мука: 228 г ржаной (98 г в замесе + 130 г в закваске), 97 г цельнозерновой и 325 г белой. У воды и соли калорий нет."],
    "Estimate for a loaf of about 1000 g after baking (1150 g of dough). Weigh yours and divide the whole-loaf numbers by its weight for an exact figure.": ["Procena za hleb od oko 1000 g posle pečenja (1150 g testa). Izmerite svoj i podelite brojke za ceo hleb njegovom težinom za tačan rezultat.", "Оценка для хлеба около 1000 г после выпечки (1150 г теста). Взвесьте свой и разделите цифры на весь хлеб на его вес — получится точнее."],
    "Carbs include about 4.5 g of fibre — rye brings most of it. Salt: about 1.3 g per 100 g.": ["Ugljeni hidrati uključuju oko 4,5 g vlakana — većinu donosi raž. So: oko 1,3 g na 100 g.", "В углеводах около 4,5 г клетчатки — большую часть даёт рожь. Соль: около 1,3 г на 100 г."],
    "crust · crumb · slices": ["korica · sredina · kriške", "корка · мякиш · ломтики"],
    "one score": ["jedan zasek", "один надрез"],
    "cooling. don't touch": ["hladi se. ne dirajte", "остывает. не трогать"],
    "the next morning": ["sledećeg jutra", "на следующее утро"],
    "sandwich-ready": ["spreman za sendvič", "готов к бутербродам"],
    "A soft, even crumb, a dark crust that smells of rye, and slices that hold a sandwich. Twenty minutes of your hands, a little patience, and a big enough tin.": ["Mekana, ravnomerna sredina, tamna korica koja miriše na raž i kriške koje drže sendvič. Dvadeset minuta vaših ruku, malo strpljenja i dovoljno velik kalup.", "Мягкий ровный мякиш, тёмная корка с ржаным ароматом и ломтики, которые держат бутерброд. Двадцать минут ваших рук, немного терпения и достаточно большая форма."],
    "recipes · 1 nov": ["recepti · 1. nov", "рецепты · 1 ноя"],
    "rye tin loaf: 20 minutes of your work": ["raženi hleb u kalupu: 20 minuta vašeg rada", "ржаной формовой: 20 минут вашей работы"],
    "rye starter, a big tin, no shaping skills. six steps, six videos.": ["raženo kiselo testo, veliki kalup, bez veštine oblikovanja. šest koraka, šest videa.", "ржаная закваска, большая форма, никакой формовки. шесть шагов, шесть видео."],
    "rye tin loaf · 20 min of work · grain of taste": ["raženi hleb u kalupu · 20 min rada · grain of taste", "ржаной формовой · 20 минут работы · grain of taste"],


    "This bread can be made in any tin, but it shows itself best in a metal one: it won't let the dough spread and lose volume.": ["Ovaj hleb može da se napravi u bilo kom kalupu, ali najbolje se pokazuje u metalnom: ne da testu da se razlije i izgubi volumen.", "Этот хлеб можно сделать в любой форме, однако лучше всего он покажет себя в металлической форме, так как она не даст ему расплыться и потерять объём."],
    "metal is best, big enough for the dough": ["najbolje metalni, dovoljno velik za testo", "лучше металлическая, достаточно большая"],
    "The taste is rich, slightly salty, with a light sourness from the rye flour and an excellent crust. Note that because of the large amount of whole-grain flour, the crust comes out darker than on white bread — that's normal!": ["Ukus je bogat, blago slankast, sa laganom kiselinom raženog brašna i odličnom koricom. Obratite pažnju: zbog velike količine integralnog brašna korica je tamnija nego kod belog hleba — to je normalno!", "Вкус у хлеба получается насыщенный, солоноватый, с лёгкой кислинкой ржаной муки и превосходной корочкой. Обратите внимание, что за счёт большого количества интегральной муки корочка получается темнее, чем у белого хлеба, — это нормально!"],
    "overnight in the fridge · 20% starter": ["preko noći u frižideru · 20% kiselog testa", "ночь в холодильнике · 20% закваски"],
    "want to bake in the morning?": ["želite da pečete ujutru?", "хотите печь утром?"],
    "My bread was baked without an overnight proof, but you can change the recipe and use only 20% starter of the flour (the grams are on the right). In that case, after the shaping step, send the dough to proof in the fridge overnight. In the morning, if the dough still needs volume, take it out into the kitchen while the oven heats up. If the dough has risen in the fridge on its own, bake it straight from the cold!": ["Moj hleb je pečen bez noćnog narastanja, ali možete promeniti recept i uzeti samo 20% kiselog testa u odnosu na brašno (grami su desno). U tom slučaju, posle oblikovanja, pošaljite testo da naraste u frižideru preko noći. Ujutru, ako testu još treba volumena, izvadite ga u kuhinju dok se rerna greje. Ako je testo samo naraslo u frižideru, pecite ga odmah iz hladnog!", "Мой хлеб пёкся без ночной расстойки, но вы можете изменить рецептуру и взять всего лишь 20% закваски по отношению к муке (граммы справа). В этом случае после шага формовки отправляйте тесто на расстойку в холодильник на ночь. Утром, если тесто ещё нуждается в объёме, достаньте его на кухню во время прогрева духовки. Если же тесто поднимется в холодильнике само, тогда пеките сразу из холода!"],
    "Steps 1–3 stay the same: mix, rest, salt, one fold, a log into the tin.": ["Koraci 1–3 ostaju isti: mešanje, odmor, so, jedno presavijanje, valjak u kalup.", "Шаги 1–3 те же: замес, отдых, соль, одна складка, колбаска в форму."],
    "Cover the tin and put it in the fridge overnight.": ["Pokrijte kalup i stavite ga u frižider preko noći.", "Накройте форму и поставьте в холодильник на ночь."],
    "Morning: risen to a dome — bake straight from the fridge. Not yet — let it finish in the kitchen while the oven heats.": ["Ujutru: naraslo u kupolu — pecite odmah iz frižidera. Nije još — neka dovrši u kuhinji dok se rerna greje.", "Утро: поднялось куполом — пеките сразу из холодильника. Ещё нет — пусть доходит на кухне, пока греется духовка."],
    "Inside the starter: 34 g rye flour + 34 g water (600 g loaf), 65 g + 65 g (1150 g loaf). All the flour and water stay the same: 339 / 650 g and 254 / 487 g, 75% hydration. Less starter means slower fermentation and a wider window — handy for a night in the fridge, and the bread is a little milder.": ["U kiselom testu: 34 g raženog brašna + 34 g vode (hleb od 600 g), 65 g + 65 g (hleb od 1150 g). Ukupno brašno i voda ostaju isti: 339 / 650 g i 254 / 487 g, hidratacija 75%. Manje kiselog testa znači sporiju fermentaciju i širi prozor — zgodno za noć u frižideru, a hleb je malo blaži.", "В закваске: 34 г ржаной муки + 34 г воды (хлеб 600 г), 65 г + 65 г (хлеб 1150 г). Вся мука и вода те же: 339 / 650 г и 254 / 487 г, гидратация 75%. Меньше закваски — медленнее брожение и шире окно готовности: удобно для ночи в холодильнике, а хлеб чуть мягче по кислоте."],
    /* ---------- recipes index ---------- */
    "recipes · grain of taste": ["recepti · grain of taste", "рецепты · grain of taste"],
    "new every week": ["novi svake nedelje", "новый каждую неделю"],
    "Every recipe I bake at home, written so it works in yours: grams for two loaf sizes, a video for every step, and what to watch instead of the clock. The newest one is always on top.": ["Svaki recept koji pečem kod kuće, napisan tako da uspe i kod vas: grami za dve veličine hleba, video za svaki korak i šta da gledate umesto sata. Najnoviji je uvek na vrhu.", "Каждый рецепт, который я пеку дома, написан так, чтобы получился и у вас: граммы на два размера хлеба, видео к каждому шагу и на что смотреть вместо часов. Самый новый всегда наверху."],
    "recipe · every week": ["recept · svake nedelje", "рецепт · каждую неделю"],
    "latest recipe": ["najnoviji recept", "новый рецепт"],
    "no. 02 · 1 nov 2026": ["br. 02 · 1. nov 2026", "№ 02 · 1 ноя 2026"],
    "no. 01 · 25 oct 2026": ["br. 01 · 25. okt 2026", "№ 01 · 25 окт 2026"],
    "Rye starter, a big tin, no shaping skills. About 20 minutes of your hands.": ["Raženo kiselo testo, veliki kalup, bez veštine oblikovanja. Oko 20 minuta vaših ruku.", "Ржаная закваска, большая форма, никакой формовки. Около 20 минут ваших рук."],
    "20 min of work": ["20 min rada", "20 мин работы"],
    "rye starter": ["raženo kiselo testo", "ржаная закваска"],
    "6 videos": ["6 videa", "6 видео"],
    "open the recipe": ["otvori recept", "открыть рецепт"],
    "White + 25% whole wheat on stiff starter. Six steps, six videos, one overnight.": ["Belo + 25% integralnog na čvrstom kiselom testu. Šest koraka, šest videa, jedna noć.", "Белая + 25% цельнозерновой на твёрдой закваске. Шесть шагов, шесть видео, одна ночь."],
    "1 night cold proof": ["1 noć u hladnom", "1 ночь в холоде"],
    "where every loaf begins": ["odakle počinje svaki hleb", "с чего начинается каждый хлеб"],
    "equal flour and water. the classic.": ["jednako brašna i vode. klasika.", "мука и вода поровну. классика."],
    "this week's recipe · rye tin loaf": ["recept nedelje · raženi hleb u kalupu", "рецепт недели · ржаной формовой"],
    "all recipes": ["svi recepti", "все рецепты"],
    "all recipes · newest on top →": ["svi recepti · najnoviji na vrhu →", "все рецепты · новый наверху →"],

    /* ---------- calculator: rye ---------- */
    "rye tin loaf · 40% starter · same day": ["raženi hleb u kalupu · 40% kiselog testa · isti dan", "ржаной формовой · закваска 40% · в тот же день"],
    "rye tin loaf · 20% starter · overnight": ["raženi hleb u kalupu · 20% kiselog testa · preko noći", "ржаной формовой · закваска 20% · ночь в холодильнике"],
    "rye tin loaf · 70% starter · more sour": ["raženi hleb u kalupu · 70% kiselog testa · kiseliji", "ржаной формовой · закваска 70% · кислее"],
    "rye flour I have, g": ["raženog brašna imam, g", "ржаной муки есть, г"],
    "Starter: rye, 100% (equal rye flour and water). The rye inside it is already counted in the recipe.": ["Kiselo testo: raženo, 100% (jednako raženog brašna i vode). Raž u njemu je već uračunata u recept.", "Закваска: ржаная, 100% (ржаная мука и вода поровну). Рожь в ней уже учтена в рецептуре."],
    "your flour, your tin": ["vaše brašno, vaš kalup", "ваша мука, ваша форма"],
    "A calculator that rewrites this recipe for you. Pick the version — same day (40% starter), overnight (20%) or more sour (70%) — then type in the flour you have or the dough you want, and it tells you how many grams of everything to weigh.": ["Kalkulator koji prepisuje ovaj recept za vas. Izaberite verziju — isti dan (40% kiselog testa), preko noći (20%) ili kiseliji (70%) — upišite brašno koje imate ili testo koje želite, i dobićete koliko grama svega da izmerite.", "Калькулятор, который пересчитает этот рецепт за вас. Выберите вариант — в тот же день (закваска 40%), на ночь (20%) или кислее (70%), — впишите муку, которая есть, или тесто, которое нужно, и он скажет, сколько граммов чего взвесить."],
    "All weights are dough. In the oven a loaf loses some water: 1150 g of dough → about 1000 g of bread.": ["Sve težine su testo. U rerni hleb izgubi deo vode: 1150 g testa → oko 1000 g hleba.", "Все веса — это тесто. В духовке хлеб теряет часть воды: 1150 г теста → около 1000 г хлеба."],
    "The starter is rye, 100%: feed it separately, its flour and water are already counted.": ["Kiselo testo je raženo, 100%: hranite ga odvojeno, njegovo brašno i voda su već uračunati.", "Закваска ржаная, 100%: кормите её отдельно, её мука и вода уже учтены."],
    "version": ["verzija", "вариант"],
    "40% starter · same day": ["40% kiselog testa · isti dan", "закваска 40% · в тот же день"],
    "20% starter · overnight": ["20% kiselog testa · preko noći", "закваска 20% · на ночь"],
    "70% starter · more sour": ["70% kiselog testa · kiseliji", "закваска 70% · кислее"],
    /* ---------- science: sourdough vs fusarium (wk 44) ---------- */
    "30 oct 2026": ["30. okt 2026", "30 окт. 2026"],
    "science · 30 oct": ["nauka · 30. okt", "наука · 30 окт."],
    "recipes · 25 oct": ["recepti · 25. okt", "рецепты · 25 окт."],
    "fermentation at work": ["fermentacija u toku", "ферментация в процессе"],
    "open crumb": ["otvorena sredina", "открытый мякиш"],
    "science you can eat": ["nauka koja se jede", "наука, которую можно съесть"],
    "full paper review below ↓": ["ceo pregled rada ispod ↓", "полный обзор статьи ниже ↓"],
    "invisible on real bread": ["na pravom hlebu nevidljivo", "на настоящем хлебе не видно"],
    "illustration · AI-generated": ["ilustracija · generisano veštačkom inteligencijom", "иллюстрация · создана ИИ"],
    "where the bacteria live": ["ovde žive bakterije", "здесь живут бактерии"],
    "wholegrain crumb": ["integralna sredina", "цельнозерновой мякиш"],
    "fermented slowly": ["sporo fermentisano", "долгая ферментация"],
    "from my bakery": ["iz moje pekare", "из моей пекарни"],
    "AI illustration": ["AI ilustracija", "иллюстрация ИИ"],
    "can sourdough bacteria fight a fungal toxin?": ["mogu li bakterije iz kiselog testa da se izbore sa gljivičnim toksinom?", "могут ли бактерии закваски победить грибковый токсин?"],
    "Perri G., Sardella C., Ciraldo L., Scarpino V., Carbone S., Rametta F., Blandino M., Rizzello C.G., Pontonio E. (2026). In Situ Fusarium Mycotoxin Mitigation During Wholegrain Wheat Flour Fermentation with Sourdough Lactic Acid Bacteria. Foods 15(19), 3543. ·": ["Perri G., Sardella C., Ciraldo L., Scarpino V., Carbone S., Rametta F., Blandino M., Rizzello C.G., Pontonio E. (2026). In Situ Fusarium Mycotoxin Mitigation During Wholegrain Wheat Flour Fermentation with Sourdough Lactic Acid Bacteria. Foods 15(19), 3543. ·", "Perri G., Sardella C., Ciraldo L., Scarpino V., Carbone S., Rametta F., Blandino M., Rizzello C.G., Pontonio E. (2026). In Situ Fusarium Mycotoxin Mitigation During Wholegrain Wheat Flour Fermentation with Sourdough Lactic Acid Bacteria. Foods 15(19), 3543. ·"],
    "open access": ["otvoren pristup", "открытый доступ"],
    "How much of the toxin DON the best sourdough bacteria removed from wholegrain dough in 48 hours.": ["Koliko toksina DON su najbolje bakterije iz kiselog testa uklonile iz integralnog testa za 48 sati.", "Столько токсина ДОН лучшие бактерии закваски убрали из цельнозернового теста за 48 часов."],
    "the problem": ["problem", "проблема"],
    "Fusarium is one of the main fungal diseases of wheat. It infects the ear in the field, often at flowering, weeks after the seed treatment has done its job. It leaves behind mycotoxins, and the best known is DON (deoxynivalenol), also called vomitoxin.": ["Fuzarijum je jedna od glavnih gljivičnih bolesti pšenice. Napada klas u polju, često u cvetanju, nedeljama nakon što je zaštita semena odradila svoje. Za sobom ostavlja mikotoksine, a najpoznatiji je DON (deoksinivalenol), poznat i kao vomitoksin.", "Фузариоз — одна из главных грибковых болезней пшеницы. Он поражает колос прямо в поле, часто во время цветения, через несколько недель после того, как протравка семян уже отработала. После себя он оставляет микотоксины, и самый известный из них — ДОН (дезоксиниваленол), его ещё называют «рвотным токсином»."],
    "In high doses DON causes nausea and vomiting; long-term exposure can affect the gut and the immune system. It is invisible, has no smell or taste, and survives baking. That is why the EU limits it (Regulation (EU) 2024/1022):": ["U visokim dozama DON izaziva mučninu i povraćanje; dugotrajna izloženost može uticati na creva i imuni sistem. Nevidljiv je, nema miris ni ukus i preživljava pečenje. Zato ga EU ograničava (Uredba (EU) 2024/1022):", "В высоких дозах ДОН вызывает тошноту и рвоту, а длительное воздействие может влиять на кишечник и иммунитет. Он невидим, без запаха и вкуса и переживает выпечку. Поэтому в ЕС его содержание ограничено (Регламент (ЕС) 2024/1022):"],
    "unprocessed wheat · 1000 µg/kg": ["neprerađena pšenica · 1000 µg/kg", "необработанная пшеница · 1000 мкг/кг"],
    "flour · 600 µg/kg": ["brašno · 600 µg/kg", "мука · 600 мкг/кг"],
    "bread and bakery products · 400 µg/kg": ["hleb i pekarski proizvodi · 400 µg/kg", "хлеб и выпечка · 400 мкг/кг"],
    "baby food · 150 µg/kg": ["hrana za bebe · 150 µg/kg", "детское питание · 150 мкг/кг"],
    "Researchers from the universities of Bari, Turin and Rome took wholegrain wheat flour that was naturally contaminated: 1270 µg/kg of DON, more than twice the limit for flour. They fermented it with 19 strains of lactic acid bacteria isolated from sourdoughs, at 25, 30 and 37 °C, for 24 and 48 hours, and measured how much toxin was left.": ["Istraživači sa univerziteta u Bariju, Torinu i Rimu uzeli su integralno pšenično brašno koje je bilo prirodno kontaminirano: 1270 µg/kg DON-a, više nego dvostruko iznad granice za brašno. Fermentisali su ga sa 19 sojeva bakterija mlečne kiseline izolovanih iz kiselih testa, na 25, 30 i 37 °C, 24 i 48 sati, i merili koliko je toksina ostalo.", "Исследователи из университетов Бари, Турина и Рима взяли цельнозерновую пшеничную муку с естественным заражением: 1270 мкг/кг ДОН — больше чем вдвое выше лимита для муки. Они ферментировали её 19 штаммами молочнокислых бактерий, выделенных из заквасок, при 25, 30 и 37 °C в течение 24 и 48 часов и измеряли, сколько токсина осталось."],
    "The best three strains (Pediococcus pentosaceus, Lactiplantibacillus plantarum, Limosilactobacillus fermentum) cut DON by about half in 48 hours: from 1270 to 567–680 µg/kg. One of them brought it below the EU limit.": ["Tri najbolja soja (Pediococcus pentosaceus, Lactiplantibacillus plantarum, Limosilactobacillus fermentum) smanjila su DON otprilike za polovinu za 48 sati: sa 1270 na 567–680 µg/kg. Jedan od njih ga je spustio ispod granice EU.", "Три лучших штамма (Pediococcus pentosaceus, Lactiplantibacillus plantarum, Limosilactobacillus fermentum) снизили ДОН примерно вдвое за 48 часов: с 1270 до 567–680 мкг/кг. Один из них опустил его ниже лимита ЕС."],
    "Flour and water fermenting on their own barely changed it. It's the bacteria, not just time.": ["Brašno i voda koji su fermentisali sami gotovo ga nisu promenili. Rade bakterije, a ne samo vreme.", "Мука с водой, бродившие сами по себе, почти ничего не изменили. Работают именно бактерии, а не просто время."],
    "The same bacteria also lowered other Fusarium toxins, such as moniliformin and enniatins, by up to about half.": ["Iste bakterije su smanjile i druge toksine fuzarijuma, poput moniliformina i enijatina, do otprilike polovine.", "Те же бактерии снизили и другие токсины фузариума, например монилиформин и эниатины, — до примерно половины."],
    "Heat-killed bacteria removed less toxin. Part of the effect is the toxin binding to bacterial cell walls, not only being broken down.": ["Bakterije ubijene toplotom uklonile su manje toksina. Deo efekta je vezivanje toksina za ćelijske zidove bakterija, a ne samo njegovo razlaganje.", "Убитые нагреванием бактерии убрали меньше токсина. Часть эффекта — это связывание токсина клеточными стенками бактерий, а не только его разрушение."],
    "As an agronomist who studied plant protection, I know how hard Fusarium is to control. Seed treatment protects the seedling, not the ear at flowering. Rotation, resistant varieties and field care help, but a wet spring can still bring contaminated grain to the mill. Seeing a biological tool that lowers the toxin without adding more chemistry is genuinely exciting.": ["Kao agronom koji je studirao zaštitu bilja, znam koliko je teško kontrolisati fuzarijum. Zaštita semena štiti klijanac, a ne klas u cvetanju. Plodored, otporne sorte i nega polja pomažu, ali vlažno proleće i dalje može doneti kontaminirano zrno u mlin. Videti biološki alat koji smanjuje toksin bez dodatne hemije zaista je uzbudljivo.", "Как агроном по защите растений, я знаю, как трудно контролировать фузариоз. Протравка семян защищает проросток, но не колос во время цветения. Севооборот, устойчивые сорта и уход за полем помогают, но дождливая весна всё равно может принести на мельницу заражённое зерно. Видеть биологический инструмент, который снижает токсин без дополнительной химии, — по-настоящему вдохновляет."],
    "For me this confirms what bakers have long suspected: the bacterial life in fermented dough really changes what ends up in your bread. And a sourdough starter is exactly that, a living culture of these bacteria.": ["Za mene ovo potvrđuje ono što pekari odavno naslućuju: bakterijski život u fermentisanom testu zaista menja ono što završi u vašem hlebu. A kiselo testo je upravo to — živa kultura ovih bakterija.", "Для меня это подтверждает то, о чём пекари давно догадывались: бактериальная жизнь в ферментированном тесте действительно меняет то, что оказывается в вашем хлебе. А закваска — это и есть живая культура таких бактерий."],
    "The honest part: this is lab dough, not bread yet, and it measures less extractable toxin, not a proven full detox. Every starter has its own microbiome, so yours won't necessarily do the same. Promising, not magic.": ["Iskreno: ovo je laboratorijsko testo, još ne hleb, i meri se manje izdvojivog toksina, a ne dokazana potpuna detoksikacija. Svako kiselo testo ima svoj mikrobiom, pa vaše ne mora da radi isto. Obećavajuće, ali nije magija.", "Честно: это лабораторное тесто, ещё не хлеб, и речь о меньшем количестве извлекаемого токсина, а не о доказанном полном «детоксе». У каждой закваски свой микробиом, так что ваша не обязательно сработает так же. Многообещающе, но не волшебство."],
    "Buy flour, especially wholegrain, from mills you trust: they test their grain for DON.": ["Kupujte brašno, posebno integralno, od mlinova kojima verujete: oni testiraju zrno na DON.", "Покупайте муку, особенно цельнозерновую, у мельниц, которым доверяете: они проверяют зерно на ДОН."],
    "Store flour and grain dry and cool. Damp storage invites new mould.": ["Čuvajte brašno i zrno na suvom i hladnom. Vlaga privlači novu buđ.", "Храните муку и зерно в сухом и прохладном месте. Влажность — приглашение для новой плесени."],
    "Keep your long sourdough fermentation. It won't replace clean grain, but it may help, and it does other good things too.": ["Zadržite dugu fermentaciju na kiselom testu. Neće zameniti čisto zrno, ali može pomoći, a donosi i druge koristi.", "Не отказывайтесь от долгой ферментации на закваске. Она не заменит чистое зерно, но может помочь — и даёт другие плюсы."],
    "and the same bacteria also": ["a iste bakterije još i", "а ещё те же бактерии"],
    "break down phytic acid, so minerals like iron and zinc are easier to absorb": ["razlažu fitinsku kiselinu, pa se minerali poput gvožđa i cinka lakše apsorbuju", "расщепляют фитиновую кислоту — железо и цинк усваиваются легче"],
    "make the bread more acidic, which keeps mould away longer without preservatives": ["čine hleb kiselijim, što duže štiti od buđi bez konzervansa", "делают хлеб кислее — и он дольше не плесневеет без консервантов"],
    "often give a gentler blood-sugar response than yeasted bread": ["često blaže podižu šećer u krvi od hleba sa kvascem", "часто мягче влияют на сахар в крови, чем хлеб на дрожжах"],
    "watch on instagram": ["gledajte na instagramu", "смотреть в instagram"],
    "bake the bread →": ["ispecite hleb →", "испечь хлеб →"],
    "science · wk 44": ["nauka · ned. 44", "наука · нед. 44"],
    "the best strains cut DON by about half in 48 hours": ["najbolji sojevi smanjili su DON otprilike za polovinu za 48 sati", "лучшие штаммы снизили ДОН примерно вдвое за 48 часов"],
    "Foods, 2026 · the best strains cut DON by about half in 48 hours": ["Foods, 2026 · najbolji sojevi smanjili su DON otprilike za polovinu za 48 sati", "Foods, 2026 · лучшие штаммы снизили ДОН примерно вдвое за 48 часов"],
    "can sourdough bacteria fight a fungal toxin? · grain of taste": ["mogu li bakterije iz kiselog testa da se izbore sa gljivičnim toksinom? · grain of taste", "могут ли бактерии закваски победить грибковый токсин? · grain of taste"],

    /* ---------- page titles ---------- */
    "grain of taste · bread, backed by science": ["grain of taste · hleb, potkrepljen naukom", "grain of taste · хлеб, подкреплённый наукой"],
    "who am I · grain of taste": ["ko sam ja · grain of taste", "кто я · grain of taste"],
    "calculator · grain of taste": ["kalkulator · grain of taste", "калькулятор · grain of taste"],
    "myths · grain of taste": ["mitovi · grain of taste", "мифы · grain of taste"],
    "science & bread · grain of taste": ["nauka i hleb · grain of taste", "наука и хлеб · grain of taste"],
    "what you need · grain of taste": ["šta vam treba · grain of taste", "что нужно · grain of taste"],
    "wheat sourdough · 75% · grain of taste": ["pšenični hleb na kiselom testu · 75% · grain of taste", "пшеничный хлеб на закваске · 75% · grain of taste"],
    "stiff starter · 43% · grain of taste": ["čvrsto kiselo testo · 43% · grain of taste", "твёрдая закваска · 43% · grain of taste"],
    "liquid starter · 100% · grain of taste": ["tečno kiselo testo · 100% · grain of taste", "жидкая закваска · 100% · grain of taste"],

    /* ---------- home ---------- */
    "grain": ["grain", "grain"],
    "of taste": ["of taste", "of taste"],
    "Structure + science + craft = a system that gives a predictably tasty loaf. Every recipe here has grams, temperatures and a video for each step.":
      ["Struktura + nauka + zanat = sistem koji daje predvidljivo ukusan hleb. Svaki recept ovde ima grame, temperature i video za svaki korak.",
       "Структура + наука + ремесло = система, которая даёт предсказуемо вкусный хлеб. В каждом рецепте здесь — граммы, температуры и видео на каждый этап."],
    "dough hydration": ["hidratacija testa", "гидратация теста"],
    "stiff starter": ["čvrsto kiselo testo", "твёрдая закваска"],
    "max dough temp": ["maks. temp. testa", "макс. темп. теста"],
    "recipe of the week →": ["recept nedelje →", "рецепт недели →"],
    "scale a recipe": ["preračunaj recept", "пересчитать рецепт"],
    "white + whole wheat": ["belo + integralno", "белая + цельнозерновая"],
    "what's inside": ["šta ima ovde", "что здесь есть"],
    "Scared of 75%?": ["Plašite se 75%?", "Страшно от 75%?"],
    "Stay with me.": ["Ostanite sa mnom.", "Оставайтесь со мной."],
    "One paper a week.": ["Jedan rad nedeljno.", "Одна статья в неделю."],
    "Read for you.": ["Pročitan za vas.", "Прочитана за вас."],
    "paper of the week →": ["rad nedelje →", "статья недели →"],
    "Your starter isn't dead.": ["Vaše kiselo testo nije mrtvo.", "Ваша закваска не умерла."],
    "It's hungry.": ["Gladno je.", "Она голодная."],
    "starter week →": ["nedelja kiselog testa →", "неделя закваски →"],
    "Sourdough has no yeast.": ["U kiselom testu nema kvasca.", "В хлебе на закваске нет дрожжей."],
    "It does.": ["Ima.", "Есть."],
    "myth of the week →": ["mit nedelje →", "миф недели →"],
    "Eight things.": ["Osam stvari.", "Восемь вещей."],
    "Half have swaps.": ["Pola ima zamenu.", "У половины есть замена."],
    "Six things.": ["Šest stvari.", "Шесть вещей."],
    "Not sixteen.": ["Ne šesnaest.", "А не шестнадцать."],
    "home bakery kit →": ["kućna pekara →", "домашняя пекарня →"],
    "bakery": ["pekara", "пекарня"],
    "I gave my starter away.": ["Svoje kiselo testo sam davala.", "Я раздавала свою закваску."],
    "For 3 years.": ["Tri godine.", "Три года."],
    "from the bakery →": ["iz pekare →", "из пекарни →"],
    "latest": ["najnovije", "новое"],
    "recipes · wk 43": ["recepti · ned. 43", "рецепты · нед. 43"],
    "science · wk 43": ["nauka · ned. 43", "наука · нед. 43"],
    "myths · wk 43": ["mitovi · ned. 43", "мифы · нед. 43"],
    "wheat sourdough, 75%, on stiff starter": ["pšenični hleb, 75%, na čvrstom kiselom testu", "пшеничный хлеб, 75%, на твёрдой закваске"],
    "white + 25% whole wheat. six steps, six videos, one overnight.": ["belo + 25% integralno. šest koraka, šest videa, jedna noć.", "белая + 25% цельнозерновой. шесть шагов, шесть видео, одна ночь."],
    "stiff starter · 43%": ["čvrsto kiselo testo · 43%", "твёрдая закваска · 43%"],
    "lievito madre. the one the bakery ran on.": ["lievito madre. na njemu je radila cela pekara.", "левито мадре. на ней работала вся пекарня."],
    "liquid starter · 100%": ["tečno kiselo testo · 100%", "жидкая закваска · 100%"],
    "the easy one. same bread, different math.": ["lakši. isti hleb, druga računica.", "простая. тот же хлеб, другая математика."],

    /* ---------- about ---------- */
    "who am I": ["ko sam ja", "кто я"],
    "hi, I'm": ["zdravo, ja sam", "привет, я"],
    "Svetlana": ["Svetlana", "Света"],
    "The person behind every loaf. Agronomist by degree — plant protection first, then agri-management. Three years running BreadVenture, a sourdough bakery in Belgrade. Sold, not closed. Now I bake at home and share everything I know.":
      ["Osoba iza svakog hleba. Agronom po diplomi — prvo zaštita bilja, zatim agromenadžment. Tri godine vodila sam BreadVenture, pekaru hleba na kiselom testu u Beogradu. Prodata, ne zatvorena. Sada pečem kod kuće i delim sve što znam.",
       "Человек за каждым караваем. Агроном по образованию — сначала защита растений, потом менеджмент в АПК. Три года держала BreadVenture, пекарню хлеба на закваске в Белграде. Продана, а не закрыта. Теперь пеку дома и делюсь всем, что знаю."],
    "years of bakery": ["godine pekare", "года пекарни"],
    "the starter it ran on": ["kiselo testo na kom je radila", "закваска, на которой она работала"],
    "my favourite number": ["moj omiljeni broj", "моё любимое число"],
    "Svetlana cutting bread at the bakery counter": ["Svetlana seče hleb za pultom pekare", "Света режет хлеб за стойкой пекарни"],
    "baker · agronomist": ["pekar · agronom", "пекарь · агроном"],
    "02 · the bakery": ["02 · pekara", "02 · пекарня"],
    "03 · the approach": ["03 · pristup", "03 · подход"],
    "structure + science + craft": ["struktura + nauka + zanat", "структура + наука + ремесло"],
    "Structure + science + craft = a system that gives a predictably tasty result. That's the whole blog in one line. Every recipe here has grams, a temperature and a reason.":
      ["Struktura + nauka + zanat = sistem koji daje predvidljivo ukusan rezultat. To je ceo blog u jednom redu. Svaki recept ovde ima grame, temperaturu i razlog.",
       "Структура + наука + ремесло = система, которая даёт предсказуемо вкусный результат. Это весь блог в одной строке. В каждом рецепте — граммы, температура и объяснение."],
    "Structure — a schedule you can repeat on a Tuesday.": ["Struktura — raspored koji možete ponoviti u utorak.", "Структура — график, который можно повторить в обычный вторник."],
    "Science — why the dough does what it does, in plain words.": ["Nauka — zašto se testo ponaša kako se ponaša, jednostavnim rečima.", "Наука — почему тесто ведёт себя так, простыми словами."],
    "Craft — the part your hands learn and I can only show on video.": ["Zanat — deo koji uče ruke, a ja mogu samo da ga pokažem na videu.", "Ремесло — то, чему учатся руки, а я могу только показать на видео."],
    "04 · the dream": ["04 · san", "04 · мечта"],
    "why this exists": ["zašto ovo postoji", "зачем всё это"],
    "tasty homemade bread in every home": ["ukusan domaći hleb u svakom domu", "вкусный домашний хлеб в каждом доме"],
    "And no more fear of its \"complexity\". Spoiler: it's simpler than it sounds. Stay with me.":
      ["I bez straha od njegove \"složenosti\". Spojler: jednostavnije je nego što zvuči. Ostanite sa mnom.",
       "И без страха перед его «сложностью». Спойлер: всё проще, чем звучит. Оставайтесь со мной."],
    "follow on instagram": ["prati na instagramu", "подписаться в instagram"],
    "start with the bread →": ["počni od hleba →", "начать с хлеба →"],
    "agronomist by degree, baker by heart": ["agronom po diplomi, pekar u duši", "агроном по образованию, пекарь в душе"],

    /* ---------- calculator ---------- */
    "scale it": ["preračunaj", "пересчитай"],
    "Type the flour you have, or the dough you want, and the number of loaves. Everything else follows baker's percentages — flour is always 100.":
      ["Upišite koliko brašna imate ili koliko testa želite, i broj hlebova. Sve ostalo ide po pekarskim procentima — brašno je uvek 100.",
       "Введите, сколько у вас муки или сколько нужно теста, и число буханок. Остальное считается в пекарских процентах — мука всегда 100."],
    "01 · wheat sourdough": ["01 · pšenični hleb", "01 · пшеничный хлеб"],
    "01 · bread": ["01 · hleb", "01 · хлеб"],
    "recipe": ["recept", "рецептура"],
    "75% · 25% whole wheat · 2% salt": ["75% · 25% integralno · 2% so", "75% · 25% цельнозерновой · 2% соли"],
    "start from": ["polazim od", "считаю от"],
    "flour I have": ["brašna koje imam", "муки, которая есть"],
    "dough I want": ["testa koje želim", "теста, которое нужно"],
    "grams": ["grami", "граммы"],
    "loaves": ["hlebova", "буханок"],
    "starter": ["kiselo testo", "закваска"],
    "stiff · 43% (lievito madre)": ["čvrsto · 43% (lievito madre)", "твёрдая · 43% (левито мадре)"],
    "liquid · 100%": ["tečno · 100%", "жидкая · 100%"],
    "the recipe": ["recept", "рецепт"],
    "02 · stiff starter": ["02 · čvrsto kiselo testo", "02 · твёрдая закваска"],
    "43% hydration": ["hidratacija 43%", "гидратация 43%"],
    "starter I want": ["kiselog testa koje želim", "закваски, которая нужна"],
    "This is the flour + water for one feeding. Add your ripe starter on top at the ratio from the":
      ["Ovo je brašno + voda za jedno hranjenje. Zrelo kiselo testo dodajte po odnosu sa", "Это мука + вода на одно кормление. Зрелую закваску добавьте в пропорции со"],
    "starter page": ["stranice kiselog testa", "страницы закваски"],
    "03 · liquid starter": ["03 · tečno kiselo testo", "03 · жидкая закваска"],
    "100% hydration": ["hidratacija 100%", "гидратация 100%"],
    "Flour + water for one feeding. Ratio and schedule on the": ["Brašno + voda za jedno hranjenje. Odnos i raspored su na", "Мука + вода на одно кормление. Пропорция и график — на"],
    "how the math works": ["kako radi računica", "как устроена математика"],
    "Flour is 100%. Water, salt and starter are percentages of flour, not of the dough.":
      ["Brašno je 100%. Voda, so i kiselo testo su procenti od brašna, ne od testa.", "Мука — это 100%. Вода, соль и закваска — проценты от муки, а не от теста."],
    "The starter brings flour and water with it. The calculator subtracts both, so the final hydration stays at 75% whichever starter you use.":
      ["Kiselo testo sa sobom donosi brašno i vodu. Kalkulator oduzima oba, pa hidratacija ostaje 75% sa bilo kojim kiselim testom.",
       "Закваска приносит с собой муку и воду. Калькулятор вычитает и то и другое, поэтому гидратация остаётся 75% с любой закваской."],
    "Prefermented flour — the flour inside the starter — is 14.7% of all flour. That is why stiff and liquid give different starter grams for the same loaf.":
      ["Prefermentisano brašno — brašno u kiselom testu — čini 14,7% ukupnog brašna. Zato čvrsto i tečno kiselo testo daju različite grame za isti hleb.",
       "Сброженная мука — мука внутри закваски — это 14,7% всей муки. Поэтому для одного и того же хлеба твёрдой и жидкой закваски нужно разное количество граммов."],
    "Dough weight = flour × (1 + hydration + salt). For this loaf: flour × 1.77.":
      ["Težina testa = brašno × (1 + hidratacija + so). Za ovaj hleb: brašno × 1,77.", "Вес теста = мука × (1 + гидратация + соль). Для этого хлеба: мука × 1,77."],
    "flour → dough": ["brašno → testo", "мука → тесто"],
    "So 339 g of flour makes a 600 g loaf, and 650 g makes 1150 g. Your bowl is the only limit.":
      ["Dakle, 339 g brašna daje hleb od 600 g, a 650 g daje 1150 g. Jedina granica je vaša posuda.", "Значит, из 339 г муки выходит 600 г теста, из 650 г — 1150 г. Ограничение одно — ваша миска."],
    "rounded to the gram": ["zaokruženo na gram", "округлено до грамма"],

    /* ---------- myths / science ---------- */
    "weekly": ["nedeljno", "еженедельно"],
    "myths in baking": ["mitovi u pečenju", "мифы в хлебопечении"],
    "One myth a week. \"Sourdough has no yeast.\" \"Never use metal with your starter.\" Where it came from, what is really going on, and what to do instead.":
      ["Jedan mit nedeljno. \"U kiselom testu nema kvasca.\" \"Nikad metal uz kiselo testo.\" Odakle potiče, šta se zaista dešava i šta raditi umesto toga.",
       "Один миф в неделю. «В хлебе на закваске нет дрожжей». «С закваской нельзя металл». Откуда это взялось, что происходит на самом деле и что делать вместо этого."],
    "myth · every week": ["mit · svake nedelje", "миф · каждую неделю"],
    "wk 43 · 2026": ["ned. 43 · 2026", "нед. 43 · 2026"],
    "wk 44 · 2026": ["ned. 44 · 2026", "нед. 44 · 2026"],
    "myth of the week": ["mit nedelje", "миф недели"],
    "people say": ["ljudi kažu", "говорят"],
    "verdict": ["presuda", "вердикт"],
    "where it comes from": ["odakle potiče", "откуда это"],
    "what's actually going on": ["šta se zaista dešava", "что на самом деле"],
    "what to do instead": ["šta raditi umesto toga", "что делать вместо"],
    "myth of the week · video": ["mit nedelje · video", "миф недели · видео"],
    "all myths": ["svi mitovi", "все мифы"],
    "paper of the week": ["rad nedelje", "статья недели"],
    "the paper": ["rad", "статья"],
    "doi": ["doi", "doi"],
    "the one number": ["jedan broj", "одно число"],
    "what they did": ["šta su radili", "что сделали"],
    "what they found": ["šta su otkrili", "что нашли"],
    "my comment": ["moj komentar", "мой комментарий"],
    "what to do with it": ["šta s tim", "что с этим делать"],
    "video summary": ["video rezime", "видеообзор"],
    "all papers": ["svi radovi", "все статьи"],
    "no magic, just papers": ["bez magije, samo radovi", "никакой магии, только статьи"],
    "One paper a week. I read it so you don't have to: what they did, what they found, and the one thing it changes in your kitchen — or doesn't.":
      ["Jedan naučni rad nedeljno. Ja ga čitam umesto vas: šta su radili, šta su otkrili i jedna stvar koju to menja u vašoj kuhinji — ili ne menja.",
       "Одна научная статья в неделю. Я читаю её за вас: что сделали, что нашли и что это меняет у вас на кухне — или не меняет."],
    "paper · every week": ["rad · svake nedelje", "статья · каждую неделю"],

    /* ---------- starters ---------- */
    "← stiff · 43%": ["← čvrsto · 43%", "← твёрдая · 43%"],
    "| liquid · 100%": ["| tečno · 100%", "| жидкая · 100%"],
    "stiff · 43% |": ["čvrsto · 43% |", "твёрдая · 43% |"],
    "liquid · 100% →": ["tečno · 100% →", "жидкая · 100% →"],
    "liquid": ["tečno", "жидкая"],
    "stiff": ["čvrsto", "твёрдая"],
    "Equal flour and water, by weight. A batter you stir with a spoon. It is the one most recipes online assume — faster to build, a bit more sour, less forgiving when you forget it.":
      ["Jednako brašna i vode, po težini. Gusta smesa koja se meša kašikom. Većina recepata na internetu podrazumeva baš njega — brže se pravi, malo je kiselije i manje prašta kad ga zaboravite.",
       "Мука и вода поровну, по весу. Кашица, которую мешают ложкой. Именно её подразумевает большинство рецептов в интернете — быстрее заводится, чуть кислее и меньше прощает, если о ней забыть."],
    "Lievito madre. 43% water to flour, so it's a dough, not a batter. The whole bakery ran on it for three years — milder, more predictable, and it forgives a late feeding.":
      ["Lievito madre. 43% vode u odnosu na brašno, pa je to testo, a ne smesa. Cela pekara je tri godine radila na njemu — blaže je, predvidljivije i prašta zakasnelo hranjenje.",
       "Левито мадре. 43% воды к муке — это тесто, а не кашица. Вся пекарня три года работала на ней: мягче, предсказуемее и прощает опоздавшее кормление."],
    "hydration": ["hidratacija", "гидратация"],
    "feeding ratio": ["odnos hranjenja", "пропорция кормления"],
    "max temp": ["maks. temp.", "макс. темп."],
    "one feeding": ["jedno hranjenje", "одно кормление"],
    "what goes in": ["šta ide unutra", "что кладём"],
    "ingredient": ["sastojak", "ингредиент"],
    "bakers %": ["pekarski %", "пекарский %"],
    "ripe starter": ["zrelo kiselo testo", "зрелая закваска"],
    "white bread flour": ["belo hlebno brašno", "белая хлебопекарная мука"],
    "water": ["voda", "вода"],
    "Scale it on the": ["Preračunajte na", "Пересчитайте в"],
    "— it keeps the 100% for you.": ["— on čuva 100% umesto vas.", "— он сам сохранит 100%."],
    "— it keeps the 43% for you.": ["— on čuva 43% umesto vas.", "— он сам сохранит 43%."],
    "first wait": ["prvo čekanje", "первое ожидание"],
    "feedings a day": ["hranjenja dnevno", "кормления в день"],
    "your starter isn't dead. it's hungry": ["vaše kiselo testo nije mrtvo. gladno je", "ваша закваска не умерла. она голодная"],
    "days in the fridge": ["dana u frižideru", "дней в холодильнике"],
    "step 1 / 4": ["korak 1 / 4", "шаг 1 / 4"], "▶ step 1 / 4": ["▶ korak 1 / 4", "▶ шаг 1 / 4"],
    "step 2 / 4": ["korak 2 / 4", "шаг 2 / 4"], "▶ step 2 / 4": ["▶ korak 2 / 4", "▶ шаг 2 / 4"],
    "step 3 / 4": ["korak 3 / 4", "шаг 3 / 4"], "▶ step 3 / 4": ["▶ korak 3 / 4", "▶ шаг 3 / 4"],
    "step 4 / 4": ["korak 4 / 4", "шаг 4 / 4"], "▶ step 4 / 4": ["▶ korak 4 / 4", "▶ шаг 4 / 4"],

    /* ---------- wheat recipe ---------- */
    "wheat sourdough": ["pšenični hleb na kiselom testu", "пшеничный хлеб на закваске"],
    "no. 01": ["br. 01", "№ 01"],
    "wheat": ["pšenični", "пшеничный"],
    "sourdough": ["na kiselom testu", "на закваске"],
    "White + 25% whole wheat on lievito madre, a stiff 43% starter — my standard, super-active one, the starter I baked bread and pastry on at my bakery. Different starter? Don't worry, the recipe adapts. Dough hydration 75%. Sounds scary, it's simple.":
      ["Belo + 25% integralnog brašna na lievito madre, čvrstom kiselom testu od 43% — mom standardnom, super aktivnom kiselom testu na kom sam u pekari pekla hleb i peciva. Imate drugo kiselo testo? Bez brige, recept se prilagođava. Hidratacija testa 75%. Zvuči strašno, a jednostavno je.",
       "Белая + 25% цельнозерновой на левито мадре, твёрдой закваске 43% — моей стандартной, суперактивной, на которой я пекла хлеб и сдобу в своей пекарне. Другая закваска? Не переживайте, рецептуру можно адаптировать. Гидратация теста 75%. Звучит страшно, на деле просто."],
    "1 night": ["1 noć", "1 ночь"],
    "cold proof": ["hladna fermentacija", "холодная расстойка"],
    "ingredients": ["sastojci", "ингредиенты"],
    "Starter 43% = 21% of the flour. Inside it: 50 g flour + 21 g water (600 g loaf), 96 g flour + 41 g water (1150 g loaf).":
      ["Kiselo testo 43% = 21% od brašna. U njemu: 50 g brašna + 21 g vode (hleb od 600 g), 96 g brašna + 41 g vode (hleb od 1150 g).",
       "Закваска 43% = 21% от муки. В ней: 50 г муки + 21 г воды (на 600 г теста), 96 г муки + 41 г воды (на 1150 г)."],
    "liquid starter 100%?": ["tečno kiselo testo 100%?", "жидкая закваска 100%?"],
    "Swap so the flour and water in the dough stay the same.": ["Zamenite tako da brašno i voda u testu ostanu isti.", "Заменяем так, чтобы мука и вода в тесте остались теми же."],
    "600 g: starter 100 g (not 71), water 204 g (not 233). Everything else the same.":
      ["600 g: kiselo testo 100 g (umesto 71), voda 204 g (umesto 233). Ostalo isto.", "На 600 г: закваска 100 г (вместо 71), вода 204 г (вместо 233). Остальное без изменений."],
    "1150 g: starter 192 g (not 137), water 391 g (not 446). Everything else the same.":
      ["1150 g: kiselo testo 192 g (umesto 137), voda 391 g (umesto 446). Ostalo isto.", "На 1150 г: закваска 192 г (вместо 137), вода 391 г (вместо 446). Остальное без изменений."],
    "Any other starter: it must carry 50 g / 96 g of flour; cut the dough water by whatever it brings above 21 g / 41 g. Or let the":
      ["Bilo koje drugo kiselo testo: u njemu mora biti 50 g / 96 g brašna; vodu u testu smanjite za onoliko koliko kiselo testo donese preko 21 g / 41 g. Ili neka to uradi",
       "Любая другая закваска: в ней должно быть 50 г / 96 г муки, а воду в тесте уменьшаем на столько, сколько пришло с закваской сверх 21 г / 41 г. Или пусть это сделает"],
    "Any other starter: it must carry 50 g / 96 g of flour; cut the dough water by whatever it brings above 21 g / 41 g.":
      ["Bilo koje drugo kiselo testo: u njemu mora biti 50 g / 96 g brašna; vodu u testu smanjite za onoliko koliko kiselo testo donese preko 21 g / 41 g.",
       "Любая другая закваска: в ней должно быть 50 г / 96 г муки, а воду в тесте уменьшаем на столько, сколько пришло с закваской сверх 21 г / 41 г."],
    "Or let the": ["Ili neka to uradi", "Или пусть это сделает"],
    "do it.": ["umesto vas.", "за вас."],
    "protein · white flour": ["protein · belo brašno", "белок · белая мука"],
    "protein · whole wheat": ["protein · integralno", "белок · цельнозерновая"],
    "Mine is Caputo Nuvola, 12.5%. Tools that matter: a scale, cast iron or any covered pot, and a blade for scoring.":
      ["Ja koristim Caputo Nuvola, 12,5%. Važan alat: vaga, liveni lonac ili bilo koja posuda s poklopcem i žilet za zarezivanje.",
       "У меня Caputo Nuvola, 12,5%. Из инвентаря главное — весы, чугун или любая закрытая ёмкость и лезвие для надреза."],
    "scale": ["vaga", "весы"],
    "thermometer": ["termometar", "термометр"],
    "bowl": ["posuda", "миска"],
    "banneton": ["korpica za fermentaciju", "корзинка для расстойки"],
    "dutch oven": ["liveni lonac", "чугунная кастрюля"],
    "blade": ["žilet", "лезвие"],
    "your flour, your loaf": ["vaše brašno, vaš hleb", "ваша мука, ваш хлеб"],
    "how much do you have?": ["koliko imate?", "сколько у вас есть?"],
    "mix & walk away": ["umesi i ostavi", "замесить и забыть"],
    "Weigh the water. Tear the starter into pieces — it gets to work faster.": ["Izmerite vodu. Kiselo testo pocepajte na komadiće — brže će proraditi.", "Взвешиваем воду, закваску рвём на кусочки — так она быстрее включится в работу."],
    "White flour in, then whole wheat.": ["Dodajte belo brašno, pa integralno.", "Добавляем белую муку, затем цельнозерновую."],
    "Mix with a spatula, just to wet the flour. No gluten development yet.": ["Promešajte lopaticom, samo da se brašno navlaži. Gluten još ne razvijamo.", "Перемешиваем лопаткой — просто чтобы увлажнить муку. Глютен не развиваем."],
    "Cover and leave for autolyse.": ["Pokrijte i ostavite na autolizu.", "Накрываем и оставляем на автолиз."],
    "min autolyse": ["min autoliza", "мин автолиз"],
    "just wet the flour": ["samo navlažite brašno", "просто увлажнить муку"],
    "salt & the honest part": ["so i iskreni deo", "соль и честная часть"],
    "Salt in. Now knead properly.": ["Dodajte so. Sad mesite kako treba.", "Добавляем соль и хорошенько вымешиваем."],
    "Taste from two spots. One bland, one salty? Keep kneading.": ["Probajte sa dva mesta. Jedno bljutavo, drugo slano? Mesite dalje.", "Проверяем на вкус: если один кусочек пресный, а другой солёный — месим ещё."],
    "salt of flour": ["soli od brašna", "соли от муки"],
    "taste, don't guess": ["probajte, ne pogađajte", "пробуйте, а не гадайте"],
    "26°. the number nobody checks": ["26°. broj koji niko ne proverava", "26°. число, которое никто не проверяет"],
    "First fold, then measure the dough temperature.": ["Prvo presavijanje, pa izmerite temperaturu testa.", "Делаем первую складку и меряем температуру."],
    "26 °C or below. Above it fermentation runs ahead and the dough gets weak.": ["26 °C ili manje. Iznad toga fermentacija se ubrzava i testo slabi.", "Нам нужно не выше 26 °C — иначе ферментация разгоняется и тесто слабеет."],
    "Mine was 27. Oops. First 30 min in the fridge — fixed.": ["Moje je bilo 27. Ups. Prvih 30 min u frižideru — rešeno.", "У меня 27. Упс. Первые 30 минут в холодильнике — исправлено."],
    "Too warm is not a disaster, you cool it down. Next time — mix with cold water.": ["Pretoplo nije katastrofa, ohladite ga. Sledeći put — mesite hladnom vodom.", "Перегрели — не страшно, остудим. А на будущее — месите на холодной воде."],
    "30 min": ["30 min", "30 мин"],
    "fridge if warmer": ["frižider ako je toplije", "холодильник, если теплее"],
    "use cold water next time": ["sledeći put hladna voda", "в следующий раз холодная вода"],
    "folds & waiting": ["presavijanja i čekanje", "складки и ожидание"],
    "A fold every 30 minutes, four in total.": ["Presavijanje na svakih 30 minuta, ukupno četiri.", "Дальше — складка каждые 30 минут, всего четыре."],
    "By the third one you see bubbles. A good sign.": ["Kod trećeg se vide mehurići. Dobar znak.", "На третьей уже видно пузыри — отличный знак."],
    "On the fourth, check the gluten: stretch a piece thin. A window like this is what we want.": ["Kod četvrtog proverite gluten: tanko razvucite komad. Ovakav prozorčić je ono što tražimo.", "На четвёртой проверяем глютен: растягиваем кусочек. Вот такое окошко — это нам и надо."],
    "Now wait until the dough grows by 50–60%. Mine took about an hour and a half. And a sunset — sorry for the light.": ["Sad čekamo da testo naraste za 50–60%. Meni je trebalo oko sat i po. I zalazak sunca — izvinite za svetlo.", "Теперь ждём, пока тесто вырастет на 50–60%. У меня ушло около полутора часов. И закат — простите за свет."],
    "folds · every 30 min": ["presavijanja · na 30 min", "складки · каждые 30 мин"],
    "volume, not time": ["zapremina, ne vreme", "объём, а не время"],
    "watch the dough, not the clock": ["gledajte testo, ne sat", "следите за тестом, а не за часами"],
    "shape & say good night": ["oblikuj i laku noć", "формуем и спокойной ночи"],
    "Preshape: round it, tightening the top. Rest 20–30 min.": ["Predoblikovanje: zaokružite, zatežući gornju stranu. Odmor 20–30 min.", "Округляем заготовку, затягивая верх, и даём отдохнуть 20–30 минут."],
    "Final shape: I do folds and swaddling. Any method you like works.": ["Konačno oblikovanje: ja radim presavijanja i umotavanje. Bilo koja vaša metoda je dobra.", "Финальная формовка — я делаю складки и пеленание, но подойдёт любой ваш метод."],
    "Another 20–30 min proof, then into the fridge overnight, covered.": ["Još 20–30 min narastanja, pa preko noći u frižider, pokriveno.", "Ещё 20–30 минут расстойки — и на ночь в холодильник под шапочкой."],
    "min rest · ×2": ["min odmora · ×2", "мин отдыха · ×2"],
    "fridge, overnight": ["frižider, preko noći", "холодильник, на ночь"],
    "tension on top, not force": ["zategnuto odozgo, ne na silu", "натяжение сверху, а не сила"],
    "good morning. let's bake": ["dobro jutro. pečemo", "доброе утро. печём"],
    "Morning. The dough looks like this — time to bake.": ["Jutro. Testo izgleda ovako — vreme je za pečenje.", "Утром — вот такой хлебушек. Пора печь."],
    "Turn it out onto a mat, score on the side.": ["Istresite ga na podlogu, zarežite sa strane.", "Вываливаем на коврик, надрезаем сбоку."],
    "The dutch oven has been heating for an hour at 250 °C.": ["Liveni lonac se grejao sat vremena na 250 °C.", "Чугун заранее грелся час при 250 °C."],
    "Lid on — 20 min. Lid off, down to 220 °C — another 20–25.": ["Sa poklopcem — 20 min. Bez poklopca, na 220 °C — još 20–25.", "Под крышкой — 20 минут. Снимаем крышку, снижаем до 220 °C — ещё 20–25."],
    "20 min, lid on": ["20 min, s poklopcem", "20 мин, под крышкой"],
    "20–25 min, lid off": ["20–25 min, bez poklopca", "20–25 мин, без крышки"],
    "the score barely opened? that's the volume": ["zarez se slabo otvorio? to je zbog zapremine", "надрез раскрылся слабовато? это из-за объёма"],
    "step 1 / 6 · mix": ["korak 1 / 6 · mešenje", "шаг 1 / 6 · замес"],
    "step 2 / 6 · salt": ["korak 2 / 6 · so", "шаг 2 / 6 · соль"],
    "step 3 / 6 · temperature": ["korak 3 / 6 · temperatura", "шаг 3 / 6 · температура"],
    "step 4 / 6 · folds": ["korak 4 / 6 · presavijanja", "шаг 4 / 6 · складки"],
    "step 5 / 6 · shape": ["korak 5 / 6 · oblikovanje", "шаг 5 / 6 · формовка"],
    "step 6 / 6 · bake": ["korak 6 / 6 · pečenje", "шаг 6 / 6 · выпечка"],
    "▶ step 1 / 6": ["▶ korak 1 / 6", "▶ шаг 1 / 6"], "▶ step 2 / 6": ["▶ korak 2 / 6", "▶ шаг 2 / 6"],
    "▶ step 3 / 6": ["▶ korak 3 / 6", "▶ шаг 3 / 6"], "▶ step 4 / 6": ["▶ korak 4 / 6", "▶ шаг 4 / 6"],
    "▶ step 5 / 6": ["▶ korak 5 / 6", "▶ шаг 5 / 6"], "▶ step 6 / 6": ["▶ korak 6 / 6", "▶ шаг 6 / 6"],
    "timing at a glance": ["vremenski plan ukratko", "тайминг коротко"],
    "Autolyse 30–50 min → salt, knead": ["Autoliza 30–50 min → so, mešenje", "Автолиз 30–50 мин → соль, замес"],
    "4 folds, every 30 min → bulk until +50–60%": ["4 presavijanja, na 30 min → fermentacija do +50–60%", "4 складки через каждые 30 мин → брожение до роста на 50–60%"],
    "Preshape, rest 20–30 min → shape, proof 20–30 min → fridge overnight (~7 °C)": ["Predoblikovanje, odmor 20–30 min → oblikovanje, narastanje 20–30 min → frižider preko noći (~7 °C)", "Предформовка, отдых 20–30 мин → формовка, расстойка 20–30 мин → холодильник на ночь (~7 °C)"],
    "Bake 250 °C lid on 20 min + 220 °C lid off 20–25 min": ["Pečenje 250 °C s poklopcem 20 min + 220 °C bez poklopca 20–25 min", "Выпечка 250 °C под крышкой 20 мин + 220 °C без крышки 20–25 мин"],
    "Timing is approximate. A liquid starter may run a little faster or slower than lievito madre.": ["Vreme je okvirno. Tečno kiselo testo može raditi malo brže ili sporije od lievito madre.", "Тайминг ориентировочный: жидкая закваска может вести себя чуть быстрее или медленнее левито мадре."],
    "the result": ["rezultat", "результат"],
    "crust · crumb · side": ["kora · sredina · bok", "корка · мякиш · бок"],
    "scored crust from above": ["zarezana kora odozgo", "надрезанная корка сверху"],
    "the ear": ["uvo", "ушко"],
    "loaf on the rack": ["hleb na rešetki", "хлеб на решётке"],
    "listen to that crust": ["slušajte tu koru", "послушайте эту корку"],
    "cut loaf": ["isečen hleb", "разрезанный хлеб"],
    "one hour later": ["sat vremena kasnije", "через час"],
    "and… here it is": ["i… evo ga", "а вот и он"],
    "Here is our bread. The score opened a bit weakly — that's the volume. In homemade bread that's not the point. The point is taste, craft and love.":
      ["Evo našeg hleba. Zarez se otvorio slabije — to je zbog zapremine. Kod domaćeg hleba to nije glavno. Glavno je ukus, zanat i ljubav.",
       "А вот и наш хлеб. Надрез раскрылся слабовато — но это из-за объёма. В домашнем хлебе главное не это. Главное — вкус, ремесло и любовь."],
    "scale this recipe": ["preračunaj ovaj recept", "пересчитать этот рецепт"],
    "follow · tag me": ["prati · označi me", "подписаться · отметить меня"],
    "taste, craft & love": ["ukus, zanat i ljubav", "вкус, ремесло и любовь"],
    "save it, bake it and tag me": ["sačuvaj, ispeci i označi me", "сохраните, испеките и отметьте меня"],

    /* ---------- what you need ---------- */
    "home kit · 13": ["kućni pribor · 13", "домашний набор · 13"],
    "Everything on this page is from my own kitchen — the same things the bakery ran on, just fewer of them. Red tag = you need it on day one. Outline tag = nice, but the bread will still happen without it.":
      ["Sve na ovoj stranici je iz moje kuhinje — iste stvari na kojima je radila pekara, samo manje. Crvena oznaka = treba vam od prvog dana. Uokvirena = lepo je imati, ali hleb će biti i bez toga.",
       "Всё на этой странице — с моей кухни: те же вещи, на которых работала пекарня, только меньше. Красная метка — нужно с первого дня. Контурная — приятно иметь, но хлеб получится и без этого."],
    "must have": ["obavezno", "обязательно"],
    "need": ["treba", "нужно"],
    "nice": ["poželjno", "желательно"],
    "nice to have": ["poželjno imati", "желательно иметь"],
    "digital kitchen scale": ["digitalna kuhinjska vaga", "электронные кухонные весы"],
    "probe thermometer": ["ubodni termometar", "щуп-термометр"],
    "bowls with lids": ["posude s poklopcem", "миски с крышками"],
    "cast iron dutch oven": ["liveni lonac", "чугунная кастрюля"],
    "bannetons": ["korpice za fermentaciju", "корзинки для расстойки"],
    "bowl scraper and bench scraper": ["strugač za posudu i strugač za sto", "скребок для миски и скребок для стола"],
    "scrapers": ["strugači", "скребки"],
    "oven mitts": ["rukavice za rernu", "прихватки"],
    "cooling rack": ["rešetka za hlađenje", "решётка для остывания"],
    "kitchen timer": ["kuhinjski tajmer", "кухонный таймер"],
    "timer": ["tajmer", "таймер"],
    "parchment and plastic wrap": ["papir za pečenje i folija", "пергамент и плёнка"],
    "parchment & wrap": ["papir i folija", "пергамент и плёнка"],
    "flour scoops": ["lopatice za brašno", "совки для муки"],
    "scoops": ["lopatice", "совки"],
    "wooden spoons": ["drvene kašike", "деревянные ложки"],
    "you can skip": ["možete preskočiti", "можно пропустить"],
    "for now": ["za sada", "пока"],
    "Stand mixer. This dough is mixed by hand in four minutes.": ["Mikser. Ovo testo se rukom umesi za četiri minuta.", "Миксер. Это тесто вымешивается руками за четыре минуты."],
    "Proofing box. Your oven with the light on, or the top of the fridge.": ["Komora za narastanje. Rerna s upaljenim svetlom ili vrh frižidera.", "Расстоечный шкаф. Духовка со включённой лампочкой или верх холодильника."],
    "Baking steel or stone. The dutch oven does the job.": ["Ploča ili kamen za pečenje. Liveni lonac radi isti posao.", "Стальная плита или камень. Чугун справится сам."],
    "now bake something": ["sad ispecite nešto", "а теперь испеките что-нибудь"],


    /* ---------- what you need (from the Instagram post) ---------- */
    "what you need to bake bread": ["šta vam treba da ispečete hleb", "что нужно, чтобы испечь хлеб"],
    "— and what to use instead, if you don't have it": ["— i čime da ga zamenite ako ga nemate", "— и чем заменить, если этого нет"],
    "easy swaps": ["lake zamene", "простые замены"],
    "to weigh": ["merenje", "взвесить"],
    "to mix": ["mešenje", "замесить"],
    "to proof": ["narastanje", "расстойка"],
    "to bake": ["pečenje", "выпечка"],
    "to score": ["zarezivanje", "надрез"],
    "to handle": ["rukovanje", "перенести"],
    "to cool": ["hlađenje", "остудить"],
    "to check": ["provera", "проверить"],
    "baked loaf on a cooling rack": ["pečen hleb na rešetki", "испечённый хлеб на решётке"],
    "eight jobs, one loaf": ["osam poslova, jedan hleb", "восемь задач, один хлеб"],
    "02 · to weigh": ["02 · merenje", "02 · взвесить"],
    "must have · no real swap": ["obavezno · nema prave zamene", "обязательно · замены нет"],
    "Kitchen scale, 1 g steps": ["Kuhinjska vaga, korak 1 g", "Кухонные весы с шагом 1 г"],
    "Bread is chemistry. A cup of flour can weigh 120 g or 160 g — that's a different dough.": ["Hleb je hemija. Šolja brašna može da bude 120 g ili 160 g — to je drugo testo.", "Хлеб — это химия. Стакан муки может весить 120 г, а может 160 г — это уже другое тесто."],
    "Honestly — get one. The cheapest digital scale works. It's the one tool with no good swap.": ["Iskreno — nabavite je. I najjeftinija digitalna vaga radi posao. To je jedini alat bez dobre zamene.", "Честно — купите. Подойдут самые дешёвые электронные весы. Это единственный инструмент, которому нет нормальной замены."],
    "For starter and salt: 1 g precision matters most. 7 g of salt vs 10 g is a different bread.": ["Za kiselo testo i so preciznost od 1 g je najvažnija. 7 g soli i 10 g soli su dva različita hleba.", "Для закваски и соли точность в 1 г важнее всего. 7 г соли и 10 г — это разный хлеб."],
    "Grams, not cups": ["Grami, ne šolje", "Граммы, а не стаканы"],
    "03 · to mix": ["03 · mešenje", "03 · замесить"],
    "must have · but you already own one": ["obavezno · ali to već imate", "обязательно · но у вас это уже есть"],
    "Big bowl + spoon": ["Velika posuda + kašika", "Большая миска + ложка"],
    "The dough triples in size while it rises. Give it room.": ["Testo dok raste utrostruči zapreminu. Dajte mu prostora.", "Пока тесто растёт, оно увеличивается втрое. Дайте ему место."],
    "No bowl or spoon? Use:": ["Nemate posudu ili kašiku? Uzmite:", "Нет миски или ложки? Возьмите:"],
    "Any pot or a large food container — at least 3 litres for 1 kg of dough.": ["Bilo koji lonac ili veliku posudu za hranu — najmanje 3 litra za 1 kg testa.", "Любую кастрюлю или большой пищевой контейнер — минимум 3 литра на 1 кг теста."],
    "Your hand instead of a spoon — wet it first, dough won't stick.": ["Ruku umesto kašike — prvo je pokvasite, testo se neće lepiti.", "Руку вместо ложки — смочите её водой, и тесто не прилипнет."],
    "An old bank card instead of a dough scraper — to scrape the bowl and shape the dough.": ["Staru bankovnu karticu umesto strugača — da sastružete posudu i oblikujete testo.", "Старую банковскую карту вместо скребка — счищать миску и формовать тесто."],
    "No mixer needed. Ever": ["Mikser ne treba. Nikad", "Миксер не нужен. Никогда"],
    "nested bowls with lids": ["posude s poklopcima, jedna u drugoj", "миски с крышками, одна в другой"],
    "two wooden spoons": ["dve drvene kašike", "две деревянные ложки"],
    "bowl scrapers and a metal bench scraper": ["strugači za posudu i metalni strugač za sto", "скребки для миски и металлический скребок"],
    "04 · to proof": ["04 · narastanje", "04 · расстойка"],
    "easy swap": ["laka zamena", "простая замена"],
    "Proofing basket (banneton)": ["Korpica za narastanje (banneton)", "Корзинка для расстойки (баннетон)"],
    "Holds the shape overnight in the fridge, so the loaf doesn't spread flat.": ["Drži oblik preko noći u frižideru, da se hleb ne razlije.", "Держит форму всю ночь в холодильнике, чтобы хлеб не расплылся."],
    "No basket? These work just as well:": ["Nemate korpicu? Ovo radi jednako dobro:", "Нет корзинки? Это работает не хуже:"],
    "A bowl lined with a kitchen towel — cotton or linen, not terry, and flour it well.": ["Posuda obložena kuhinjskom krpom — pamučnom ili lanenom, ne frotirom, i dobro je pobrašnite.", "Миска с кухонным полотенцем — хлопковым или льняным, не махровым, и хорошо присыпьте его мукой."],
    "A colander + towel — air flows from below, crust gets a nice skin.": ["Cediljka + krpa — vazduh struji odozdo, kora dobija lepu kožicu.", "Дуршлаг + полотенце — воздух идёт снизу, корочка красиво подсыхает."],
    "A plastic container with a lid — no cap needed, the lid keeps it from drying.": ["Plastična posuda s poklopcem — kapa ne treba, poklopac ga čuva od sušenja.", "Пластиковый контейнер с крышкой — шапочка не нужна, крышка не даст заветриться."],
    "Tip: rice flour on the towel — nothing sticks.": ["Savet: pirinčano brašno na krpi — ništa se ne lepi.", "Совет: рисовая мука на полотенце — ничего не прилипнет."],
    "proofing baskets, one lined with linen": ["korpice za narastanje, jedna obložena lanom", "корзинки для расстойки, одна со льняным чехлом"],
    "05 · to bake": ["05 · pečenje", "05 · выпечка"],
    "Cast iron pot with a lid": ["Liveni lonac s poklopcem", "Чугунная кастрюля с крышкой"],
    "Traps steam for the first 20 minutes — that's what lets the loaf rise and open.": ["Zadržava paru prvih 20 minuta — zbog toga hleb raste i otvara se.", "Держит пар первые 20 минут — благодаря этому хлеб поднимается и раскрывается."],
    "No cast iron? These work just as well:": ["Nemate liveni lonac? Ovo radi jednako dobro:", "Нет чугуна? Это работает не хуже:"],
    "A roasting bag on a tray — cut it open after 20 min, like taking the lid off.": ["Kesa za pečenje na plehu — posle 20 min je rasecite, kao da skidate poklopac.", "Рукав для запекания на противне — через 20 минут разрежьте его, как будто снимаете крышку."],
    "Any oven-safe pot with a lid — ceramic, glass, steel. Check the handles.": ["Bilo koji lonac za rernu s poklopcem — keramika, staklo, čelik. Proverite drške.", "Любая жаропрочная кастрюля с крышкой — керамика, стекло, сталь. Проверьте ручки."],
    "A tray + a pan of boiling water below it — steam without a lid. Remove the water after 20 min.": ["Pleh + posuda s ključalom vodom ispod — para bez poklopca. Uklonite vodu posle 20 min.", "Противень + форма с кипятком под ним — пар без крышки. Через 20 минут воду уберите."],
    "Steam = rise = open crumb": ["Para = rast = otvorena sredina", "Пар = подъём = открытый мякиш"],
    "cast iron pot with a lid": ["liveni lonac s poklopcem", "чугунная кастрюля с крышкой"],
    "06 · to score": ["06 · zarezivanje", "06 · надрез"],
    "A cut tells the bread where to open. Without it, it bursts wherever it wants.": ["Zarez kaže hlebu gde da se otvori. Bez njega pukne gde god hoće.", "Надрез подсказывает хлебу, где раскрыться. Без него он лопнет где захочет."],
    "No blade? These work just as well:": ["Nemate žilet? Ovo radi jednako dobro:", "Нет лезвия? Это работает не хуже:"],
    "The sharpest knife you have — serrated works too. One quick confident cut.": ["Najoštriji nož koji imate — može i nazubljeni. Jedan brz, siguran rez.", "Самый острый нож, какой есть — подойдёт и с зубчиками. Один быстрый уверенный надрез."],
    "Kitchen scissors — snip a few \"spikes\" on top. Looks great.": ["Kuhinjske makaze — isecite nekoliko \"šiljaka\" odozgo. Izgleda odlično.", "Кухонные ножницы — сделайте сверху несколько «шипов». Выглядит отлично."],
    "Cold dough cuts easier": ["Hladno testo se lakše zareže", "Холодное тесто режется легче"],
    "07 · to handle": ["07 · rukovanje", "07 · перенести"],
    "must have · swap the type, not the job": ["obavezno · menja se vrsta, ne posao", "обязательно · меняется вид, а не задача"],
    "Parchment + oven mitts": ["Papir za pečenje + rukavice", "Пергамент + прихватки"],
    "The pot is 250 °C. Parchment lets you lower the dough in without touching it.": ["Lonac je 250 °C. Papir vam omogućava da spustite testo bez dodirivanja.", "В кастрюле 250 °C. На пергаменте тесто можно опустить внутрь, не касаясь стенок."],
    "No parchment or mitts? Use:": ["Nemate papir ili rukavice? Uzmite:", "Нет пергамента или прихваток? Возьмите:"],
    "A teflon baking mat — reusable, lasts for years.": ["Teflonsku podlogu za pečenje — višekratna, traje godinama.", "Тефлоновый коврик для выпечки — многоразовый, служит годами."],
    "A thick folded towel instead of mitts — dry only. A wet towel burns through instantly.": ["Debelu presavijenu krpu umesto rukavica — samo suvu. Mokra krpa propušta toplotu odmah.", "Толстое сложенное полотенце вместо прихваток — только сухое. Мокрое прожжёт мгновенно."],
    "Please don't skip the mitts. 250 °C doesn't forgive.": ["Molim vas, ne preskačite rukavice. 250 °C ne prašta.", "Пожалуйста, не пропускайте прихватки. 250 °C не прощают."],
    "parchment and a teflon baking mat": ["papir za pečenje i teflonska podloga", "пергамент и тефлоновый коврик"],
    "silicone oven mitts": ["silikonske rukavice za rernu", "силиконовые прихватки"],
    "08 · to cool": ["08 · hlađenje", "08 · остудить"],
    "The loaf keeps steaming for an hour. On a flat plate, that steam turns the bottom soggy.": ["Hleb se puši još sat vremena. Na ravnom tanjiru ta para raskvasi dno.", "Хлеб ещё час отдаёт пар. На плоской тарелке этот пар размочит дно."],
    "No rack? These work just as well:": ["Nemate rešetku? Ovo radi jednako dobro:", "Нет решётки? Это работает не хуже:"],
    "The rack from your oven — pull it out, let the loaf cool on top.": ["Rešetka iz rerne — izvadite je i ostavite hleb da se ohladi na njoj.", "Решётка из духовки — достаньте её и остудите хлеб на ней."],
    "Two wooden spoons on the table — lay the loaf across, air flows underneath.": ["Dve drvene kašike na stolu — položite hleb preko njih, vazduh struji ispod.", "Две деревянные ложки на столе — положите хлеб поперёк, воздух пойдёт снизу."],
    "Stand the loaf on its side — lean it on something, turn it once or twice.": ["Postavite hleb na bok — naslonite ga na nešto, okrenite jednom ili dvaput.", "Поставьте хлеб на бок — прислоните к чему-нибудь и переверните раз-другой."],
    "And wait 1 hour before cutting — the crumb is still setting.": ["I sačekajte 1 sat pre sečenja — sredina se još uvek stvara.", "И подождите 1 час, прежде чем резать — мякиш ещё доходит."],
    "Cooling rack": ["Rešetka za hlađenje", "Решётка для остывания"],
    "wire cooling rack": ["žičana rešetka za hlađenje", "решётка для остывания"],
    "09 · to check": ["09 · provera", "09 · проверить"],
    "nice to have · skip it for now": ["poželjno · za sada preskočite", "желательно · пока можно пропустить"],
    "Probe thermometer": ["Ubodni termometar", "Щуп-термометр"],
    "No thermometer?": ["Nemate termometar?", "Нет термометра?"],
    "Use water from the fridge in the mix — keeps you safely below 26 °C most of the year.": ["Mesite vodom iz frižidera — to vas veći deo godine drži sigurno ispod 26 °C.", "Замешивайте на воде из холодильника — большую часть года это надёжно держит ниже 26 °C."],
    "Watch the dough, not the clock — +50–60% in volume, bubbles, a jiggle.": ["Gledajte testo, ne sat — +50–60% zapremine, mehurići, podrhtavanje.", "Следите за тестом, а не за часами — +50–60% объёма, пузыри, тесто подрагивает."],
    "You DON'T need: a mixer, a proofer, special flour from abroad.": ["NE treba vam: mikser, komora za narastanje, posebno brašno iz inostranstva.", "Вам НЕ нужны: миксер, расстоечный шкаф, особая мука из-за границы."],
    "10 · your kit": ["10 · vaš pribor", "10 · ваш набор"],
    "tick what you have": ["označite šta imate", "отметьте, что есть"],
    "must": ["obavezno", "обязательно"],
    "swap": ["zamena", "замена"],
    "bowl + spoon": ["posuda + kašika", "миска + ложка"],
    "basket": ["korpica", "корзинка"],
    "or bowl + towel": ["ili posuda + krpa", "или миска + полотенце"],
    "cast iron": ["liveni lonac", "чугун"],
    "or roasting bag": ["ili kesa za pečenje", "или рукав для запекания"],
    "or sharp knife": ["ili oštar nož", "или острый нож"],
    "parchment + mitts": ["papir + rukavice", "пергамент + прихватки"],
    "rack": ["rešetka", "решётка"],
    "or the oven rack": ["ili rešetka iz rerne", "или решётка из духовки"],
    "save this, tick the boxes": ["sačuvajte i označite", "сохраните и отметьте"],
    "And the first recipe is already here.": ["A prvi recept je već ovde.", "А первый рецепт уже здесь."],
    "wheat sourdough →": ["pšenični hleb na kiselom testu →", "пшеничный хлеб на закваске →"],
    "what you need · grain of taste": ["šta vam treba · grain of taste", "что нужно · grain of taste"],

    "download PDF": ["preuzmi PDF", "скачать PDF"],
    "▶ watch this step:": ["▶ pogledajte ovaj korak:", "▶ смотреть этот шаг:"],


    /* ---------- about: the bakery ---------- */
    "A tiny bakery, 30 m², where we baked sourdough bread and buns every single day. It was a beautiful time and a hard one: my first business, my first team, my first huge responsibility — and my first mistakes.": ["Mala pekara od 30 m², u kojoj smo svakog dana pekli hleb i peciva na kiselom testu. Bilo je to u isto vreme divno i teško vreme: moj prvi biznis, moje prvo iskustvo u vođenju ljudi, prva ogromna odgovornost i prve greške.", "Маленькая пекарня в 30 квадратных метров, где мы каждый день пекли хлеб и булочки на закваске. Это было одновременно прекрасное и сложное время: мой первый бизнес, мой первый опыт управления людьми, первая огромная ответственность и первые ошибки."],
    "Our customers were incredible people: musicians, writers, athletes, entrepreneurs, teachers and many, many others. Thanks to them I believed in myself and in what we baked, learned Serbian, and picked up the way people here look at life. I stopped chasing success and started simply living. One of the best lessons I've had.": ["Među našim mušterijama uvek je bilo mnogo neverovatnih ljudi: muzičari, pisci, sportisti, preduzetnici, nastavnici i mnogi, mnogi drugi. Zahvaljujući njima poverovala sam u sebe i u ono što pečemo, naučila srpski i naučila kako se ovde gleda na život. Prestala sam da jurim za uspehom i počela jednostavno da živim. To je bila divna životna lekcija.", "Среди наших клиентов всегда было очень много невероятных людей: музыканты, писатели, спортсмены, предприниматели, учителя и многие-многие другие. Благодаря им я смогла поверить в себя и в свой продукт, выучить сербский и научиться тому отношению к жизни, что принято в Сербии. Я перестала гнаться за успехом и начала просто жить. Это был прекрасный жизненный урок."],
    "the team": ["tim", "команда"],
    "In a few years I built a team of five wonderful people, and every one of them stayed for more than a year. I trained each of them myself and put a lot into a place where work is a pleasure and the result belongs to everyone.": ["Za nekoliko godina okupila sam tim od pet divnih ljudi, i svi su u projektu radili duže od godinu dana. Svakoga sam sama obučila i mnogo uložila u atmosferu u kojoj je rad zadovoljstvo, a rezultat cene svi zajedno.", "За несколько лет я собрала команду из пяти замечательных людей, и все они работали в проекте больше года. Я обучала каждого сама и много вкладывалась в атмосферу, где работать в удовольствие, а результат ценится всем коллективом."],
    "why I stepped out": ["zašto sam otišla", "почему я ушла"],
    "Health problems started to limit me and the work. At some point my life turned into surviving between daily pain and keeping the bakery going. So I chose to keep the jobs, keep the bakery and its legacy, and step out — to look after my health and give my time to what I love without sacrificing myself. That's why I'm here.": ["Vremenom su počeli zdravstveni problemi koji su ozbiljno ograničavali i mene i posao. U jednom trenutku život mi se pretvorio u preživljavanje između svakodnevnog bola i očuvanja projekta. Tada sam odlučila da sačuvam radna mesta, projekat i njegovo nasleđe — i da izađem, da se posvetim zdravlju i onome što volim, bez žrtvovanja sebe. Zato sam ovde.", "Со временем начались проблемы со здоровьем, которые сильно ограничивали и меня, и работу. В какой-то момент жизнь превратилась в попытку выжить между ежедневной болью и сохранением проекта. Тогда я решила сохранить рабочие места, проект и его наследие — и выйти, чтобы заняться здоровьем и посвятить время тому, что люблю, не принося себя в жертву. Поэтому я здесь."],
    "the honest part": ["iskreno", "честно"],
    "If you love baking bread, in your own bakery it will be the last thing you have time for.": ["Ako voliš da pečeš hleb, u sopstvenom biznisu to će biti poslednje na šta ćeš imati vremena.", "Если ты любишь печь хлеб, то в своём бизнесе это будет последним, на что будет уходить твоё время."],
    "I love the bakery I built and the team I found. I hope everything goes well for them after me.": ["Mnogo volim i projekat koji sam izgradila i tim koji sam okupila. Nadam se da će im i posle mene sve ići dobro.", "Я очень люблю и проект, который построила, и команду, которую удалось собрать. Надеюсь, что и после меня у них всё сложится успешно."],
    "tiny bakery": ["mala pekara", "маленькая пекарня"],
    "people in the team": ["ljudi u timu", "человек в команде"],
    "every single day": ["svaki dan", "каждый день"],

    /* ---------- calculator: flour stocks ---------- */
    "dough I want, g": ["testa koje želim, g", "теста нужно, г"],
    "white bread flour I have, g": ["belog hlebnog brašna imam, g", "белой муки есть, г"],
    "whole wheat flour I have, g": ["integralnog brašna imam, g", "цельнозерновой муки есть, г"],
    "runs out first:": ["prvo nestaje:", "закончится первой:"],
    "left over:": ["ostaje:", "останется:"],
    "starter not included — feed it separately.": ["kiselo testo nije uračunato — hranite ga posebno.", "закваска не учтена — её кормят отдельно."],

    /* ---------- video clip tabs ---------- */
    "mix": ["mešenje", "замес"],
    "autolyse": ["autoliza", "автолиз"],
    "all folds": ["sva presavijanja", "все складки"],
    "full cycle": ["ceo ciklus", "полный цикл"],
    "fold 3": ["3. presavijanje", "3-я складка"],
    "fold 4": ["4. presavijanje", "4-я складка"],


    /* ---------- recipe: temperature steps + calculator explainer ---------- */
    "recipe calculator": ["kalkulator recepta", "калькулятор рецепта"],
    "how to use it · 3 steps": ["kako se koristi · 3 koraka", "как пользоваться · 3 шага"],
    "weigh this": ["izmerite ovo", "взвесьте это"],
    "temperature": ["temperatura", "температура"],
    "folds": ["savijanja", "складки"],
    "shape": ["oblikovanje", "формовка"],
    "bake": ["pečenje", "выпечка"],
    "what is this?": ["šta je ovo?", "что это?"],
    "A calculator that rewrites this recipe for you. The recipe above is for 600 g and 1150 g of dough. Your bowl, your oven and your bag of flour are different — so type in what you have, and it tells you how many grams of everything to weigh.": ["Kalkulator koji prepravlja ovaj recept za vas. Recept iznad je za 600 g i 1150 g testa. Vaša posuda, vaša rerna i vaša kesa brašna su drugačiji — zato upišite šta imate, a on vam kaže koliko grama čega da izmerite.", "Калькулятор, который пересчитывает этот рецепт под вас. Рецепт выше — на 600 г и 1150 г теста. А у вас своя миска, своя духовка и свой пакет муки — поэтому впишите, что есть, и он скажет, сколько граммов чего взвесить."],
    "Pick how you start.": ["Izaberite od čega polazite.", "Выберите, от чего считать."],
    "\"Flour I have\" — if you want to use what is in your cupboard: type how much white and how much whole wheat flour you have. \"Dough I want\" — if you know how big your loaf should be: type its weight.": ["\"Brašna koje imam\" — ako želite da iskoristite ono što imate u ormaru: upišite koliko belog i koliko integralnog brašna imate. \"Testa koje želim\" — ako znate koliki hleb želite: upišite njegovu težinu.", "«Муки, которая есть» — если хотите испечь из того, что есть дома: впишите, сколько у вас белой и сколько цельнозерновой муки. «Теста, которое нужно» — если знаете, какой хлеб хотите: впишите его вес."],
    "Say how many loaves": ["Upišite koliko hlebova", "Укажите, сколько буханок"],
    "and which starter you have: stiff (43%) or liquid (100%).": ["i koje kiselo testo imate: čvrsto (43%) ili tečno (100%).", "и какая у вас закваска: твёрдая (43%) или жидкая (100%)."],
    "Weigh exactly the grams on the right.": ["Izmerite tačno grame sa desne strane.", "Взвесьте ровно столько граммов, сколько справа."],
    "Every number keeps the recipe's proportions, so the bread turns out the same as mine — just bigger or smaller.": ["Svaki broj čuva proporcije recepta, pa hleb ispadne isti kao moj — samo veći ili manji.", "Каждое число сохраняет пропорции рецепта, поэтому хлеб получится таким же, как у меня, — просто больше или меньше."],
    "Why two flours separately? The recipe needs 3 parts white to 1 part whole wheat. If you have little of one, the calculator makes the loaf smaller so neither runs out, and tells you which flour ends first.": ["Zašto dva brašna posebno? Receptu treba 3 dela belog na 1 deo integralnog. Ako jednog imate malo, kalkulator smanji hleb da nijedno ne nestane i kaže vam koje prvo nestaje.", "Почему две муки отдельно? В рецепте 3 части белой на 1 часть цельнозерновой. Если какой-то мало, калькулятор уменьшит хлеб, чтобы хватило обеих, и подскажет, какая закончится первой."],
    "open the full calculator": ["otvori ceo kalkulator", "открыть полный калькулятор"],
    "At the end, measure the dough temperature. Mine was 27 °C.": ["Na kraju izmerite temperaturu testa. Moje je bilo 27 °C.", "В конце меряем температуру теста. У меня 27 °C."],
    "Above 26 °C the dough needs cooling down to the comfortable fermentation corridor of 23–25 °C. I put it in the fridge for 30 min.": ["Iznad 26 °C testo treba ohladiti do prijatnog koridora za fermentaciju od 23–25 °C. Ja sam ga stavila u frižider na 30 min.", "Выше 26 °C тесто нужно охладить до комфортного для ферментации коридора 23–25 °C. Я убрала его в холодильник на 30 минут."],
    "fermentation corridor": ["koridor fermentacije", "коридор ферментации"],
    "back in the comfort zone": ["ponovo u zoni komfora", "снова в зоне комфорта"],
    "Out of the fridge: the dough is 25 °C. A great temperature for fermentation in the apartment.": ["Iz frižidera: testo ima 25 °C. Odlična temperatura za fermentaciju u stanu.", "Достаю тесто из холодильника: 25 °C. Отличная температура для ферментации в квартире."],
    "Next fold: wet hands, stretch one side up and fold it over, turn the bowl, repeat on all four sides.": ["Sledeće presavijanje: mokrim rukama povucite jednu stranu nagore i preklopite, okrenite posudu, ponovite sa sve četiri strane.", "Следующая складка: мокрыми руками тянем край вверх и складываем, поворачиваем миску, повторяем со всех четырёх сторон."],
    "Cover and leave for 30 min until the next fold.": ["Pokrijte i ostavite 30 min do sledećeg presavijanja.", "Накрываем и оставляем на 30 минут до следующей складки."],
    "after the fridge": ["posle frižidera", "после холодильника"],
    "a calm dough, right on track": ["mirno testo, sve po planu", "спокойное тесто, всё по плану"],
    "Autolyse 30–50 min → salt, knead → temperature check: above 26 °C, cool to 23–25 °C": ["Autoliza 30–50 min → so, mešenje → provera temperature: iznad 26 °C ohladiti na 23–25 °C", "Автолиз 30–50 мин → соль, замес → замер температуры: выше 26 °C — охладить до 23–25 °C"],
    "Pick a recipe": ["Izaberite recept", "Выберите рецепт"],
    "from the list.": ["sa liste.", "из списка."],
    "\"Flour I have\" — type how much of each flour is in your cupboard. \"Dough I want\" — type how heavy your loaf should be.": ["\"Brašna koje imam\" — upišite koliko kog brašna imate. \"Testa koje želim\" — upišite koliko hleb treba da bude težak.", "«Муки, которая есть» — впишите, сколько какой муки у вас есть. «Теста, которое нужно» — впишите, сколько должен весить хлеб."],
    "The proportions stay the same as in the recipe, so the bread turns out the same — just bigger or smaller.": ["Proporcije ostaju iste kao u receptu, pa hleb ispadne isti — samo veći ili manji.", "Пропорции остаются как в рецепте, поэтому хлеб получится таким же — просто больше или меньше."],


    /* ---------- calculator v3: per-loaf weight, totals, print ---------- */
    "one loaf weighs, g": ["težina jednog hleba, g", "вес одной буханки, г"],
    "how many loaves": ["koliko hlebova", "сколько буханок"],
    "g of dough": ["g testa", "г теста"],
    "1 loaf": ["1 hleb", "1 буханка"],
    "total dough": ["ukupno testa", "всего теста"],
    "flour in total (100%):": ["ukupno brašna (100%):", "всего муки (100%):"],
    "print / save PDF": ["štampaj / sačuvaj PDF", "распечатать / сохранить PDF"],
    "loaves:": ["hlebova:", "буханок:"],
    "starter:": ["kiselo testo:", "закваска:"],
    "\"Flour I have\" — if you want to use what is in your cupboard: type how much white and how much whole wheat flour you have. \"Dough I want\" — if you know how big one loaf should be: type its weight, or tap 600 g / 1150 g.": ["\"Brašna koje imam\" — ako želite da iskoristite ono što imate u ormaru: upišite koliko belog i koliko integralnog brašna imate. \"Testa koje želim\" — ako znate koliki treba da bude jedan hleb: upišite njegovu težinu ili kliknite 600 g / 1150 g.", "«Муки, которая есть» — если хотите испечь из того, что есть дома: впишите, сколько у вас белой и сколько цельнозерновой муки. «Теста, которое нужно» — если знаете, какой должна быть одна буханка: впишите её вес или нажмите 600 г / 1150 г."],
    "\"Flour I have\" — type how much of each flour is in your cupboard. \"Dough I want\" — type how heavy one loaf should be, or tap 600 g / 1150 g.": ["\"Brašna koje imam\" — upišite koliko kog brašna imate. \"Testa koje želim\" — upišite koliko treba da bude težak jedan hleb ili kliknite 600 g / 1150 g.", "«Муки, которая есть» — впишите, сколько какой муки у вас есть. «Теста, которое нужно» — впишите вес одной буханки или нажмите 600 г / 1150 г."],


    /* ---------- recipe: nutrition ---------- */
    "nutrition": ["nutritivne vrednosti", "КБЖУ"],
    "per 100 g of bread": ["na 100 g hleba", "на 100 г хлеба"],
    "kcal": ["kcal", "ккал"],
    "protein": ["proteini", "белки"],
    "fat": ["masti", "жиры"],
    "carbs": ["ugljeni hidrati", "углеводы"],
    "8.4 g": ["8,4 g", "8,4 г"],
    "1.2 g": ["1,2 g", "1,2 г"],
    "47 g": ["47 g", "47 г"],
    "A slice of about 40 g is around 90 kcal. The whole loaf is about 2230 kcal · protein 82 g · fat 11 g · carbs 458 g.": ["Kriška od oko 40 g ima oko 90 kcal. Ceo hleb ima oko 2230 kcal · proteini 82 g · masti 11 g · ugljeni hidrati 458 g.", "Ломтик около 40 г — примерно 90 ккал. Вся буханка — около 2230 ккал · белки 82 г · жиры 11 г · углеводы 458 г."],
    "Only the flour counts: 487 g white (391 g in the dough + 96 g inside the starter) and 163 g whole wheat. Water and salt have no calories.": ["Računa se samo brašno: 487 g belog (391 g u testu + 96 g u kiselom testu) i 163 g integralnog. Voda i so nemaju kalorija.", "Считается только мука: 487 г белой (391 г в тесте + 96 г внутри закваски) и 163 г цельнозерновой. У воды и соли калорий нет."],
    "Estimate for a loaf that lost about 15% of its weight in the oven (1150 g of dough → about 980 g of bread). Weigh yours and divide the whole-loaf numbers by its weight for an exact figure.": ["Procena za hleb koji je u rerni izgubio oko 15% težine (1150 g testa → oko 980 g hleba). Izmerite svoj i podelite vrednosti za ceo hleb njegovom težinom za tačan broj.", "Оценка для буханки, которая потеряла в духовке около 15% веса (1150 г теста → около 980 г хлеба). Для точной цифры взвесьте свою и разделите значения для всей буханки на её вес."],
    "Carbs include about 2.5 g of fibre. Salt: about 1.3 g per 100 g.": ["Ugljeni hidrati uključuju oko 2,5 g vlakana. So: oko 1,3 g na 100 g.", "В углеводах около 2,5 г клетчатки. Соль: около 1,3 г на 100 г."],

    /* ---------- recipe intro (Svetlana's text, Oct 25) ---------- */
    "White wheat flour + 25% whole wheat flour. Stiff starter, lievito madre at 43% hydration — my standard, super-active one, the starter I baked bread and pastry on at my bakery. Using a different starter? Don't worry, the recipe can be adapted! Further down the recipe there's a calculator that converts it to a liquid starter and to any amount of flour and number of loaves. Dough hydration in this recipe is 75%. Sounds scary, it's simple.":
      ["Belo pšenično brašno + 25% integralnog pšeničnog. Čvrsto kiselo testo lievito madre, 43% hidratacije — moje standardno, super aktivno kiselo testo na kom sam pekla hleb i peciva u svojoj pekari. Koristite drugo kiselo testo? Bez brige, recept se može prilagoditi! Niže u receptu je kalkulator za preračunavanje na tečno kiselo testo i na bilo koju količinu brašna i broj hlebova. Hidratacija testa u receptu je 75%. Zvuči strašno, a zapravo je jednostavno.", "Белая пшеничная мука + 25% цельнозерновой пшеничной. Твёрдая закваска левито мадре 43% гидратации — моя стандартная, суперактивная, на которой я пекла хлеб и сдобу в своей пекарне. Используете другую закваску? Не переживайте, рецептуру можно адаптировать! Внизу в рецепте есть калькулятор пересчёта на жидкий стартер и на любой объём муки и буханок. Гидратация теста в рецептуре 75%. Звучит страшно, на деле просто."],


    /* ---------- recipe edits Oct 25 + kit checklist ---------- */
    "salt & the important part": ["so i važan deo", "соль и важная часть"],
    "dough too warm? use cold water next time": ["pregrejali ste testo? sledeći put koristite hladnu vodu", "перегрели тесто? используйте холодную воду в следующий раз"],
    "back in the optimal zone": ["ponovo u optimalnoj zoni", "снова в оптимальной зоне"],
    "Now wait until the dough grows by 50–60%. Mine took about an hour and a half. And please forgive the sunset light in the last shots! I beeeg you": ["Sad čekamo da testo naraste za 50–60%. Meni je trebalo oko sat i po. I izvinite zbog zalaska sunca i lošeg svetla u poslednjim kadrovima! Preklinjeeem", "Теперь ждём, пока тесто вырастет на 50–60%. У меня ушло около полутора часов. И извините за закатное солнце с плохим светом на последних кадрах! Умоляяяю"],
    "the score opened a bit weakly? no worries! with a big loaf that's completely normal!": ["zarez se slabo otvorio? nije strašno! kod velikog hleba to je sasvim normalno!", "надрез раскрылся слабовато? это не страшно! с большим объёмом это абсолютно нормально!"],
    "before you start": ["pre početka", "перед стартом"],
    "check your kit": ["proverite pribor", "проверьте инвентарь"],
    "Tick what you already have before you start. Almost everything has an easy swap — except the scale.": ["Pre početka označite šta već imate. Skoro sve ima laku zamenu — osim vage.", "Перед стартом отметьте, что у вас уже есть. Почти всему есть простая замена — кроме весов."],
    "what you need — and what to use instead →": ["šta vam treba — i čime da zamenite →", "что нужно — и чем заменить →"],

    "No scale? Sorry, but you'll need to buy one :(": ["Nemate vagu? Izvinite, ali moraćete da je kupite :(", "Нет весов? Простите, но нужно купить :("],
    "Razor blade or knife": ["Žilet ili nož", "Лезвие или нож"],
    "A razor on a wooden coffee stirrer — a DIY blade holder that costs nothing.": ["Žilet na drvenom štapiću za kafu — domaći držač koji ništa ne košta.", "Лезвие на деревянной палочке для кофе — самодельный держатель, который ничего не стоит."],
    "Please don't skip the mitts. 250 °C doesn't forgive mistakes :(": ["Molim vas, ne preskačite rukavice. 250 °C ne prašta greške :(", "Пожалуйста, не пропускайте прихватки. 250 °C не прощают ошибок :("],
    "razor blade on a wooden handle": ["žilet na drvenoj dršci", "лезвие на деревянной ручке"],
    /* ---------- Oct 25: about edits + thermometer ---------- */
    "Dough above 26 °C ferments too fast and gets weak.": ["Testo iznad 26 °C fermentiše prebrzo i slabi.", "Тесто выше 26 °C бродит слишком быстро и слабеет."],
    "The person behind every loaf. Agronomist by degree — plant protection first, then management in the agro-industrial sector. For almost three years I owned BreadVenture, a sourdough bread and pastry bakery in Belgrade. The bakery carries on, just without me. Now I bake at home and share with you everything I know.": ["Osoba iza svakog hleba. Agronom po diplomi — prvo zaštita bilja, zatim menadžment u agroindustriji. Skoro tri godine sam bila vlasnica pekare BreadVenture, pekare hleba i peciva na kiselom testu u Beogradu. Projekat nastavlja da radi, samo bez mene. Sada pečem kod kuće i delim sa vama sve što znam.", "Человек за каждым караваем. Агроном по образованию — сначала защита растений, затем менеджмент в АПК. Почти три года была владелицей BreadVenture, пекарни хлеба и сдобы на закваске в Белграде. Проект работает и дальше, но уже без меня. Теперь я пеку дома и делюсь с вами всем, что знаю."],
    "my dream: tasty homemade bread in every home": ["moj san: ukusan domaći hleb u svakom domu", "моя мечта — вкусный домашний хлеб в каждом доме"],

    /* ---------- Oct 25: review fixes (home, recipe, kit) ---------- */
    "For curious home bakers who want to understand their dough, not just follow a recipe.": ["Za radoznale kućne pekare koji žele da razumeju svoje testo, a ne samo da prate recept.", "Для любознательных домашних пекарей, которые хотят понимать своё тесто, а не просто следовать рецепту."],
    "this week's recipe · wheat sourdough": ["recept nedelje · pšenični hleb na kiselom testu", "рецепт недели · пшеничный хлеб на закваске"],
    "stiff starter, 43% hydration": ["čvrsto kiselo testo, 43% hidratacije", "твёрдая закваска, 43% гидратации"],
    "dough temp in my process": ["temp. testa u mom procesu", "темп. теста в моём процессе"],
    "hi, I'm Svetlana": ["zdravo, ja sam Svetlana", "привет, я Света"],
    "Agronomist by degree, almost three years the owner of BreadVenture, a sourdough bakery in Belgrade. Here I share what the bakery taught me — with grams, temperatures and honest mistakes.": ["Agronom po diplomi, skoro tri godine vlasnica pekare BreadVenture, pekare na kiselom testu u Beogradu. Ovde delim ono što me je pekara naučila — sa gramima, temperaturama i iskrenim greškama.", "Агроном по образованию, почти три года владелица BreadVenture — пекарни на закваске в Белграде. Здесь я делюсь тем, чему меня научила пекарня: с граммами, температурами и честными ошибками."],
    "my story →": ["moja priča →", "моя история →"],
    "the person behind the loaf": ["osoba iza hleba", "человек за хлебом"],
    "In this recipe my working range is 23–25 °C. Above 26 °C fermentation in my process runs ahead of the gluten, so I cool the dough — 30 min in the fridge.": ["U ovom receptu moj radni opseg je 23–25 °C. Iznad 26 °C fermentacija u mom procesu pretekne gluten, pa testo hladim — 30 min u frižideru.", "В этом рецепте мой рабочий диапазон — 23–25 °C. Выше 26 °C брожение в моём процессе обгоняет клейковину, поэтому тесто я охлаждаю — 30 минут в холодильнике."],
    "my working range": ["moj radni opseg", "мой рабочий диапазон"],
    "above it — cool down": ["iznad toga — ohladiti", "выше — охладить"],
    "My fridge is about 7 °C. At that temperature fermentation keeps going, so the overnight timing is for my fridge and this process: in a colder fridge the dough can stay longer, in a warmer one bake it earlier.": ["Moj frižider ima oko 7 °C. Na toj temperaturi fermentacija se nastavlja, pa je noćno vreme za moj frižider i ovaj proces: u hladnijem frižideru testo može da ostane duže, u toplijem ga ispecite ranije.", "Мой холодильник — около 7 °C. При такой температуре брожение продолжается, поэтому ночной тайминг — для моего холодильника и этого процесса: в более холодном тесто может постоять дольше, в более тёплом — пеките раньше."],
    "my fridge, overnight": ["moj frižider, preko noći", "мой холодильник, на ночь"],
    "approximate, per 100 g of bread": ["okvirno, na 100 g hleba", "примерно, на 100 г хлеба"],
    "The loaf spread flat": ["Hleb se razlio", "Хлеб расплылся"],
    "Not enough structure developed, or overproofed": ["Nedovoljno razvijena struktura ili prekomerno narastanje", "Недостаточное развитие структуры или перерасстойка"],
    "Dense crumb": ["Gusta sredina", "Плотный мякиш"],
    "Underfermented": ["Nedovoljna fermentacija", "Недостаточное брожение"],
    "Too sour": ["Previše kiselo", "Слишком кисло"],
    "Starter ripeness and how the fermentation went": ["Zrelost kiselog testa i tok fermentacije", "Особенности зрелости закваски и ферментации"],
    "Crust too thick": ["Kora previše debela", "Корка слишком толстая"],
    "Baking mode and moisture loss": ["Režim pečenja i gubitak vlage", "Режим выпечки и потеря влаги"],
    "The loaf barely opened": ["Hleb se slabo otvorio", "Хлеб плохо раскрылся"],
    "Shaping, proofing or scoring": ["Oblikovanje, narastanje ili zarez", "Формовка, расстойка или надрез"],
    "if something went wrong": ["ako nešto nije uspelo", "если что-то пошло не так"],
    "troubleshooting": ["rešavanje problema", "разбор ошибок"],
    "problem": ["problem", "проблема"],
    "possible cause": ["mogući uzrok", "возможная причина"],
    "Dough or bread? All weights in the calculator are dough. In the oven a loaf loses about 12–18% of its water: 600 g of dough → about 510 g of bread, 1150 g → about 980 g. Want 600 g of baked bread? Type about 700 g of dough.": ["Testo ili hleb? Sve težine u kalkulatoru su težine testa. U rerni hleb izgubi oko 12–18% vode: 600 g testa → oko 510 g hleba, 1150 g → oko 980 g. Želite 600 g pečenog hleba? Upišite oko 700 g testa.", "Тесто или хлеб? Все веса в калькуляторе — это вес теста. В духовке буханка теряет около 12–18% воды: 600 г теста → около 510 г хлеба, 1150 г → около 980 г. Хотите 600 г готового хлеба? Впишите около 700 г теста."],
    "one loaf of dough weighs, g": ["težina testa za jedan hleb, g", "вес теста на одну буханку, г"],
    "g of baked bread per loaf, approx.": ["g pečenog hleba po hlebu, okvirno", "г готового хлеба на буханку, примерно"],
    "The dough grows while it rises — by 50–60% in this recipe. Take a bowl with plenty of room to spare.": ["Testo raste dok fermentiše — u ovom receptu za 50–60%. Uzmite posudu sa dosta slobodnog prostora.", "Тесто растёт во время брожения — в этом рецепте на 50–60%. Возьмите ёмкость с хорошим запасом объёма."],
    "A roasting bag on a tray — cut it open after 20 min, like taking the lid off. Check the pack: it must be rated for 250 °C.": ["Kesa za pečenje na plehu — posle 20 min je rasecite, kao da skidate poklopac. Proverite pakovanje: mora da izdrži 250 °C.", "Рукав для запекания на противне — через 20 минут разрежьте его, как будто снимаете крышку. Проверьте упаковку: он должен выдерживать 250 °C."],
    "Any oven-safe pot with a lid — ceramic, glass, steel. Check the handles and the maximum temperature. Glass hates sudden changes: never put it cold into a hot oven or onto a cold wet surface.": ["Bilo koji lonac za rernu s poklopcem — keramika, staklo, čelik. Proverite drške i maksimalnu temperaturu. Staklo ne podnosi nagle promene: nikad ga ne stavljajte hladno u vruću rernu niti na hladnu mokru površinu.", "Любая жаропрочная кастрюля с крышкой — керамика, стекло, сталь. Проверьте ручки и максимальную температуру. Стекло боится перепадов: не ставьте его холодным в горячую духовку и на холодную мокрую поверхность."],
    "nice to have · very useful for repeatable results": ["poželjno · veoma korisno za ponovljive rezultate", "желательно · очень помогает повторять результат"],
    "In this recipe I keep the dough at 23–25 °C. You can bake your first loaf without it — but a thermometer is what makes your results repeatable.": ["U ovom receptu testo držim na 23–25 °C. Prvi hleb možete ispeći i bez njega — ali termometar je ono što čini rezultate ponovljivim.", "В этом рецепте я держу тесто при 23–25 °C. Первую буханку можно испечь и без него — но именно термометр делает результат повторяемым."],

    "BreadVenture · belgrade": ["BreadVenture · beograd", "BreadVenture · белград"],
    /* ---------- about: bakery gallery ---------- */
    "scored by hand, every loaf": ["zarezan rukom, svaki hleb", "надрез вручную, каждый хлеб"],
    "cinnamon rolls, before dawn": ["rolnice s cimetom, pre zore", "булочки с корицей, до рассвета"],
    "the morning rack": ["jutarnja kolica", "утренняя тележка"],
    "sourdough buns": ["peciva na kiselom testu", "сдоба на закваске"],
    "rye in tins": ["raženi hleb u kalupima", "ржаной в формах"],
    "grams, always": ["grami, uvek", "граммы, всегда"],
    "our bannetons": ["naše korpice", "наши корзинки"],
    "the bread shelf": ["polica sa hlebom", "полка с хлебом"],
    "focaccia for lunch": ["fokača za ručak", "фокачча на обед"],
    "tasting day": ["dan degustacije", "день дегустации"],
    "the counter": ["pult", "стойка"],
    "from the bakery": ["iz pekare", "из пекарни"],
    "stiff starter hydration": ["hidratacija čvrstog kiselog testa", "гидратация твёрдой закваски"],
    "more from the bakery": ["još iz pekare", "ещё из пекарни"],
    /* ---------- calculator photos ---------- */
    "one recipe, any size": ["jedan recept, bilo koja veličina", "один рецепт, любой размер"],
    "same dough, many loaves": ["isto testo, mnogo hlebova", "одно тесто, много буханок"],
    "every one weighed": ["svaki izmeren", "каждый взвешен"],
    "a scored sourdough loaf on a baking tray": ["zarezan hleb na kiselom testu na plehu", "хлеб на закваске с надрезом на противне"],
    "loaves in a row on the tray": ["hlebovi u redu na plehu", "буханки в ряд на противне"],
    "three sourdough loaves": ["tri hleba na kiselom testu", "три буханки на закваске"],
    "scored loaves on the rack": ["zarezani hlebovi na kolicima", "хлеб с надрезами на тележке"],
    "starter and water on a kitchen scale": ["kiselo testo i voda na kuhinjskoj vagi", "закваска и вода на кухонных весах"],
    /* ---------- generated by site.js (calculator, video slots) ---------- */
    "coming soon": ["uskoro", "скоро"],
    "video": ["video", "видео"],
    "g dough": ["g testa", "г теста"],
    "total": ["ukupno", "всего"],
    "small loaf": ["mali hleb", "маленький"],
    "big loaf": ["veliki hleb", "большой"],
    "whole wheat flour": ["integralno brašno", "цельнозерновая мука"],
    "flour": ["brašno", "мука"],
    "salt": ["so", "соль"],
    "total flour · 100%": ["ukupno brašna · 100%", "всего муки · 100%"],
    "starter · 43%": ["kiselo testo · 43%", "закваска · 43%"],
    "starter · 100%": ["kiselo testo · 100%", "закваска · 100%"]
  };

  var N = {}; Object.keys(T).forEach(function (k) { N[k.replace(/\s+/g, ' ').trim()] = T[k]; }); T = N;
  var LANGS = ['en', 'sr', 'ru'];
  var IDX = { sr: 0, ru: 1 };
  var ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];

  /* patterns for strings built with numbers (calculator) */
  var PATTERNS = [
    [/^× 1 of (\d+)$/, ['× 1 od $1', '× 1 из $1']],
    [/^hydration (\d+)% · salt (\d+)%(.*)\. Rounded to the gram — your scale does the same\.$/, null]
  ];

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function lookup(en, lang) {
    if (lang === 'en') return null;
    var k = norm(en);
    var g = k.match(/^(\d+) g$/i); if (g) return g[1] + (lang === 'ru' ? ' г' : ' g');
    var hit = T[k];
    if (hit) return hit[IDX[lang]];
    var sp = k.match(/^(\d+)% · (?:(\d+)% rye · )?(?:(\d+)% whole wheat · )?(\d+)% salt$/);
    if (sp) { var ru2 = lang === 'ru'; return sp[1] + '% · ' + (sp[2] ? sp[2] + (ru2 ? '% ржаной · ' : '% raž · ') : '') + (sp[3] ? sp[3] + (ru2 ? '% цельнозерновой · ' : '% integralno · ') : '') + sp[4] + (ru2 ? '% соли' : '% so'); }
    var m = k.match(/^× 1 of (\d+)$/);
    if (m) return (lang === 'sr' ? '× 1 od ' : '× 1 из ') + m[1];
    m = k.match(/^hydration (\d+)% · salt (\d+)%(?: · rye (\d+)%)?(?: · whole wheat (\d+)%)?(?: · prefermented flour ([\d.]+)%)?\. Rounded to the gram — your scale does the same\.$/);
    if (m) {
      var ru = lang === 'ru', parts = [(ru ? 'гидратация ' : 'hidratacija ') + m[1] + '%', (ru ? 'соль ' : 'so ') + m[2] + '%'];
      if (m[3]) parts.push((ru ? 'ржаная ' : 'raženo ') + m[3] + '%');
      if (m[4]) parts.push((ru ? 'цельнозерновая ' : 'integralno ') + m[4] + '%');
      if (m[5]) parts.push((ru ? 'сброженная мука ' : 'prefermentisano brašno ') + m[5].replace('.', ',') + '%');
      return parts.join(' · ') + (ru ? '. Округлено до грамма — как и ваши весы.' : '. Zaokruženo na gram — kao i vaša vaga.');
    }
    return null;
  }

  var current = 'en';
  function walk(root, lang) {
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return (p === 'SCRIPT' || p === 'STYLE') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = tw.nextNode())) {
      if (n.__en === undefined) { if (!/[A-Za-z]{2}|\d[\s\u00a0]g\s*$/i.test(n.nodeValue)) continue; n.__en = n.nodeValue; }
      var tr = lookup(n.__en, lang);
      if (tr == null) { n.nodeValue = n.__en; continue; }
      var lead = n.__en.match(/^\s*/)[0], trail = n.__en.match(/\s*$/)[0];
      n.nodeValue = lead + tr + trail;
    }
    root.querySelectorAll && root.querySelectorAll('[alt],[title],[aria-label],[placeholder]').forEach(function (el) {
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var key = '__en_' + a;
        if (el[key] === undefined) el[key] = el.getAttribute(a);
        var tr = lookup(el[key], lang);
        el.setAttribute(a, tr == null ? el[key] : tr);
      });
    });
  }

  function apply(lang, root) {
    current = lang;
    document.documentElement.lang = lang === 'sr' ? 'sr-Latn' : lang;
    if (document.__enTitle === undefined) document.__enTitle = document.title;
    var t = lookup(document.__enTitle, lang); document.title = t == null ? document.__enTitle : t;
    walk(root || document.body, lang);
    document.querySelectorAll('.lang a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-lang') === lang); });
  }

  /* Language on arrival:
     1. a link with ?lang=en|sr|ru  (e.g. for stories) — always wins
     2. what the visitor picked before with the switcher (remembered in their browser)
     3. the visitor's browser languages, in their order of preference:
        Russian → ru; Serbian, Croatian, Bosnian, Montenegrin → sr (Latin); English → en
     4. otherwise English */
  function detect() {
    var q = (location.search.match(/[?&]lang=(en|sr|ru)\b/) || [])[1];
    if (q) { try { localStorage.setItem('got-lang', q); } catch (e) {} return q; }
    try { var s = localStorage.getItem('got-lang'); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    var nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
    for (var i = 0; i < nav.length; i++) {
      var l = String(nav[i] || '').toLowerCase().slice(0, 2);
      if (l === 'ru') return 'ru';
      if (l === 'sr' || l === 'hr' || l === 'bs' || l === 'me' || l === 'sh') return 'sr';
      if (l === 'en') return 'en';
    }
    return 'en';
  }

  /* switcher in the header */
  var head = document.querySelector('.site-header');
  if (head) {
    var box = document.createElement('div');
    box.className = 'lang';
    box.innerHTML = '<a href="#" data-lang="en">en</a><a href="#" data-lang="sr">sr</a><a href="#" data-lang="ru">ru</a>';
    head.appendChild(box);
    box.addEventListener('click', function (e) {
      var l = e.target.getAttribute && e.target.getAttribute('data-lang');
      if (!l) return;
      e.preventDefault();
      try { localStorage.setItem('got-lang', l); } catch (err) {}
      apply(l);
    });
  }

  window.gotI18n = { apply: function (root) { if (current !== 'en') walk(root, current); }, set: apply, current: function () { return current; } };
  apply(detect());
})();
