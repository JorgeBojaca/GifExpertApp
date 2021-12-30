import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas para el componente AddCategory', () => {
  const addCategory = jest.fn(); //Forma de crear una función para poder hacerle seguimiento
  let wrapper = shallow(<AddCategory addCategory={addCategory} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategory addCategory={addCategory} />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe cambiar el input al escribir en el', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Bojacá' } });
    const inpText = wrapper.find('input').prop('value');
    expect(inpText).toBe('Bojacá');
  });
  test('No debe llamar a addCategory si no se escribe nada en el input ', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    expect(addCategory).not.toHaveBeenCalled();
  });
  test('Debe de llamar a addCategory y limpiar la caja de texto ', async () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Bojacá' } });

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });

    expect(addCategory).toHaveBeenCalled();

    expect(input.prop('value')).toBe('');
  });
});
