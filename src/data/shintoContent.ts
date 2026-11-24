export type Term = { k: string; jp?: string; v: string };
export type Plate = { name: string; jp: string; glyph: string; text: string };
export type Chapter = {
  no: string;
  title: string;
  subtitle: string;
  kanji: string;
  deco: string;
  paragraphs: string[];
  facts: string[];
  terms: Term[];
  timeline?: { when: string; what: string }[];
  platesTitle?: string;
  plates?: Plate[];
};

export const chapters: Chapter[] = [
  {
    no: "01", title: "Fondatore, origine e diffusione", subtitle: "Una religione nata senza un fondatore", kanji: "起源", deco: "源",
    paragraphs: [
      "Lo Shintoismo è la religione tradizionale del Giappone. Non ha un fondatore preciso, perché si è sviluppato lentamente, in tempi antichissimi, attraverso credenze e rituali nati nei villaggi giapponesi. Al centro c’erano la natura, gli antenati e i kami, cioè le presenze sacre che si pensava abitassero montagne, fiumi, alberi, rocce e luoghi particolari.",
      "Il nome racconta già l’idea di fondo. Shintō (神道) si scrive con due caratteri: shin, che si può leggere anche kami, e tō, che significa “via”. Vuol dire quindi “la via dei kami”. Il termine si diffuse soprattutto quando il Buddhismo arrivò in Giappone, intorno alla metà del VI secolo (le fonti parlano del 538 o del 552), perché serviva a distinguere la religione locale da quella che veniva dal continente.",
      "Le due religioni non restarono rivali. Per secoli si mescolarono: molti santuari avevano un tempio buddhista accanto e i kami erano spesso visti come manifestazioni dei Buddha. Nel 712 e nel 720 la corte imperiale fece mettere per iscritto gli antichi miti nel Kojiki e nel Nihon shoki. Nel 1868, con l’epoca Meiji, lo Stato separò i due culti e fece dello Shintō una religione di Stato. Dopo la Seconda guerra mondiale questo sistema fu abolito e i santuari tornarono a essere organizzazioni religiose libere.",
      "Oggi lo Shintoismo è ancora molto vivo: in Giappone ci sono circa 80.000 santuari. Molti giapponesi li visitano per il primo giorno dell’anno, per le feste del quartiere o per i matrimoni, anche se spesso non si definiscono “religiosi”. Lo sentono più come una parte delle proprie tradizioni che come una fede da professare.",
    ],
    facts: ["Non ha un fondatore e non ha un testo sacro unico.", "Shintō significa “la via dei kami”.", "Il Buddhismo arrivò nel VI secolo e le due religioni convissero a lungo."],
    terms: [
      { k: "Kami", jp: "神", v: "presenza sacra, spesso tradotta con “divinità”." },
      { k: "Shinbutsu shūgō", jp: "神仏習合", v: "la mescolanza tra culto dei kami e Buddhismo." },
      { k: "Shintō di Stato", v: "il sistema voluto dallo Stato tra il 1868 e il 1945." },
    ],
    timeline: [
      { when: "Prima del VI secolo", what: "Culti locali dei kami, della natura e degli antenati." },
      { when: "VI secolo", what: "Arriva il Buddhismo e si afferma il nome Shintō." },
      { when: "712 e 720", what: "Vengono compilati il Kojiki e il Nihon shoki." },
      { when: "Medioevo", what: "Kami e Buddha sono venerati insieme." },
      { when: "1868–1945", what: "Lo Shintō diventa religione di Stato." },
      { when: "Oggi", what: "Circa 80.000 santuari in tutto il Giappone." },
    ],
  },
  {
    no: "02", title: "Le divinità e i Kami", subtitle: "Presenze sacre tra cielo, natura e uomini", kanji: "神", deco: "神",
    paragraphs: [
      "In giapponese kami (神) indica ciò che è sacro e fa sentire una presenza superiore. La parola si traduce spesso con “dio” o “divinità”, ma non è del tutto esatto. I kami non sono onnipotenti né perfetti, e non sono separati dal mondo: possono essere forze della natura, spiriti di un luogo, antenati di una famiglia o persone straordinarie ricordate dopo la morte.",
      "Per questo non esiste un pantheon unico e ordinato. Ogni santuario venera i propri kami e ogni comunità ha i suoi. Alcuni però sono noti in tutto il Giappone, perché compaiono nei miti del Kojiki e del Nihon shoki. Secondo il Kojiki, tre dei più importanti nascono quando Izanagi si purifica dopo essere tornato dal mondo dei morti: Amaterasu dal suo occhio sinistro, Tsukuyomi dal destro e Susanoo dal naso.",
      "Amaterasu, la dea del Sole, è la figura centrale. Un mito racconta che, offesa dal comportamento del fratello Susanoo, si chiuse in una grotta e il mondo restò al buio; gli altri kami la convinsero a uscire con una danza, molte risate e uno specchio. Secondo la tradizione, da lei discende la famiglia imperiale. Inari, invece, è legato al riso e alla prosperità e protegge anche commercianti e artigiani; le sue messaggere sono le volpi.",
      "Tutti i kami possono portare benessere se vengono rispettati e ringraziati con riti e offerte. Se invece vengono trascurati, secondo le credenze più antiche, possono anche mostrarsi pericolosi. Il rapporto con loro si basa quindi su rispetto, cura e gratitudine.",
    ],
    facts: ["Non esiste un pantheon unico e rigido.", "Esistono moltissimi kami locali.", "I kami non sono “dei” nel senso delle religioni monoteiste."],
    terms: [
      { k: "Kami", jp: "神", v: "ciò che è sacro: natura, luoghi, antenati, divinità." },
      { k: "Ōmikami", jp: "大神", v: "“grande kami”, titolo usato per Amaterasu." },
      { k: "Kitsune", jp: "狐", v: "la volpe, messaggera di Inari." },
    ],
    platesTitle: "Quattro kami",
    plates: [
      { name: "Amaterasu", jp: "天照大御神", glyph: "日", text: "Il Sole, la luce e l’ordine." },
      { name: "Susanoo", jp: "須佐之男命", glyph: "嵐", text: "Tempeste e mare. Impetuoso, ma anche eroe che sconfigge un serpente a otto teste." },
      { name: "Tsukuyomi", jp: "月読命", glyph: "月", text: "La Luna e la notte." },
      { name: "Inari", jp: "稲荷", glyph: "狐", text: "Riso, fertilità e prosperità. Le volpi sono le sue messaggere." },
    ],
  },
  {
    no: "03", title: "Le credenze fondamentali", subtitle: "Purezza, natura e gratitudine", kanji: "清", deco: "清",
    paragraphs: [
      "Lo Shintoismo non si basa su dogmi o su un elenco di verità da credere. Si impara soprattutto vivendo: partecipando ai riti, visitando i santuari, osservando le feste. Alcune idee però tornano ovunque. La prima è la venerazione dei kami: li si ringrazia per i raccolti, per la salute, per la protezione della comunità. La seconda è il rispetto per la natura, perché gli esseri umani non sono visti come padroni del mondo, ma come parte di esso.",
      "Altre idee centrali sono il rispetto per gli antenati, la gratitudine per ciò che si riceve e l’armonia nella comunità, che si mantiene partecipando insieme alle feste e ai riti del proprio villaggio o quartiere. Ma il concetto più caratteristico è la purezza.",
      "Il suo contrario si chiama kegare (穢れ). Non è un peccato e non dipende da una colpa morale: è una specie di contaminazione che si associa a cose come la morte, le malattie o il sangue, e che indebolisce l’energia vitale e il legame con i kami. Può capitare a chiunque, quindi non fa sentire in colpa: si risolve con la purificazione, chiamata harae (祓). Esistono riti personali e grandi cerimonie pubbliche: le più importanti, l’Ōharae, si svolgono a fine giugno e a fine dicembre per purificare tutta la comunità.",
      "Un altro metodo è il misogi (禊), la purificazione con l’acqua. Può essere un bagno rituale sotto una cascata o in mare, ma ha anche una forma semplice che chiunque conosce: lavarsi le mani e la bocca alla fontana all’ingresso del santuario. Anche questo gesto quotidiano ricorda che per avvicinarsi al sacro bisogna prima essere “puliti”, fuori e dentro. Queste idee non sono vissute allo stesso modo da tutti: ogni santuario e ogni comunità ha le sue usanze.",
    ],
    facts: ["Il kegare non è un peccato.", "L’harae toglie il kegare.", "Il misogi purifica con l’acqua."],
    terms: [
      { k: "Kegare", jp: "穢れ", v: "impurità rituale, legata soprattutto alla morte e alle malattie." },
      { k: "Harae", jp: "祓", v: "purificazione rituale che elimina il kegare." },
      { k: "Misogi", jp: "禊", v: "purificazione con l’acqua." },
      { k: "Ōharae", jp: "大祓", v: "grande purificazione, due volte l’anno." },
    ],
  },
  {
    no: "04", title: "I testi sacri", subtitle: "Miti, cronache e preghiere", kanji: "記", deco: "記",
    paragraphs: [
      "Lo Shintoismo non ha un unico libro sacro come la Bibbia per i cristiani o il Corano per i musulmani. Le sue pratiche sono state tramandate a lungo a voce e con i riti. Esistono però alcuni testi antichi molto importanti, che hanno scopi diversi: raccontare i miti, narrare la storia e accompagnare le cerimonie. Conviene tenere distinti questi tre tipi di testo.",
      "Il Kojiki (古事記), “Registro delle cose antiche”, fu completato nel 712. Raccoglie i miti sulla nascita del Giappone, la storia di Izanagi e Izanami, le avventure dei kami e le genealogie degli imperatori. È scritto con caratteri cinesi, usati però anche per rendere i suoni della lingua giapponese. È il racconto più vicino alla tradizione orale.",
      "Il Nihon shoki (日本書紀), “Cronache del Giappone”, è del 720. È più lungo e più simile a una cronaca ufficiale scritta sul modello di quelle cinesi: parte dai miti e arriva alla storia degli imperatori, e per molti episodi riporta più versioni. Per questo è una fonte preziosa per capire come i miti venivano raccontati.",
      "I norito (祝詞), invece, sono preghiere e formule recitate dai sacerdoti durante le cerimonie, rivolte ai kami in una lingua solenne e antica. Una delle raccolte più antiche si trova nell’Engishiki, un testo del X secolo. Quindi Kojiki e Nihon shoki ci dicono come venivano raccontate le origini del mondo e dello Stato, mentre i norito fanno parte della pratica religiosa vera e propria. Va ricordato che i primi due furono scritti dalla corte imperiale e hanno anche uno scopo politico: dare prestigio alla famiglia imperiale.",
    ],
    facts: ["Non esiste un libro sacro unico.", "Kojiki (712) e Nihon shoki (720) sono miti e cronache.", "I norito sono preghiere rituali."],
    terms: [
      { k: "Kojiki", jp: "古事記", v: "“Registro delle cose antiche”, del 712." },
      { k: "Nihon shoki", jp: "日本書紀", v: "cronaca ufficiale del 720, in trenta volumi." },
      { k: "Norito", jp: "祝詞", v: "formule di preghiera recitate nei riti." },
    ],
    platesTitle: "Testi antichi",
    plates: [
      { name: "Kojiki", jp: "古事記", glyph: "記", text: "712. Miti e genealogie, in tre volumi." },
      { name: "Nihon shoki", jp: "日本書紀", glyph: "紀", text: "720. Cronaca ufficiale con più versioni dei miti." },
      { name: "Norito", jp: "祝詞", glyph: "詞", text: "Preghiere rituali, raccolte nell’Engishiki." },
    ],
  },
  {
    no: "05", title: "Gli insegnamenti morali", subtitle: "Vivere in armonia", kanji: "誠", deco: "誠",
    paragraphs: [
      "Lo Shintoismo non ha dieci comandamenti né un codice morale completo e uguale per tutti. Il comportamento giusto non viene spiegato da un elenco di regole: nasce dal rapporto con i kami, dalla vita della comunità e dalle tradizioni. Per questo si parla più di valori che di precetti.",
      "Il valore più importante è la sincerità, chiamata makoto (誠). Vuol dire avere un cuore onesto, agire senza falsità e senza secondi fini. Un rito, anche perfetto, non avrebbe senso se chi lo compie non è sincero. Accanto alla sincerità c’è la purezza, che nello Shintō è anche pulizia interiore: si cerca di tenere pulito lo spirito, oltre al corpo e agli ambienti.",
      "Un altro valore è la gratitudine. Si ringraziano i kami per il cibo, il lavoro e la salute, ma anche gli antenati e le persone che ci aiutano. Collegato alla gratitudine c’è il rispetto: per i luoghi sacri, per gli anziani, per gli altri e per la natura, perché alberi, montagne e fiumi possono ospitare dei kami. L’armonia (wa, 和) è un altro punto fondamentale: significa evitare conflitti inutili e contribuire alla vita comune.",
      "Esempi concreti sono la pulizia dei santuari, fatta spesso dagli abitanti del quartiere, la partecipazione alle feste del paese e la cura dei boschi che circondano i santuari. Questi valori contano anche nella società di oggi, dove l’attenzione agli altri e l’impegno per la comunità vengono spesso collegati a questa eredità. Non sono però regole assolute: ogni persona e ogni comunità li vive a modo suo.",
    ],
    facts: ["Non esiste un codice morale unico e completo.", "Makoto significa sincerità.", "Purezza, gratitudine e armonia guidano il comportamento."],
    terms: [
      { k: "Makoto", jp: "誠", v: "sincerità, condotta onesta e genuina." },
      { k: "Wa", jp: "和", v: "armonia nella comunità." },
      { k: "Kansha", jp: "感謝", v: "gratitudine." },
    ],
  },
  {
    no: "06", title: "Il culto e i luoghi religiosi", subtitle: "I santuari, dimore dei kami", kanji: "社", deco: "社",
    paragraphs: [
      "I luoghi di culto dello Shintoismo si chiamano jinja (神社), cioè santuari. Sono luoghi dove si crede che un kami sia presente, spesso immersi nel verde. Si entra passando sotto un torii, il portale rosso o di legno naturale che segna il passaggio dallo spazio di tutti i giorni a quello sacro. Lungo il percorso si trova il temizuya, la fontana dove ci si purifica lavando le mani e sciacquando la bocca.",
      "Il santuario ha due edifici principali. L’haiden è la sala dove i fedeli si fermano a pregare e a lasciare le offerte, di solito monete, riso, sale o sake. L’honden è l’edificio più interno, che custodisce l’oggetto sacro in cui il kami è ospitato simbolicamente; di solito non è visibile ai visitatori. Corde di paglia di riso intrecciata, le shimenawa, spesso con strisce di carta, delimitano gli spazi o gli oggetti sacri, come alberi e rocce.",
      "La preghiera segue un gesto semplice: ci si inchina due volte, si battono due volte le mani, si prega in silenzio e ci si inchina ancora una volta. Le cerimonie sono guidate dai kannushi, i sacerdoti, aiutati dalle miko, giovani assistenti che spesso eseguono danze sacre. Durante l’anno si celebrano matrimoni, riti per i bambini e soprattutto i matsuri, le grandi feste in cui il kami viene portato in processione dentro un santuario portatile. Un esempio famoso è il Gion Matsuri di Kyoto, a luglio.",
      "Tre santuari sono particolarmente importanti. Ise Jingū, nella prefettura di Mie, è dedicato soprattutto ad Amaterasu e viene ricostruito ogni vent’anni. Fushimi Inari Taisha, a Kyoto, è famoso per le migliaia di torii rossi lungo il sentiero che sale sul monte e per il culto di Inari. Izumo Taisha, nella prefettura di Shimane, è legato a Ōkuninushi, il kami associato ai legami tra le persone.",
    ],
    facts: ["Il torii segna l’ingresso nello spazio sacro.", "L’haiden serve per pregare, l’honden custodisce il kami.", "I matsuri sono le grandi feste dei santuari."],
    terms: [
      { k: "Haiden", jp: "拝殿", v: "sala per la preghiera e le offerte." },
      { k: "Honden", jp: "本殿", v: "edificio principale, dimora simbolica del kami." },
      { k: "Temizuya", jp: "手水舎", v: "fontana per la purificazione." },
      { k: "Shimenawa", jp: "注連縄", v: "corda sacra che delimita spazi e oggetti." },
      { k: "Matsuri", jp: "祭", v: "festa religiosa di un santuario." },
    ],
    platesTitle: "Tre santuari",
    plates: [
      { name: "Ise Jingū", jp: "伊勢神宮", glyph: "伊", text: "Mie. Dedicato ad Amaterasu e ricostruito ogni vent’anni." },
      { name: "Fushimi Inari Taisha", jp: "伏見稲荷大社", glyph: "稲", text: "Kyoto. Migliaia di torii rossi e culto di Inari." },
      { name: "Izumo Taisha", jp: "出雲大社", glyph: "雲", text: "Shimane. Dedicato a Ōkuninushi, con una shimenawa enorme." },
    ],
  },
  {
    no: "07", title: "Le persone sacre e i simboli religiosi", subtitle: "Sacerdoti, assistenti e oggetti sacri", kanji: "印", deco: "印",
    paragraphs: [
      "Nello Shintoismo i riti sono guidati dai kannushi (神主), i sacerdoti. Si occupano delle cerimonie, delle preghiere rivolte ai kami e della cura del santuario. In molti casi il ruolo passa di padre in figlio. Accanto a loro lavorano le miko (巫女), giovani assistenti che aiutano durante i riti, vendono gli amuleti e a volte eseguono le danze sacre chiamate kagura. Nell’antichità le miko avevano spesso il ruolo di mediare tra gli esseri umani e i kami.",
      "Lo Shintoismo non ha santi come il Cristianesimo, cioè persone proclamate esemplari da un’autorità religiosa. Alcuni individui eccezionali però vengono venerati come kami dopo la morte: un esempio è Sugawara no Michizane, studioso e politico del IX secolo, a cui molti studenti giapponesi si rivolgono prima degli esami.",
      "I simboli sono molto importanti perché rendono visibile il sacro. Il torii indica l’ingresso in uno spazio sacro e la shimenawa lo delimita; dalle corde pendono spesso gli shide (紙垂), strisce di carta piegate a zig zag che indicano purezza. Il sakaki (榊) è un albero sempreverde considerato sacro: i suoi rami vengono offerti ai kami nelle cerimonie. I magatama (勾玉) sono perline a forma di virgola, usate già nell’antichità; uno dei tre tesori imperiali è proprio un gioiello di questo tipo. Infine gli omamori (お守り) sono amuleti che si comprano ai santuari per chiedere protezione, salute o successo a scuola.",
      "Questi oggetti non hanno poteri magici in sé: sono segni che ricordano il rapporto con i kami e vanno trattati con rispetto. Un omamori, per esempio, di solito non si apre e, dopo un anno, si riporta al santuario per ringraziare.",
    ],
    facts: ["I kannushi sono sacerdoti, le miko assistenti rituali.", "Non esistono santi come nel Cristianesimo.", "I simboli rendono visibile il sacro."],
    terms: [
      { k: "Kannushi", jp: "神主", v: "sacerdote di un santuario." },
      { k: "Miko", jp: "巫女", v: "assistente rituale del santuario." },
      { k: "Kagura", jp: "神楽", v: "danza sacra offerta ai kami." },
    ],
    platesTitle: "Sei simboli",
    plates: [
      { name: "Torii", jp: "鳥居", glyph: "鳥", text: "Ingresso allo spazio sacro." },
      { name: "Shimenawa", jp: "注連縄", glyph: "縄", text: "Corda che delimita il sacro." },
      { name: "Shide", jp: "紙垂", glyph: "垂", text: "Carta piegata, segno di purezza." },
      { name: "Sakaki", jp: "榊", glyph: "榊", text: "Albero sempreverde offerto ai kami." },
      { name: "Magatama", jp: "勾玉", glyph: "玉", text: "Gioiello a forma di virgola, antico e simbolico." },
      { name: "Omamori", jp: "お守り", glyph: "守", text: "Amuleto di protezione e buon auspicio." },
    ],
  },
  {
    no: "08", title: "La morte e l’aldilà", subtitle: "Yomi, antenati e purificazione", kanji: "黄泉", deco: "泉",
    paragraphs: [
      "Lo Shintoismo non ha una dottrina unica e ufficiale sull’aldilà. Le sue idee sulla morte cambiano a seconda delle epoche e delle comunità. Il racconto più importante si trova nei miti antichi, che parlano di Yomi-no-kuni (黄泉の国), il “paese delle tenebre”, cioè il mondo dei morti.",
      "Il mito dice che Izanagi e Izanami, la coppia di kami che aveva generato le isole del Giappone e molti altri kami, ebbero un figlio, il kami del fuoco. Nel partorirlo Izanami si ustionò e morì, scendendo a Yomi. Izanagi, disperato, la seguì per riportarla indietro. Lei rispose di aver già mangiato il cibo di quel mondo, ma che avrebbe chiesto di poter tornare, a patto che lui non la guardasse. Izanagi però accese una luce e la vide: il suo corpo si stava decomponendo. Spaventato, scappò, inseguito da lei e dai suoi spiriti, e alla fine bloccò l’uscita con un grande masso. Ai due lati del masso Izanami disse che ogni giorno avrebbe fatto morire mille persone; Izanagi rispose che ne avrebbe fatte nascere millecinquecento. Così il mito spiega l’origine della morte e della vita.",
      "Tornato nel mondo dei vivi, Izanagi si sentiva contaminato dall’impurità di Yomi e si purificò con un bagno in un fiume. Dalla purificazione nacquero Amaterasu, Tsukuyomi e Susanoo. Il mito mostra così perché la morte è legata al kegare e perché la purificazione è così importante. Yomi non è però l’Inferno cristiano: non è un luogo di punizione per i peccatori, ma un mondo oscuro e impuro dove vanno i morti.",
      "Nella pratica, la venerazione degli antenati è molto sentita: si crede che i defunti restino vicini alla famiglia e la proteggano, e per questo li si ricorda con offerte e preghiere. Poiché la morte è fonte di kegare, i funerali sono di solito buddhisti, mentre matrimoni e feste dei bambini sono più spesso shintoisti. Il Buddhismo ha portato in Giappone anche l’idea della reincarnazione e di altri mondi dopo la morte. Oggi le credenze sono molto varie: ognuno le vive a modo suo.",
    ],
    facts: ["Non c’è una dottrina unica sull’aldilà.", "Yomi non è l’Inferno cristiano.", "Dopo Yomi, Izanagi si purifica e nascono tre grandi kami."],
    terms: [
      { k: "Yomi-no-kuni", jp: "黄泉の国", v: "il mondo dei morti nel mito." },
      { k: "Izanagi e Izanami", jp: "伊邪那岐・伊邪那美", v: "la coppia di kami che genera il Giappone." },
      { k: "Sorei", jp: "祖霊", v: "lo spirito degli antenati." },
    ],
  },
];

export const bibliography = [
  "Helen Hardacre, Shinto: A History, Oxford University Press, 2017.",
  "Sokyo Ono, Shinto: The Kami Way, Charles E. Tuttle, 1962.",
  "Joseph M. Kitagawa, Religion in Japanese History, Columbia University Press, 1966.",
  "Donald L. Philippi (trad.), Kojiki, University of Tokyo Press, 1968.",
  "William G. Aston (trad.), Nihongi: Chronicles of Japan from the Earliest Times to A.D. 697, 1896.",
  "Encyclopedia of Shinto, Kokugakuin University (eos.kokugakuin.ac.jp).",
  "Jinja Honchō, Associazione dei santuari shintoisti (jinjahoncho.or.jp).",
  "Encyclopaedia Britannica, voce “Shinto” (britannica.com).",
];
