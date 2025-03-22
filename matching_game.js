let cardtype, randnum, cardid;
let randnums = [], cardnums = [], artnames = [], emptycards = [];
let ccc = 0; //ccc = clicked card counter
let artcompared, cardcompared;

class info {
    constructor(artnum = "", name = "", date = "", material = "", form = "", culture = "", artist = "") {
        this.name = name;
        this.date = date;
        this.material = material;
        this.artist = artist;
        this.form = form;
        this.culture = culture;
        this.artnum = artnum;
    }
}

class def {
    constructor(word = "", defin = "") {
        this.word = word;
        this.defin = defin;
    }
}

let art = [
    new info(1, "Apollo 11 Stones", "25,500 to 25,300 B.C.E.", "charcoal on stone", '<img title="Apollo 11 Stones" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/apollo-11-stone-870x671.jpg">', "Prehistoric African"),
    new info(2, "Great Hall of the Bulls", "15,000 to 13,000 B.C.E.", "pigment on rock", '<img title="Great Hall of the Bulls" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/09/lascuax-II-narrow-870x653.jpg">', "Prehistoric European"), 
    new info(3, "Camelid Sacrum in the Shape of a Canine", "14,000 to 7,000 B.C.E.", "bone", '<img title="Camelid Sacrum in the Shape of a Canine" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/c67e5c0fd3c098aee5a76bc76db05739.jpg">', "Prehistoric American"), 
    new info(4, "Running Horned Woman", "6,000 to 4,000 B.C.E.", "pigment on rock", '<img title="Running Horned Woman" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/c17c2209e3db5da80274d200a3b8d08d4fbe5dd8.jpg">', "Prehistoric African"), 
    new info(5, "Beaker with Ibex Motifs", "4,200 to 3,500 B.C.E.", "painted terra cotta", '<img title="Beaker with Ibex Motifs" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/07/12906002764_4ecca85fcc_o-870x495.jpg">', "Prehistoric Middle East"), 
    new info(6, "Anthropomorphic Stele", "4,000 to 3,001 B.C.E.", "sandstone", '<img title="Anthropomorphic Stele" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/09/anthro-stele-1000px-870x1305.jpeg">', "Prehistoric Middle East"), 
    new info(7, "Jade Cong", "3,000 to 2,200 B.C.E.", "carved jade", '<img title="Jade Cong" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/liangzhu41359579463247.jpg?w=982">', "Prehistoric China"), 
    new info(8, "Stonehenge", "2,500 to 1,600 B.C.E.", "sandstone", '<img title="Stonehenge" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/09/Stonehenge_from_north_August_2010_cropped-870x289.jpeg">', "Prehistoric Europe"), 
    new info(9, "The Ambum Stone", "1500 B.C.E.", "greywacke", '<img title="The Ambum Stone" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/09/ambumnga.jpg">', "Prehistoric Oceania"), 
    new info(10, "Tiatilco Female Figurine", "1200 to 900 B.C.E.", "ceramic", '<img title="Tiatilco Female Figurine" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/11/default-e1701372072437-300x640.jpg">', "Prehistoric American"), 
    new info(11, "Terra Cotta Fragment", "1000 B.C.E.", "incised terra cotta", '<img title="Terra Cotta Fragment" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/12/lapitafragment-870x490.jpg">', "Prehistoric Oceania"),
    new info(12, "White Temple and its Ziggurat", "3,500 to 3,000 B.C.E.", "mud brick", '<img title="White Temple and its Ziggurat" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/ed02820b37d5a46767992fc210ac5680.jpg">', "Sumerian"),
    new info(13, "Palette of King Narmer", "3,000 to 2,920 B.C.E.", "greywacke", '<img title="Palette of King Narmer" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/04/Narmer_Palette-870x613.jpeg">', "Predynastic Egypt"), 
    new info(14, "Statue of Votive Figures", "2,700 B.C.E.", "gypsum inlaid with shell and black limestone", '<img title="Statue of Votive Figures" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://i0.wp.com/jisforjourney.com/wp-content/uploads/2016/10/sutori.com-votive-figures.png?fit=900%2C1293&ssl=1">', "Sumerian"), 
    new info(15, "Seated Scribe", "2,620 to 2,500 B.C.E.", "painted limestone", '<img title="Seated Scribe" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://live.staticflickr.com/7555/15775012706_cd2d5ae7f0.jpg">', "Old Kingdom, Fourth Dynasty Egypt"), 
    new info(16, "Standard of Ur", "2,600 to 2,400 B.C.E.", "wood inlaid with shell, lapis lazuli, and red limestone", '<img title="Standard of Ur" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://live.staticflickr.com/7083/7324379672_50795897a4_h.jpg">', "Sumerian"), 
    new info(17, "Great Pyramids and Great Sphinx", "2,550 to 2,490 B.C.E.", "limestone", '<img title="Great Pyramids and Great Sphinx" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2020/11/Pyramids_of_the_Giza_Necropolis.jpg">', "Old Kingdom, Fourth Dynasty Egypt"), 
    new info(18, "King Menkaure and Queen", "2,490 to 2,472 B.C.E.", "greywacke", '<img title="King Menkaure and Queen" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://live.staticflickr.com/7499/15179060794_7dc11a6d38_z.jpg">', "Old Kingdom, Fourth Dynasty Egypt"), 
    new info(19, "The Code of Hammurabi", "1,792 to 1,750 B.C.E.", "basalt", '<img title="The Code of Hammurabi" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/06/0000230553_OG-300x466.jpg">', "Susian"), 
    new info(20, "Temple of Amun-Re and Hypostyle Hall", "1550 and 1250 B.C.E.", "sandstone and mud brick", '<img title="Temple of Amun-Re and Hypostyle Hall" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.memphis.edu/hypostyle/images/about_reliefs/arial_hypostyle1.jpg">', "New Kingdom, 18th and 19th Dynasties Egypt"), 
    new info(21, "Mortuary Temple of Hatshepsut", "1,473 to 1,458 B.C.E.", "sandstone and red granite", '<img title="Mortuary Temple of Hatshepsut" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.ancient-origins.net/sites/default/files/field/image/Temple-of-Hatshepsut.jpg">', "New Kingdom, 18th Dynasty Egypt"), 
    new info(22, "Akhenaton, Nefertiti, and Three Daughters", "1,353 to 1,335 B.C.E.", "limestone", '<img title="Akhenaton, Nefertiti, and Three Daughters" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/e8d867ceb60cb9cc0af0ed5b771b6529ad8e27a6.jpg">', "New Kingdom, Amarna, 18th Dynasty Egypt"),
    new info(23, "Tutankhamun's Tomb, Innermost Coffin", "1,323 B.C.E.", "gold with inlay of enamel and semiprecious stone", '<img title="Tutankhamuns Tomb, Innermost Coffin" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/e1b12329963bfb171eebccdb14209090.jpg?w=640">', "New Kingdom, 18th Dynasty Egypt"), 
    new info(24, "Last Judgement of Hu-Nefer", "1,275 B.C.E.", "painted papyrus scroll", '<img title="Last Judgement of Hu-Nefer" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/HuneferFull-870x401.jpg">', "New Kingdom, 19th Dynasty Egypt"), 
    new info(25, "Lamassu from the Citadel of Sargon II", "720-705 B.C.E.", "alabaster", '<img title="Lamassu from the Citadel of Sargon II" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/07/14581729882_1be6955e2e_k-870x560.jpg">', "Neo-Assyrian"), 
    new info(26, "Athenian Agora", "600 B.C.E. to 150 C.E.", "plan", '<img title="Athenian Agora" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://i.pinimg.com/originals/f6/28/22/f62822d9537a05b3ffe7436fcf1078da.jpg">', "Archaic through Hellenistic Greek"), 
    new info(27, "Anavysos Kouros", "530 B.C.E.", "painted marble", '<img title="Anavysos Kouros" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Kouros_anavissos.jpg">', "Archaic Greek"), 
    new info(28, "Peplos Kore", "530 B.C.E.", "painted marble", '<img title="Peplos Kore" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2024/01/peplos-kore_acropolis-photo-870x621.jpg">', "Archaic Greek"), 
    new info(29, "Sarcophagus of the Spouses", "520 B.C.E.", "terra cotta", '<img title="Sarcophagus of the Spouses" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/06/15623415937_f9b495b9a7_o-870x602.jpg">', "Etruscan"),
    new info(30, "Audience Hall (Apadana) of Darius and Xerxes", "520 to 465 B.C.E.", "limestone", '<img title="Audience Hall (Apadana) of Darius and Xerxes" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://toursofiran.com/wp-content/uploads/2024/08/Apadana-palace-2.webp">', "Persian"), 
    new info(31, "Temple of Minerva and Sculpture of Apollo", "510 to 500 B.C.E.", "wood, mud brick, and tufa with terra cotta sculpture", '<img title="Temple of Minerva and Sculpture of Apollo" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/101360510302272.jpg?w=1200">', "Etruscan"), 
    new info(32, "Tomb of the Triclinium", "480 to 470 B.C.E.", "tufa and fresco", '<img title="Tomb of the Triclinium" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/tmp1027784400357556225.png">', "Etruscan"),
    new info(33, "Niobides Krater", "460 to 450 B.C.E.", "clay with red-figure technique and white highlights", '<img title="Niobides Krater" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://i0.wp.com/jisforjourney.com/wp-content/uploads/2020/03/Niobid-Krater-apollo-artemis-scaled.jpg?resize=825%2C1100&ssl=1">', "Classical Greek", "Niobid Painter"), 
    new info(34, "Doryphoros (Spear Bearer)", "450 to 440 B.C.E.", "marble", '<img title="Doryphoros (Spear Bearer)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://alchetron.com/cdn/doryphoros-01fa64f9-cd0f-4878-aa88-726ba159fd9-resize-750.jpeg">', "Classical Greek", "Polykleitos"), 
    new info(35, "Acropolis", "447 to 410 B.C.E.", "marble", '<img title="Acropolis" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2020/08/Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_14220794964-870x502.jpg">', "Classical Greek", "Iktinos and Kallikrates"), 
    new info(36, "Grave Stele of Hegeso", "410 B.C.E.", "marble and paint", '<img title="Grave Stele of Hegeso" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.brown.edu/Departments/Joukowsky_Institute/courses/greekpast/files/3120062.jpg">', "Classical Greek", "Kallimachos"), 
    new info(37, "Winged Victory of Samothrace", "190 B.C.E.", "marble", '<img title="Winged Victory of Samothrace" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/08/5604386389_80952d8483_o-870x1160.jpg">', "Hellenistic Greek"), 
    new info(38, "Great Altar of Zeus and Athena at Pergamon", "175 B.C.E.", "marble", '<img title="Great Altar of Zeus and Athena at Pergamon" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/03/athena-pergamon-scaled.jpg">', "Hellenistic Greek"),
    new info(39, "House of the Vettii", "62 to 79 C.E.", "cut stone and fresco", '<img title="House of the Vettii" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/2431217760_4f2827fb26_o-scaled.jpg">', "Imperial Roman"), 
    new info(40, "Alexander Mosaic", "100 B.C.E.", "mosaic", '<img title="Alexander Mosaic" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/06/8215878366_65752dd884_o-1-scaled.jpg">', "Republican Roman"), 
    new info(41, "Seated Boxer", "100 B.C.E.", "ceramic", '<img title="Seated Boxer" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/P%C3%BAgil_en_rep%C3%B2s_%28s._IV_a.C.%29%2C_Museu_Nacional_Rom%C3%A0_%28Palau_Massimo%29%2C_Roma_%28Vista_general%29.jpg/240px-P%C3%BAgil_en_rep%C3%B2s_%28s._IV_a.C.%29%2C_Museu_Nacional_Rom%C3%A0_%28Palau_Massimo%29%2C_Roma_%28Vista_general%29.jpg">', "Hellenistic Greek"), 
    new info(42, "Head of a Roman Patrician", "75 to 50 B.C.E.", "marble", '<img title="Head of a Roman Patrician" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/11/Topsm-1536x864.jpg">', "Republican Roman"),
    new info(43, "Augustus of Prima Porta", "1 to 100 C.E.", "marble", '<img title="Augustus of Prima Porta" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2020/10/primaporta-tall-870x1399.jpg">', "Imperial Roman"), 
    new info(44, "Colosseum (Flavian Amphitheater)", "70 to 80 B.C.E.", "stone and concrete", '<img title="Colosseum (Flavian Amphitheater)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg">', "Imperial Roman"), 
    new info(45, "Forum of Trajan", "106 to 113 C.E.", "brick, concrete, and marble", '<img title="Forum of Trajan" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://atouchofrome.com/images/forums/basilica-ulpia-interior-seen-from-ground-level.webp">', "Imperial Roman", "Apollodorus of Damascus"), 
    new info(46, "Pantheon", "118 to 125 C.E.", "concrete with stone facing", '<img title="Pantheon" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/855bce838bc86e2a83219cc376cd954ace50755f.jpg">', "Imperial Roman"), 
    new info(47, "Ludovisi Battle Sarcophagus", "250 C.E.", "marble", '<img title="Ludovisi Battle Sarcophagus" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/sc0354.jpg?w=1200">', "Late Imperial Roman"),
    new info(48, "Catacomb of Priscilla", "200 to 400 C.E.", "excavated tufa and fresco", '<img title="Catacomb of Priscilla" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.wga.hu/art/zearly/1/2mural/3priscil/1greek1.jpg">', "Late Antique Europe"),
    new info(49, "Santa Sabina", "422 to 432 C.E.", "brick and stone, wooden roof", '<img title="Santa Sabina" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/01/16542925467_a0dd79c2c8_k-870x551.jpg">', "Late Antique Europe"),
    new info(50, "Vienna Genesis", "Early 6th Century C.E.", "pigment on vellum", '<img title="Vienna Genesis" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/aea9c0e400214ead03ffe8b1fcfea4054d3f9ba0.jpg">', "Early Byzantine Europe"), 
    new info(51, "San Vitale", "526 to 547 C.E.", "brick, marble, and stone veneer mosaic", '<img title="San Vitale" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/07/52188874888_5b1f2cab73_k-1536x1025.jpg">', "Early Byzantine Europe"),
    new info(52, "Hagia Sophia", "532 to 537 C.E.", "brick and ceramic elements with stone and mosaic veneer", '<img title="Hagia Sophia" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://i.pinimg.com/736x/fa/23/68/fa236821b8e6c02e63fcad6114002875.jpg">', "Early Byzantine Europe", "Anthemius of Tralles and Isidorus of Miletus"),
    new info(53, "Merovingian Looped Fibula", "Mid 6th Century C.E.", "Silver gilt worked in filigree, with inlays of garnets and other stones", '<img title="Merovingian Looped Fibula" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2018/07/fibulae-870x805.jpg">', "Early Medieval Europe"), 
    new info(54, "Virgin and Child between Saints Theodore and George", "500 to 600 C.E.", "encaustic on wood", '<img title="Virgin and Child between Saints Theodore and George" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/12/53378290946_2e90ce6f1f_o-870x1214.jpg">', "Early Byzantine Europe"), 
    new info(55, "Lindisfarne Gospels", "700 C.E.", "ink, pigments, and gold on vellum", '<img title="Lindisfarne Gospels" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/carpetpage_big.jpg?w=640">', "Early Medieval (Hiberno Saxon) Europe"), 
    new info(56, "Great Mosque", "785 to 786 C.E.", "stone masonry", '<img title="Great Mosque" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2017/02/cordoba_desde_el_aire_cordoba_espancc83a-1.jpg">', "Umayyad (Islamic)"), 
    new info(57, "Pyxis of al-Mughira", "968 C.E.", "ivory", '<img title="Pyxis of al-Mughira" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/PyxFront-870x1199.jpg">', "Umayyad (Islamic)"), 
    new info(58, "Church of Sainte-Foy", "800 to 1130 C.E.", "stone, paint, gold, silver, gemstones, and enamel over wood", '<img title="Church of Sainte-Foy" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/11/conques_jpg02.jpg?w=982">', "Romanesque Europe"), 
    new info(59, "Bayeux Tapestry", "1066 to 1080 C.E.", "embroidery on linen", '<img title="Bayeux Tapestry" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/Screen-Shot-2021-10-18-at-10.57.54-AM-870x401.png">', "Romanesque Europe"),
    new info(60, "Chartres Cathedral", "1550 and 1250 B.C.E.", "sandstone and mud brick", '<img title="Chartres Cathedral" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Chartres_1.jpg">', "Gothic Europe"), 
    new info(61, "Bibles Moralisée of King Louis IX (Dedication Page from the Apocalypse)", "1226 to 1234 C.E.", "ink, tempera, and gold leaf on vellum", '<img title="Bibles Moralisée of King Louis IX (Dedication Page from the Apocalypse)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2024/04/53476192528_9b6d52dc7c_6k-870x1140.jpg">', "Gothic Europe"), 
    new info(62, "Rottgen Pieta", "1300 to 1325 C.E.", "painted wood", '<img title="Rottgen Pieta" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/8297481802_090d1c9915_k-870x1310.jpg">', "Late Gothic Europe"),
    new info(63, "Arena (Scrovegni) Chapel", "1,303 C.E.", "brick", '<img title="Arena (Scrovegni) Chapel" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2020/10/scrovegni-sm-870x693.jpg">', "Proto-Renaissance", "Giotto di Bondone (interior)"), 
    new info(64, "Golden Haggadah", "1320 C.E.", "pigment on vellum", '<img title="Golden Haggadah" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2015/08/f60074-12.jpg">', "Late Medieval Spain"), 
    new info(65, "Alhambra Palace", "1354 to 1391 C.E.", "whitewashed adobe stucco, wood, tile, paint, and gilding", '<img title="Alhambra Palace" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/915b6df06e779bfcf803e9462b57edc5661604ac.jpg">', "Nasrid Dynasty"), 
    new info(66, "Annunciation Triptych (Merode Altarpiece)", "1427 to 1432 C.E.", "oil on oak wood", '<img title="Annunciation Triptych (Merode Altarpiece)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/470304/977961/main-image">', "Northern Renaissance", "Robert Campin"), 
    new info(67, "Pazzi Chapel", "1429 to 1461 C.E.", "masonry", '<img title="Pazzi Chapel" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.britannica.com/75/145975-050-FCDB89C0/Pazzi-Chapel-Florence-Filippo-Brunelleschi.jpg">', "Italian Renaissance", "Filippo Brunelleschi"), 
    new info(68, "The Arnolfini Portrait", "530 B.C.E.", "painted marble", '<img title="The Arnolfini Portrait" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2018/09/ArnolfiniSm-870x1118.jpg">', "Northern Renaissance", "Jan van Eyck"),
    new info(69, "David", "1440 to 1460 C.E.", "bronze", '<img title="David" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/fbc9db5b0760fc2705e8c467307fd4be9e23a24c.jpg">', "Italian Renaissance", "Donatello"), 
    new info(70, "Palazzo Rucellai", "1450 C.E.", "stone, masonry", '<img title="Palazzo Rucellai" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/15876451506_51c74f4bcc_k-870x585.jpg">', "Italian Renaissance", "Leon Battista Alberti"), 
    new info(71, "Madonna and Child with Two Angels", "1465 C.E.", "tempera on wood", '<img title="Madonna and Child with Two Angels" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/06/standard_Fra_Filippo_Lippi_-_Madonna_and_Child_with_two_Angels_-_Uffizi.jpeg">', "Italian Renaissance", "Fra Filippo"), 
    new info(72, "Birth of Venus", "1484 to 1486 C.E.", "tempera on canvas", '<img title="Birth of Venus" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.britannica.com/51/239351-138-0D6B3C28/Sandro-Botticelli-Birth-of-Venus.jpg?w=400&h=225&c=crop">', "Italian Renaissance", "Sandro Botticelli"),
    new info(73, "Last Supper", "1489 to 1494 C.E.", "oil tempera", '<img title="Last Supper" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/11/52083520739_1e5b3aa6d6_6k-870x521.jpg">', "High Renaissance", "Leonardo da Vinci"), 
    new info(74, "Adam and Eve", "1504 C.E.", "engraving", '<img title="Adam and Eve" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/10/Durer-870x1101.jpeg">', "Northern Renaissance", "Albrecht Dürer"), 
    new info(75, "Sistine Chapel", "1508 to 1541 C.E.", "fresco", '<img title="Sistine Chapel" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/09/sistine-chapel-ceiling-300x444.jpg">', "High Renaissance", "Michelangelo"), 
    new info(76, "School of Athens", "1509 to 1511 C.E.", "fresco", '<img title="School of Athens" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/fae695cb8498e6a3ac50a22d9fd692c677968bbb.png">', "High Renaissance", "Raphael"), 
    new info(77, "Isenheim Altarpiece", "1512 to 1516 C.E.", "oil on wood", '<img title="Isenheim Altarpiece" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Grunewald_Isenheim1.jpg/1280px-Grunewald_Isenheim1.jpg">', "Northern Renaissance", "Matthias Grunewald"), 
    new info(78, "Entombment of Christ", "1525 to 1528 C.E.", "oil on wood", '<img title="Entombment of Christ" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg/800px-Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg">', "Mannerism", "Jacopo da Pontormo"), 
    new info(79, "Allegory of Law and Grace", "1530 C.E.", "woodcut", '<img title="Allegory of Law and Grace" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cranach_law_and_grace_woodcut.jpg/300px-Cranach_law_and_grace_woodcut.jpg">', "Northern Renaissance", "Lucas Cranach the Elder"), 
    new info(80, "Venus of Urbino", "1538 C.E.", "oil on canvas", '<img title="Venus of Urbino" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2020/08/UrbinoWhole-870x489.jpg">', "Venetian (High Renaissance)", "Titian"), 
    new info(81, "Frontispiece of the Codex Mendoza", "1541 to 1542 C.E.", "pigment on paper", '<img title="Frontispiece of the Codex Mendoza" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/11/CodexMendoza01-870x1269.jpeg">', "Aztec/European", "Viceroyalty of New Spain"), 
    new info(82, "Il Gesu", "1568 to 1679 C.E.", "brick, marble, fresco, and stucco", '<img title="Il Gesu" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/G.B.Gaulli-Triumph_of_the_Name_of_Jesus.jpg">', "Italian Baroque", "Giacomo da Vignola, Giacomo della Porta, Giovanni Battista Gaulli"),
    new info(83, "Hunters in the Snow", "1565 C.E.", "oil on wood", '<img title="Hunters in the Snow" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/11/24187158602_fc9bd804a4_o-870x606.jpg">', "Northern Renaissance", "Pieter Bruegal"),
    new info(84, "Mosque of Selim II", "1568 to 1575 C.E.", "brick and stone", '<img title="Mosque of Selim II" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/11/selimiye-full-870x653.jpg">', "Ottoman (Islamic)", "Sinan"),
    new info(85, "Calling of Saint Matthew", "1597 to 1601 C.E.", "oil on canvas", '<img title="Calling of Saint Matthew" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://primematters.com/sites/default/files/styles/article/public/2020-08/caravaggio-the-calling-of-st-matthew-1200x800-wikimedia-public-domain%20%281%29.jpg?h=10d202d3&itok=ie14dxvF">', "Italian Baroque", "Caravaggio"), 
    new info(86, "Henri IV Receives the Portrait of Marie de' Medici", "1631 to 1625 C.E.", "oil on canvas", '<img title="Henri IV Receives the Portrait of Marie de Medici" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/07/14582410965_de23a9f2da_k-870x1096.jpg">', "Flemish Baroque", "Peter Paul Rubens"),
    new info(87, "Self-Portrait with Saskia", "1636 C.E.", "etching", '<img title="Self-Portrait with Saskia" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/11/RembrandtSaskia-870x962.jpg">', "Dutch Baroque", "Rembrandt van Rijn"),
    new info(88, "San Carlo alle Quattro Fontane", "1638 to 1646 C.E.", "stone and stucco", '<img title="San Carlo alle Quattro Fontane" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/San_Carlo_alle_Quattro_Fontane_282829-397x680.jpg">', "Italian Baroque", "Francesco Borromin"), 
    new info(89, "Ecstasy of Saint Teresa", "1647 to 1652 C.E.", "marble, stucco, and gilt bronze", '<img title="Ecstasy of Saint Teresa" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://preview.redd.it/ecstasy-of-saint-teresa-by-bernini-1652-rome-one-of-v0-rq9ibmfw2q991.jpg?width=640&crop=smart&auto=webp&s=97755b589e3c207e65d7a03baa0a54f0f19cfea2">', "Italian Baroque", "Gian Lorenzo Bernini"), 
    new info(90, "Angel with Arquebus, Asiel Timore Dei", "17th century C.E.", "oil on canvas", '<img title="Angel with Arquebus" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/01/asiel-timor-dei-angel.jpg">', "New Spanish Baroque", "Master of Calamarca"), 
    new info(91, "Las Meninas", "1656 C.E.", "oil on canvas", '<img title="Las Meninas" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://artincontext.org/wp-content/uploads/2022/09/Las-Meninas-by-Diego-Vela%CC%81zquez.jpg">', "Spanish Baroque", "Diego Velázquez"), 
    new info(92, "Woman Holding a Balance", "1664 C.E.", "oil on canvas", '<img title="Woman Holding a Balance" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://media.nga.gov/iiif/c948cf32-e6c7-41a0-a053-0ad0562960c4/full/!750,900/0/default.jpg">', "Dutch Baroque", "Johannes Vermeer"),
    new info(93, "The Palace at Versailles", "1669 C.E.", "masonry, stone, wood, iron, gold leaf, marble, and bronze", '<img title="The Palace at Versailles" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/11/Vue_ae%CC%81rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073-scaled-e1636561440123-870x411.jpg">', "French Baroque", "Louis Le Vau and Jules Hardouin-Mansart"), 
    new info(94, "Screen with the Siege of Belgrade", "1697 to 1701 C.E.", "tempera and resin on wood, shell inlay", '<img title="Screen with the Siege of Belgrade" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2017/02/biombo.jpg">', "New Spanish Baroque", "González Family"), 
    new info(95, "The Virgin of Guadalupe", "1698 C.E.", "oil on canvas on wood, mother-of-pearl inlay", '<img title="The Virgin of Guadalupe" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2017/08/ma-5847.jpg">', "New Spanish Baroque", "Miguel Gonzalez"), 
    new info(96, "Fruit and Insects", "1711 C.E.", "oil on wood", '<img title="Fruit and Insects" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/09/13953706999_fb0bb11835_4k-870x658.jpg">', "Late Baroque", "Rachel Ruysch"),
    new info(97, "Spaniard and Indian Produce a Mestizo", "1715 C.E.", "oil on canvas", '<img title="Spaniard and Indian Produce a Mestizo" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/01/rodriguez-juarez-casta-brearmore-870x669.jpg">', "New Spanish", "Juan Rodríguez Juárez"), 
    new info(98, "The Tete a Tete", "1743 C.E.", "oil on canvas", '<img title="The Tete a Tete" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://mydailyartdisplay.uk/wp-content/uploads/2011/05/marriage-a-la-mode-tete-a-tete-by-william-hogarth.jpg">', "Satire", "William Hogarth"),
    new info(99, "Portrait of Sor Juana Inez de la Cruz", "1750 C.E.", "oil on canvas", '<img title="Portrait of Sor Juana Inez de la Cruz" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/11/Sor-Juana-full-scaled-1-870x727.jpg">', "Naturalism", "Miguel Cabrera"),
    new info(100, "A Philospher Giving a Lecture at the Orrery", "1763-1765 C.E.", "oil on canvas", '<img title="A Philospher Giving a Lecture at the Orrery" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/Wright_of_Derby_The_Orrery-870x611.jpeg">', "Enlightenment", "Joseph Wright of Derby"),
    new info(101, "The Swing", "1767 C.E.", "oil on canvas", '<img title="The Swing" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/02/Fragonard-Swing-Whole-870x1092.jpg">', "Rococco", "Jean-Honore Fragonard"),
    new info(102, "Monticello", "1768-1809 C.E.", "brick, glass, stone, and wood", '<img title="Monticello" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/Thomas_Jeffersons_Monticello_cropped-870x344.jpeg">', "American Neoclassism", "Thomas Jefferson"),
    new info(103, "The Oath of the Horatii", "1784 C.E.", "oil on canvas", '<img title="The Oath of the Horatii" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/01/davidoathsm-870x687.jpg">', "Neoclassism", "Jacques-Louis David"),
    new info(104, "George Washington", "1788-1792 C.E.", "marble", '<img title="George Washington" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/09/Full-Tall-sm-300x540.jpg">', "American Neoclassism", "Jean-Antoine Houdon"),
    new info(105, "Self-Portrait", "1790 C.E.", "oil on canvas", '<img title="Self-Portrait" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/E%CC%81lisabeth_Louise_Vige%CC%81e_Le_Brun_1755-1842_-_Self_Portrait_-_851782_-_National_Trust-870x1079.jpeg">', "Naturalism", "Elisabeth Louise Vigee Le Brun"),
    new info(106, "Y no hai remedio (And There is Nothing to Be Done)", "1863 C.E.", "drypoint etching", '<img title="Y no hai remedio (And There is Nothing to Be Done)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/GoyaWhole-870x735.jpg">', "Romanticism", "Francisco de Goya"),
    new info(107, "La Grande Odalisque", "1814 C.E.", "oil on canvas", '<img title="La Grande Odalisque" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/03/IngresOdalisque-870x488.jpg">', "Neoclassism/Romanticism", "Jean-Auguste-Dominique Ingres"),
    new info(108, "Liberty Leading the People", "1830 C.E.", "oil on canvas", '<img title="Liberty Leading the People" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2015/11/dellibwholesm-870x685.jpg">', "Romanticism", "Eugene Delacroix"),
    new info(109, "The Oxbow", "1836 C.E.", "oil on canvas", '<img title="The Oxbow" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/OxbowFull-870x586.jpg">', "American Romanticism", "Thomas Cole"),
    new info(110, "Still Life in Studio", "1837 C.E.", "photograph", '<img title="Still Life in Studio" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/06/Daguerreotype_Daguerre_Atelier_1837-870x633.jpg">', "Daguerreotype (Photography)", "Louis-Jacques-Mande Daguerre"),
    new info(111, "Slave Ship", "1840 C.E.", "oil on canvas", '<img title="Slave Ship" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/02/8283629458_b554a9c5b7_k-1-e1614016367323-570x350.jpg">', "Romanticism", "Joseph Mallard William Turner"),
    new info(112, "Palace of Westminster", "1840-1870 C.E.", "limestone masonry and glass", '<img title="Palace of Westminster" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Houses_of_Parliament_in_2022_%28cropped%29.jpg">', "Neo-Gothic", "Charles Barry and Augustus W.N. Pugin"),
    new info(113, "The Stone Breakers", "1849 C.E.", "oil on canvas", '<img title="The Stone Breakers" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/800px-Courbet_-_Kamieniarze.jpeg">', "Realism", "Gustave Courbet"),
    new info(114, "Nadar Raising Photography to the Height of Art", "1862 C.E.", "lithograph", '<img title="Nadar Raising Photography to the Height of Art" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/06/nadar_elevant_la_photographie_a_la_hauteur_de_lart_1954.12.22-870x1107.jpg">', "Lithograph (Photography)", "Honore Daumier"),
    new info(115, "Olympia", "1863 C.E.", "oil on canvas", '<img title="Olympia" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/12/23783241193_f4eaed8227_k.jpg">', "Realism/Impressionism", "Edouard Manet"),
    new info(116, "The Saint-Lazare Station", "1877 C.E.", "oil on canvas", '<img title="The Saint-Lazare Station" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/02/24444010465_bc72fe7bc8_k-870x649.jpg">', "Impressionism", "Claude Monet"),
    new info(117, "The Horse in Motion", "1878 C.E.", "photograph", '<img title="The Horse in Motion" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/06/mubridge-scaled-2-1536x958.jpg">', "Albumen Print (Photography)", "Eadweard Muybridge"),
    new info(118, "The Valley of Mexico from the Hillside of Santa Isabel", "1882 C.E.", "oil on canvas", '<img title="The Valley of Mexico from the Hillside of Santa Isabel" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/17011656808_647f03c465_k-870x611.jpg">', "Late Romanticism", "Jose Maria Velasco"),
    new info(119, "The Burghers of Calais", "1884-1895 C.E.",  "bronze", '<img title="The Burghers of Calais" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/Statue_bourgeois_calais_rodin-870x653.jpeg">', "19th Century Sculpture", "Auguste Rodin"),
    new info(120, "The Starry Night", "1889 C.E.", "oil on canvas", '<img title="The Starry Night" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/04/StarryNightFull-870x696.jpg">', "Post-Impressionism", "Vincent van Gogh"),
    new info(121, "The Coiffure", "1890-1891 C.E.", "drypoint and aquatint on paper", '<img title="The Coiffure" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/the_coiffure_1943.3.2758-870x1153.jpg">', "Impressionism", "Mary Cassatt"),
    new info(122, "The Scream", "1893 C.E.", "tempera and pastels on cardboard", '<img title="The Scream" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg">', "Symbolism", "Edvard Munch"),
    new info(123, "Where Do We Come From? What Are We? Where Are We Going?", "1897-1898 C.E.", "oil on canvas", '<img title="Where Do We Come From? What Are We? Where Are We Going?" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/11/52482051120_0ddd860b8d_6k-870x321.jpg">', "Post-Impressionism", "Paul Gauguin"),
    new info(124, "Carson, Pirie, Scott and Company Building", "1899-1903 C.E.", "iron, steel, glass, terra cotta", '<img title="Carson, Pirie, Scott and Company Building" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/Carson_Pirie_Scott_and_Company_Building_Sullivan_Center_Chicago_Illinois_9179422705-870x820.jpeg">', "Art Nouveau/Chicago Style", "Louis Sullivan"),
    new info(125, "Mont Saint-Victoire", "1902-1904 C.E.", "oil on canvas", '<img title="Mont Saint-Victoire" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2017/04/cezannethumb-870x659.jpg">', "Post-Impressionism", "Paul Cezanne"),
    new info(126, "Les Demoiselles dAvignon", "1907 C.E.", "oil on canvas", '<img title="Les Demoiselles dAvignon" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/23401375822_3dca5ac5ce_k-870x896.jpg">', "Cubism", "Pablo Picasso"),
    new info(127, "The Steerage", "1907 C.E.", "photograph", '<img title="The Steerage" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/ma-10474-870x1105.jpg">', "Photogravure (Photography)", "Alfred Stieglitz"),
    new info(128, "The Kiss", "1907-1908 C.E.", "oil on canvas", '<img title="The Kiss" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://paintvine.co.nz/cdn/shop/articles/The-Kiss.jpg?v=1694649199">', "Art Nouveau/Austrian Secession", "Gustav Klimt"),
    new info(129, "The Kiss", "1907-1908 C.E.", "limestone", '<img title="The Kiss" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/giLl.ChiOu.sLooWe7dPxg.jpg">', "Early 20th Century Sculpture", "Constantin Brancusi"),
    new info(130, "The Portugese", "1911 C.E.", "oil on canvas", '<img title="The Portugese" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/Braque-The-Portuguese-sm-870x1246.jpg">', "Cubism", "Georges Braque"),
    new info(131, "Goldfish", "1912 C.E.", "oil on canvas", '<img title="Goldfish" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/4149_foto_1_03.jpg">', "Fauvism", "Henri Matisse"),
    new info(132, "Improvisation 28 (second version)", "1912 C.E.", "oil on canvas", '<img title="Improvisation 28 (second version)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2018/09/Kandinsky-improvisation-thumb-570x350.jpg">', "Blue Rider (German Expressionism)", "Vassily Kandinsky"),
    new info(133, "Self-Portrait as a Solider", "1915 C.E.", "oil on canvas", '<img title="Self-Portrait as a Solider" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/Ernst-Ludwig-Kirchner-Self-Portrait-of-a-Soldier-1915-MeisterDrucke-254836-870x1007.jpg">', "The Bridge (German Expressionism)", "Ernst Ludwig Kirchner"),
    new info(134, "Memorial Sheet for Karl Liebknecht", "1919-1920 C.E.", "woodcut", '<img title="Memorial Sheet for Karl Liebknecht" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2021/12/1280px-Ka%CC%88the_Kollwitz_Gedenkblatt_fu%CC%88r_Karl_Liebknecht_1920-870x659.jpeg">', "German Expressionism", "Kathe Kollwitz"),
    new info(135, "Villa Savoye", "1929 C.E.", "steel and reinforced concrete", '<img title="Villa Savoye" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/01/6310090780_5e48e01fa3_k-870x578.jpg">', "International Style", "Le Corbusier"),
    new info(136, "Composition with Red, Blue and Yellow", "1930 C.E.", "oil on canvas", '<img title="Composition with Red, Blue and Yellow" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/01/1010px-Piet_Mondriaan_1930_-_Mondrian_Composition_II_in_Red_Blue_and_Yellow-870x882.jpeg">', "De Stijl", "Piet Mondrian"),
    new info(137, "The Results of the First Five-Year Plan", "1932 C.E.", "photomontage", '<img title="The Results of the First Five-Year Plan" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/01/fiveyearplan-e1641571424106-870x594.jpg">', "Constructivism", "Varvara Stepanova"),
    new info(138, "Object (Le Dejeuner en fourrure)", "1936 C.E.", "fur-covered cup, saucer, and spoon", '<img title="Object (Le Dejeuner en fourrure)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/b06d8534b0d5c5a4593904250d7ba60032ae21dc.jpg">', "Surrealism", "Meret Oppenheim"),
    new info(139, "Fallingwater", "1936-1939 C.E.", "reinforced concrete, sandstone, steel, and glass", '<img title="Fallingwater" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/Fallingwater-rep-1-870x637.jpeg">', "Praire Style", "Frank Lloyd Wright"),
    new info(140, "The Two Fridas", "1939 C.E.", "oil on canvas", '<img title="The Two Fridas" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/01/Screen-Shot-2022-01-07-at-4.53.22-PM-1-870x873.png">', "Surrealsim", "Frida Kahlo"),
    new info(141, "The Migration of the Negro, Panel no. 49", "1940-1941 C.E.", "casein tempera on hardboard", '<img title="The Migration of the Negro, Panel no. 49" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.moma.org/interactives/exhibitions/2015/onewayticket/site/assets/2014/10/49.jpg">', "Harlem Renaissance", "Jacob Lawrence"),
    new info(142, "The Jungle", "1943 C.E.", "gouache on paper mounted on canvas", '<img title="The Jungle" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/02/LamTheJungle-870x909.jpg">', "Surrealism", "Wifredo Lam"),
    new info(143, "Dream of a Sunday Afternoon in the Alameda Park", "1947-1948 C.E.", "fresco", '<img title="Dream of a Sunday Afternoon in the Alameda Park" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/03/Mural_Suen%CC%83o_de_una_tarde_dominical_en_la_Alameda_Central-1536x373.jpg">', "Surrealism", "Diego Rivera"),
    new info(144, "Fountain (second version)", "1950 C.E.", "glazed sanitary china with black paint", '<img title="Fountain (second version)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/8563bb352b1d93895822bbf0d5f4259c3b7c8168.jpg">', "Dadaism", "Marcel Duchamp"),
    new info(145, "Woman, I", "1950-1952 C.E.", "oil on canvas", '<img title="Woman, I" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-youtube-converted/WEYKoJTIHcE.mp4/WEYKoJTIHcE.png">', "Abstract Expressionism", "Willem de Kooning"),
    new info(146, "Seagram Building", "1954-1958 C.E.", "steel, glass, and bronze", '<img title="Seagram Building" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.britannica.com/33/188633-050-2A2082F3/Seagram-Building-constructed-1958-Ludwig-Mies-van-der-Rohe-Philip-Johnson-New-York.jpg">', "Modernism Architecture", "Ludwig Miles van der Rohe and Philip Johnson"),
    new info(147, "Marilyn Diptych", "1962 C.E.", "oil, acrylic, and silkscreen enamel on canvas", '<img title="Marilyn Diptych" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/02/MarilynDip-870x615.jpg">', "Pop Art", "Andy Warhol"),
    new info(148, "Narcissus Garden", "1966 C.E.", "mirror balls", '<img title="Narcissus Garden" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://d2jv9003bew7ag.cloudfront.net/uploads/Narcissus-Garden-by-Yayoi-Kusama-at-Tuileries-Palace-in-Paris.jpg">', "Pop Art", "Yayoi Kusama"),
    new info(149, "The Bay", "1963 C.E.", "acrylic on canvas", '<img title="The Bay" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/Whole-1-870x840.jpg">', "Color Field (Abstract Expressionism)", "Helen Frankenthaler"),
    new info(150, "Lipstick (Ascending) on Caterpillar Tracks", "1969-1974 C.E.", "steel, aluminum, resin, and polyurethane enamel paint", '<img title="Lipstick (Ascending) on Caterpillar Tracks" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/en/7/79/Lipstick-catepillar.jpg">', "Pop Art", "Claes Oldenburg"),
    new info(151, "Spiral Jetty", "1970 C.E.", "mud, salt crystals, rock, and water coil", '<img title="Spiral Jetty" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/06/spiral-jetty-robert-smithson.jpg">', "Site-Specific Art", "Robert Smithson"),
    new info(152, "House in Newcastle County", "1978-1983 C.E.", "wood frame and stucco", '<img title="House in Newcastle County" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/04/Venturi_01-870x524.jpg">', "Reaction to Modernism Architecture", "Robert Venturi, John Rauch, Denise Scott Brown"),
    new info(153, "Chavin de Huantar", "900-200 B.C.E.", "stone, granite, gold", '<img title="Chavin de Huantar" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/02/51149644124_91bf74837e_k-870x353.jpg">', "Chavin (Indigenous American)"),
    new info(154, "Mesa Verde Cliff Dwellings", "450-1300 C.E.", "sandstone", '<img title="Mesa Verde Cliff Dwellings" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/02/17062813499_74070291c3_b-870x603.jpg">', "Anasazi (Indigenous American)"),
    new info(155, "Yaxchilan", '725 C.E.', "limestone", '<img title="Yaxchilan" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/04/16425423149_e6d676cbb7_o-1-870x339.jpg">', "Maya (Indigenous American)"),
    new info(156, "Great Serpent Mound", "1070 C.E.", "effigy mound", '<img title="Great Serpent Mound" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://lopezapah.wordpress.com/wp-content/uploads/2016/03/screen-shot-2016-03-13-at-9-46-41-pm.png?w=450">', "Mississippian (Indigenous American)"),
    new info(157, "Templo Mayor", "1375-1520 C.E.", "stone, volcanic stone, basalt", '<img title="Templo Mayor" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/10/diagram_Templo-Mayor-870x489.jpg">', "Aztec (Indigenous American)"),
    new info(158, "Rulers Feather Headdress", "1428-1520 C.E.", "quetzal and cotinga feathers, gold", '<img title="Rulers Feather Headdress" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.habsburger.net/files/styles/large/public/originale/federkopfschmuck_um_1520_original.jpg?itok=8YQqfMjx">', "Aztec (Indigenous American)"),
    new info(159, "City of Cusco", "1440 C.E.", "sandstone", '<img title="City of Cusco" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/0622b1176a9350d1aa2f06190438c1220b81bf50.jpg">', "Inka (Indigenous American)"),
    new info(160, "Silver and Gold Maize Cobs", "1400-1533 C.E.", "sheet metal, gold, silver", '<img title="Silver and Gold Maize Cobs" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/02/cj7d3BpKJiIq.jpg">', "Inka (Indigenous American)"),
    new info(161, "Machu Picchu", "1450-1540 C.E.", "granite", '<img title="Machu Picchu" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/03/50618773601_7983706494_o.jpg">', "Inka (Indigenous American)"),
    new info(162, "All-Toqapu Tunic", "1450-1540 C.E.", "camelid fiber and cotton", '<img title="All-Toqapu Tunic" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2019/11/InkaTunic-870x1010.jpg">', "Inka (Indigenous American)"),
    new info(163, "Bandolier Bag", "1850 C.E.", "beadwork on leather", '<img title="Bandolier Bag" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/mWGtvqOCrOewOBY.hjjeAw.png">', "Lenape Tribe (Indigenous American)"),
    new info(164, "Transformation Mask", "Late 1800s C.E.", "wood, paint, string", '<img title="Transformation Mask" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2024/04/collcon-e1712952058914.jpeg">', "Kwakiutl Tribe (Indigenous American)"),
    new info(165, "Hide Painting of Sun Dance", "1890-1900 C.E.", "painted elk hide", '<img title="Hide Painting of Sun Dance" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/09/resize_formatfull-870x776.jpeg">', "Eastern Shoshone (Indigenous American)", "Cotsiogo"),
    new info(166, "Black-on-black Ceramic Vessel", "mid-1900s C.E.", "blackware ceramic", '<img title="Black-on-black Ceramic Vessel" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/07/1986.213.jpg">', "Tewa (Puebloan) (Indigenous American)", "Maria and Julian Martinez"),
    new info(167, "Conical Tower and Circular Wall of Great Zimbabwe", "1000-1400 C.E.", "coursed granite blocks", '<img title="Conical Tower and Circular Wall of Great Zimbabwe" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.britannica.com/15/153415-050-86C6DBCB/Ruins-Great-Zimbabwe.jpg">', "Shona (African)"),
    new info(168, "Great Mosque of Djenne", "original 1200 C.E., rebuilt 1906-1907 C.E.", "adobe", '<img title="Great Mosque of Djenne" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/2434809322_f76c6575e5_o-1536x775.png">', "Malian (Islamic) (African)"),
    new info(169, "Wall Plaque from Obas Palace", "1500s C.E.", "cast brass", '<img title="Wall Plaque from Obas Palace" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/09/dp295360.jpg">', "Edo (African)"),
    new info(170, "Sika Dwa Kofi (Golden Stool)", "1700 C.E.", "gold and wood", '<img title="Sika Dwa Kofi (Golden Stool)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2018/08/golden-stool-thumb-624x374.jpg">', "Ashanti (African)"),
    new info(171, "Ndop (portrait figure)", "1760-1780 C.E.", "wood", '<img title="Ndop (portrait figure)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/10/61.33_PS2-300x400.jpg">', "Kuba (African)"),
    new info(172, "Power Figure (Nkisi nkondi)", "late 1800s C.E.", "wood and metal", '<img title="Power Figure (Nkisi nkondi)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/11/76.79-S3-2-870x1116.jpeg">', "Kongo (African)"),
    new info(173, "Female (Pwo) Mask", "late 1800s - early 1900s C.E.", "wood, fiber, pigment, metal", '<img title="Female (Pwo) Mask" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://slideplayer.com/slide/14597270/90/images/22/Image+174+Chokwe+Mask-+Female+%28Pwo%29+late+19th+Century.jpg">', "Chokwe (African)"),
    new info(174, "Portrait Mask (Mblo)", "late 1800s - early 1900s C.E.", "wood and pigment", '<img title="Portrait Mask (Mblo)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/07/portrait-copy-300x426.png">', "Baule (African)"),
    new info(175, "Bundu Mask", "1800s-1900s C.E.", "wood, cloth, fiber", '<img title="Bundu Mask" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://ferrelltheafricas.weebly.com/uploads/4/6/2/3/46230375/7311261.jpg?205">', "Sande Society (Mende) (African)"),
    new info(176, "Ikenga (shrine figure)", "1800s-1900s C.E.", "wood", '<img title="Ikenga (shrine figure)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://i.pinimg.com/originals/13/08/76/1308761cecd97ce3308d7110c804d2bf.jpg">', "Igbo (African)"),
    new info(177, "Lukasa (memory board)", "1800s-1900s C.E.", "wood, beads, metal", '<img title="Lukasa (memory board)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/11/Lukasa.jpeg">', "Mbudye Society (Luba) (African)"),
    new info(178, "Aka Elephant Mask", "1800s-1900s C.E.", "wood, woven raffia, cloth, beads", '<img title="Aka Elephant Mask" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/414591.jpeg">', "Bamileke (African)"),
    new info(179, "Reliquary Figure (nblo bieri)", "1800s-1900s C.E.", "wood", '<img title="Reliquary Figure (nblo bieri)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://lopezapah.wordpress.com/wp-content/uploads/2016/01/d71284c1ab658f260dad1fd503c72bd7.jpg">', "Fang (African)"),
    new info(180, "Veranda Post: Equestrian Figure and Female Caryatid", "before 1938 C.E.", "wood and pigment", '<img title="Veranda Post: Equestrian Figure and Female Caryatid" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2019/10/IMG_5717-300x811.jpg">', "Yoruba (African)"),
    new info(181, "Treasury and Great Temple", "400 B.C.E. - 100 C.E.", "cut rock", '<img title="Treasury and Great Temple" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/4790586124_a164ef972a_o-870x579.jpg">', "Nabataean Ptolemaic and Roman"),
    new info(182, "Buddha", "400-800 C.E.", "cut rock with plaster and polychrome paint", '<img title="Buddha" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/abe99a7cd9f2fc955004e0e31161bf3667d86f13.jpg">', "Gandharan"),
    new info(183, "The Kaaba", "631-632 C.E.", "granite masonry, silk curtain, calligraphy in gold and silver-wrapped thread", '<img title="The Kaaba" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/a87f9ad3a188809509494ac76b75cdaebd7cbcc5.jpg">', "Islamic"),
    new info(184, "Jowo Rinpoche", "641 C.E.", "gilt metals with semiprecious stones, pearls, and paint", '<img title="Jowo Rinpoche" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://mhsapah.weebly.com/uploads/6/0/3/6/60360241/published/9094483.jpg?1584666990">', "Yarlung Dynasty (Pre-Imperial Tibet)"),
    new info(185, "Dome of the Rock", "691-692 C.E.", "stone masonry and wooden roof", '<img title="Dome of the Rock" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/7ecffa3a0b263cc617a1829d1ee2f27de80aeb3e.jpg">', "Umayyad (Islamic)"),
    new info(186, "Great Mosque", "700 C.E., additions in 14th, 18th, and 20th centures", "stone, brick, wood, plaster, and glazed ceramic tile", '<img title="Great Mosque" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/a53bb29b94a6b3bd5ad599b3dac1898eef7c8f63.jpg">', "Persian (Islamic)"),
    new info(187, "Folio from a Quran", "8th - 9th century C.E.", "ink color, gold on parchment", '<img title="Folio from a Quran" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/8c740adad9b0ba35163d2ce265b9edb8883d932e.jpg">', "Abbasid (Islamic)"),
    new info(188, "Basin", "1320-1340 C.E.", "brass inlaid with gold and silver", '<img title="Basin" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/basin-141dcc77dd07dd0d3da.png?w=1200">', "Mamluk (Islamic)", "Muhammad ibn al-Zain"),
    new info(189, "Bahram Gur Fights the Karg", "1330-1340 C.E.", "ink, opaque watercolor, gold, and silver on paper", '<img title="Bahram Gur Fights the Karg" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/ad7b3cfdb6d58e41984088cb5f6b8504061deb53.jpg">', "Il-Khanid (Islamic)"),
    new info(190, "The Court of Gaymars", "1522-1525 C.E.", "ink, opaque watercolor, and gold on paper", '<img title="The Court of Gayumars" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2017/01/courtwhole2mb.jpg">', "Safavid (Islamic)", "Sultan Muhammad"),
    new info(191, "The Ardabil Carpet", "1539-1540 C.E.", "silk and wool", '<img title="The Ardabil Carpet" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/96ca4cab58ea7fceff2f0aa60e6b4e12cbb4f683.jpg">', "Safavid (Islamic)", "Maqsud of Kashan"),
    new info(192, "Great Stupa at Sanchi", "300 B.C.E. - 100 C.E.", "stone masonry, sandstone on dome", '<img title="Great Stupa at Sanchi" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.britannica.com/36/155836-050-89E7AA9E/Great-Stupa-Sanchi-India.jpg">', "late Sunga Dynasty (Maurya) (Indian)"),
    new info(193, "Terra Cotta Warriors", "221-209 B.C.E.", "painted terra cotta", '<img title="Terra Cotta Warriors" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2019/08/warriors.jpg">', "Qin Dynasty (Chinese)"),
    new info(194, "Funeral Banner of Lady Dai", "180 B.C.E.", "painted silk", '<img title="Funeral Banner of Lady Dai" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/9aee5797b4a4dc7ffd551739de62ffab7aed18e3.jpg">', "Han Dynasty (Chinese)"),
    new info(195, "Longmen caves", "493-1127 C.E.", "limestone", '<img title="Longmen caves" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.vam.ac.uk/blog/wp-content/uploads/Longmen-grottoes.jpg">', "Tang Dynasty (Chinese)"),
    new info(196, "Gold and Jade Crown", "5th-6th century C.E.", "metalwork", '<img title="Gold and Jade Crown" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/29357ab40d07edd5e95685e3fa6fafa7791daa90.jpg">', "Silla Kingdom (Korean)"),
    new info(197, "Todai-ji", "743 C.E., rebuilt 1700", "bronze and wood with ceramic-tile roofing", '<img title="Todai-ji" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/156b773728b79853552805efd3319bdf819758a0.jpg">', "Japanese", "Unkei, Keikei, and the Kei School"),
    new info(198, "Borobudur Temple", "750-842 C.E.", "volcanic-stone masonry", '<img title="Borobudur Temple" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/lmDPToq-X14W1fPOQTFQ5A.jpg">', "Sailendra Dynasty (Indonesian)"),
    new info(199, "Angkor, Ankgor Wat, Angkor Thom", "800-1400 C.E.", "stone masonry and sandstone", '<img title="Angkor, Ankgor Wat, Angkor Thom" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/7f8faa12e932650a91bc76baa0d7f9b9e37383cf.jpg">', "Angkor Dynasty (Cambodian)"),
    new info(200, "Lakshmana Temple", "930-950 C.E.", "sandstone", '<img title="Lakshmana Temple" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/11/Khajuraho.KandariyaMahadeva-scaled.jpg">', "Chandella Dynasty (Indian)"),
    new info(201, "Travelers among Mountins and Streams", "1000 C.E.", "ink on silk", '<img title="Travelers among Mountins and Streams" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/bfb1f349450b9d1a06c7bce0c47d04234d124bb2.png">', "Song Dynasty (Chinese)", "Fan Kuan"),
    new info(202, "Shiva as Lord of Dance", "11th century C.E.", "cast bronze", '<img title="Shiva as Lord of Dance" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://ka-perseus-images.s3.amazonaws.com/92f80ab3534af89c8c6e8fe7c87d3eb3dcdbcc61.jpg">', "Chola Dynasty (Indian)"),
    new info(203, "Night Attack on the Sanjo Palace", "1250-1300 C.E.", "handscroll: ink and color on paper", '<img title="Night Attack on the Sanjo Palace" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2016/03/leftedge.jpg">', "Kamakura Period (Japanese)"),
    new info(204, "The David Vases", "1351 C.E.", "white porcelain with cobalt-blue underglaze", '<img title="The David Vases" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/e905b5d7cb1544443c760ae2c4cdeb1afc24b7cc.jpg">', "Yuan Dynasty (Chinese)"),
    new info(205, "Portrait of Sin Sukju", "15th century C.E.", "hanging scroll: ink and color on silk", '<img title="Portrait of Sin Sukju" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/c8b3db94dd77fabd932d77e562bacba0492ed346.jpg">', "Korean", "Imperial Bureau of Painting"),
    new info(206, "Forbidden City", "15th century C.E. and later", "stone masonry, marble, brick, wood, ceramic tile",'<img title="Forbidden City" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/e58d6b98b77603806d7fa0e2641236c29f5df3c8.jpg">', "Ming Dynasty (Chinese)"),
    new info(207, "Ryoan-ji", "1480 C.E.", "rock garden", '<img title="Ryoan-ji" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/e93dc6245a0b4bc92bc72c517180f2c296962519.jpg">', "Muromachi Period (Japanese)"),
    new info(208, "Jahangir Preferring a Sufi Shaikh to Kings", "1620 C.E.", "watercolor, gold, and ink on paper", '<img title="Jahangir Preferring a Sufi Shaikh to Kings" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/xr193gxzF8SqotuQVxYaPw.jpg">', "Mughal (Islamic)", "Bichiter"),
    new info(209, "Taj Mahal", "1632-1653 C.E.", "stone masonry, marble, inlay of precious and semiprecious stones", '<img title="Taj Mahal" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/a79b0ada35d989ee1937f865c2216ce50a1b1b33.jpg">', "Indian (Islamic)", "Ahmad Lahori"),
    new info(210, "White and Red Plum Blossoms", "1710-1716 C.E.", "ink, watercolor, and gold leaf on paper", '<img title="White and Red Plum Blossoms" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Ogata_Korin_-_RED_AND_WHITE_PLUM_BLOSSOMS_%28National_Treasure%29_-_Google_Art_Project.jpg">', "Japanese", "Ogata Korin"),
    new info(211, "Under the Wave off Kanagawa", "1830-1833 C.E.", "polychrome woodblock print, ink and color on paper", '<img title="Under the Wave off Kanagawa" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/e6de03da0b29acc1f88649b3344b68eff0c52d99.jpg">', "Japanese", "Katsushika Hokusai"),
    new info(212, "Chairman Mao en Rouote to Anyuan", "1969 C.E.", "color lithograph", '<img title="Chairman Mao en Rouote to Anyuan" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/6ff79c114458e57eccea712844bb59fd555cd1f8.jpg">', "Socialist Realism"),
    new info(213, "Nan Madol", "700-1600 C.E.", "basalt boulders and prismatic columns", '<img title="Nan Madol" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/iR4E-F0Bgdozm61pGpvhkw.jpg">', "Saudeleur Dynasty (Oceanic)"),
    new info(214, "Moai on Platform (ahu)", "1100-1600 C.E.", "volcanic tuff figures on basalt base", '<img title="Moai on Platform (ahu)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/hRadjwJP1voWrvQmj4qgxg.jpg">', "Easter Island (Oceanic)"),
    new info(215, "Ahu Ula", "late 18th century C.E.", "feathers and fiber", '<img title="Ahu Ula" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/295e2b23db21b454f7c03588a0007d2df88a30cf.jpg">', "Hawaiian"),
    new info(216, "Staff God", "late 18th to early 19th century C.E.", "wood, tapa, fiber, feathers", '<img title="Staff God" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/cf1b072614dba4414363260b4ffedb3526f3754b.jpg">', "Rarotonga (Oceanic)"),
    new info(217, "Female Deity", "18th - 19th century C.E.", "wood", '<img title="Female Deity" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/2c7a51ae2586ca28591a5bca8b2961e966e09fc1.jpg">', "Nukuoro (Oceanic)"),
    new info(218, "Buk Mask", "mid to late 19th century C.E.", "turtle shell, wood, fiber, feathers, shell", '<img title="Buk Mask" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://live.staticflickr.com/367/19594520586_6d0f6b60bd_b.jpg">', "Torres Strait (Oceanic)"),
    new info(219, "Hiapo (tapa)", "1850-1900 C.E.", "tapa or bark cloth, freehand painting", '<img title="Hiapo (tapa)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/08/crop-copy-870x692.jpg">', "Niue (Oceanic)"),
    new info(220, "Tamati Waka Nene", "1890 C.E.", "oil on canvas", '<img title="Tamati Waka Nene" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/939ce0881b5ad7a80ec80b90763d4b2f66401fe5.jpg">', "New Zealand/Czech (Oceanic)", "Gottfried Lindauer"),
    new info(221, "Navigation Chart", "19th - early 20th century C.E.", "wood and fiber", '<img title="Navigation Chart" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/11/102093001.jpg">', "Marshall Islands (Oceanic)"),
    new info(222, "Malagan Mask", "20th century C.E.", "wood, pigment, fiber, shell", '<img title="Malagan Mask" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2017/03/lacmamalagansm.jpg">', "Papuan (Oceanic)"),
    new info(223, "Presentation of Fijian Mats and Tapa Cloths to Queen Elizabeth II", "1953 C.E.", "multimedia performance", '<img title="Presentation of Fijian Mats and Tapa Cloths to Queen Elizabeth II" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2022/07/Fiji-1.png">', "Fijian (Oceanic)"),
    new info(224, "The Gates", "1979-2005 C.E.", "mixed-media installation", '<img title="The Gates" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/d4b6c9cf5bc9bf3182c7fbdf9450a19fcce91591.jpg">', "Site-Specific Art", "Christo and Jeanne-Claude"),
    new info(225, "Vietnam Veterans Memorial", "1982 C.E.", "granite", '<img title="Vietnam Veterans Memorial" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://www.tclf.org/sites/default/files/styles/crop_2000x700/public/thumbnails/image/Washington_DC_VietnamVeteransMemorial_byCharlesABirnbaum_25042020_012_Hero.jpg?itok=T25dcXpX">', "Modernism Architecture", "Maya Lin"),
    new info(226, "Horn Players", "1983 C.E.", "acrylic and oil paintstick on three canvas panels", '<img title="Horn Players" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/255828afaa0623ef17cc054f58bc3f19e2b45f35.jpg">', "Neo-Expressionism", "Jean-Michel Basquiat"),
    new info(227, "Summer Trees", "1983 C.E.", "ink on paper", '<img title="Summer Trees" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/ef5353d488112330d81998bf369f78419f2d5ad7.jpg">', "Post-Modernism", "Song Su-nam"),
    new info(228, "Androgyn III", "1985 C.E.", "burlap, resin, wood, nails, string", '<img title="Androgyn III" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/05/1_Oj1eY09ziYuBLF80ixjgvg.jpeg">', "Neo-Expressionism", "Magdalena Abakanowicz"),
    new info(229, "A Book from the Sky", "1987-1991 C.E.", "mixed-media installation", '<img title="A Book from the Sky" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://blantonmuseum.b-cdn.net/app/uploads/2024/11/2016-3-2048x1367-1.jpeg">', "Post-Modernism", "Xu Bing"),
    new info(230, "Pink Panther", "1988 C.E.", "glazed porcelain", '<img title="Pink Panther" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://o.quizlet.com/.3GSBBOm-HkGVhDcbOP0IA.jpg">', "Post-Modernism", "Jeff Koons"),
    new info(231, "Untitled #288", "1990 C.E.", "photograph", '<img title="Untitled #288" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/b45d15be6aff5c9b92d100328ebb91daf3355764.jpg">', "Feminist Art", "Cindy Sherman"),
    new info(232, "Dancing at the Louvre", "1991 C.E.", "acrylic on cavas, tie-dyed, pieced fabric border", '<img title="Dancing at the Louvre" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/a712b021a291a2a4e897f3febaabb29c3d4eb36c.jpg">', "Feminist Art", "Faith Ringgold"),
    new info(233, "Trade", "1992 C.E.", "oil and mixed media on canvas", '<img title="Trade" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/f2e555a5c1dcd6a1e38c8f955b867565289b4e5a.jpg">', "Post-Modernism", "Jaune Quick-to-See Smith"),
    new info(234, "Earths Creation", "1994 C.E.", "Synthetic polymer paint on canvas", '<img title="Earths Creation" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/4580d01c6efe90841f714caf2234ace49b300610.jpg">', "Post-Modernism", "Emily Kame Kngwarreye"),
    new info(235, "Rebellious Silence", "1994 C.E.", "ink on photograph", '<img title="Rebellious Silence" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/913dd65924eee2d61a0fbdfa1736b095fd666922.jpg">', "Post-Modernism", "Shirin Neshat (artist) and Cynthia Preston (photographer)"),
    new info(236, "No Crying Allowed in the Barbershop", "1994 C.E.", "mixed-media installation", '<img title="No Crying Allowed in the Barbershop" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.theatlantic.com/thumbor/6VD5_iSl-ybWNJWwbJMhRj6kSpg=/300x450/media/img/posts/2016/01/Osorio_No_Crying_Allowed_in_the_Barber_Shop_1994_C/original.jpg">', "Post-Modernism", "Pepon Osoria"),
    new info(237, "Pisupo Lua Afe (Corned Beef 2000)", "1994 C.E.", "mixed media", '<img title="Pisupo Lua Afe (Corned Beef 2000)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/afb3f946208aa502d7bd09a0832e646730f86d61.jpg">', "Post-Modernism", "Michel Tuffery"),
    new info(238, "Electronic Superhighway", "1995 C.E.", "mixed-media installation", '<img title="Electronic Superhighway" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2018/08/Nam-June-Palk-Electronic-Superhighway-thumb-624x374.jpg">', "Video Art", "Nam June Paik"),
    new info(239, "The Crossing", "1996 C.E.", "video/sound installation", '<img title="The Crossing" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/f7c31682799f3c2170e6371f596ab87823dbd580.jpg">', "Video Art", "Bill Viola"),
    new info(240, "Guggenheim Museum Bilbao", "1997 C.E.", "titanium, glass, and limestone", '<img title="Guggenheim Museum Bilbao" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/d04ff2e23a2cf4eb4a43b88126b769047b8c950e.jpg">', "Post-Modernism Architecture", "Frank Gehry"),
    new info(241, "Pure Land", "1998 C.E.", "photograph on glass", '<img title="Pure Land" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/01c0906958369360f3fab013d7cdcaf1288b251e.jpg">', "Post-Modernism", "Mariko Mori"),
    new info(242, "Lying with the Wolf", "2001 C.E.", "ink and pencil on paper", '<img title="Lying with the Wolf" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/cbf0b1066cb22b89d89d23428074c980c5ff00be.jpg">', "Post-Modernism", "Kiki Smith"),
    new info(243, "Darkytown Rebellion", "2001 C.E.", "cut paper and projection on wall", '<img title="Darkytown Rebellion" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/923fe5f82db7f01f2d2a19ac8d39da7b9869c453.jpg">', "Post-Modernism", "Kara Walker"),
    new info(244, "The Swing (after Fragonard)", "2001 C.E.", "mixed-media installation", '<img title="The Swing (after Fragonard)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-perseus-images/2e0ec78df088af627f63280d32e8bf097a3fc37f.jpg">', "Post-Modernism", "Yinka Shonibare"),
    new info(245, "Old Mans Cloth", "2003 C.E.", "aluminum and copper wire", '<img title="Old Mans Cloth" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://live.staticflickr.com/2857/33690213135_2d09fd79d0_b.jpg">', "Post-Modernism", "El Anatsui"),
    new info(246, "Stadia II", "2004 C.E.", "ink and acrylic on canvas", '<img title="Stadia II" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://cdn.kastatic.org/ka-content-images/30956cd2e258a937c85dcc26e78017b7d2830df2.jpg">', "Post-Modernism", "Julie Mehretu"),
    new info(247, "Preying Mantra", "2006 C.E.", "mixed media on Mylar", '<img title="Preying Mantra" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/04/389.736.jpg">', "Post-Modernism", "Wangechi Mutu"),
    new info(248, "Shibboleth", "2007-2008 C.E.", "installation", '<img title="Shibboleth" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/03/2342599776_606c5c70f2_o.jpg">', "Post-Modernism", "Doris Salcedo"),
    new info(249, "MAXXI Naational Museum of XXI Century Arts", "2009 C.E.", "glass, steel, and cement", '<img title="MAXXI Naational Museum of XXI Century Arts" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://images.adsttc.com/media/images/5012/0d42/28ba/0d55/8100/03bf/large_jpg/stringio.jpg?1413944091">', "Post-Modernism Architecture", "Zaha Hadid"),
    new info(250, "Kui Hua Ai (Sunflower Seeds)", "2010-2011", "sculpted and painted porcelain", '<img title="Kui Hua Ai (Sunflower Seeds)" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="https://smarthistory.org/wp-content/uploads/2023/04/5391444478_5f58318cc0_4k.jpg">', "Post-Modernism", "Ai Weiwei")
];

let terms = [
    new def("profile", "a view of an object or person from the side"),
    new def("twisted perspective", "part of a figure is shown in profile and another part of the same figure is shown frontally"),
    new def("representational/figurative", "clearly derived from real objects or sources"),
    new def("positive space", "area where there is mass and subject"),
    new def("negative space", "area that is void of mass"),
    new def("superimposed", "when one painting is painted over another, not necessarily at the same time"),
    new def("naturalism", "attempting to portray objects from everyday life as they are"),
    new def("shamanism", "religious belief that maintains a shaman can interact with nature to affect positive outcomes"),
    new def("found object", "an object discovered by an artist and used for art"),
    new def("sculpture in the round", "sculpture that can be seen from all sides and is not affixed"),
    new def("stylization", "a deliberate departure from naturalistic representation"),
    new def("beaker/bushel", "cylindrical earthenware pot"),
    new def("ground line", "horizontal line indicating ground space that figures are rooted upon"),
    new def("terra cotta", "a hard, ceramic clay used for building or pottery"),
    new def("anthropomorphic", "having human characteristics without the form itself being human"),
    new def("stele", "upright stone slab, often to mark a grave or site"),
    new def("cong", "a tubular object with a circular hole cut into it in the middle"),
    new def("henge", "a neolithic monument characterized by a circular ground plan of stone; commonly used for rituals and marking astronomical events"),
    new def("megalith/monolith", "a large, single piece of stone used in large stone structures"),
    new def("mortise and tenon", "architectural joint: tenon (tongue) is inserted into the mortise (hole) and is cut to fit the hole exactly"),
    new def("post and lintel", "architecture structure in which two or more vertical elements (posts) support and are capped by a horizontal element (lintel)"),
    new def("incise", "to cut into a surface with a sharp instrument"),
    new def("low relief", "carvings that project very slightly from the background they are on"),
    new def("historical narrative", "story or sequence of events that is (or purports to be) historically accurate"),
    new def("mastaba", "simple tomb with four sloping sides that cover an underground burial chamber"),
    new def("load-bearing construction", "active elements of the building that hold the weight of what is placed above"),
    new def("necropolis", "a complex of funerary buildings or large burial area"),
    new def("sphinx", "Egyptian hybrid animal with the body of a lion and head of a pharaoh or god that exhibits protective qualities"),
    new def("living rock", "rock that is not detached and still in iArtwork that is created and exists in the original place where the materials were found"),
    new def("high relief", "carvings that greatly project from the background they are on"),
    new def("subtractive sculpting", "sculptural process including the removal of material of a block"),
    new def("canon of proportions", "a system of measurements by which artists can regulate size, scale, and proportions"),
    new def("colonnade", "a long row of columns joined by their entablature"),
    new def("portico", "a shallow columned porch"),
    new def("axial plan", "a building with an elongated floor plan"),
    new def("corridor axis", "a long hallway or path enclosed by large stone masonry"),
    new def("pylon", "the simple and massive gateway with sloping walls of an Egyptian temple"),
    new def("hypostle hall", "a hall with a roof supported by multiple columns"),
    new def("clerestory", "a roof that rises above lower roofs to create room for light to enter"),
    new def("capital", "the top of a column"),
    new def("amarna style", "an artistic style during the amarna period, akhenaton's rule, where traditional Egyptian conventions for a more expressive style of art"),
    new def("sunken relief", "a type of relief carving where all lines are made into the surface, so that the design is set into the material"),
    new def("ankh", "Egyptian symbol of life"),
    new def("crook and flail", "Egyptian symbols of kingship"),
    new def("enamel", "melted and fused glass powder mixed with pigment to create color that was smooth once cooled"),
    new def("tuscan", "an order of architecture originating with the Etruscans featuring slender, smooth wooden columns on simple bases"),
    new def("acroterion", "a sculpture in the round placed on a roof"),
    new def("fresco", "a painting technique involving applying fresh paint onto a freshly plastered wall so it is durable and long-lasting"),
    new def("triclinium", "a dining table in ancient Rome for reclining at meals"),
    new def("tufa", "a type of limestone"),
    new def("tumulus", "burial mounds in Etruscan architecture covering one or more subterranean multi-chambered tombs cut out of local tufa"),
    new def("kouros", "an Archaic Greek nude sculpture of an idealized male youth"),
    new def("encaustic", "pigment mixed with wax"),
    new def("peplos", "a garment worn by women in Ancient Greece, usually full length and tied at the waist"),
    new def("kore", "an Archaic Greek sculpture of an idealized female youth (never nude)"),
    new def("contrapposto", "an arrangement of the body based on tilted shoulders, hips, and bent knees resulting in an uneven distribution of weight"),
    new def("panathenaic way", "a ceremonial road for a procession built to honor Athena"),
    new def("agora", "an open square or space used for public meetings or business in Ancient Greece"),
    new def("acropolis", "a rugged rock that is the site of the city's most important temple(s)"),
    new def("order", "a style with characteristic designs of columns and entablature"),
    new def("pediment", "triangular top of a classical building above entablature"),
    new def("cornice", "the edging around the pediment"),
    new def("frieze", "a horizontal band of decoration"),
    new def("stylobate", "floor of a temple"),
    new def("fluted shaft", "shallow vertical grooves running along the body of a column"),
    new def("peristyle", "a colonnade around all four sides of a building"),
    new def("peripteral", "a building with a peristyle"),
    new def("cella", "main shrine room of a temple where a cult statue is housed"),
    new def("wet drapery", "deeply incised drapery on female figures that is tight and clingy to reveal the shape of the nude body"),
    new def("isocephalism", "depicting heads of figures on the same level, implying a single ground line"),
    new def("amphiprostyle", "having four columns in both the front and the rear of the temple"),
    new def("parapet", "low protective wall or barrier"),
    new def("krater", "a large Ancient Greek bowl used for mixing water and wine"),
    new def("kiln", "an oven used for making pottery by firing clay at tremendously hot temperatures"),
    new def("black figure technique", "black figures on red background"),
    new def("red figure technique", "red figures on black background"),
    new def("gigantomachy", "battle between gods and giants in Greek mythology"),
    new def("patrician", "a Roman artistocrat or nobleman, often a senator"),
    new def("bust", "a sculpture depicting a head, neck, and upper chest"),
    new def("mosaic", "decoration using small pieces of stone, marble, or glass that are cemented to a wall or floor"),
    new def("tesserae", "small pieces of colored stone, marble, or glass used in a mosaic"),
    new def("modeling", "using light and shadow to show roundness, volume, and 3-dimensionality"),
    new def("orthogonal", "a straight line emanating from the vanishing point"),
    new def("vanishing point", "a point in the picture plane where all orthogonals intersect"),
    new def("horizon line", "a horizontal line at eye level where sky meets land"),
    new def("linear perspective", "creating the illusion of space, depth, and distance in an image"),
    new def("foreshortening", "a visual effect in which an object is turned deeper into the picture plane to give the effect of receding into space"),
    new def("atmospheric perspective", "the effect the atmosphere has on an object's appearance as it is viewed from a distance"),
    new def("arcade", "a row of arches"),
    new def("engaged column", "a column still attached to the wall on the back side"),
    new def("keystone", "the center, topmost stone of an arch that holds the others in place"),
    new def("barrel vault", "an arch that is horizontally extended into space and curved at the top"),
    new def("groin vault", "two intersecting barrel vaults"),
    new def("vault", "a ceiling that is constructed with arches and is not flat"),
    new def("forum", "a public square with a marketplace in a Roman city"),
    new def("basilica", "an axially planned building with a long nave, side aisles, and apses"),
    new def("taberna", "single-room shops with wide doorways"),
    new def("oculus", "a round opening at the top of a dome"),
    new def("dome/cupola", "a rounded, circular roof achieved by rotating an arch 180 degrees"),
    new def("coffers", "a sunken panel in a ceiling to lighten the weight of the ceiling"),
    new def("catacomb", "underground passageways used for burials"),
    new def("cubicula", "small underground rooms in catacombs serving as mortuary chapels"),
    new def("lunette", "crescent-shaped space, sometimes over a doorway, that contains sculpture or painting"),
    new def("orant figure", "a figure with its hands raised in prayer"),
    new def("apse", "the endpoint of a church where the altar is located"),
    new def("nave", "the main aisle of a church"),
    new def("clerestory", "the top of a church nave that is windowed to let in light"),
    new def("selenite", "a transparent, colorless gypsum that looked like glass and was used in windows"),
    new def("spandrel", "a triangular space enclosed by curves of arches"),
    new def("spolia", "the reuse of architectural or sculptural pieces in buildings different from their original context"),
    new def("animal style", "a medieval art form where animals are depicted in a stylized and complicated pattern, usually fighting one another"),
    new def("fibula", "a clasp and pin used to fasten garments"),
    new def("art of the migration", "artwork of the Germanic peoples from 300-900 CE"),
    new def("carpet page", "when flat geometric decorative designs cover the whole page of a manuscript"),
    new def("cross-carpet page", "a carpet page that includes a cross"),
    new def("codex", "a manuscript in book form"),
    new def("gospels", "first four books of the new testament(Matthew, Mark, Luke, John) that chronicle the life of Jesus"),
    new def("interlacing", "a decorative element found in early Medieval art that involved the crossing or weaving of visual elements"),
    new def("horror vacui", "filling an entire surface with detail (fear of empty space)"),
    new def("incipit", "the opening words for a book or text"),
    new def("stigmata", "the holes in Christ's hands from being crucified"),
    new def("andachtsbild", "a devotional image that aids in prayer"),
    new def("the virgin mary mourning and cradling the dead body of Christ"),
    new def("asceticism", "a religious life of deprivation in order to achieve greater spirituality"),
    new def("passover", "Commemorates the exodus of Jews from Egypt under Moses’ leadership"),
    new def("seder", "Ceremonial meal that retells the story of Passover using the Haggadah"),
    new def("haggadah", "a book containing the Jewish story of Passover and the ritual of the Seder"),
    new def("typology", "interpretation of stories and symbols in the Bible, especially the relationship between Old and New Testament to illustrate that the Old Testament foreshadowed Christ"),
    new def("buon fresco", "wet fresco (true fresco) where paint is applied while plaster is still wet"),
    new def("tempera", "pigment mixed with egg yolk, has an opaque, chalky color and dries quickly"),
    new def("giornata", "used in buon fresco painting to reveal how much an artist can do while limited by the amount of fresh plaster applied"),
    new def("balustrade", "a railing supported by balusters (molded shafts); typical ornamental on a balcony, bridge, or terrace"),
    new def("baroque classicism", "a style within the Baroque period that purposefully recalls art from ancient Greece and Rome"),
    new def("decorative program", "a work of art with multiple components, panels, or images that all are united through subject matter"),
    new def("di sottu in su", "ceiling paintings seem to be hovering above the viewers; space moves vertically"),
    new def("gestural", "vigorous application of paint where the movements of the artist’s hand are visible"),
    new def("impasto", "thick and very visible application of paint on the painting surface"),
    new def("painterly", "the look of a painting with thick vigorously applied paint"),
    new def("radical naturalism", "everyday characteristics; figures are not ennobled; they are gritty, dirty, realistic"),
    new def("rosette", "rose-shaped decoration"),
    new def("tenebrism", "a dramatic dark and light contrast in a painting"),
    new def("trompe l'oeil", "artwork that is painted illusionistically to trick the viewer into thinking it is real"),
    new def("biombo", "Latin American colonial folding screen"),
    new def("enconchado", "placing tiny fragments of mother-of-pearl or other shell onto a wooden support or canvas, and then covering with thin glazes of paint"),
    new def("lacquer", "clear, thick, and highly glossy wood finish that dries clear"),
    new def("camera obscura", "a lens projects an image on a wall of a box; used by artists as an aid in drawing from nature"),
    new def("grench garden", "style of gardening that promoted a controlled and constructed look to show how man can manipulate nature to match his will"),
    new def("grand manner", "art that is painted with grandiose subjects, such as battles, royalty, heroic actions, or religious or classical themes"),
    new def("memento mori", "artistic or symbolic reminders of mortality"),
    new def("vanitas", "a type of symbolism used to indicate vanity, futility, and human excess"),
    new def("classicists", "artists who believed in subdued painting, with a controlled use of line"),
    new def("naturalists", "artists who believed in intense imagery, with a dramatic use of color"),
    new def("poussinistes", "argue for a linear rationalism"),
    new def("rubenistes", "valued evocative and dramatic colors"),
    new def("altarpiece", "a painted and/or sculpted panel set on an altar of a church or a private space"),
    new def("disguised symbolism", "commonplace objects full of religious significance"),
    new def("donor", "a patron of a work of art who are often seen in the work they commissioned"),
    new def("iconography", "identification and interpretation of symbols or objects within an image"),
    new def("glazes", "thin transparent layers placed over a painting to alter how colors appear"),
    new def("oil paint", "pigment mixed with oil, which dries slowly allowing for easier corrections and additions, fine detail, and vibrant color"),
    new def("triptych", "a three-paneled painting or altarpiece"),
    new def("wet-in-wet", "painting technique where layers of wet paint are applied to previously administered layers allowing the artist to mix colors on the canvas and create glazes"),
    new def("burin", "a steel-cutting tool that is used to make engravings"),
    new def("genre scene", "painting in which scenes of everyday life are shown"),
    new def("polyptych", "an altarpiece that consists of more than three leaves or panels"),
    new def("predella", "a decorative platform at the bottom of the altarpiece that is often painted"),
    new def("swoon of the virgin", "popular image of a fainting Mary during the Crucifixion and Deposition"),
    new def("chapter house", "a building next to a church used for clergy meetings"),
    new def("chiaroscuro", "use of strong contrasts between light and dark, typically for modeling"),
    new def("cloister", "a rectangular open-air monastery courtyard with a covered arcade surrounding it"),
    new def("heroic nudity", "a figure's nudity is an indication of its status as hero or semi-divine being"),
    new def("humanism", "an emphasis on education and on expanding knowledge, exploration of individual potential, commitment to civic responsibility and moral duty"),
    new def("medici", "Florentine family of bankers and moneylenders who were major patrons of Florentine art"),
    new def("piano nobile", "principle or main floor in a house"),
    new def("pietra serena", "grey stone typical of Italian Renaissance churches"),
    new def("pilasters", "flattened columns that are attached to a wall that serve no structural purpose and are simply decorative"),
    new def("rusticated", "deeply and roughly incised stone to create a rough appearance and texture"),
    new def("stringcourse", "a raised horizontal band on a building that visually denotes floors"),
    new def("canvas", "heavy woven material which is used as the surface for a painting"),
    new def("figura serpentinata", "Latin for serpentine figure, a spiral pose used in Mannerist art"),
    new def("fresco secco", "dry fresco: paint is applied when plaster is dry; not durable but artist can take time"),
    new def("grisailles", "a method of painting in gray monochrome, typically done as a early layer in oil painting to help create modeling"),
    new def("ignudi", "nude corner figures on the Sistine Chapel ceiling"),
    new def("mannerism", "a style of European art characterized by elongation, artifice, tension, and instability"),
    new def("quadro riportato", "used in art to describe paintings that are seen in a normal perspective and painted into a fresco"),
    new def("refectory", "dining rooms, particularly in monasteries"),
    new def("sfumato", "forms are rendered subtly with a misty or smoky effect"),
    new def("sibyl", "Ancient Pagan soothsayers who can see the future and foretell the coming of Christ"),
    new def("two-point perspective", "a mathematical way of rendering space that utilizes two vanishing points"),
    new def("casta painting", "Latin American colonial painting detailing the existing mixed-race population"),
    new def("conversation piece", "an informal group portrait which showcased genteel sophisticated activities"),
    new def("creole", "European born in the New World"),
    new def("escudo", "a framed painting worn below the neck in a colonial Spanish painting"),
    new def("exemplum virtutis", "a painting that tells a moral tale for the viewer"),
    new def("fasces", "a bundle of rods, originally from Ancient Rome, that were symbol of power and unity"),
    new def("fete galante", "type of Rococo painting depicting the outdoor amusements of upper-class society"),
    new def("grand manner portraiture", "portrait painting designed to communicate a person's grace and class through certain standardized conventions"),
    new def("huipl", "traditional woman's garment worn by indigenous women from central America"),
    new def("intrigue painting", "secret planning of something illicit or a clandestine love affair"),
    new def("jeronymite", "a religious order that bases their Christian lives after St. Jerome"),
    new def("mestizo", "a person born of a Spanish father and an indigenous mother"),
    new def("orrery", "a mechanical model of the solar system"),
    new def("salon", "formal art exhibition organized by the French Academie"),
    new def("satire", "use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices"),
    new def("still life", "a work of art depicting mostly inanimate subject matter"),
    new def("allegory", "a pictorial device intended to reveal a larger moral or political idea"),
    new def("burnishing", "a technique where a printmaker uses a burnisher to rub a metal plate"),
    new def("daguerreotype", "a type of early photograph with a shiny surface and no negatives"),
    new def("drypoint", "an artist scratches directly into the surface of the plate with a stylus with pressure, resulting in jagged, uneven lines and texture around indentations"),
    new def("gothic revival/neo-gothic", "19th century architectural movement to revive medieval Gothic architecture"),
    new def("hammerbeam roof", "a decorative open timber roof typical of English Gothic architecture"),
    new def("hudson river school", "New York City-based landscape painters under the influence of Thomas Cole"),
    new def("manifest destiny", "19th-century American attitude which maintained that the United States not only could, but was destined to, stretch from coast to coast"),
    new def("odalisque", "woman in a harem"),
    new def("orientalism", "imitation, interest in, or depictions of Middle Eastern, South Asian, and East Asian cultures"),
    new def("pinnacle", "Gothic architectural ornament consisting of a small tower that was placed at the corners of larger towers"),
    new def("sublime", "inspiring great admiration, or awe in the extraordinary, powerful, and dramatic"),
    new def("art deco", "sought to upgrade industrial design in competition with “fine art” and to work new materials into decorative patterns that could be either machined or handcrafted; characterized by streamlined, elongated, and symmetrical design"),
    new def("woodprint/woodcut", "a printmaking technique where an image is created by carving a design into a block of wood, leaving the raised areas to be inked and printed, while recessed areas remain blank"),
    new def("albumen print", "egg white (albumen) and salt cover a piece of paper, are coated with silver nitrate, placed against a dry-glass plate, then exposed to light, which transfers the image from the plate to the paper"),
    new def("aquatint", "a variant of etching, that creates tonal areas rather than lines, often resembling watercolor washes"),
    new def("etching", "acid or other corrosive chemicals are used to create lines or marks on a metal plate which is then used for printmaking"),
    new def("engraving", "a design is incised into a metal plate, then ink is applied to the plate to transfer the design to paper"),
    new def("art for art's sake", "expressed the inherent value in art, even if it lacks a moral, historical, or didactic message"),
    new def("art nouveau", "an art style focused on utilizing decorative and natural, organic forms to create elegant and curvilinear designs"),
    new def("avant-garde", "an innovative group of artists who generally rejected traditional approaches in favor of experimentation"),
    new def("chicago style", "a style of architecture that promoted new technologies (like steel-frame construction) and an aesthetic that was simple, grid-like and lacked ornamentation"),
    new def("collodion method", "a wet-plate photography technique that took a glass plate and applied light-sensitive collodion, allowing for short exposure times, but had to be developed when collodion was wet"),
    new def("dry glass plate method", " a photography technique that took a glass plate and applied light-sensitive gelatin onto it that could still be developed while gelatin dried"),
    new def("fenestration", "the arrangement of doors and windows on the elevation of a building"),
    new def("form follows function", "the function of the building should determine its design, rather than a building’s design that corresponded to architectural tradition"),
    new def("haussmanization of paris", "urban development in Paris that included widening and beautifying boulevards, fenestrating buildings, modern bridges, and train stations"),
    new def("japonisme", "attraction to and interest in Japanese art that was imported into Europe in the late 19th century, influenced Impressionists"),
    new def("lithograph", "prints created by drawing an image on a flat stone or metal plate, where grease and water repel, allowing ink to adhere only to the drawn image areas"),
    new def("pastiche", "an artistic work that imitates that of another artist, work, time period, culture or style"),
    new def("plein-air", "painting in the outdoors; allowed artists to capture effects of light and atmosphere more accurately; practiced by Impressionists"),
    new def("skeleton", "supporting interior framework of a building"),
    new def("synesthesia", "utilizing one sense causes a sensation with another"),
    new def("toilette", "a woman doing her hair and makeup; common Old Master painted subjects"),
    new def("zoetrope", "a cheaper version of a zoopraxiscope that could be purchased from a magazine included instructions for assembling it"),
    new def("zoopraxiscope", "a device that projects sequences of photographs to give the illusion of movement"),
    new def("adobe", "clay and straw that is sun-baked"),
    new def("aka", "an elephant mask of the Bamileke people in Cameroon"),
    new def("bilongo", "medicinal materials added to the stomach of a nkisi n’kondi figure"),
    new def("bundu", "masks used by the Sande Society of the Mende peoples to initiate girls into puberty"),
    new def("byeri", "a reliquary guardian figure of the Fang peoples in Cameroon"),
    new def("heraldic composition", "a central larger figure is flanked on either side by lesser figures"),
    new def("ikenga", "a shrine figure symbolizing traditional male attributes of the Igbo people of Nigeria"),
    new def("kuosi society", "Bamileke nobility and court officials"),
    new def("lost-Wax Casting", "a duplicate sculpture made of metal is cast from an original sculpture by melting out a was pattern and filling the mold with molten metal"),
    new def("lukasa", "a memory board used by the Luba people of the Congo"),
    new def("mblo", "a commemorative portrait of the Baule peoples in Côte d’Ivoire"),
    new def("mooya", "Kongo term for belly; believed to be the focal point for the soul"),
    new def("ndop", "a Kuba commemorative portrait of a king in an ideal state from the Congo"),
    new def("nganga", "ritual specialist and artist of nkisi n’kondi figure"),
    new def("nkisi n’kondi", "a Kongo power figure"),
    new def("nsek-byeri", "container or box that Fang ancestral remains were carried in; byeri protects this box"),
    new def("pwo", "a female mask worn by men of the Chokwe people from the Congo to honor mothers"),
    new def("talisman", "intended to ward off evil with supernatural properties, or bring good luck"),
    new def("torons", "wooden beams projecting from walls of adobe buildings"),
    new def("veranda post", "vertical sculpture originally intended to be among structural posts of a palace porch"),
    new def("contour rivalry", "A deliberately complex visual style with overlapping lines and contours"),
    new def("pueblo", "communal village of flat-roofed structures"),
    new def("kiva", "circular sunken plaza in a pueblo"),
    new def("roof comb", "wall rising from the center or front of a building to give the appearance of greater height"),
    new def("earthwork", "art made of earth, located in nature and made into decorative or representational shapes"),
    new def("effigy", "sculpture or model of a person or animal"),
    new def("amanteca", "Aztec feather workers that were highly regarded and extremely skilled"),
    new def("maize", "corn that was more often blue or red, the most important crop to the Inca"),
    new def("repousse", "metal is beaten with differently shaped tools from one side to leave raised designs on the other side"),
    new def("terraces", "flat arable land cut into cliffsides to make small garden beds"),
    new def("t'oqapu", "square geometric motif that symbolizes a particular noble family or clan"),
    new def("codex", "a handmade manuscript or book"),
    new def("bandolier bag", "a large, heavy beaded pouch that crosses the body"),
    new def("seed beads", "small glass beads prized for their brilliant color"),
    new def("formline style", "style of Northwest coastal Native American culture: bilaterally symmetrical masks with thick, undulating black lines and ovoid shapes"),
    new def("potlach", "a Kwakwaka'wakw dance and ceremony performed by firelight by initiated men"),
    new def("san ildefonso", "neolithic puebloan ceramic style"),
    new def("daibutsu", "Japanese term for “giant Buddha”"),
    new def("emaki", "illustrated handscroll in Japan from the 11th-16th centuries"),
    new def("kondo", "a hall used for Buddhist teachings"),
    new def("nio", "aggressive Buddhist guardian deities who protect Buddhist temples"),
    new def("otoko-e", "military rule during Japanese shogunate led to interest in military scenes"),
    new def("tarashikomi", "Japanese painting technique in which paint is applied to a surface that has not already dried"),
    new def("ukiyo-e", "17th-19th century woodblock prints popular in the West that typically showed genre scenes"),
    new def("yamato style", "Japanese handscroll style characterized by stylized figures with simple faces and the use of bright pigments; often illustrated with an aerial view"),
    new def("zen", "branch of Japanese Buddhism that teaches fulfillment through introspection, meditation, gardening, and tea drinking"),
    new def("bi", "round ceremonial disk found in ancient Chinese tombs characterized by having a circular hole in the center, which may have symbolized heaven"),
    new def("bodhisattva", "a Buddhist deity who, choosing not to pass on to nirvana, remains to help others"),
    new def("daoism", "a philosophical belief that stresses individual expression and a striving for balance, particularly with individuals and nature"),
    new def("landscape", "picture showing natural scenery, without narrative content"),
    new def("literati", "sophisticated and scholarly group of Chinese artists who painted for themselves rather than fame or patrons; often became recluses and left urban life for nature"),
    new def("lokapala", "heavenly kings who watch over one of each of the cardinal directions"),
    new def("porcelain", "ceramic made from clay that when fired in a kiln produces a product that is hard, white, brittle, and shiny"),
    new def("socialist realism", "characterized by the glorified depiction of communist values or leaders and executed in a realistic manner"),
    new def("vajrapani", "Buddhist guardian figures, highly muscular, with thunderbolts"),
    new def("yin and yang", "Daoist concept of complementary opposites"),
    new def("rank badge", "symbol or insignia that indicates the military or political status of the wearer"),
    new def("sinification", "spread, expansion, and adoption of Chinese culture, politics, language, etc."),
    new def("ashlar masonry", "carefully cut and grooved stones that support a building without the use of concrete or other kinds of masonry"),
    new def("axis-mundi", "axis that connects heaven and earth"),
    new def("buddha", "founder of Buddhism; multiple forms; has achieved full enlightenment"),
    new def("caravanserai", "roadside inns and towns along trade routes; often sites of cultural diffusion and exchange"),
    new def("corbelled arch", "constructed by offsetting successive courses of stone so that they project towards the archway's center from each supporting side, until the courses meet at the apex of the archway"),
    new def("embryo room", "the central most room in an Hindu shrine that houses the deity statue and is believed to be the deity's dwelling place"),
    new def("gandharan", "diverse culture that emerged in Afghanistan influenced by Greek empire, Buddhism, and Indian kingdoms"),
    new def("maithuna", "depictions of couples explicitly engaged in sexual intercourse"),
    new def("nimbus", "circle or oval shape surrounding a religious figure, representing spiritual light or glory"),
    new def("panchayatana", "Hindu temple where the main shrine is surrounded by four smaller shrines"),
    new def("shiva", "Hindu god of destruction"),
    new def("stupa", "dome-shaped Buddhist shrine"),
    new def("tantric", "often used to describe deeply meditative and intimate sexual activity (transcendence)"),
    new def("torana", "gateway near a stupa that has two upright posts and three horizontal lintels, usually elaborately carved"),
    new def("urna", "red dot on the forehead of Buddhist figures"),
    new def("ushnisha", "top-knot on the top of Buddha's head that references a humble crown"),
    new def("vairocana", "the universal Buddha, a source of enlightenment"),
    new def("vishnu", "Hindu god of preservation"),
    new def("wat", "buddhist monastey or temple in Cambodia"),
    new def("yakshi", "male and female fertility figures in Buddhist and Hindu art"),
    new def("hajj", "Islamic pilgrimage to Mecca that is required according ot the 5 pillars of Islam"),
    new def("kiswa", "black silk curtain that covers the Kaaba and is replaced yearly"),
    new def("mosque", "muslim house of worship"),
    new def("qiblah wall", "wall that identifies the direction towards Mecca which Muslims face in prayer"),
    new def("mihrab", "empty arch on the qiblah wall that Muslims pray toward"),
    new def("aniconic", "religious artwork in Islamic art that is non-representational"),
    new def("minarets", "tall, slended towers used to call people to prayer"),
    new def("pishtaq", "rectangular frame around a pointed arch"),
    new def("ogival arch", "an Islamic pointed arch"),
    new def("arabesques", "curving, flowing, intricate patterns reminiscent of floral designs"),
    new def("muqarnas", "3D triangles taht curl toward the viewer and are layered over one another"),
    new def("minbar", "short flight of steps used as a platform for muezzin"),
    new def("muezzin", "the person at a mosque who calls people to prayer"),
    new def("alcazaba", "Islamic fortress and citadel with barracks for elite guards"),
    new def("mausoleum", "a building that contains tombs"),
    new def("chamfered corner", "flattened 45 degree corner"),
    new def("chhatri", "elevated dome tower"),
    new def("iwan", "three walled vaulted rooms"),
    new def("jali", "decorative screens"),
    new def("hasht bihisht", "8 chambers surrounding a central room"),
    new def("cenotaph", "an empty tomb or monument erected in honor of a person"),
    new def("calligraphy", "decorative or beautiful handwriting"),
    new def("folio", "page in a handwritten book"),
    new def("parchment", "material made from the skin of sheep or goats"),
    new def("pyxis", "small cylinder-shaped contined with a detachable lid used to hold cosmetics or jewelry"),
    new def("sufism", "Islamic mysticism with a goal of having a direct relationship with the divine and emphasis on prayer and meditation"),
    new def("mughals", "Islamic rulers in India known for opulence and extravagance"),
    new def("ahu", "pedestal or platform for the moai on Easter Island"),
    new def("'ahu 'ula", "Hawaiian feather cloaks"),
    new def("ali’i", "Hawaii’s ruling hereditary elite"),
    new def("ges", "spirit double of an individual"),
    new def("hiapo", "niuean name for tapa cloth"),
    new def("maori", "indigenous people of New Zealand"),
    new def("mana", "supernatural power associated wtih those in high rank and embodied in sacred places or objects"),
    new def("moai", "large stone sculptures found on Easter Island; likely depict rulers or ancestors"),
    new def("moko", "facial tattoos used by the Maori"),
    new def("rebbelib", "stick chart with shells denoting islands in large sections of water"),
    new def("scarification", "ritual cutting of the body to create scars with particular patterns that denote status or identity"),
    new def("tapa", "Oceanic cloth made from bark that is soaked, beaten, dyed and decorated"),
    new def("totem", "object or creature that is connected to certain ancestral spirits"),
    new def("assmeblage", "3D work made of various materials such as wood, cloth, paper, and miscellaneous objects"),
    new def("collage", "art made from an assemblage of different forms onto a 2D surface"),
    new def("feminist art", "drew attention to women's stories and issues"),
    new def("folk art", "artwork made by untrained artists that is typically utilitarian, decorative, handmade, and reflects cultural traditions"),
    new def("installation", "artwork that creats an artistic environment in a room or gallery"),
    new def("kitsch", "mass-produced imagery designed to please the broadest possible audience and generally of questionable taste"),
    new def("pisupo", "refers to canned food"),
    new def("sankofa", "African artistic movement interested in reclaiming Africa’s rich indigenous artistic tradition"),
    new def("shibboleth", "a custom, principle, or practice that distinguishes one group from another, particularly an “in group” from an “out group”"),
    new def("sumukhwa", "revival in Korea of traditional Korean and Chinese atistic traditions"),
    new def("“A House is a Machine for Living In”", "phrase indicating the belief that a house should be modern, technological, and efficient"),
    new def("abstraction", "works of art reduced to basic forms with little or no desire for pictorial representation"),
    new def("cantilever", "projecting beam that is attached to a building at one end and suspends outward beyond the edge of the building"),
    new def("documentary photography", "chronicled significant historical events or scenes from everyday life"),
    new def("ferroconcrete", "reinforced concrete"),
    new def("fin de siecle", "age of growing wealth but anxiety about political tensions"),
    new def("gouache", "opaque watercolor (as opposed to transparent watercolor)"),
    new def("harlem renaissance", "rich period of cultural production for African Americans; celebrated heritage, culture, and redefined artistic forms of expression"),
    new def("pilotis", "slender columns with no ornamentation"),
    new def("primitivism", "artistic inspiration from “primitive” “unadvanced” “simple” non-western cultures"),
    new def("photogravure", "technique to copy a negative and used to capture middle tones on the value scale"),
    new def("photomontage", "process and the result of making a composite photograph by cutting, gluing, rearranging, and overlapping two or more photographs"),
    new def("ready-mades", "commonplace object selected and exhibited as a work of art"),
    new def("ribbon windows: slender, long, streamlined window panes"),
    new def("action painting", "artist pours, drips, dribbled or splattered pigment; applied in an unorthodox manner that involves the artist's body"),
    new def("curtain-wall", "exterior wall in architecture that is non-structural and purely decorative"),
    new def("entropy", "the inevitable disintegration of all objects in nature"),
    new def("happening", "an act of performance art that is initially planned but involves spontaneity, improvisation and often audience participation"),
    new def("“Less is a bore”", "phrase indicating belief that that architecture should be inspired by buildings of the past and pair elements together in new ways"),
    new def("“Less is more”", "phrase indicating belief taht architecture should be simple, sleek, modern, minimalist"),
    new def("minimalism", "trend in modern painting and sculpture that focused on reducing the form to its absolute and most basic essense"),
    new def("modernism", "style of architecture that promotes architecture that is simple, sleek, minimal, proportional, geometric"),
    new def("modular", "composed of smaller standardized units or elements that are repeated without alteration"),
    new def("performance art", "works where movements, gestures, and sounds replace physical objects, with the only remaining evidence being documentary photographs"),
    new def("silk screen", "mesh cloth is stretched over a heavy wooden frame and design is transferred to the canvas by having a squeegee force color through the pores of the material"),
    new def("soak-stain", "artist pours paint onto canvas and avoids brushwork; manipulates the movement of paint using gravity or other means"),
    new def("venice biennale", "major show of contemporary art that takes place every other year in various venues throughout Venice")
];


let units = document.getElementsByClassName("select_unit");
let chosen_unit;

let unitarts = [];

for (i=0; i < units.length; i++) {
    if (units[i]) {
        units[i].addEventListener("click", unitselect);
    }
}

let canchooseunit = true;
function unitselect() {
    if (canchooseunit) {
        canchooseunit = false;
        this.style.backgroundColor = "rebeccapurple";
        this.style.color = "black";
        chosen_unit = this.value;

        switch (chosen_unit) {
            case "1B":
                unitarts = [];
                for (i=0; i < 11; i++) {
                    unitarts.push(art[i]);
                }
                break;
                
            case "2B":
                unitarts = [];
                for (i=11; i < 25; i++) {
                    unitarts.push(art[i]);
                }
                break;
                
            case "2C":
                unitarts = [];
                for (i=25; i < 47; i++) {
                    unitarts.push(art[i]);
                }
                break;
            
            case "3":
                unitarts = [];
                for (i=47; i < 64; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "4A":
                unitarts = [];
                for (i=64; i < 81; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "4B":
                unitarts = [];
                for (i=81; i < 98; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "5A":
                unitarts = [];
                for (i=98; i < 124; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "5B":
                unitarts = [];
                for (i=124; i < 152; i++) {
                    unitarts.push(art[i]);
                }
                break;
                
            case "7":
                unitarts = [];
                for (i=152; i < 166; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "6":
                unitarts = [];
                for (i=166; i < 180; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "8A":
                unitarts = [];
                for (i=180; i < 191; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "8B":
                unitarts = [];
                for (i=191; i < 212; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "9":
                unitarts = [];
                for (i=212; i < 223; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "10":
                unitarts = [];
                for (i=223; i < 250; i++) {
                    unitarts.push(art[i]);
                }
                break;
            case "all":
                unitarts = [];
                for (i=0; i < 250; i++) {
                    unitarts.push(art[i]);
                }
                break;
        }
    }
    document.getElementById("selecttype").style.display = "inline";
    document.getElementById("submit_type").style.display = "inline";
}

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setcardtype);}

for (let i=0; i < 18; i++) {
    let matchcardid = "card" + (i + 1);
    document.getElementById(matchcardid).addEventListener("click", clickyfuntime);
}

function artisterror() {
    document.getElementById("selectunit").style.display = "none";
    let choosetype = document.getElementsByName("select_type");
    for (let i=0; i<choosetype.length; i++) {
        choosetype[i].style.display = "none";
    }
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "An error occured. Not enough artists to play matching game. Click return to play again."
}

let matchcardappear;
function setcardtype() {
    let properties = document.getElementsByName("select_type");
    for (let i=0; i<properties.length; i++) {
        if (properties[i].checked) {
            cardtype = properties[i].value;
        } else {
            document.getElementById("errormsg").innerText = "No property was selected. Try again.";
        }
    }

    if(((chosen_unit == "1B") || (chosen_unit == "2B") || (chosen_unit == "2C") || (chosen_unit == "3A")) && (cardtype == "artist")) {
        artisterror();
    } else {
        let artistnum = 0;
        if (cardtype) {
            document.getElementById("selectunit").style.display = "none";

            let choosetype = document.getElementsByName("select_type");
            for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}

            if (cardtype == "artist") {
                for (i=0; i < unitarts.length; i++) {
                    if (unitarts[i].artist) {
                        artistnum++;
                    }
                }
                if (artistnum < 9) {
                    artisterror();
                } else {
                    let cardslist = document.getElementsByClassName("matchcard");
                    for (let i=0; i<cardslist.length; i++) {cardslist[i].style.display = "inline";}
                    matchcardappear = true;
                }
            }

            if (matchcardappear != true) {
                let cardslist = document.getElementsByClassName("matchcard");
                for (let i=0; i<cardslist.length; i++) {cardslist[i].style.display = "inline";}
            }

            randassign();
            randcardassign();
            assigntocard();
        }
    }
}

function randassign() {
    let unfiltered = true;
    let bac = 0; //blank artist counter
    if (cardtype != "artist" && cardtype != "terms") {
        while (randnums.length < 9) {
            randnum = Math.floor(Math.random() * unitarts.length);
            if (!randnums.includes(randnum)) {
                randnums.push(randnum);
            }
        }
    } else if (cardtype == "artist") {
        while (unfiltered) {
            if (unitarts[bac].artist) {
                if (((unitarts.length - 1) == bac) || (unitarts.length == bac)) {
                    unfiltered = false;
                } else {
                    bac++;
                }
            } else {
                if (((unitarts.length - 1) == bac) || (unitarts.length == bac)) {
                    unitarts.splice(bac, 1);
                    unfiltered = false;
                } else {
                    unitarts.splice(bac, 1);
                }
            }
        }
        while (randnums.length < 9) {
            randnum = Math.floor(Math.random() * unitarts.length);
            if (!randnums.includes(randnum)) {
                randnums.push(randnum);
            }
        }
    } else if (cardtype == "terms") {
        while (randnums.length < 9) {
            randnum = Math.floor(Math.random() * terms.length);
            if (!randnums.includes(randnum)) {
                randnums.push(randnum);
            }
        }
    } else {
        document.getElementById("endbox").innerHTML = `<p>An error occured. Click return to play again.</p>
                                                            <a id="return" href="index.html">Return</a>`;
    }
}

function randcardassign() {
    while (cardnums.length < 9) {
        randnum = Math.floor(Math.random() * 18);
        if (!cardnums.includes(randnum)) {
            cardnums.push(randnum);
        }
    }
}

function assigntocard() {
    for (let i=0; i < 9; i++) {
        if (cardnums[i]) {
            cardid = "card" + (cardnums[i] + 1);
        } else if (cardnums[i] === 0) {
            cardid = "card1"
        }

        if (cardid) {
            switch (cardtype) {
                case "dates":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].date;
                    document.getElementById(cardid).value = unitarts[randnums[i]].date;
                    document.getElementById(cardid).title = "info";
                    break;

                case "materials":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].material;
                    document.getElementById(cardid).value = unitarts[randnums[i]].material;
                    document.getElementById(cardid).title = "info";
                    break;
                    
                case "artist":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].artist;
                    document.getElementById(cardid).value = unitarts[randnums[i]].artist;
                    document.getElementById(cardid).title = "info";
                    break;

                case "cultures":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].culture;
                    document.getElementById(cardid).value = unitarts[randnums[i]].culture;
                    document.getElementById(cardid).title = "info";
                    break;
                case "terms":
                    document.getElementById(cardid).innerText = terms[randnums[i]].defin;
                    document.getElementById(cardid).value = terms[randnums[i]].word;
                    document.getElementById(cardid).title = "info";
                    break;
            }

            if(cardtype == "terms") {
                artnames.push(terms[randnums[i]]);
            } else {
                artnames.push(unitarts[randnums[i]]);
            }
        }
    }

    for (let i=0; i<18; i++) {
        cardid = "card" + (i + 1);
        if (!document.getElementById(cardid).innerText) {
            emptycards.push(cardid);
        }
    }

    for (let i=0; i < 9; i++) {
        switch (cardtype) {
            case "dates":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " date";
                document.getElementById(emptycards[i]).value = artnames[i].date;
                document.getElementById(emptycards[i]).title = "name";
                break;

            case "materials":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " material";
                document.getElementById(emptycards[i]).value = artnames[i].material;
                document.getElementById(emptycards[i]).title = "name";
                break;   

            case "artist":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " artist";
                document.getElementById(emptycards[i]).value = artnames[i].artist;
                document.getElementById(emptycards[i]).title = "name";
                break;

            case "cultures":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " culture";
                document.getElementById(emptycards[i]).value = artnames[i].culture;
                document.getElementById(emptycards[i]).title = "name";
                break;
            case "terms":
                document.getElementById(emptycards[i]).innerText = artnames[i].word;
                document.getElementById(emptycards[i]).value = artnames[i].word;
                document.getElementById(emptycards[i]).title = "name";
                break;
        }
    }

    if (cardtype == "forms") {
        formimgs();
    }
}

function formimgs() {
    for (i=0; i<9; i++) {
        cardid = "card" + (cardnums[i] + 1);
        document.getElementById(cardid).innerHTML = unitarts[randnums[i]].form
        document.getElementById(cardid).value = unitarts[randnums[i]].name;
        document.getElementById(cardid).title = "info";
    }

    emptycards = [];
    for (let i=0; i<18; i++) {
        if (!(cardnums.includes(i))) {
            emptycards.push("card" + (i+1));
        }
    }

    for (i=0; i<9; i++) {
        document.getElementById(emptycards[i]).innerText = artnames[i].name + " form";
        document.getElementById(emptycards[i]).value = artnames[i].name;
        document.getElementById(emptycards[i]).title = "name";
    }
}

function clickyfuntime() {
    if (this.style.borderColor === "green") {
        return;  // exit the function if the card is already marked as correct
    }

    let cardslist = document.getElementsByClassName("matchcard");
    ccc = 0;
    for (let i=0; i < 18; i++) {
        if ((cardslist[i].style.color == "white")) {
            ccc += 1;
        }
    }

    if (ccc == 0) {
        this.style.color = "white";
        this.style.backgroundColor = "#333";
        this.style.borderWidth = "5px";
        if ((cardtype == "forms") && (this.title == "info")) {
            for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                if (document.getElementsByClassName("cardforms")[i].title == this.value) {
                    document.getElementsByClassName("cardforms")[i].style.zIndex = 2;
                }
            }
        }
    } else if (ccc == 1) {
        this.style.color = "white";
        this.style.backgroundColor = "#333";
        this.style.borderWidth = "5px";
        if ((cardtype == "forms") && (this.title == "info")) {
            for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                if (document.getElementsByClassName("cardforms")[i].title == this.value) {
                    document.getElementsByClassName("cardforms")[i].style.zIndex = 2;
                }
            }
        }
        correctcheck(this); 
    }
}

function correctcheck(thisclicked) {
    let cardslist = document.getElementsByClassName("matchcard");
    for (let y = 0; y < cardslist.length; y++) {
        if (cardslist[y].style.color === "white" && cardslist[y] !== thisclicked) {
            let cardcompared = cardslist[y];
            let isMatch = ((thisclicked.value === cardcompared.value) && (thisclicked.title !== cardcompared.title));
            if (isMatch) {
                istrue(thisclicked, cardcompared);
            } else {
                isfalse(thisclicked, cardcompared);
            }
        }
    }
}

let ecc = 0; //end correct counter
function istrue(thisclicked, otherclicked) {
    thisclicked.style.borderColor = "green";
    thisclicked.style.backgroundColor = "white";
    thisclicked.style.color = "black";

    otherclicked.style.borderColor = "green";
    otherclicked.style.backgroundColor = "white";
    otherclicked.style.color = "black";

    let allMatched = true;
    for (let i = 0; i < 18; i++) {
        let matchcardid = "card" + (i + 1);
        if (document.getElementById(matchcardid).style.borderColor !== "green") {
            allMatched = false;
            break;
        }
    }

    if (allMatched) {
        setTimeout(() => {
            document.getElementById("endbox").style.display = "inline";
            for (let i=0; i < 18; i++) {
                let matchcardid = "card" + (i + 1);
                document.getElementById(matchcardid).style.display = "none";
            }
        }, 500);
    }
}

function isfalse(thisclicked, otherclicked) {
    setTimeout(() => {
        thisclicked.style.backgroundColor = "red";
        otherclicked.style.backgroundColor = "red";
        setTimeout(() => {
            thisclicked.style.borderWidth = "2px";
            thisclicked.style.borderColor = "rebeccapurple";
            thisclicked.style.backgroundColor = "lightgrey";
            thisclicked.style.color = "lightgrey";
            if ((cardtype == "forms") && (thisclicked.title == "info")) {
                for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                    if (document.getElementsByClassName("cardforms")[i].title == thisclicked.value) {
                        document.getElementsByClassName("cardforms")[i].style.zIndex = "-1";
                    }
                }
            }

            otherclicked.style.borderWidth = "2px";
            otherclicked.style.borderColor = "rebeccapurple";
            otherclicked.style.backgroundColor = "lightgrey";
            otherclicked.style.color = "lightgrey";
            if ((cardtype == "forms") && (otherclicked.title == "info")) {
                for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                    if (document.getElementsByClassName("cardforms")[i].title == otherclicked.value) {
                        document.getElementsByClassName("cardforms")[i].style.zIndex = "-1";
                    }
                }
            }
        }, 750);
    }, 250);
}

if(document.getElementById("select_terms")) {
    document.getElementById("select_terms").addEventListener("click", assignterms);
}

function assignterms() {
    cardtype = "terms";
    document.getElementById("selectunit").style.display = "none";
    let cardslist = document.getElementsByClassName("matchcard");
    for (let i=0; i<cardslist.length; i++) {cardslist[i].style.display = "inline";}
    randassign();
    randcardassign();
    assigntocard();
}