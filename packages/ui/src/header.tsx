import { type JSX } from "react";
import { Button } from "./button";

export function Header({
  appName
}: {
  appName: string;
}): JSX.Element {
  return (
    <header>
      <h1>{appName}</h1>
      <Button appName="docs">Click me</Button>
    </header>
  );
}
