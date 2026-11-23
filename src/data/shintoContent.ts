export type Item = { term: string; jp?: string; tag?: string; text: string };
export type SectionData = {
  id: string;
  no: string;
  nav?: string;
  title: string;
  kanji: string;
  paragraphs: string[];
  items: Item[];
  layout?: "timeline";
  quote?: string;
  tone?: "yomi";
};

export const sections: SectionData[] = [
  {
    id: "origini", no: "01", nav: "Origini", kanji: "起源", title: "Le origini dello Shintō", layout: "timeline",
    paragraphs: [
      "Lo Shintō (神道), “via dei kami”, è la tradizione religiosa autoctona del Giappone. Non ha un fondatore: si è formato gradualmente nell’antichità, a partire dalla venerazione della natura, degli antenati e delle presenze spirituali che abitano i luoghi.",
      "Il termine si diffuse per distinguere queste pratiche dal Buddhismo, arrivato in Giappone nel VI secolo. Nel corso dei secoli lo Shintō si è intrecciato profondamente con Buddhismo e Confucianesimo, e ancora oggi è vivo nella cultura giapponese, nei santuari e nelle festività.",
    ],
    items: [
      { term: "Antichità", text: "Si sviluppano le prime pratiche religiose, legate a natura, antenati e luoghi sacri." },
      { term: "VI secolo", text: "Arriva il Buddhismo e si diffonde il termine Shintō." },
      { term: "VIII secolo", text: "Vengono redatte le grandi cronache mitologiche: il Kojiki (712) e il Nihon shoki (720)." },
      { term: "Periodi successivi", text: "Le tradizioni dei santuari si sviluppano e si trasformano nel tempo." },
      { term: "Età contemporanea", text: "Lo Shintō è presente nella società giapponese moderna, tra santuari e festività." },
    ],
  },
  {
    id: "divinita", no: "02", nav: "Divinità", kanji: "神", title: "I Kami — Le presenze sacre",
    paragraphs: [
      "I kami non sono semplicemente “dèi” nel senso delle religioni monoteiste: possono essere presenze sacre, spiriti, divinità e forze legate alla natura, ai luoghi, agli antenati e ad aspetti importanti della vita.",
      "Esistono moltissimi kami locali e non c’è un pantheon unico e rigidamente organizzato. Queste sono quattro figure fondamentali.",
    ],
    items: [
      { term: "Amaterasu Ōmikami", jp: "天照大御神", tag: "Simbolo: il Sole", text: "Kami del Sole e una delle figure più importanti della mitologia giapponese. È associata alla luce e all’ordine e, nel mito, alla famiglia imperiale." },
      { term: "Susanoo", jp: "須佐之男命", tag: "Simbolo: la tempesta", text: "Kami legato a tempeste e mare, fratello di Amaterasu nella mitologia. È una figura dalla personalità complessa." },
      { term: "Tsukuyomi", jp: "月読命", tag: "Simbolo: la Luna", text: "Kami della Luna, fratello di Amaterasu e Susanoo nella tradizione mitologica." },
      { term: "Inari", jp: "稲荷", tag: "Simbolo: la volpe", text: "Kami del riso, della fertilità, del benessere e della prosperità. Le volpi sono considerate sue messaggere." },
    ],
  },
  {
    id: "credenze", no: "03", nav: "Credenze", kanji: "清", title: "Il rapporto tra uomo, natura e sacro",
    paragraphs: [
      "Lo Shintō non è un sistema dogmatico identico per tutte le comunità. Alcuni orientamenti ricorrono spesso: la venerazione dei kami, il rispetto per la natura, il legame spirituale tra esseri umani e ambiente, la purezza rituale, la gratitudine per le benedizioni ricevute, il rispetto per gli antenati e il mantenimento dell’armonia nella comunità.",
    ],
    items: [
      { term: "Kegare", jp: "穢れ", text: "Impurità rituale legata a certe condizioni o eventi che possono alterare il rapporto con il sacro." },
      { term: "Harae", jp: "祓", text: "Le pratiche di purificazione che servono a ristabilire una condizione di purezza rituale." },
      { term: "Misogi", jp: "禊", text: "Pratica di purificazione attraverso l’acqua." },
    ],
  },
  {
    id: "testi", no: "04", nav: "Testi sacri", kanji: "記", title: "Le antiche cronache e i racconti sacri",
    paragraphs: [
      "Lo Shintō non possiede un unico libro sacro universale paragonabile alla Bibbia o al Corano. Conviene distinguere tra testi mitologici, cronache storiche e formule liturgiche.",
    ],
    items: [
      { term: "Kojiki", jp: "古事記", tag: "712", text: "“Registro delle cose antiche”: raccoglie racconti mitologici e tradizioni sulle origini del Giappone, con importanti narrazioni sui kami." },
      { term: "Nihon shoki", jp: "日本書紀", tag: "720", text: "Una delle prime grandi cronache ufficiali giapponesi. Contiene diverse versioni dei racconti mitologici ed è una fonte fondamentale sulla mitologia." },
      { term: "Norito", jp: "祝詞", tag: "Formule liturgiche", text: "Preghiere e formule rituali rivolte ai kami e recitate durante le cerimonie." },
    ],
  },
  {
    id: "valori", no: "05", kanji: "誠", title: "Come vivere in armonia",
    paragraphs: [
      "Lo Shintō non presenta un codice morale universale e rigido. I valori associati alla tradizione emergono dalle pratiche rituali e dal rapporto con i kami.",
    ],
    items: [
      { term: "Purezza", text: "Mantenere o ristabilire la purezza rituale con gesti di purificazione." },
      { term: "Sincerità", jp: "誠 Makoto", text: "Sincerità e genuinità: agire con cuore autentico." },
      { term: "Gratitudine", text: "Riconoscere le benedizioni ricevute e ringraziare i kami." },
      { term: "Rispetto", text: "Verso i kami, gli antenati e le persone." },
      { term: "Armonia sociale", text: "Contribuire all’equilibrio e al benessere della comunità." },
      { term: "Rispetto per la natura", text: "Montagne, alberi, acque e rocce possono essere luoghi di presenza sacra." },
      { term: "Relazioni e tradizioni", text: "Curare i legami umani e custodire le tradizioni condivise." },
    ],
    quote: "Vivere in armonia significa riconoscere il valore del mondo che ci circonda e mantenere un rapporto rispettoso con la natura, con gli altri e con il sacro.",
  },
  {
    id: "culto", no: "06", nav: "Culto", kanji: "社", title: "I Jinja — Le dimore dei Kami",
    paragraphs: [
      "I santuari shintoisti si chiamano jinja. Qui si prega, si presentano offerte e si celebrano cerimonie e festival chiamati matsuri. I riti sono guidati dai sacerdoti, i kannushi, affiancati in alcuni santuari dalle miko.",
    ],
    items: [
      { term: "Torii", jp: "鳥居", tag: "Struttura", text: "Il portale che segna il passaggio dallo spazio quotidiano a quello sacro." },
      { term: "Haiden", jp: "拝殿", tag: "Struttura", text: "L’edificio destinato alla preghiera e alle offerte." },
      { term: "Honden", jp: "本殿", tag: "Struttura", text: "Il santuario principale, che custodisce simbolicamente la presenza del kami venerato." },
      { term: "Temizuya", jp: "手水舎", tag: "Struttura", text: "La fontana per la purificazione rituale." },
      { term: "Shimenawa", jp: "注連縄", tag: "Struttura", text: "La corda sacra che può delimitare spazi o oggetti considerati sacri." },
      { term: "Ise Jingū", jp: "伊勢神宮", tag: "Santuario", text: "Uno dei santuari più importanti dello Shintō, dedicato principalmente ad Amaterasu." },
      { term: "Fushimi Inari Taisha", jp: "伏見稲荷大社", tag: "Santuario", text: "Celebre per i suoi numerosi torii rossi e per il culto di Inari." },
      { term: "Izumo Taisha", jp: "出雲大社", tag: "Santuario", text: "Importante santuario legato a Ōkuninushi." },
    ],
  },
  {
    id: "simboli", no: "07", nav: "Simboli", kanji: "印", title: "I custodi della tradizione",
    paragraphs: [
      "Lo Shintō non possiede santi nel senso tipico del Cristianesimo. Le figure religiose sono i sacerdoti e le assistenti rituali, e il sacro si esprime anche attraverso simboli.",
    ],
    items: [
      { term: "Kannushi", jp: "神主", tag: "Persone", text: "Sacerdoti che si occupano di cerimonie, rituali e cura del santuario." },
      { term: "Miko", jp: "巫女", tag: "Persone", text: "Assistenti rituali: partecipano alle cerimonie, svolgono attività di servizio e a volte eseguono danze rituali." },
      { term: "Torii ", jp: "鳥居", tag: "Simbolo", text: "Simbolo del passaggio verso lo spazio sacro." },
      { term: "Shimenawa ", jp: "注連縄", tag: "Simbolo", text: "Corda che segnala elementi e spazi sacri." },
      { term: "Shide", jp: "紙垂", tag: "Simbolo", text: "Strisce di carta piegata, spesso associate alle corde sacre." },
      { term: "Sakaki", jp: "榊", tag: "Simbolo", text: "Pianta sempreverde utilizzata in diverse cerimonie." },
      { term: "Magatama", jp: "勾玉", tag: "Simbolo", text: "Antichi ornamenti a forma di virgola, con importanti significati culturali e simbolici." },
      { term: "Omamori", jp: "お守り", tag: "Simbolo", text: "Amuleti tradizionali di protezione o buon auspicio." },
    ],
  },
  {
    id: "aldila", no: "08", nav: "Aldilà", kanji: "黄泉", title: "Yomi — Il mondo oltre la vita", tone: "yomi",
    paragraphs: [
      "Lo Shintō non ha una dottrina unica e sistematica sull’aldilà, né una visione identica per tutti i fedeli. Nella mitologia compare Yomi-no-kuni (黄泉の国), il mondo dei morti: non una semplice versione dell’Inferno cristiano, ma un regno legato alla morte e all’impurità rituale.",
    ],
    items: [
      { term: "Izanagi e Izanami", text: "Izanami muore dopo aver dato alla luce il kami del fuoco e scende a Yomi; Izanagi va a cercarla. Il mito racconta il rapporto tra vita, morte e impurità: al ritorno, Izanagi compie un rito di purificazione." },
      { term: "Antenati", text: "Il legame tra antenati e discendenti e la loro venerazione sono centrali in molte pratiche." },
      { term: "Buddhismo", text: "Ha influenzato le concezioni giapponesi della morte; credenze e pratiche contemporanee sono molto varie." },
    ],
  },
];

export const conclusion = {
  title: "Lo Shintō: una connessione senza tempo",
  text: "Lo Shintō rappresenta una delle espressioni più profonde della spiritualità giapponese. Attraverso la venerazione dei kami, il rispetto della natura, la purificazione e le tradizioni, questa religione mantiene vivo un legame tra il mondo umano e quello sacro.",
  kanji: "「自然と神々への感謝」",
  translation: "Gratitudine verso la natura e i kami.",
  sources: [
    "Kojiki (712) e Nihon shoki (720), fonti primarie della mitologia giapponese",
    "Jinja Honchō (Associazione dei santuari shintoisti)",
    "Encyclopedia of Shinto, Kokugakuin University",
    "Encyclopaedia Britannica, voce “Shinto”",
  ],
};
