/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { Kalix } from "@kalix-io/kalix-javascript-sdk";
import generatedComponents from "../lib/generated/index";

const server = new Kalix();

// This generatedComponents array contains all generated Actions, Views or Entities,
// and is kept up-to-date with any changes in your protobuf definitions.
// If you prefer, you may remove this line and manually register these components.
generatedComponents.forEach((component) => {
  server.addComponent(component);
});

server.start();
