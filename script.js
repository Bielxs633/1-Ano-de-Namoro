/**
 * Objetivo: JS para mostrar meu amor
 * Data: 01/06/25
 * Autor: Gabriel
 * Para: Eduarda
 * Versão: 3.0 (com confetes e quiz)
 **/

'use strict'

// Lista de "Eu Te Amo" em várias línguas
const loveInLanguages = [
    {language: "Português", phrase: "Eu te amo"},
    {language: "Inglês", phrase: "I love you"},
    {language: "Espanhol", phrase: "Te quiero / Te amo"},
    {language: "Francês", phrase: "Je t'aime"},
    {language: "Italiano", phrase: "Ti amo"},
    {language: "Alemão", phrase: "Ich liebe dich"},
    {language: "Japonês", phrase: "愛してる (Aishiteru)"},
    {language: "Chinês", phrase: "我爱你 (Wǒ ài nǐ)"},
    {language: "Coreano", phrase: "사랑해 (Saranghae)"},
    {language: "Russo", phrase: "Я тебя люблю (Ya tebya lyublyu)"},
    {language: "Árabe", phrase: "أحبك (Uhibbuka)"},
    {language: "Hindi", phrase: "मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)"},
    {language: "Holandês", phrase: "Ik hou van je"},
    {language: "Sueco", phrase: "Jag älskar dig"},
    {language: "Turco", phrase: "Seni seviyorum"},
    {language: "Grego", phrase: "Σ' αγαπώ (S'agapó)"},
    {language: "Hebraico", phrase: "אני אוהב אותך (Ani ohev otakh)"},
    {language: "Tailandês", phrase: "ฉันรักคุณ (Chan rak khun)"},
    {language: "Vietnamita", phrase: "Tôi yêu bạn"},
    {language: "Polonês", phrase: "Kocham cię"},
    {language: "Húngaro", phrase: "Szeretlek"},
    {language: "Tcheco", phrase: "Miluji tě"},
    {language: "Dinamarquês", phrase: "Jeg elsker dig"},
    {language: "Finlandês", phrase: "Rakastan sinua"},
    {language: "Norueguês", phrase: "Jeg elsker deg"},
    {language: "Romeno", phrase: "Te iubesc"},
    {language: "Ucraniano", phrase: "Я тебе кохаю (Ya tebe kokhayu)"},
    {language: "Indonésio", phrase: "Aku mencintaimu"},
    {language: "Malaio", phrase: "Saya sayang awak"},
    {language: "Filipino", phrase: "Mahal kita"},
    {language: "Suaíli", phrase: "Nakupenda"},
    {language: "Zulu", phrase: "Ngiyakuthanda"},
    {language: "Havaiano", phrase: "Aloha wau iā ʻoe"},
    {language: "Esperanto", phrase: "Mi amas vin"},
    {language: "Latim", phrase: "Te amo"},
    {language: "Islandês", phrase: "Ég elska þig"},
    {language: "Croata", phrase: "Volim te"},
    {language: "Sérvio", phrase: "Волим те (Volim te)"},
    {language: "Búlgaro", phrase: "Обичам те (Obicham te)"},
    {language: "Armênio", phrase: "Ես սիրում եմ քեզ (Yes sirum em k'ez)"},
    {language: "Georgiano", phrase: "მე შენ მიყვარხარ (Me shen miq'varkhar)"},
    {language: "Persa", phrase: "دوستت دارم (Dooset daram)"},
    {language: "Urdu", phrase: "میں تم سے پیار کرتا ہوں (Main tumse pyar karta hoon)"},
    {language: "Punjabi", phrase: "ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ (Main tuhānūṁ pi'ār kardā hāṁ)"},
    {language: "Bengali", phrase: "আমি তোমায় ভালোবাসি (Ami tomay bhalobashi)"},
    {language: "Tâmil", phrase: "நான் உன்னை காதலிக்கிறேன் (Nāṉ uṉṉai kātalikkiṟēṉ)"},
    {language: "Telugu", phrase: "నేను నిన్ను ప్రేమిస్తున్నాను (Nēnu ninnu prēmistunnānu)"},
    {language: "Cantonês", phrase: "我愛你 (Ngo oi ney,)"},
        {language: "Catalão", phrase: "T'estimo"},
    {language: "Galego", phrase: "Ámote"},
    {language: "Basco", phrase: "Maite zaitut"},
    {language: "Lituano", phrase: "Aš tave myliu"},
    {language: "Letão", phrase: "Es tevi mīlu"},
    {language: "Estoniano", phrase: "Ma armastan sind"},
    {language: "Maltês", phrase: "Inħobbok"},
    {language: "Albanês", phrase: "Të dua"},
    {language: "Macedônio", phrase: "Те сакам (Te sakam)"},
    {language: "Esloveno", phrase: "Ljubim te"},
    {language: "Eslovaco", phrase: "Ľúbim ťa"},
    {language: "Bielorrusso", phrase: "Я цябе кахаю (Ya tsyabe kakhayu)"},
    {language: "Cazaque", phrase: "Мен сені жақсы көремін (Men seni jaqsy köremin)"},
    {language: "Uzbeque", phrase: "Men seni sevaman"},
    {language: "Quirguiz", phrase: "Мен сени сүйөм (Men seni süyöm)"},
    {language: "Turcomeno", phrase: "Men seni söýýärin"},
    {language: "Mongol", phrase: "Би чамд хайртай (Bi chamd khairtai)"},
    {language: "Tibetano", phrase: "ང་ཁྱེད་རང་ལ་དགའ་པོ་ཡོད་ (Nga khyed rang la ga po yö)"},
    {language: "Nepalês", phrase: "म तिमीलाई माया गर्छु (Ma timīlāī māyā garchu)"},
    {language: "Sinhala", phrase: "මම ඔයාට ආදරෙයි (Mama oyāṭa ādareyi)"},
    {language: "Khmer", phrase: "ខ្ញុំស្រលាញ់អ្នក (Khnhom sralanh anak)"},
    {language: "Lao", phrase: "ຂ້ອຍຮັກເຈົ້າ (Khony hak chao)"},
    {language: "Birmanês", phrase: "မင်းကိုချစ်တယ် (Mainnkohkyittaal)"},
    {language: "Haitiano Crioulo", phrase: "Mwen renmen ou"},
    {language: "Luxemburguês", phrase: "Ech hunn dech gär"},
    {language: "Feroês", phrase: "Eg elski teg"},
    {language: "Sami Setentrional", phrase: "Mun ráhkistan du"},
    {language: "Māori", phrase: "Kei te aroha au ki a koe"},
    {language: "Taitiano", phrase: "Ua here au ia oe"},
    {language: "Samoano", phrase: "Ou te alofa ia te oe"},
    {language: "Tonganês", phrase: "'Ofa atu ki a koe"},
    {language: "Fijiano", phrase: "Au domoni iko"},
    {language: "Cherokee", phrase: "ᎬᎯᎨᏳᎢ (Gvgeyu i)"},
    {language: "Inuktitut", phrase: "ᑕᖅᕿᒍᕙᒋᑦ (Taqqiuguvagit)"},
    {language: "Cree", phrase: "Kisâkihitin"},
    {language: "Navajo", phrase: "Ayóó ánóshní"},
    {language: "Quechua", phrase: "Kuyayki"},
    {language: "Guarani", phrase: "Rohayhu"},
    {language: "Aimará", phrase: "Muns mästati"},
    {language: "Somalí", phrase: "Waan ku jeclahay"},
    {language: "Amárico", phrase: "እወድሃለሁ (Ewedihalehu)"},
    {language: "Oromo", phrase: "Sin jaalladha"},
    {language: "Malagaxe", phrase: "Tiako ianao"},
    {language: "Xhosa", phrase: "Ndiyakuthanda"},
    {language: "Soto", phrase: "Ke a go rata"},
    {language: "Tswana", phrase: "Ke a go rata"},
    {language: "Shona", phrase: "Ndinokuda"},
    {language: "Igbo", phrase: "A hụrụ m gị n'anya"},
    {language: "Yoruba", phrase: "Mo nifẹ rẹ"},
    {language: "Hauçá", phrase: "Ina sonki"},
    {language: "Wolof", phrase: "Dama la bëgg"},
    {language: "Klingon (Star Trek)", phrase: "qamuSHa’"},
    {language: "Sindarin (Élfico - Tolkien)", phrase: "Gi melin"},
    {language: "Quenya (Élfico - Tolkien)", phrase: "Melinyel"},
    {language: "Dothraki (Game of Thrones)", phrase: "Anha zhilak yera"},
    {language: "Valiriano (Game of Thrones)", phrase: "Valar dohaeris (como resposta a 'Valar morghulis')"},
    {language: "Na’vi (Avatar)", phrase: "Nga yawne lu oer"},
    {language: "Sânscrito", phrase: "त्वां कामयामि (Tvāṁ kāmayāmi)"},
    {language: "Gótico", phrase: "𐌹𐌺 𐍆𐍂𐌹𐌾𐍉 𐌸𐌿𐌺 (Ik frijō þuk)"},
    {language: "Antigo Egípcio", phrase: "𓄿𓄿𓇋𓏏𓈖𓇌 (iwi ek)"},
    {language: "Aramaico", phrase: "ܐܢܐ ܪܚܡܢܐ ܠܟܝ (Ana rḥemna lakh)"},
    {language: "Gaélico Escocês", phrase: "Tha gràdh agam ort"},
    {language: "Manquês (Ilha de Man)", phrase: "Ta graih aym ort"},
    {language: "Bretão", phrase: "Da garan dit"},
    {language: "Cornish", phrase: "My a'th kar"},
    {language: "Frísio", phrase: "Ik hâld fan dy"},
    {language: "Kurdo (Kurmanji)", phrase: "Ez te hez dikim"},
    {language: "Pashto", phrase: "زه تا سره مینه لرم (Za ta sara meena laram)"},
    {language: "Tajique", phrase: "Ман туро дӯст медорам (Man turo dūst medoram)"},
    {language: "Tártaro", phrase: "Мин сине яратам (Min sine yaratam)"},
    {language: "Chuvash", phrase: "Эпĕ сана юрататăп (Epĕ sana yuratatăp)"},
    {language: "Bashkir", phrase: "Мин һине яратам (Min hine yaratam)"},
    {language: "Mari", phrase: "Мый тыйым йӧратем (Myj tyjym jöratem)"},
    {language: "Udmurte", phrase: "Мон тонэд ярасько (Mon toned jarasko)"},
    {language: "Komi", phrase: "Ме тэнад ӧти (Me tenad öti)"},
    {language: "Nenets", phrase: "Мань тёбя ямб (Man’ tyobya yamb)"},
    {language: "Sami Inari", phrase: "Mun ráávhuh đin"},
    {language: "Võro", phrase: "Ma armastan sind"},
    {language: "Livônio", phrase: "Mā armastāb sindõ"},
    {language: "Vêneto", phrase: "Te vòjo ben"},
    {language: "Sardo", phrase: "T'amo"},
    {language: "Ladino", phrase: "Te amo"},
    {language: "Aromeno", phrase: "Ti voiu"},
    {language: "Megleno-Romeno", phrase: "Ti ubbescu"},
    {language: "Istro-Romeno", phrase: "Ti am"},
    {language: "Gagauz", phrase: "Seni seviyorum"},
    {language: "Karachay-Balkar", phrase: "Мен сени сюемен (Men seni süyemen)"},
    {language: "Lak", phrase: "На вусса ххуна (Na vussa khkhuna)"},
    {language: "Lezgui", phrase: "Зун вузава (Zun vuzava)"},
    {language: "Osseta", phrase: "Ӕз дӕ уарзын (Æz dæ warzyn)"},
    {language: "Abecásio", phrase: "Сара бара шәыбзи (Sara bara shwibzi)"},
    {language: "Adigué", phrase: "Сэ о ушъу (Se o wshu)"},
    {language: "Checheno", phrase: "Сан веза хьо (San veza ḥo)"},
    {language: "Inguche", phrase: "Со веза хьо (So veza ḥo)"},
    {language: "Avar", phrase: "Дун лъикӏ гьабула (Dun łik’ habula)"},
    {language: "Dargínico", phrase: "Дуне бесде (Dune besde)"},
    {language: "Kabardino", phrase: "Сэ о ушъу (Se o wshu)"},
    {language: "Tuvan", phrase: "Мен сени ынакшып мен (Men seni ynakshyp men)"},
    {language: "Khakas", phrase: "Мин синиң хырарға (Min sinìñ khyrarğa)"},
    {language: "Altai", phrase: "Мен сени сӱӱп јат (Men seni süüp jat)"},
    {language: "Yakut", phrase: "Мин эйиигин таптыыбын (Min eyiigin taptyybyn)"},
    {language: "Chukchi", phrase: "Гымнан ыʼԓьын (Gymnan yʼḷyn)"},
    {language: "Nivkh", phrase: "Ч’уй ӈаӈ (Ch’uy ŋaŋ)"},
    {language: "Ainu", phrase: "エイワㇱキㇼ (Eiwaskir)"},
    {language: "Mapudungun", phrase: "Inche poyün"},
    {language: "Guarani Mbyá", phrase: "Amo nde"},
    {language: "Tupi Antigo", phrase: "Oré roîa ne"},
    {language: "Tétum", phrase: "Ha'u hadomi ó"},
    {language: "Bislamá", phrase: "Mi lovem yu"},
    {language: "Tok Pisin", phrase: "Mi laikim yu"},
    {language: "Papiamento", phrase: "Mi ta stima bo"},
    {language: "Sranan Tongo", phrase: "Mi lobi yu"},
    {language: "Krio", phrase: "A lɛk yu"},
    {language: "Gullah", phrase: "Uh lub yuh"},
    {language: "Twi", phrase: "Me dɔ wo"},
    {language: "Ewe", phrase: "Melɔ̃ wo"},
    {language: "Fula", phrase: "Mi yidi ma"},
    {language: "Mandinka", phrase: "N kanu la i la"},
    {language: "Bambara", phrase: "N b'i fɛ"},
    {language: "Kinyarwanda", phrase: "Ndagukunda"},
    {language: "Kirundi", phrase: "Ndagukunda"},
    {language: "Luganda", phrase: "Nkwagala"},
    {language: "Kikuyu", phrase: "Nĩngwendete"},
    {language: "Ojibwe", phrase: "Gizaagi’in"},
    {language: "Mohawk", phrase: "Konoronhkwa"},
    {language: "Lojban (Língua construída)", phrase: "Mi do prami"},
    {language: "Aari (Etiópia)", phrase: "Taasé nuwó"},
    {language: "Aceh (Indonésia)", phrase: "Lon sayang gata"},
    {language: "Acholi (Uganda/Sudão do Sul)", phrase: "Amaro"},
    {language: "Afar (Djibuti/Etiópia)", phrase: "Ku kooceh"},
    {language: "Akan (Gana)", phrase: "Medɔ wo"},
    {language: "Aklan (Filipinas)", phrase: "Palangga ta ka"},
    {language: "Aleúte (Alasca/Rússia)", phrase: "Txin yaxtakux̂"},
    {language: "Alsaciano (França)", phrase: "Ich hoan dich liab"},
    {language: "Aragones (Espanha)", phrase: "Te quiero"},
    {language: "Arapaho (EUA)", phrase: "Nehnééceen"},
    {language: "Arpitano (França/Suíça)", phrase: "T'aimi"},
    {language: "Assamês (Índia)", phrase: "Moi tomak bhal pau"},
    {language: "Asturiano (Espanha)", phrase: "Quiérote"},
    {language: "Atayal (Taiwan)", phrase: "Maku su balay"},
    {language: "Aymara (Bolívia/Peru)", phrase: "Muns mästati"},
    {language: "Balinês (Indonésia)", phrase: "Tiang tresna ajak ragane"},
    {language: "Banjar (Indonésia)", phrase: "Uwak sayang lawan ikam"},
    {language: "Banyumasan (Indonésia)", phrase: "Aku tresna karo kowe"},
    {language: "Batak Toba (Indonésia)", phrase: "Holong rohangku tu ho"},
    {language: "Bemba (Zâmbia)", phrase: "Nalikutemwa"},
    {language: "Bhojpuri (Índia)", phrase: "हम तोहसे प्यार करेला (Hum tohse pyaar karela)"},
    {language: "Bicolano (Filipinas)", phrase: "Namumutan ta ka"},
    {language: "Bodo (Índia)", phrase: "Ang nwngkhou mwjang mwnw"},
    {language: "Brahui (Paquistão)", phrase: "Ishk kanit"},
    {language: "Bugis (Indonésia)", phrase: "Iko kupésséangi"},
    {language: "Buriat (Rússia/Mongólia)", phrase: "Би тандэ хайртай (Bi tandé khairtai)"},
    {language: "Cabila (Argélia)", phrase: "Righ kem"},
    {language: "Caddo (EUA)", phrase: "Dííwit"},
    {language: "Caracalpaque (Uzbequistão)", phrase: "Men seni suyemin"},
    {language: "Chamorro (Guam)", phrase: "Hu guaiya hao"},
    {language: "Choctaw (EUA)", phrase: "Chi hollo li"},
    {language: "Comanche (EUA)", phrase: "U kamakutu nɨ"},
    {language: "Córnico (Reino Unido)", phrase: "My a'th kar"},
    {language: "Cree das Planícies (Canadá)", phrase: "Kisâkihitin"},
    {language: "Dakota (EUA)", phrase: "Thečhíȟila"},
    {language: "Divehi (Maldivas)", phrase: "އަހަރެން ތިބާއަށް ލޯބިވަން (Aharen thibaa laaibu vani)"},
    {language: "Dzongkha (Butão)", phrase: "ང་ཁྱེད་རང་ལ་དགའ་པོ་ཡོད (Nga khyed rang la ga po yö)"},
    {language: "Erzya (Rússia)", phrase: "Мон вечктан тонь (Mon vechtkan ton)"},
    {language: "Fang (Gabão)", phrase: "Ma dji wa"},
    {language: "Fijiano Hindi (Fiji)", phrase: "Hum tumse pyar kare hai"},
    {language: "Frisão Oriental (Alemanha)", phrase: "Ik hääb di leev"},
    {language: "Friulano (Itália)", phrase: "O voi bê"},
    {language: "Gagauz (Moldávia)", phrase: "Seni seviyorum"},
    {language: "Ganda (Uganda)", phrase: "Nkwagala"},
    {language: "Gondi (Índia)", phrase: "Nenu ninnu premistunnanu"},
    {language: "Groninguês (Holanda)", phrase: "Ik hold van joe"},
    {language: "Gwich'in (Canadá/Alasca)", phrase: "Neenjit dazhànjit"},
    {language: "Hadiyya (Etiópia)", phrase: "Ani siino"},
    {language: "Hakka (China/Taiwan)", phrase: "Ngài oi li"},
    {language: "Herero (Namíbia)", phrase: "Me ku randa"},
    {language: "Hmong (Ásia)", phrase: "Kuv hlub koj"},
    {language: "Iban (Malásia)", phrase: "Aku sayau ngau nuan"},
    {language: "Ido (Língua construída)", phrase: "Me amoras vu"},
    {language: "Interlíngua (Língua construída)", phrase: "Io te ama"},
    {language: "Jingpho (Myanmar/Índia)", phrase: "Nang hpe grai chyeju dum ai"},
    {language: "Jju (Nigéria)", phrase: "N kyauta ka"},
    {language: "Kabiyé (Togo)", phrase: "M'pɔɔ pʋʋ"},
    {language: "Kalenjin (Quênia)", phrase: "Amei chego"},
    {language: "Kamba (Quênia)", phrase: "Nĩkwendete"},
    {language: "Kanuri (Nigéria)", phrase: "Nga kuraa"},
    {language: "Kapampangan (Filipinas)", phrase: "Kaluguran daka"},
    {language: "Karaim (Lituânia/Polônia)", phrase: "Men süvem saña"},
    {language: "Kashmiri (Índia/Paquistão)", phrase: "म्यॅ छु तॅॅ हॅरि (Mye chhu t'ee heri)"},
    {language: "Kikongo (África Central)", phrase: "Mono ke zola nge"},
    {language: "Kimbundu (Angola)", phrase: "Ame kutha nge"},
    {language: "Kinyarwanda (Ruanda)", phrase: "Ndagukunda"},
    {language: "Kiribati (Kiribati)", phrase: "I tangiriko"},
    {language: "Komi-Permyak (Rússia)", phrase: "Ме тэнад ов (Me tenad ov)"},
    {language: "Konkani (Índia)", phrase: "हांव तुजेर मोग करता (Hāv tujer mog kartā)"},
    {language: "Koryak (Rússia)", phrase: "Г'ыгынин ы'ԓьын (G'ygynin y'ḷyn)"},
    {language: "Kosraeano (Micronésia)", phrase: "Ah luh luh kom"},
    {language: "Kumyk (Rússia)", phrase: "Мен сени сюемен (Men seni süyemen)"},
    {language: "Kurdish Sorani (Iraque/Irã)", phrase: "من تۆم خۆش دەوێم (Min tom xosh deweem)"},
    {language: "Kwanyama (Namíbia/Angola)", phrase: "Ondi ku hole"},
    {language: "Ladino (Judeu-Espanhol)", phrase: "Te amo"},
    {language: "Lakota (EUA)", phrase: "Thečhíȟila"},
    {language: "Lingala (África Central)", phrase: "Nalingi yo"},
    {language: "Lombardo (Itália/Suíça)", phrase: "Te voeuri ben"},
    {language: "Luo (Quênia/Tanzânia)", phrase: "Aheri"},
    {language: "Lushai (Índia/Myanmar)", phrase: "Ka hmangaih che"},
    {language: "Luxemburguês (Luxemburgo)", phrase: "Ech hunn dech gär"},
    {language: "Maguindanao (Filipinas)", phrase: "Sukulian ka"},
    {language: "Makassar (Indonésia)", phrase: "Kupésséangi riko"},
    {language: "Malayalam (Índia)", phrase: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു (Ñān ninne snēhikkunnu)"},
    {language: "Mandar (Indonésia)", phrase: "Kusayangi iyo"},
    {language: "Manipuri (Índia)", phrase: "ꯑꯩꯍꯥꯛꯅꯥ ꯅꯪꯕꯨ ꯅꯨꯡꯁꯤ (Eikhoi nangbu nungsī)"},
    {language: "Marshallês (Ilhas Marshall)", phrase: "Ij yokwe yuk"},
    {language: "Mende (Serra Leoa)", phrase: "Nge wa hinda"},
    {language: "Minangkabau (Indonésia)", phrase: "Denai sayang jo kau"},
    {language: "Mixe (México)", phrase: "Tsa'kujp"},
    {language: "Mizo (Índia/Myanmar)", phrase: "Ka hmangaih che"},
    {language: "Moksha (Rússia)", phrase: "Мон вечктян тонь (Mon vechtkjan ton)"},
    {language: "Mon (Myanmar/Tailândia)", phrase: "ညိ ဍေံမာန် (Ñi dhem mān)"},
    {language: "Mossi (Burkina Faso)", phrase: "M b'ida yaa"},
    {language: "Nahuatl (México)", phrase: "Nimitznequi"},
    {language: "Nauruano (Nauru)", phrase: "Ngabun ida"},
    {language: "Ndonga (Namíbia)", phrase: "Ondi ku hole"},
    {language: "Nepal Bhasa (Nepal)", phrase: "जिउँदगी तिम्रो लागि (Jiundagi timro lagi)"},
    {language: "Nias (Indonésia)", phrase: "Ondröhögu"},
    {language: "Norfuk (Ilha Norfolk)", phrase: "I love yorlye"},
    {language: "Normando (França)", phrase: "J'te veux du bien"},
    {language: "Nuer (Sudão do Sul)", phrase: "Ɣɛn ɣɔɔkɛ"},
    {language: "Nyakyusa (Tanzânia)", phrase: "Nkukombola"},
    {language: "Oromo (Etiópia)", phrase: "Sin jaalladha"},
    {language: "Osage (EUA)", phrase: "Wažáže wíǧiǧe"},
    {language: "Pangasinan (Filipinas)", phrase: "Inaro taka"},
    {language: "Papiamento (Caribe)", phrase: "Mi ta stima bo"},
    {language: "Pohnpeiano (Micronésia)", phrase: "I ohl ngehi"},
    {language: "Rapanui (Ilha de Páscoa)", phrase: "Ko aroha au iā koe"},
    {language: "Rarotongano (Ilhas Cook)", phrase: "Ka aroha au ki a koe"},
    {language: "Romansh (Suíça)", phrase: "Jau tai vögl bain"},
    {language: "Sakha (Rússia)", phrase: "Мин эйиигин таптыыбын (Min eyiigin taptyybyn)"},
    {language: "Sango (Rep. Centro-Africana)", phrase: "Mbi yî tî mo"},
    {language: "Santali (Índia)", phrase: "Iṅ ḍāṅ ḍāṅ kan menak’"},
    {language: "Sardos (Itália)", phrase: "T'amo"},
    {language: "Sasak (Indonésia)", phrase: "Aku sayang side"},
    {language: "Shan (Myanmar)", phrase: "ၶႃႈၸႂ်ႈတူၺ်း (Khǎu tsau tói)"},
    {language: "Shimaore (Comores)", phrase: "Nakupenda"},
    {language: "Shona (Zimbábue)", phrase: "Ndinokuda"},
    {language: "Silesiano (Polônia)", phrase: "Jo cie kochom"},
    {language: "Sindhi (Paquistão/Índia)", phrase: "مان توهان سان پيار ڪريان ٿو (Maan tohjaan saan pyaar kareyann tho)"},
    {language: "Soga (Uganda)", phrase: "Nkwagala"},
    {language: "Sranan Tongo (Suriname)", phrase: "Mi lobi yu"},
    {language: "Sukuma (Tanzânia)", phrase: "Nkukupenda"},
    {language: "Sundanês (Indonésia)", phrase: "Abdi bogoh ka anjeun"},
    {language: "Tachelhit (Marrocos)", phrase: "Righ kem"},
    {language: "Tahltan (Canadá)", phrase: "Dzenán ʼutʼi"},
    {language: "Tajique (Tajiquistão)", phrase: "Ман туро дӯст медорам (Man turo dūst medoram)"},
    {language: "Tamashek (África Ocidental)", phrase: "Ar t-tkem"},
    {language: "Tausug (Filipinas)", phrase: "In magsukul kaymu"},
    {language: "Tétum (Timor-Leste)", phrase: "Ha'u hadomi ó"},
    {language: "Tigrínia (Eritreia/Etiópia)", phrase: "የፍቅረኪ እየ (Yefikri iye)"},
    {language: "Tokelauano (Tokelau)", phrase: "Ke alofa atu ki a koe"},
    {language: "Tonganês (Tonga)", phrase: "'Ofa atu ki a koe"},
    {language: "Tswa (Moçambique)", phrase: "Ndza ku rhandza"},
    {language: "Tumbuka (Malawi)", phrase: "Nkhukukondwa"},
    {language: "Tuvano (Rússia)", phrase: "Мен сени ынакшып мен (Men seni ynakshyp men)"},
    {language: "Umbundo (Angola)", phrase: "Ame kutha nge"},
    {language: "Venda (África do Sul)", phrase: "Ndi a ni funa"},
    {language: "Vepsiano (Rússia)", phrase: "Minä armastan sindai"},
    {language: "Võro (Estônia)", phrase: "Ma armastan sind"},
    {language: "Vute (Camarões)", phrase: "Mə̀ fə́ŋ wì"},
    {language: "Warlpiri (Austrália)", phrase: "Ngaju nyanguku nyangu"},
    {language: "Wolof (Senegal)", phrase: "Dama la bëgg"},
    {language: "Xhosa (África do Sul)", phrase: "Ndiyakuthanda"},
    {language: "Yao (África Oriental)", phrase: "Nkukupenda"},
    {language: "Yapese (Micronésia)", phrase: "Ga fgow rom"},
    {language: "Yemba (Camarões)", phrase: "Mə̀ fə́ŋ wì"},
    {language: "Yidiche (Europa)", phrase: "איך האָב דיר ליב (Ikh hob dikh lib)"},
    {language: "Zarma (Níger)", phrase: "Ay ga ba ni"},
    {language: "Adigue (Cáucaso)", phrase: "Сэ о ушъу (Se o wshu)"},
    {language: "Ahtna (Alasca)", phrase: "Iiná ełkʼeltsʼen"},
    {language: "Akan (Gana)", phrase: "Medɔ wo"},
    {language: "Akoose (Camarões)", phrase: "Mə̀ fʉ̀ʼ wì"},
    {language: "Alutiiq (Alasca)", phrase: "Kenkamken"},
    {language: "Amis (Taiwan)", phrase: "Maolah kako kiso"},
    {language: "Anejom (Vanuatu)", phrase: "Nak amjijik oho"},
    {language: "Arrernte (Austrália)", phrase: "Urnte anteke"},
    {language: "Avar (Daguestão)", phrase: "Дун лъикӏ гьабула (Dun łik’ habula)"},
    {language: "Baluchi (Paquistão)", phrase: "من توء دوست دارم (Man to’ dost dāram)"},
    {language: "Bassa (Libéria)", phrase: "Me nyɔ́mà wù"},
    {language: "Bemba (Zâmbia)", phrase: "Nalikutemwa"},
    {language: "Bété (Costa do Marfim)", phrase: "Mɩnɩ gblɛ̌ɩ ɩ́"},
    {language: "Bikol (Filipinas)", phrase: "Namumutan ta ka"},
    {language: "Bislama (Vanuatu)", phrase: "Mi lavem yu"},
    {language: "Brahui (Paquistão)", phrase: "Ishk kanit"},
    {language: "Buryat (Rússia)", phrase: "Би тандэ хайртай (Bi tandé khairtai)"},
    {language: "Cham (Vietnã/Camboja)", phrase: "Kâo khĭn ơi"},
    {language: "Chichewa (Malawi)", phrase: "Ndimakukonda"},
    {language: "Choctaw (EUA)", phrase: "Chi hollo li"},
    {language: "Chukchi (Rússia)", phrase: "Гымнан ыʼԓьын (Gymnan yʼḷyn)"},
    {language: "Dinka (Sudão do Sul)", phrase: "Yin acï nhïïm"},
    {language: "Efik (Nigéria)", phrase: "Mme ama fi"},
    {language: "Embu (Quênia)", phrase: "Nĩngwendete"},
    {language: "Fang (Gabão)", phrase: "Ma dji wa"},
    {language: "Fijian (Fiji)", phrase: "Au domoni iko"},
    {language: "Fon (Benin)", phrase: "N yɔ̌n ɔ"},
    {language: "Ga (Gana)", phrase: "Miisɔɔ"},
    {language: "Gagauz (Moldávia)", phrase: "Seni seviyorum"},
    {language: "Ganda (Uganda)", phrase: "Nkwagala"},
    {language: "Gilbertês (Kiribati)", phrase: "I tangiriko"},
    {language: "Gusii (Quênia)", phrase: "Nkorete"},
    {language: "Hadiyya (Etiópia)", phrase: "Ani siino"},
    {language: "Hausa (África Ocidental)", phrase: "Ina son ka"},
    {language: "Hmong (Ásia)", phrase: "Kuv hlub koj"},
    {language: "Iban (Malásia)", phrase: "Aku sayau ngau nuan"},
    {language: "Idoma (Nigéria)", phrase: "Onye m hụrụ n'anya"},
    {language: "Ingriano (Rússia)", phrase: "Minä suren sinua"},
    {language: "Jola (Senegal)", phrase: "Mangioula"},
    {language: "Kabyle (Argélia)", phrase: "Righ kem"},
    {language: "Kalenjin (Quênia)", phrase: "Amei chego"},
    {language: "Kamba (Quênia)", phrase: "Nĩkwendete"},
    {language: "Kanuri (Nigéria)", phrase: "Nga kuraa"},
    {language: "Karachay-Balkar (Rússia)", phrase: "Мен сени сюемен (Men seni süyemen)"},
    {language: "Kashubian (Polônia)", phrase: "Jô cë kòchóm"},
    {language: "Kikuyu (Quênia)", phrase: "Nĩngwendete"},
    {language: "Kinyarwanda (Ruanda)", phrase: "Ndagukunda"},
    {language: "Komi (Rússia)", phrase: "Ме тэнад ӧти (Me tenad öti)"},
    {language: "Kpelle (Libéria)", phrase: "Nɔ̀ɔ̀ lɔ́ɔ̀"},
    {language: "Tsuut'ina (Canadá)", phrase: "Diniitsʼá"},
    {language: "Yuchi (EUA)", phrase: "T’äne’ wadë’hłä"},
    {language: "Arikara (EUA)", phrase: "Náatawišu’"},
    {language: "Mandan (EUA)", phrase: "Nų́ų́ʔeta"},
    {language: "Hocak (EUA)", phrase: "Hinį́į́ wažą́hą́"}
];

// // Quiz - Personalize com suas perguntas
// const quizQuestions = [
//     {
//         question: "Qual é a minha cor favorita?",
//         options: ["Azul", "Roxo", "Vermelho", "Preto"],
//         answer: 1
//     },
//     {
//         question: "Qual é a minha comida preferida?",
//         options: ["Hamburguer", "Strogonoff", "Lasanha", "Batata"],
//         answer: 3
//     },
//     {
//         question: "Qual foi minha posição no basquete?",
//         options: ["Armador", "Ala", "Ala-Armador", "Pivo"],
//         answer: 2
//     },
//     {
//         question: "Qual meu animal favorito?",
//         options: ["Pato", "Capivara", "Ornitorrinco", "Macaco"],
//         answer: 0
//     },
//     {
//         question: "Qual estação do ano eu prefiro?",
//         options: ["Verão", "Outono", "Primavera", "Inverno"],
//         answer: 3
//     },
//     {
//         question: "Qual meu jogo preferido?",
//         options: ["Hollow Knight", "Balatro", "The Last of Us", "Clash Royale"],
//         answer: 2
//     }
// ];

// let currentQuestion = 0;
// let quizScore = 0;

// Funções globais para o botão de Eu Te Amo
window.showLoveInAllLanguages = function() {
    createConfetti(); // Adiciona confetes
    
    const modal = document.getElementById('loveLanguagesModal');
    const grid = document.getElementById('languagesGrid');
    
    grid.innerHTML = '';
    
    loveInLanguages.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${item.language}:</strong> ${item.phrase}`;
        grid.appendChild(div);
    });
    
    modal.style.display = 'flex';
};

window.closeLoveLanguages = function() {
    document.getElementById('loveLanguagesModal').style.display = 'none';
};

// Função para criar confetes
function createConfetti() {
    const colors = ['#ff0000', '#ff1493', '#00bfff', '#32cd32', '#ff8c00', '#ffd700', '#9400d3'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Posição aleatória
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Cor aleatória
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Forma aleatória (quadrado ou círculo)
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        // Duração e atraso aleatórios
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 2) + 's';
        
        document.body.appendChild(confetti);
        
        // Remover após a animação
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// // Funções do Quiz
// function startQuiz() {
//     currentQuestion = 0;
//     quizScore = 0;
//     document.getElementById('quiz-start').style.display = 'none';
//     document.getElementById('quiz-next').style.display = 'inline-block';
//     document.getElementById('quiz-result').textContent = '';
//     showQuestion();
// }

// function showQuestion() {
//     const questionObj = quizQuestions[currentQuestion];
//     document.getElementById('quiz-progress').textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
//     document.getElementById('quiz-question').textContent = questionObj.question;
    
//     const optionsContainer = document.getElementById('quiz-options');
//     optionsContainer.innerHTML = '';
    
//     questionObj.options.forEach((option, index) => {
//         const optionElement = document.createElement('div');
//         optionElement.className = 'quiz-option';
//         optionElement.textContent = option;
//         optionElement.addEventListener('click', () => selectAnswer(index));
//         optionsContainer.appendChild(optionElement);
//     });
    
//     document.getElementById('quiz-next').style.display = 'none';
// }

// function selectAnswer(selectedIndex) {
//     const questionObj = quizQuestions[currentQuestion];
//     const options = document.querySelectorAll('.quiz-option');
    
//     // Desabilitar todas as opções
//     options.forEach(option => {
//         option.style.pointerEvents = 'none';
//     });
    
//     // Marcar a resposta correta
//     options[questionObj.answer].classList.add('correct');
    
//     // Verificar se a resposta está correta
//     if (selectedIndex === questionObj.answer) {
//         quizScore++;
//         document.getElementById('quiz-result').textContent = 'Resposta correta!';
//     } else {
//         options[selectedIndex].classList.add('incorrect');
//         document.getElementById('quiz-result').textContent = `Errou! A resposta correta é: ${questionObj.options[questionObj.answer]}`;
//     }
    
//     document.getElementById('quiz-next').style.display = 'inline-block';
// }

// function nextQuestion() {
//     currentQuestion++;
    
//     if (currentQuestion < quizQuestions.length) {
//         showQuestion();
//     } else {
//         // Fim do quiz
//         showQuizResult();
//     }
// }

// function showQuizResult() {
//     const quizContainer = document.getElementById('quiz-options');
//     quizContainer.innerHTML = '';
//     document.getElementById('quiz-question').textContent = '';
//     document.getElementById('quiz-progress').textContent = '';
//     document.getElementById('quiz-next').style.display = 'none';
    
//     const percentage = Math.round((quizScore / quizQuestions.length) * 100);
//     let message = '';
    
//     if (percentage >= 90) {
//         message = `Nada mais que sua obrigação ${quizScore} de ${quizQuestions.length} (${percentage}%) - É isso ai `;
//     } else if (percentage >= 60) {
//         message = `Hummm e ai pae? ${quizScore} de ${quizQuestions.length} (${percentage}%) - Vamo querer mais ai? `;
//     } else {
//         message = `Oloko ${quizScore} de ${quizQuestions.length} (${percentage}%) - ...`;
//     }
    
//     document.getElementById('quiz-result').innerHTML = `<h3>Resultado do Quiz</h3><p>${message}</p>`;
//     document.getElementById('quiz-start').style.display = 'inline-block';
//     document.getElementById('quiz-start').textContent = 'Fazer Novamente';
// }

document.addEventListener('DOMContentLoaded', function() {
    // Configuração da data do próximo aniversário
    const now = new Date();
    let nextYear = now.getFullYear() + 1;
    
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    if (currentMonth < 5 || (currentMonth === 5 && currentDay < 13)) {
        nextYear = now.getFullYear();
    }
    
    const anniversaryDate = new Date(nextYear, 5, 13);
    
    // Atualiza a contagem
    function updateCountdown() {
        const now = new Date();
        const diff = anniversaryDate - now;
        
        if (diff <= 0) {
            anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
            updateCountdown();
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Animação de corações
    const heartsContainer = document.querySelector('.hearts-animation');
    
    function createHeart() {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '0';
        heart.style.opacity = '0';
        heart.style.animation = `float-up ${Math.random() * 3 + 2}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createHeart, 300);
    
    // Estilos para animação dos corações
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de digitação para o poema
    const poemLines = document.querySelectorAll('.poem p');
    poemLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }, index * 1500);
    });
    
    // Mensagens de amor
    const loveMessages = [
        "Você é a pessoa mais incrível que já conheci!",
        "Meu coração bate mais forte quando estou com você",
        "Cada momento ao seu lado é especial",
        "Você me faz a pessoa mais feliz do mundo",
        "Nada se compara ao seu sorriso",
        "Você é o Ctrl+C no meu coração ( não tem como apagar! )",
        "Meu coração escolheu você",
        "Até meu Wi-Fi fica com inveja do nossa conexão!",
        "Você + Eu = <3 ( Melhor algoritmo de todos! )",
        "Nem o Ctrl+Z desfaz o que eu sinto por você."
    ];
    
    function showRandomMessage() {
        const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        const notification = document.createElement('div');
        notification.className = 'love-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 1000);
        }, 3000);
    }
    
    setInterval(showRandomMessage, 10000);

    // Fecha o modal ao clicar fora do conteúdo
    document.addEventListener('click', function(event) {
        const modal = document.getElementById('loveLanguagesModal');
        if (event.target === modal) {
            closeLoveLanguages();
        }
    });
    
    // Inicializar quiz
    const quizStartBtn = document.getElementById('quiz-start');
    const quizNextBtn = document.getElementById('quiz-next');
    
    quizStartBtn.addEventListener('click', startQuiz);
    quizNextBtn.addEventListener('click', nextQuestion);
});