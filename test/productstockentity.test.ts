/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { MockValueEntity } from "@kalix-io/testkit";
import { expect } from "chai";
import productstockentity from "../src/productstockentity";
import {com} from "../lib/generated/proto";


describe("ProductStockService", () => {
  const entityId = "entityId1";
  
  describe("Create", () => {
    it("should...", async () => {
      const entity = new MockValueEntity(productstockentity, entityId);
      const productId = "prod1";
      let quantity = 10;
      const createResult = await entity.handleCommand("Create",
          {
              productId: productId,
              quantity: quantity
          }
      );
      expect(entity.error).to.be.undefined;
      expect(createResult).to.deep.equals({});
      // @ts-ignore
      expect(entity.state.quantity).to.deep.equal(quantity);
    });
  });
});