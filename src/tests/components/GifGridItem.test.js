import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas componente <GifGridItem/>", () => {
  const title = "Titulo test";
  const url = "https://test/image.jpg";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un parrafo con el title", () => {
    const titleComponent = wrapper.find("p").text().trim();
    expect(titleComponent).toBe(title);
  });

  test("Debe tener una imagen con las props url y title ", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("div debe tener class animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
  });
});
