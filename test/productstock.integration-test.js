import { IntegrationTestkit } from "@kalix-io/testkit";

const testkit = new IntegrationTestkit();

import {expect} from "chai"

import productstockentity from "../src/productstockentity";

testkit.addComponent(productstockentity);

function client() {
    return testkit.clients.ProductStockService;
}

describe("ProductStockService",  function () {
    this.timeout(60000);

    before(done => testkit.start(done));
    after(done => testkit.shutdown(done));

    it("Create", async () => {
        const productId = "prod1";
        let quantity = 1;
        await client().createAsync({productId: productId, quantity: quantity});

        const get = await client().getAsync({productId: productId});
        expect(get.quantity).to.deep.equal(quantity);
    });
})