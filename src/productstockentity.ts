/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import {ValueEntity, Reply} from "@kalix-io/kalix-javascript-sdk";
import { ProductStockService } from "../lib/generated/productstockentity";

import {GrpcStatus} from "@kalix-io/kalix-javascript-sdk";

const entity: ProductStockService = new ValueEntity(
  [
    "productstock/productstock_domain.proto",
    "productstock/productstock_api.proto"
  ],
  "com.example.shoppingcart.productstock.ProductStockService",
  "product-stock",
  {
    includeDirs: ["./proto"]
  }
);

const ProductStock = entity.lookupType("com.example.shoppingcart.productstock.ProductStock");

entity.setInitial(entityId => ProductStock.create({}));

entity.setCommandHandlers({
  Create(command, state, ctx) {
    if(state.quantity == 0) {
      ctx.updateState(ProductStock.create({quantity: command.quantity}));
      return Reply.message({});
    }
    return Reply.failure("Already created");
  },
  Get(command, state, ctx) {
    if(state.quantity == 0)
      return Reply.failure("Not found", GrpcStatus.NotFound);
    return Reply.message(state);
  },
  Update(command, state, ctx) {
    if(state.quantity == 0) {
      return Reply.failure("Not found", GrpcStatus.NotFound);
    }
    state.quantity = command.quantity;
    ctx.updateState(state);
    return Reply.message({});
  },
  Delete(command, state, ctx) {
    if(state.quantity == 0) {
      return Reply.failure("Not found", GrpcStatus.NotFound);
    }
    state = ProductStock.create({});
    ctx.updateState(state);
    return Reply.message({});
  }
});

export default entity;
