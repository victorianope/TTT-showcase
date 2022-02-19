import { CSSProperties, FC, ReactNode } from "react";

export const nofunc = (_: never): void => {};
export const nopfunc = (): void => {};

export interface ComponentProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  style?: CSSProperties;
}

export type Component<T extends ComponentProps = ComponentProps> = FC<T>;
