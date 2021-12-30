import getGifs from "../../helpers/getGifs";

describe("Pruebas para getGifs", () => {
  test("Debe retornar 12 elementos (async)", async () => {
    const imgs = await getGifs("giphy");
    expect(imgs.length).toBe(12);
  });
  test("Debe retornar 0 elementos al no pasar parámetro", async () => {
    const imgs = await getGifs();
    expect(imgs.length).toBe(0);
  });
  test("Debe retornar 12 elementos (promise)", (done) => {
    getGifs("a").then((data) => {
      expect(data.length).toBe(12);
      done();
    });
  });
});
