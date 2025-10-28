import { type JSX } from "react";

export function Card({
  title
}: {
  title: string;
}): JSX.Element {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
