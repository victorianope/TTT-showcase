export type TerroristGroups =
  | "detective"
  | "innocent"
  | "neutral"
  | "neutral_killer"
  | "other"
  | "traitor";

export interface TerroristType {
  id: string;
  name: string;
  group: TerroristGroups;
  description: Array<string>;
  image: string;
}
