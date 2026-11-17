const gettyURL = "https://data.getty.edu/museum/collection/object/";
const gettyObjIds = ["c4aeaa30-cae0-40bf-a08b-784930e64e27", "b8339144-4f46-40f9-9d21-baef4f8269ac", "9a9c0a0c-bcbc-46bc-8a7a-d1dcb06085ed",
    "3b9590a9-2572-416b-87f8-d7c0c9d43e39", "4ad4af14-88da-411d-b1c4-8d17c8b065a5", "a0a36f5b-bd63-4456-ac06-e2bfde616639",
    "75bf6827-db53-46dd-b60a-c681841f59f8", "e02c61c1-2b34-4888-9bb1-c18b11d37f61", "da4ff78d-766b-4bdc-92da-118591355a2f",
    "d3f83add-a9ff-4254-aec2-cca5cd4e7dc7", "fc544129-6916-4a8c-bb48-f37704b16b00", "211461e7-dac8-48c9-9a16-2893f7016300",
    "548dd53b-cc62-4edf-89ed-191363e3b962"]; // Array of Getty object IDs
const gettyObjUrl = gettyURL + gettyObjIds;

const sliders = document.querySelectorAll(".hero-slider");
const images = [];
let current = 0; // current image showing
let visible = 0; // current layer showing (0 or 1)

// Fetch images from Getty API
async function fetchGettyImages() {
    for (const id of gettyObjIds) {
        try {
            const response = await fetch(gettyURL + id);
            const data = await response.json();
            const base = data.representation[0].id.split("/full/")[0];
            const url = base + "/full/!1920,1080/0/default.jpg";
            images.push(url);

            new Image().src = url; // Preload image
        } catch (error) {
            console.error("Error fetching image for ID:", id, error);
        }
    }

    if (images.length == 0) return; // No images fetched, exit function

    sliders[0].style.backgroundImage = `url(${images[0]})`;
    sliders[0].classList.add("active");

    setInterval(nextImage, 7000); // Change image every 7 seconds
}

// fade out current img and fade in next img
function nextImage() {
    current = (current + 1) % images.length; // next img then loop back to first image

    const showing = sliders[visible];
    const hidden = sliders[1 - visible];

    // Set the next image on the hidden layer and crossfade
    hidden.style.backgroundImage = `url(${images[current]})`;
    hidden.classList.add("active"); //fade in
    showing.classList.remove("active"); //fade out
    visible = 1 - visible; // Toggle the visible layer
}

fetchGettyImages(); // Start fetching images when the script loads


//EXHIBITION

const exhibition = [
    {
        id: "c4aeaa30-cae0-40bf-a08b-784930e64e27", // Perseus Confronting Phineus with the Head of Medusa
        hotspots: [
            {
                id: "location",
                x: "66.4%",
                y: "24.9%",
                label: "Where is this?",          //screen readers
                data: {
                    title: "The Wedding of Perseus and Andromeda",
                    description: " Ethiopia was being ravaged by the sea monster as retribution for a boast made by Andromeda’s mother, \
                    Cassiopeia, in which she claimed that her daughter’s beauty eclipsed that of the Nereids, who were the daughters of \
                    the sea god Nereus. Cassiopeia and her husband, Cepheus, promised to give Andromeda in marriage to Perseus if he \
                    killed the monster. However, when he did so, Cassiopeia and Cepheus reneged on their promise and summoned an armed \
                    group of Andromeda’s suitors, prompting Perseus to use Medusa’s head to kill his opponents."
                }
            },
            {
                id: "figure-1",
                x: "37.8%",
                y: "45%",
                label: "Who is this?",
                data: {
                    title: "Perseus",
                    description: "Perseus was the son of Zeus and Danaë, the daughter of Acrisius of Argos. As an infant he was cast into \
                    the sea in a chest with his mother by Acrisius, to whom it had been prophesied that he would be killed by his grandson. \
                    After Perseus had grown up on the island of Seriphus, where the chest had grounded, King Polydectes of Seriphus, who \
                    desired Danaë, tricked Perseus into promising to obtain the head of Medusa, the only mortal among the Gorgons. Because \
                    the gaze of Medusa turned all who looked at her to stone, Perseus guided himself by her reflection in a shield given him \
                    by Athena and beheaded Medusa as she slept."
                }
            },
            {
                id: "figure-2",
                x: "57%",
                y: "47.8%",
                label: "Who is this?",
                data: {
                    title: "Medusa",
                    description: "Medusa, in Greek mythology, the most famous of the monster figures called Gorgons, known for her petrifying \
                    effect on beholders—those looking at her face were instantly turned to stone. In some accounts, such as Ovid’s Metamorphoses\
                     (written about 8 ce), Medusa was not born hideous and was, in fact, renowned for her beauty and most admired for her hair. \
                     Her loveliness became her undoing when she was pursued by an enamored Poseidon, who violated her in the very refuge to which \
                     she had fled—a temple to Athena, whom Medusa served as a priestess. (In some versions, Poseidon’s seduction of Medusa was \
                     consensual, rather than an assault.) Enraged by the desecration of her sacred space and the breach of custom—as a priestess, \
                     Medusa was required to remain chaste—Athena meted out a cruel punishment: a curse that left the once beautiful woman with a \
                     head of snakes instead of hair and a face that turned all those who looked at it into stone."
                }
            },
            {
                id: "figure-3",
                x: "78%",
                y: "62.4%",
                label: "Who is this?",
                data: {
                    title: "Phineus and His Men",
                    description: " Andromeda was arranged to marry Phineus, her uncle, but Perseus could not let that happen. He had fallen in \
                    love with her the moment he saw her. After rescuing her, Perseus married Andromeda and killed Phineus in \
                    the process. Phineus attempted to fight Perseus for Andromeda, but Perseus killed Phineus by using Medusa’s head to turn him \
                    to stone."
                }
            }
        ]
    },
    {
        id: "3b9590a9-2572-416b-87f8-d7c0c9d43e39", // Penelope Unraveling Her Web
        hotspots: [
            {
                id: "figure-1",
                x: "33.5%",
                y: "48.6%",
                label: "Who is this?",
                data: {
                    title: "Penelope",
                    description: "Penelope, in Greek mythology, a daughter of Icarius of Sparta and the nymph Periboea and the wife \
                    of the hero Odysseus, king of Ithaca. They had one son, Telemachus. Remarkable for her constancy and intelligence, \
                    Penelope is a central figure in Homer’s Odyssey, in which she devised delaying tactics to discourage 108 aggressive \
                    suitors during Odysseus’s 20-year absence, first fighting in the Trojan War and then struggling to return to Ithaca."
                }
            },
            {
                id: "figure-2",
                x: "53%",
                y: "62.4%",
                label: "Who is this?",
                data: {
                    title: "Telemachus",
                    description: "Telemachus, in Greek mythology, son of the Greek hero Odysseus and his wife, Penelope.When Telemachus \
                    reached adulthood, he left Ithaca, seeking news of his father."
                }
            },
            {
                id: "figure-3",
                x: "65%",
                y: "24%",
                label: "Who is this?",
                data: {
                    title: "Odysseus",
                    description: "Odysseus is king of Ithaca, son of Laertes and Anticleia (the daughter of Autolycus of Parnassus), \
                    and father, by his wife, Penelope, of Telemachus.A favorite of the goddess Athena, Odysseus is both wise and wily, \
                    a man of exceptional resourcefulness, courage, and eloquence. His skill in strategic planning is invaluable to the \
                    Greek success in the 10-year-long Trojan War, subject of Homer’s Iliad. A series of adventures befall him on the journey \
                    home from Troy, chronicled in the Odyssey. His circuitous route takes him another 10 years, resulting in a 20-year absence \
                    from Ithaca."
                }
            },
            {
                id: "object-1",
                x: "36.5%",
                y: "69.7%",
                label: "What is this?",
                data: {
                    title: "The Shroud",
                    description: " during her husband’s long absence after the Trojan War, 108 chieftains of Ithaca and nearby islands became Penelope’s \
                    suitors. They were an unruly, arrogant bunch who made free use of Odysseus’s palace and depleted the resources of his household.To \
                    spare herself their importunities, Penelope insisted that the suitors wait until she had woven a funeral shroud for Laertes, father\
                     of Odysseus. Every night for three years, until one of her maids revealed the secret, she unraveled the piece that she had woven by \
                     day so that she would not have to give up hope for the return of her beloved husband and remarry."
                }
            }
        ]
    },
    {
        id: "4ad4af14-88da-411d-b1c4-8d17c8b065a5", // Orpheus and Eurydice
        hotspots: [
            {
                id: "figure-1",
                x: "68.9%",
                y: "41.6%",
                label: "Who is this?",
                data: {
                    title: "Orpheus",
                    description: "Orpheus, in Greek mythology, legendary hero endowed with superhuman musical skills.Traditionally, Orpheus was the son of \
                    a Muse (probably Calliope, the patron of epic poetry) and Oeagrus, a king of Thrace (other versions give Apollo). Orpheus’s singing and \
                    playing were so beautiful that animals and even trees and rocks moved about him in dance. He married Eurydice, who was soon killed by a \
                    snakebite. Overcome with grief, Orpheus ventured to the land of the dead to attempt to bring Eurydice back to life. With his singing and \
                    playing he charmed the ferryman Charon and the dog Cerberus, guardians of the River Styx. His music and grief so moved Hades, king of the \
                    underworld, that Orpheus was allowed to take Eurydice with him back to the world of life and light. Hades set one condition, however: upon \
                    leaving the land of death, both Orpheus and Eurydice were forbidden to look back. The couple climbed up toward the opening into the land of \
                    the living, and Orpheus, seeing the Sun again, turned back to share his delight with Eurydice. In that moment, she disappeared."
                }
            },
            {
                id: "figure-2",
                x: "44.9%",
                y: "38.3%",
                label: "Who is this?",
                data: {
                    title: "Eurydice",
                    description: "Beyond her relationship with Orpheus, little is known of Eurydice. She was a nymph and, according to some sources, the daughter of Apollo."
                }
            },
            {
                id: "figure-3",
                x: "29.8%",
                y: "15.4%",
                label: "Who is this?",
                data: {
                    title: "Persephone (Proserpine)",
                    description: "Denoted as Proserpine in this description, this figure is also known as Persephone in Greek mythology. Persephone, in Greek religion, \
                    daughter of Zeus, the chief god, and Demeter, the goddess of agriculture. Persephone was the wife of Hades, king of the underworld, and was associated \
                    with spring, vegetation, and marriage. In the Homeric “Hymn to Demeter,” the story is told of how Persephone was gathering flowers in the Vale of Nysa \
                    when she was seized by Hades and removed to the underworld. As the wife of Hades, Persephone played an influential role in myths surrounding the underworld. \
                    When Orpheus descended to the underworld to retrieve his bride Eurydice, Persephone persuaded Hades to grant the request."
                }
            },
            {
                id: "figure-4",
                x: "16.7%",
                y: "16.4%",
                label: "Who is this?",
                data: {
                    title: "Hades",
                    description: "Hades, in ancient Greek religion, god of the underworld.He lived a shadowy and largely solitary life in the underworld, which became synonymous \
                    with him. Hades was the eldest son of the Titans Cronus and Rhea and brother of the deities Zeus, Poseidon, Demeter, Hera, and Hestia. He was swallowed at birth \
                    by his father, who had been warned that he would be overthrown by one of his children .After Cronus was overthrown by his sons, his kingdom was divided among them, \
                    and the underworld fell by lot to Hades. There he ruled with his queen, Persephone, over the infernal powers and over the dead in what was often called “the house \
                    of Hades,” or simply Hades. He was aided by the many-headed dog Cerberus."
                }
            },
            {
                id: "location",
                x: "80.3%",
                y: "9.2%",
                label: "Where is this?",
                data: {
                    title: "The Underworld",
                    description: "Hidden deep within the earth and ruled by the god Hades and his wife Persephone, the Underworld was the kingdom of the dead in Greek mythology, the sunless \
                    place where the souls of those who died went after death."
                }
            }//maybe
        ]
    },
    {
        id: "fc544129-6916-4a8c-bb48-f37704b16b00", // Achilles among the Daughters of Lycomedes

        hotspots: [
            {
                id: "figure-1",
                x: "86%",
                y: "48%",
                label: "Who is this?",
                data: {
                    title: "Achilles",
                    description: "Achilles, in Greek mythology, son of the mortal Peleus, king of the Myrmidons, and the Nereid, \
                    or sea nymph, Thetis. Achilles was the bravest, handsomest, and greatest warrior of the army of Agamemnon in \
                    the Trojan War. Peleus (or Thetis, in some versions), having received an oracle that his son would die fighting \
                    at Troy, sent Achilles to the court of Lycomedes on Scyros, where he was dressed as a girl named Pyrrha and kept \
                    hidden among the king’s daughters. Despite their best efforts, Peleus and Thetis could not relegate Achilles to a \
                    life of obscurity. Hearing from the soothsayer Calchas that Troy could not be taken without Achilles, the Greeks \
                    searched for and found him with the efforts of Odysseus, the wily king of Ithaca. Known for his strategic skills \
                    and creative thinking, Odysseus visited Scyros posing as a peddler of women’s garments and laid out his wares along \
                    with a spear. Pyrrha selected the spear from the pile of garments and was thus revealed as Achilles."
                }
            },
            {
                id: "figure-2",
                x: "14%",
                y: "42.3%",
                label: "who is this?",
                data: {
                    title: "Odysseus",
                    description: " Odysseus is king of Ithaca, son of Laertes and Anticleia (the daughter of Autolycus of Parnassus), and \
                    father, by his wife, Penelope, of Telemachus.A favorite of the goddess Athena, Odysseus is both wise and wily, a man of \
                    exceptional resourcefulness, courage, and eloquence."
                }
            }
        ]
    },
    {
        id: "211461e7-dac8-48c9-9a16-2893f7016300", // The Sacrifice of Polyxena
        hotspots: [
            {
                id: "figure-1",
                x: "25.7%",
                y: "60.5%",
                label: "Who is this?",
                data: {
                    title: "Achilles",
                    description: "Achilles, in Greek mythology, son of the mortal Peleus, king of the Myrmidons, and the Nereid, or sea nymph, Thetis. \
                    Achilles was the bravest, handsomest, and greatest warrior of the army of Agamemnon in the Trojan War."
                }
            },
            {
                id: "figure-2",
                x: "62%",
                y: "56.8%",
                label: "Who is this?",
                data: {
                    title: "Polyxena",
                    description: "Polyxena, in Greek mythology, a daughter of Priam, king of Troy, and his wife, Hecuba. After the fall of Troy, \
                    she was claimed by the ghost of Achilles, the greatest of the Greek warriors, as his share of the spoils and was therefore put \
                    to death at his tomb. In post-Classical times the story was elaborated; it was said that a peace had been arranged and Achilles \
                    was to marry Polyxena, but Paris treacherously shot him."
                }
            }
        ]
    },
    {
        id: "da4ff78d-766b-4bdc-92da-118591355a2f", // Cupid and Pan
        hotspots: [
            {
                id: "figure-1",
                x: "48.4%",
                y: "75.5%",
                label: "Who is this?",          // read by screen readers
                data: {
                    title: "Eros (Cupid)",
                    description: "Denoted as Cupid in this description, this figure is also known as Eros in Greek mythology. \
                    Eros was a god not simply of passion but also of fertility. Eros’s symbols were the bow and a quiver of arrows, \
                    which could be used to provoke both love and indifference or loathing. He was also associated with flowers, particularly roses."
                }
            },
            {
                id: "figure-2",
                x: "45.3%",
                y: "81.8%",
                label: "Who is this?",
                data: {
                    title: "Pan",
                    description: "Pan, in Greek mythology, a fertility deity, more or less bestial in form.Originally an Arcadian deity, his name is a \
                    Doric contraction of paon (“pasturer”) but was commonly supposed in antiquity to be connected with pan (“all”). His father was usually \
                    said to be Hermes, but a comic invention held that he was the product of an orgy of Odysseus’s wife Penelope with her many suitors. Pan \
                    was generally represented as a vigorous and lustful figure having the horns, legs, and ears of a goat; in later art the human parts of \
                    his form were much more emphasized. He haunted the high hills, and his chief concern was with flocks and herds, not with agriculture; hence \
                    he can make humans, like cattle, stampede in “panic” terror."
                }
            },
            {
                id: "location",
                x: "52.5%",
                y: "46.6%",
                label: "Where is this?",
                data: {
                    title: "Arcadia",
                    description: "Arcadia, mountainous region of the central Peloponnese (Modern Greek: Pelopónnisos) of ancient Greece. The pastoral character of Arcadian \
                    life together with its isolation are reflected in the fact that it is represented as a paradise in Greek and Roman bucolic poetry and in the literature \
                    of the Renaissance. In myth it is the homeland of the god Pan."
                }
            }
        ]
    },
    {
        id: "e02c61c1-2b34-4888-9bb1-c18b11d37f61", // Ulysses at the Palace of Circe
        hotspots: [
            {
                id: "figure-1",
                x: "39.7%",
                y: "77.8%",
                label: "Who is this?",
                data: {
                    title: "Odysseus (Ulysses)",
                    description: "Denoted as Ulysses in this description, this figure is also known as Odysseus in Greek mythology. Odysseus is king of Ithaca, son of Laertes \
                    and Anticleia (the daughter of Autolycus of Parnassus), and father, by his wife, Penelope, of Telemachus.A favorite of the goddess Athena, Odysseus is both \
                    wise and wily, a man of exceptional resourcefulness, courage, and eloquence. His skill in strategic planning is invaluable to the Greek success in the \
                    10-year-long Trojan War, subject of Homer’s Iliad. A series of adventures befall him on the journey home from Troy, chronicled in the Odyssey. One of these \
                    adventures takes place when he reaches Aeaea, the island of the enchantress Circe, where he has to rescue some of his companions whom she had turned into swine."
                }
            },
            {
                id: "figure-2",
                x: "33.8%",
                y: "78.3%",
                label: "Who is this?",
                data: {
                    title: "Circe",
                    description: "Circe, in Greek mythology, a sorceress feared for her ability to cause metamorphosis. She was able, by means of drugs and incantations, to change \
                    humans into wolves, lions, and other animals. Circe was a daughter of Helios, the sun god, and the Oceanid Perse. In Homer’s Odyssey she famously changes the \
                    companions of the Greek hero Odysseus into swine. Her magic fails against Odysseus himself, with whom she falls in love. Circe has been traditionally regarded \
                    as a dangerous embodiment of female sexuality, but modern feminist interpretations represent her as a symbol of feminine autonomy. In the Odyssey she serves as \
                    both an obstacle and a guide during Odysseus’s wanderings after the Trojan War."
                }
            },
            {
                id: "location",
                x: "42%",
                y: "34.3%",
                label: "Where is this?",
                data: {
                    title: "Aeaea",
                    description: "Aeaea was a mythical island in Greek mythology, best known as the home of Circe, the powerful enchantress who appears in Homer’s Odyssey. The exact \
                    location of Aeaea was uncertain even in antiquity. Homer places it where the ship has just left the stream of Oceanus, on an island “where are the dwelling and \
                    dancing-floors of early Dawn and the risings of the sun” (Odyssey 12.1–4). That description points to the east, toward the sunrise, and it does not match a place \
                    on a real map of the Mediterranean. Aeaea is best understood as a mythical island of the Odyssey, a station in the hero’s wanderings rather than a point on a chart."
                }
            }
        ]
    }
];

// Fetch info from API
async function getPaintingInfo(id) {
    const response = await fetch(gettyURL + id);
    const data = await response.json();

    let description = "No description available"; // if nothing match

    // need the text/markdown - position changes on each painting so the loop makes it easier to find
    for (const item of data.referred_to_by) {
        if (item._label === "Object Description" && item.format === "text/markdown") {
            description = item.content;
        }
    }

    // similar situation for title and medium
    let title = data._label // fallback
    for (const item of data.identified_by) {
        if (item._label === "Preferred Title") {
            title = item.content;
        }
    }

    let medium = "";
    for (const item of data.referred_to_by) {
        if (item._label === "Materials Description") {
            medium = item.content;
        }
    }

    let artist = "";
    if (data.produced_by.carried_out_by) {
        artist = data.produced_by.carried_out_by[0]._label;
    } else {
        // Ulysses at the Palace of Circe holds artist in a different area
        //so else case for this specific one
        const firstArtist = data.produced_by.part[0].carried_out_by[0]._label;
        const secondArtist = data.produced_by.part[1].carried_out_by[0]._label;
        artist = firstArtist + " and " + secondArtist;
    }

    const date = data.produced_by.timespan.identified_by[0].content;

    const base = data.representation[0].id.split("/full/")[0];
    const image = base + "/full/!1920,1080/0/default.jpg";

    return { title, artist, date, medium, description, image };
}








// TEMPORARY: click a painting to get hotspot coordinates. Remove before submitting.
function logHotspotPosition(viewer) {
    viewer.addEventListener("click", (event) => {
        const img = viewer.querySelector("img");   // the painting the library created
        if (!img) return;

        const box = img.getBoundingClientRect();    // the image's current size and position

        // How far into the image the click was, as a percentage
        const x = ((event.clientX - box.left) / box.width * 100).toFixed(1);
        const y = ((event.clientY - box.top) / box.height * 100).toFixed(1);

        console.log(`x: "${x}%", y: "${y}%"`);
    });
}









// Build every painting section
async function buildExhibition() {
    const container = document.querySelector("#exhibition");

    for (const painting of exhibition) {
        try {
            const info = await getPaintingInfo(painting.id);

            // split description into paragraphs when there is a blank line
            const paragraphs = info.description.split(/\n\s*\n/).map(paragraph => "<p>" + paragraph.trim() + "</p>").join("");

            const section = document.createElement("section");
            section.className = "painting";

            const heading = document.createElement("h2");
            heading.textContent = info.title;

            const meta = document.createElement("p");
            meta.className = "painting-meta";
            meta.textContent = info.artist + ", " + info.date + " · " + info.medium;

            const descriptionBox = document.createElement("div");
            descriptionBox.className = "painting-description";
            descriptionBox.innerHTML = paragraphs;

            const viewer = document.createElement("div");
            viewer.className = "painting-viewer";

            section.append(heading, meta, descriptionBox, viewer);
            container.appendChild(section);


            const HotspotViewer = CIHotspot.default

            new HotspotViewer(viewer, {
                src: info.image,
                hotspots: painting.hotspots,
                trigger: "click",
                theme: "dark",
                placement: "auto",
                zoom: true
            });

            logHotspotPosition(viewer);   // TEMPORARY

        } catch (error) {
            console.error("could not build painting: ", painting.id, error);
        }
    }
}

buildExhibition();