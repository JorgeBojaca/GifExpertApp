import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Prueba para componente GifGridItem", () => {
  const title = "Título de prueba";
  const url = "http://localhost/imagen.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un párrafo con el texto de la prop title ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe tener una img con las propiedades src=$url y alt=$title ", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener la clase 'animated__fadeIn'", () => {
    const div = wrapper.find("div");
    const classText = div.prop("className").split(" ");
    const hasClass = classText.includes("animated__fadeIn");
    expect(hasClass).toBe(true);
  });
});
