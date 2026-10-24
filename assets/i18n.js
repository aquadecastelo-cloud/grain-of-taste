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
    "scoring lame": ["žilet za zarezivanje", "лезвие для надрезов"],
    "lame": ["žilet", "лезвие"],
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
    "No scale? Sorry — buy one:": ["Nemate vagu? Izvinite — kupite je:", "Нет весов? Простите — купите:"],
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
    "Razor blade or lame": ["Žilet ili lame", "Лезвие или ламе"],
    "A cut tells the bread where to open. Without it, it bursts wherever it wants.": ["Zarez kaže hlebu gde da se otvori. Bez njega pukne gde god hoće.", "Надрез подсказывает хлебу, где раскрыться. Без него он лопнет где захочет."],
    "No blade? These work just as well:": ["Nemate žilet? Ovo radi jednako dobro:", "Нет лезвия? Это работает не хуже:"],
    "The sharpest knife you have — serrated works too. One quick confident cut.": ["Najoštriji nož koji imate — može i nazubljeni. Jedan brz, siguran rez.", "Самый острый нож, какой есть — подойдёт и с зубчиками. Один быстрый уверенный надрез."],
    "Kitchen scissors — snip a few \"spikes\" on top. Looks great.": ["Kuhinjske makaze — isecite nekoliko \"šiljaka\" odozgo. Izgleda odlično.", "Кухонные ножницы — сделайте сверху несколько «шипов». Выглядит отлично."],
    "A razor on a wooden coffee stirrer — a DIY lame that costs nothing.": ["Žilet na drvenom štapiću za kafu — domaći lame koji ništa ne košta.", "Лезвие на деревянной палочке для кофе — самодельное ламе, которое ничего не стоит."],
    "Cold dough cuts easier": ["Hladno testo se lakše zareže", "Холодное тесто режется легче"],
    "razor blade on a wooden lame handle": ["žilet na drvenoj dršci", "лезвие на деревянной ручке"],
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
    "Dough above 26 °C ferments too fast and gets weak. This is how you know.": ["Testo iznad 26 °C fermentiše prebrzo i slabi. Ovako to znate.", "Тесто выше 26 °C бродит слишком быстро и слабеет. Так вы это узнаете."],
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
    "fold 3": ["3. presavijanje", "3-я складка"],
    "fold 4": ["4. presavijanje", "4-я складка"],

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
    var sp = k.match(/^(\d+)% · (?:(\d+)% whole wheat · )?(\d+)% salt$/);
    if (sp) { var ru2 = lang === 'ru'; return sp[1] + '% · ' + (sp[2] ? sp[2] + (ru2 ? '% цельнозерновой · ' : '% integralno · ') : '') + sp[3] + (ru2 ? '% соли' : '% so'); }
    var m = k.match(/^× 1 of (\d+)$/);
    if (m) return (lang === 'sr' ? '× 1 od ' : '× 1 из ') + m[1];
    m = k.match(/^hydration (\d+)% · salt (\d+)%(?: · whole wheat (\d+)%)?(?: · prefermented flour ([\d.]+)%)?\. Rounded to the gram — your scale does the same\.$/);
    if (m) {
      var ru = lang === 'ru', parts = [(ru ? 'гидратация ' : 'hidratacija ') + m[1] + '%', (ru ? 'соль ' : 'so ') + m[2] + '%'];
      if (m[3]) parts.push((ru ? 'цельнозерновая ' : 'integralno ') + m[3] + '%');
      if (m[4]) parts.push((ru ? 'сброженная мука ' : 'prefermentisano brašno ') + m[4].replace('.', ',') + '%');
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
