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
  image: "../static/banker.png",
};
const revolutionary: TerroristType = {
  id: "revolutionary",
  name: "Revolutionary",
  group: "detective",
  description: ["Tiene tienda de traidor en vez de detective."],
  image: "../static/revolutionary.png",
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
  image: "../static/sheriff.png",
};
const sniffer: TerroristType = {
  id: "sniffer",
  name: "Sniffer",
  group: "detective",
  description: [
    "Capacidad de ver las pisadas de otros jugadores (magnifying glass).",
    "Puede ver pisadas ensangrentadas de los asesinos que hayan matado.",
  ],
  image: "../static/sniffer.png",
};
const masterChief: TerroristType = {
  id: "masterchief",
  name: "Master Chief",
  group: "detective",
  description: [
    "Tiene tienda de detective, rifle de batalla BR55.",
    "Al ser Master Chief, consigue más vida, armadura y un nuevo modelo para jugador.",
  ],
  image: "../static/masterchief.png",
};
const vigilante: TerroristType = {
  id: "vigilante",
  name: "Vigilante",
  group: "detective",
  description: [
    "Más daño por cada traidor o rol neutral que mates.",
    "Menos daño por cada inocente que mates.",
  ],
  image: "../static/vigilante.png",
};

/* TRAITORS */
const executioner: TerroristType = {
  id: "executioner",
  name: "Executioner",
  group: "traitor",
  description: [
    "Empezará con un objetivo fijado al que deberá matar. Cuando lo mate, recibirá uno nuevo.",
    "Penalización de 1 min si mata a otra persona que no es su objetivo.",
    "x2 de daño a su objetivo.",
    "/2 de daño al resto de jugador.",
  ],
  image: "../static/executioner.png",
};
const hitman: TerroristType = {
  id: "hitman",
  name: "Hitman",
  group: "traitor",
  description: [
    "Empezará con un objetivo fijado al que deberá matar. Cuando lo mate, recibirá un crédito y un nuevo objetivo.",
    "Empezarás sin créditos.",
    "Si mata a un objetivo diferente, no avisará de su rol al resto.",
  ],
  image: "../static/hitman.png",
};
const glutton: TerroristType = {
  id: "glutton",
  name: "Glutton",
  group: "traitor",
  description: [
    "Tiene un arma llamada Devour.",
    "Tiene una barra de hambre (mejora sus estadísticas) que al llegar a 0 cambiará el rol a Ravenous (equipo propio, deberá matar a todo el mundo), dejando un humo rojo y perdiendo todas sus armas.",
    "Con el Devour, su hambre aumentará haciendo daño (click izquierdo) o comiéndose cadáveres (click derecho).",
    "Aumento de velocidad de movimiento y regen sprint al sostener el Devour.",
  ],
  image: "../static/glutton.png",
};
const vampire: TerroristType = {
  id: "vampire",
  name: "Vampire",
  group: "traitor",
  description: [
    "No tiene tienda.",
    "Posibilidad de transformarse en murciélago (entra en modo sed de sangre).",
    "Entrarán en estado de sed de sangre si no matan a alguien en 1 minuto.",
    "Este estado hará que pierdan 1 hp cada 2s.",
    "Se cura un 50% de daño que produzca cuando el estado de sed de sangre está activado.",
    "Es importante asignar una tecla en el menú nuevo del TTT2 para poder usar el murciélago.",
  ],
  image: "../static/vampire.png",
};
const blight: TerroristType = {
  id: "blight",
  name: "Blight",
  group: "traitor",
  description: ["Envenenará a su atacante cuando muere."],
  image: "../static/blight.png",
};
const mesmerist: TerroristType = {
  id: "mesmerist",
  name: "Mesmerist",
  group: "traitor",
  description: ["Tiene un desfibrilador que convierte cadáveres en traidores."],
  image: "../static/mesmerist.png",
};
const accomplice: TerroristType = {
  id: "accomplice",
  name: "Accomplice",
  group: "traitor",
  description: [
    "Es un compañero de traidores.",
    "Los traidores sabrán quién es el cómplice, pero el no.",
    "No puede ganar solo.",
    "No tiene tienda.",
    "Tiene un radar de cuerpos.",
    "No puedes transferir créditos a los traidores.",
  ],
  image: "../static/accomplice.png",
};
const impostor: TerroristType = {
  id: "impostor",
  name: "Impostor",
  group: "traitor",
  description: [
    "No tiene tienda.",
    "Hace un 50 % menos de daño.",
    "Tiene un mordisco que mata de un golpe cada 45 s.",
    "Crea un sistema de escotillas (visibles para los jugadores que las vean abrir) que podrán usar todos los traidores.",
    "Tiene 4 sabotajes distintos.",
  ],
  image: "../static/impostor.png",
};
const haunted: TerroristType = {
  id: "haunted",
  name: "Haunted",
  group: "traitor",
  description: [
    "Si lo matan, su asesino dejará un rastro de humo.",
    "Si matan a su asesino, revivirá.",
    "PODRÁ HABLAR CUANDO REANIME.",
  ],
  image: "../static/haunted.png",
};
const imitator: TerroristType = {
  id: "imitator",
  name: "Imitator",
  group: "traitor",
  description: [
    "No tienes tienda ni botones de traidor.",
    "Obtienes una lista de roles de inocentes que puedes imitar.",
    "Cuando imitas sigues siendo del equipo de traidores.",
    "Cuando mueres tú cuerpo mostrará el rol que estás imitando.",
  ],
  image: "../static/imitator.png",
};
const arsonist: TerroristType = {
  id: "arsonist",
  name: "Arsonist",
  group: "traitor",
  description: [
    "Es un compañero del traidor.",
    "Tiene una Flare gun y un lanzallamas.",
    "Resiste al fuego.",
  ],
  image: "../static/arsonist.png",
};
const roider: TerroristType = {
  id: "roider",
  name: "Roider",
  group: "traitor",
  description: [
    "Su única fuente de daño es usando su Crowbar (100 de daño por golpe).",
  ],
  image: "../static/roider.png",
};
const ajin: TerroristType = {
  id: "ajin",
  name: "Ajin",
  group: "traitor",
  description: [
    "Obtendrá bonificaciones si es el último traidor en pie.",
    "Ganará velocidad, sprint regen y daño.",
    "Como bonus obtendrá vida extra, armadura y regeneración de vida.",
  ],
  image: "../static/ajin.png",
};
const blocker: TerroristType = {
  id: "blocker",
  name: "Blocker",
  group: "traitor",
  description: [
    "Prevent anyone to identify any body while they are still alive.",
    "Blocker is the only one who can identify corpses! Be careful!",
  ],
  image: "../static/blocker.png",
};
const defector: TerroristType = {
  id: "defector",
  name: "Defector",
  group: "traitor",
  description: [
    "Lanzará un defector jihad. Si algún inocente la recoge, se convertirá en Defector.",
    "El defector no puede hacer daño con las armas.",
  ],
  image: "../static/defector.png",
};
const shanker: TerroristType = {
  id: "shanker",
  name: "Shanker",
  group: "traitor",
  description: [
    "Tiene un radar gratuito y un cuchillo para asesinar por la espalda.",
    "El cuchillo solo hace instakill por la espalda.",
  ],
  image: "../static/shanker.png",
};

/* INNOCENTS */
const medium: TerroristType = {
  id: "medium",
  name: "Medium",
  group: "innocent",
  description: ["Puede leer el chat de los muertos."],
  image: "../static/medium.png",
};
const survivalist: TerroristType = {
  id: "survivalist",
  name: "Survivalist",
  group: "innocent",
  description: ["Es un superviviente con tienda propia."],
  image: "../static/survivalist.png",
};
const clairvoyant: TerroristType = {
  id: "clairvoyant",
  name: "Clairvoyant",
  group: "innocent",
  description: [
    "Es capaz de ver roles especiales (sin saber el rol).",
    "Si mata al jester, lo convertirá en sucompañero.",
  ],
  image: "../static/clairvoyant.png",
};
const trapper: TerroristType = {
  id: "trapper",
  name: "Trapper",
  group: "innocent",
  description: [
    "Es un inocente con capacidad de ver las trampas activadas.",
    "Podrá usar las rejillas del impostor, si las descubre, cada 30 segundos.",
  ],
  image: "../static/trapper.png",
};
const priest: TerroristType = {
  id: "priest",
  name: "Priest",
  group: "innocent",
  description: [
    "Tiene una holy deagle para convertir inocentes/detectives en sus seguidores (menos al sniffer).",
    "Disparar a un traidor con la deagle matará al priest.",
    "Si el priest es cambiado de rol, todos sus seguidores también.",
  ],
  image: "../static/priest.png",
};
const beacon: TerroristType = {
  id: "beacon",
  name: "Beacon",
  group: "innocent",
  description: [
    "Descubrir inocentes muertos aumentará sus estadísticas.",
    "Le aparecerá una bombilla en la cabeza cuando llegue al límite de sus características.",
    "Si mata a otro inocente se convertirá en inocente.",
    "Su rol, no puede ser robado por otros roles.",
  ],
  image: "../static/beacon.png",
};
const lycanthrope: TerroristType = {
  id: "lycanthrope",
  name: "Lycanthrope",
  group: "innocent",
  description: [
    "Su rol está oculto hasta que sea el último en pie (mejorarán sus estadísticas).",
  ],
  image: "../static/lycanthrope.png",
};
const spy: TerroristType = {
  id: "spy",
  name: "Spy",
  group: "innocent",
  description: [
    "Es un imitador de traidor.",
    "Tiene tienda de traidor para simular la compra de traidor.",
    "Los traidores ven al espía como un traidor.",
  ],
  image: "../static/spy.png",
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
  image: "../static/nova.png",
};
const pharaoh: TerroristType = {
  id: "pharaoh",
  name: "Pharaoh",
  group: "innocent",
  description: [
    "Tiene un ankh (debe colocarlo en el suelo para convertir en un traidor en graverobber).",
    "Si el Pharaoh muere y el ankh sigue en pie en su bando, se reanimará.",
    "El graverobber podrá robar el ankh y usarlo del mismo modo que el Pharaoh.",
    "El ankh cura a su dueño.",
    "El ankh puede ser roto por cualquier jugador.",
    "NO PODRÁ PROPORCIONAR INFORMACIÓN SOBRE OTROS ROLES CUANDO REANIME.",
  ],
  image: "../static/pharaoh.png",
};
const wrath: TerroristType = {
  id: "wrath",
  name: "Wrath",
  group: "innocent",
  description: [
    "No se descubre su rol hasta que muere.",
    "Si es matado por un inocente, revivirá como un traidor.",
    "SI PODRÁ PROPORCIONAR INFORMACIÓN CUANDO REANIME.",
  ],
  image: "../static/wrath.png",
};
const occultist: TerroristType = {
  id: "occultist",
  name: "Occultist",
  group: "innocent",
  description: [
    "Resucitará con inmunidad al fuego si no lo matas de un golpe (25 hp).",
    "NO PODRÁ PROPORCIONAR INFORMACIÓN SOBRE OTROS ROLES CUANDO REANIME.",
  ],
  image: "../static/occultist.png",
};
const spectre: TerroristType = {
  id: "spectre",
  name: "Spectre",
  group: "innocent",
  description: [
    "Maldecirá a su asesino con un rastro de humo.",
    "Cuando su asesino muere, el espectro reanimará.",
    "NO PODRÁ PROPORCIONAR INFORMACIÓN SOBRE OTROS ROLES CUANDO REANIME.",
  ],
  image: "../static/spectre.png",
};
const shinigami: TerroristType = {
  id: "shinigami",
  name: "Shinigami",
  group: "innocent",
  description: [
    "No se descubre su rol hasta que muere.",
    "Resucitará con 200 % de velocidad, un cuchillo y una lista de los traidores restantes.",
    "Pierde vida a lo largo del tiempo (no recuperable).",
    "NO PODRÁ HABLAR EL RESTO DE LA PARTIDA.",
  ],
  image: "../static/shinigami.png",
};
const oracle: TerroristType = {
  id: "oracle",
  name: "Oracle",
  group: "innocent",
  description: [
    "Al pulsar el tabulador, podrás ver una etiqueta amarilla sobre los roles de las personas.",
    "Entre 30 a 60 s recibirá un bando y un conjunto de nombres de dónde salió ese bando (tanto de personas vivas como muertas).",
    "NO PODRÁ DAR INFORMACIÓN DE OTROS JUGADORES AL RESTO.",
  ],
  image: "../static/oracle.png",
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
  description: [
    "Has a chance to be a traitor (50 %).",
    "Solo él sabe su rol.",
    "Si no es alertado en un mensaje arriba a la derecha o en el tabulador con un icono de cuchillo de que es traidor NO PODRÁ USAR LA TIENDA, YA QUE SUS SIEMPRE PUEDA ACCEDER A ELLA.",
  ],
  image: "../static/sus.png",
};
const sleeper: TerroristType = {
  id: "sleeper",
  name: "Sleeper",
  group: "innocent",
  description: [
    "Empieza siendo un inocente.",
    "Si todos los traidores mueren, se convertirá en traidor, solo él lo sabrá.",
  ],
  image: "../static/sleeper.png",
};
const guardian: TerroristType = {
  id: "guardian",
  name: "Guardian",
  group: "innocent",
  description: [
    "Puede usar su guardián deagle para dar vida temporalmente a un jugador.",
    "Sin embargo cuando este jugador es dañado mientras tiene esa vida temporal, el guardián también recibirá daño.",
  ],
  image: "../static/guardian.png",
};
const revenant: TerroristType = {
  id: "revenant",
  name: "Revenant",
  group: "innocent",
  description: [
    "Es un inocente que al morir se convertirá en un asesino neutral con un 50 % más de daño.",
  ],
  image: "../static/revenant.png",
};

/* NEUTRAL KILLERS */
const serialKiller: TerroristType = {
  id: "serialkiller",
  name: "Serial Killer",
  group: "neutral_killer",
  description: [
    "Aparece con un cuchillo y un tracker que le permite ver a través de las paredes.",
    "Tiene tienda propia, aunque no se le dan créditos por matar a jugadores, solamente si inspecciona el cadáver.",
  ],
  image: "../static/serialkiller.png",
};
const jackal: TerroristType = {
  id: "jackal",
  name: "Jackal / Chacal",
  group: "neutral_killer",
  description: [
    "Convierte a un jugador en su seguidor con el arma especial.",
    "Ellos dos deberán ganar la partida matando al resto de jugadores.",
    "Si el priest está en la partida y el jackal le convierte en seguidor, todos los componentes de la hermandad se convertirán en seguidores.",
  ],
  image: "../static/jackal.png",
};
const restless: TerroristType = {
  id: "restless",
  name: "Restless",
  group: "neutral_killer",
  description: [
    "Convierte a un jugador en su seguidor con el arma especial.",
    "Ellos dos deberán ganar la partida matando al resto de jugadores.",
    "Si el priest está en la partida y el jackal le convierte en seguidor, todos los componentes de la hermandad se convertirán en seguidores.",
  ],
  image: "../static/restless.png",
};
const doppelganger: TerroristType = {
  id: "doppelganger",
  name: "Doppelganger",
  group: "neutral_killer",
  description: [
    "Usando al 'e' podrá copiar el rol de otro jugador.",
    "Sin embargo, no cambiará su bando, el seguirá siendo un asesino neutral.",
    "La persona a la que le cambie el rol, se convertirá en amnésico.",
  ],
  image: "../static/doppelganger.png",
};
const necromancer: TerroristType = {
  id: "necromancer",
  name: "Necromancer",
  group: "neutral_killer",
  description: [
    "Tiene tienda propia.",
    "Tiene un desfibrilador con el que reanimar muertos y convertirlos en zombis.",
    "Para ganar el resto de los jugadores vivos deberán ser zombis.",
    "Si el necromancer muere, los zombis también.",
    "Los zombies son lentos y tienen una deagle de 7 disparos (cuando se quedan sin munición, mueren).",
  ],
  image: "../static/necromancer.png",
};
const infected: TerroristType = {
  id: "infected",
  name: "Infected",
  group: "neutral_killer",
  description: [
    "Mata a otros jugadores para infectarlos.",
    "Una vez son infectados renacen siendo infectados y deberán defender al jefe (si el jefe muere, todos los infectados mueren).",
    "Los infectados podrán matar al jester.",
  ],
  image: "../static/infected.png",
};
const duelist: TerroristType = {
  id: "duelist",
  name: "Duelist",
  group: "neutral_killer",
  description: [
    "El y otra persona son seleccionados como duelistas.",
    "Quién gane de los dos recibirá el rol de la persona que al principio no era duelista.",
    "Cuando acabe el duelo se curará al ganador.",
    "No podréis hacerle daño al resto de jugadores, ellos tampoco podrán haceros daño.",
  ],
  image: "../static/duelist.png",
};

/* NEUTRALS */
const bodyguard: TerroristType = {
  id: "bodyguard",
  name: "Bodyguard",
  group: "neutral",
  description: ["", ""],
  image: "../static/bodyguard.png",
};
const pirateCaptain: TerroristType = {
  id: "piratecaptain",
  name: "Pirate Captain",
  group: "neutral",
  description: [],
  image: "../static/piratecaptain.png",
};
const amnesiac: TerroristType = {
  id: "amnesiac",
  name: "Amnesiac",
  group: "neutral",
  description: [],
  image: "../static/amnesiac.png",
};
const drunk: TerroristType = {
  id: "drunk",
  name: "Drunk",
  group: "neutral",
  description: [],
  image: "../static/drunk.png",
};
const jester: TerroristType = {
  id: "jester",
  name: "Jester",
  group: "neutral",
  description: [],
  image: "../static/jester.png",
};
const clown: TerroristType = {
  id: "clown",
  name: "Clown",
  group: "neutral",
  description: [],
  image: "../static/clown.png",
};
const undecided: TerroristType = {
  id: "undecided",
  name: "Undecided",
  group: "neutral",
  description: [],
  image: "../static/undecided.png",
};
const thief: TerroristType = {
  id: "thief",
  name: "Thief",
  group: "neutral",
  description: [],
  image: "../static/thief.png",
};
const unknown: TerroristType = {
  id: "unknown",
  name: "Unknown",
  group: "neutral",
  description: [],
  image: "../static/unknown.png",
};
const medic: TerroristType = {
  id: "medic",
  name: "Medic",
  group: "neutral",
  description: [],
  image: "../static/medic.png",
};
const mimic: TerroristType = {
  id: "mimic",
  name: "Mimic",
  group: "neutral",
  description: [],
  image: "../static/mimic.png",
};
const marker: TerroristType = {
  id: "marker",
  name: "Marker",
  group: "neutral",
  description: [],
  image: "../static/marker.png",
};
const cupid: TerroristType = {
  id: "cupid",
  name: "Cupid",
  group: "neutral",
  description: [],
  image: "../static/cupid.png",
};
const liar: TerroristType = {
  id: "liar",
  name: "Liar",
  group: "neutral",
  description: [],
  image: "../static/liar.png",
};
const swapper: TerroristType = {
  id: "swapper",
  name: "Swapper",
  group: "neutral",
  description: [],
  image: "../static/swapper.png",
};
const ghost: TerroristType = {
  id: "ghost",
  name: "Ghost",
  group: "neutral",
  description: [],
  image: "../static/ghost.png",
};
const leech: TerroristType = {
  id: "leech",
  name: "Leech",
  group: "neutral",
  description: [],
  image: "../static/leech.png",
};

/* OTHER */
const graverobber: TerroristType = {
  id: "graverobber",
  name: "Graverobber",
  group: "other",
  description: [],
  image: "../static/graverobber.png",
};
const ravenous: TerroristType = {
  id: "ravenous",
  name: "Ravenous",
  group: "other",
  description: [],
  image: "../static/ravenous.png",
};
const deputy: TerroristType = {
  id: "deputy",
  name: "Deputy",
  group: "other",
  description: [],
  image: "../static/deputy.png",
};
const thrall: TerroristType = {
  id: "thrall",
  name: "Thrall",
  group: "other",
  description: [],
  image: "../static/thrall.png",
};
const sidekick: TerroristType = {
  id: "sidekick",
  name: "Sidekick",
  group: "other",
  description: [],
  image: "../static/sidekick.png",
};
const killerClown: TerroristType = {
  id: "killerclown",
  name: "Killer Clown",
  group: "other",
  description: [],
  image: "../static/killerclown.png",
};
const zombie: TerroristType = {
  id: "zombie",
  name: "Zombie",
  group: "other",
  description: [],
  image: "../static/zombie.png",
};
const lover: TerroristType = {
  id: "lover",
  name: "Lover",
  group: "other",
  description: [],
  image: "../static/lover.png",
};
const pirate: TerroristType = {
  id: "pirate",
  name: "Pirate",
  group: "other",
  description: [],
  image: "../static/pirate.png",
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
