import { TerroristType } from "../../types/";

/* DETECTIVES */
const banker: TerroristType = {
  id: "banker",
  name: "Banker",
  group: "detective",
  description: [
    "Obtiene todos los créditos que gastan el resto de los jugadores.",
    "Cuando muere será anunciado al resto de jugadores.",
    "Tiene menos sprint y recibe más daño.",
    "Puede transferir créditos a detectives y survivalist.",
  ],
  image: "../static/sheriff.png",
};
const revolutionary: TerroristType = {
  id: "revolutionary",
  name: "Revolutionary",
  group: "detective",
  description: ["Tiene tienda de traidor en vez de detective."],
  image: "../static/unavailable.png",
};
const sheriff: TerroristType = {
  id: "sheriff",
  name: "Sheriff",
  group: "detective",
  description: [
    "Convierte a una persona en su compañero (deputy) con su deagle.",
    "El deputy dejará por completo su antiguo rol y equipo.",
    "Si el Sheriff muere, el deputy también.",
  ],
  image: "../static/unavailable.png",
};
const sniffer: TerroristType = {
  id: "sniffer",
  name: "Sniffer",
  group: "detective",
  description: [
    "Capacidad de ver las pisadas de otros jugadores (magnifying glass).",
    "Puede ver pisadas ensangrentadas de los asesinos que hayan matado.",
  ],
  image: "../static/unavailable.png",
};
const masterChief: TerroristType = {
  id: "masterchief",
  name: "Master Chief",
  group: "detective",
  description: [
    "Tiene tienda de detective, rifle de batalla BR55.",
    "Al ser Master Chief, consigue más vida, armadura y un nuevo modelo para jugador.",
  ],
  image: "../static/unavailable.png",
};
const vigilante: TerroristType = {
  id: "vigilante",
  name: "Vigilante",
  group: "detective",
  description: [
    "Más daño por cada traidor o rol neutral que mates.",
    "Menos daño por cada inocente que mates.",
  ],
  image: "../static/unavailable.png",
};

/* TRAITORS */
const executioner: TerroristType = {
  id: "executioner",
  name: "Executioner",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const hitman: TerroristType = {
  id: "hitman",
  name: "Hitman",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const glutton: TerroristType = {
  id: "glutton",
  name: "Glutton",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const vampire: TerroristType = {
  id: "vampire",
  name: "Vampire",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const blight: TerroristType = {
  id: "blight",
  name: "Blight",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const mesmerist: TerroristType = {
  id: "mesmerist",
  name: "Mesmerist",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const accomplice: TerroristType = {
  id: "accomplice",
  name: "Accomplice",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const impostor: TerroristType = {
  id: "impostor",
  name: "Impostor",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const haunted: TerroristType = {
  id: "haunted",
  name: "Haunted",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const imitator: TerroristType = {
  id: "imitator",
  name: "Imitator",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const arsonist: TerroristType = {
  id: "arsonist",
  name: "Arsonist",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const roider: TerroristType = {
  id: "roider",
  name: "Roider",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const ajin: TerroristType = {
  id: "ajin",
  name: "Ajin",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const blocker: TerroristType = {
  id: "blocker",
  name: "Blocker",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const defector: TerroristType = {
  id: "defector",
  name: "Defector",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};
const shanker: TerroristType = {
  id: "shanker",
  name: "Shanker",
  group: "traitor",
  description: [],
  image: "../static/unavailable.png",
};

/* INNOCENTS */
const medium: TerroristType = {
  id: "medium",
  name: "Medium",
  group: "innocent",
  description: ["Puede leer el chat de los muertos."],
  image: "../static/unavailable.png",
};
const survivalist: TerroristType = {
  id: "survivalist",
  name: "Survivalist",
  group: "innocent",
  description: ["Es un superviviente con tienda propia."],
  image: "../static/unavailable.png",
};
const clairvoyant: TerroristType = {
  id: "clairvoyant",
  name: "Clairvoyant",
  group: "innocent",
  description: [
    "Es capaz de ver roles especiales (sin saber el rol).",
    "Si mata al jester, lo convertirá en sucompañero.",
  ],
  image: "../static/unavailable.png",
};
const trapper: TerroristType = {
  id: "trapper",
  name: "Trapper",
  group: "innocent",
  description: [
    "Es un inocente con capacidad de ver las trampas activadas.",
    "Podrá usar las rejillas del impostor, si las descubre, cada 30 segundos.",
  ],
  image: "../static/unavailable.png",
};
const priest: TerroristType = {
  id: "priest",
  name: "Priest",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const beacon: TerroristType = {
  id: "beacon",
  name: "Beacon",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const lycanthrope: TerroristType = {
  id: "lycanthrope",
  name: "Lycanthrope",
  group: "innocent",
  description: [
    "Su rol está oculto hasta que sea el último en pie (mejorarán sus estadísticas).",
  ],
  image: "../static/unavailable.png",
};
const spy: TerroristType = {
  id: "spy",
  name: "Spy",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const nova: TerroristType = {
  id: "nova",
  name: "Nova",
  group: "innocent",
  description: [
    "Explotará en un rango de tiempo aleatorio.",
    "Su cuerpo desaparece.",
    "Hace daño en área.",
  ],
  image: "../static/unavailable.png",
};
const pharaoh: TerroristType = {
  id: "pharaoh",
  name: "Pharaoh",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const wrath: TerroristType = {
  id: "wrath",
  name: "Wrath",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const occultist: TerroristType = {
  id: "occultist",
  name: "Occultist",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const spectre: TerroristType = {
  id: "spectre",
  name: "Spectre",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const shinigami: TerroristType = {
  id: "shinigami",
  name: "Shinigami",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const oracle: TerroristType = {
  id: "oracle",
  name: "Oracle",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const sacrifice: TerroristType = {
  id: "sacrifice",
  name: "Sacrifice",
  group: "innocent",
  description: [
    "Se sacrificará para reanimar a una persona muerta mediante su desfibrilador.",
  ],
  image: "../static/unavailable.png",
};
const sus: TerroristType = {
  id: "sus",
  name: "Sus",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const sleeper: TerroristType = {
  id: "sleeper",
  name: "Sleeper",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const guardian: TerroristType = {
  id: "guardian",
  name: "Guardian",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};
const revenant: TerroristType = {
  id: "revenant",
  name: "Revenant",
  group: "innocent",
  description: [],
  image: "../static/unavailable.png",
};

/* NEUTRAL KILLERS */
const serialKiller: TerroristType = {
  id: "serialkiller",
  name: "Serial Killer",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};
const jackal: TerroristType = {
  id: "jackal",
  name: "Jackal / Chacal",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};
const restless: TerroristType = {
  id: "restless",
  name: "Restless",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};
const doppelganger: TerroristType = {
  id: "doppelganger",
  name: "Doppelganger",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};
const necromancer: TerroristType = {
  id: "necromancer",
  name: "Necromancer",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};
const infected: TerroristType = {
  id: "infected",
  name: "Infected",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};
const duelist: TerroristType = {
  id: "duelist",
  name: "Duelist",
  group: "neutral_killer",
  description: [],
  image: "../static/unavailable.png",
};

/* NEUTRALS */
const bodyguard: TerroristType = {
  id: "bodyguard",
  name: "Bodyguard",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const pirateCaptain: TerroristType = {
  id: "piratecaptain",
  name: "Pirate Captain",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const amnesiac: TerroristType = {
  id: "amnesiac",
  name: "Amnesiac",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const drunk: TerroristType = {
  id: "drunk",
  name: "Drunk",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const jester: TerroristType = {
  id: "jester",
  name: "Jester",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const clown: TerroristType = {
  id: "clown",
  name: "Clown",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const undecided: TerroristType = {
  id: "undecided",
  name: "Undecided",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const thief: TerroristType = {
  id: "thief",
  name: "Thief",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const unknown: TerroristType = {
  id: "unknown",
  name: "Unknown",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const medic: TerroristType = {
  id: "medic",
  name: "Medic",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const mimic: TerroristType = {
  id: "mimic",
  name: "Mimic",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const marker: TerroristType = {
  id: "marker",
  name: "Marker",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const cupid: TerroristType = {
  id: "cupid",
  name: "Cupid",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const liar: TerroristType = {
  id: "liar",
  name: "Liar",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const swapper: TerroristType = {
  id: "swapper",
  name: "Swapper",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const ghost: TerroristType = {
  id: "ghost",
  name: "Ghost",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};
const leech: TerroristType = {
  id: "leech",
  name: "Leech",
  group: "neutral",
  description: [],
  image: "../static/unavailable.png",
};

/* OTHER */
const graverobber: TerroristType = {
  id: "graverobber",
  name: "Graverobber",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const ravenous: TerroristType = {
  id: "ravenous",
  name: "Ravenous",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const deputy: TerroristType = {
  id: "deputy",
  name: "Deputy",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const thrall: TerroristType = {
  id: "thrall",
  name: "Thrall",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const sidekick: TerroristType = {
  id: "sidekick",
  name: "Sidekick",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const killerClown: TerroristType = {
  id: "killerclown",
  name: "Killer Clown",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const zombie: TerroristType = {
  id: "zombie",
  name: "Zombie",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const lover: TerroristType = {
  id: "lover",
  name: "Lover",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};
const pirate: TerroristType = {
  id: "pirate",
  name: "Pirate",
  group: "other",
  description: [],
  image: "../static/unavailable.png",
};

export const terroristList: Array<TerroristType> = [
  accomplice,
  ajin,
  amnesiac,
  arsonist,
  banker,
  beacon,
  blight,
  blocker,
  bodyguard,
  clairvoyant,
  clown,
  cupid,
  defector,
  deputy,
  doppelganger,
  drunk,
  duelist,
  executioner,
  ghost,
  glutton,
  graverobber,
  guardian,
  haunted,
  hitman,
  imitator,
  impostor,
  infected,
  jackal,
  jester,
  killerClown,
  leech,
  liar,
  lover,
  lycanthrope,
  marker,
  masterChief,
  medic,
  medium,
  mesmerist,
  mimic,
  necromancer,
  nova,
  occultist,
  oracle,
  pharaoh,
  pirate,
  pirateCaptain,
  priest,
  ravenous,
  restless,
  revenant,
  revolutionary,
  roider,
  sacrifice,
  serialKiller,
  shanker,
  sheriff,
  shinigami,
  sidekick,
  sleeper,
  sniffer,
  spectre,
  spy,
  survivalist,
  sus,
  swapper,
  thief,
  thrall,
  trapper,
  undecided,
  unknown,
  vampire,
  vigilante,
  wrath,
  zombie,
];
