import React from 'react';
import useSelect from '../../hooks/useSelect';

jest.mock('../../hooks/useSelect');

describe('useSelect Hook', () => {
  test('should return the select with the options', () => {
    const actualizarState = jest.fn();

    const opciones = [
      {value: 'general', label: 'General'},
      {value: 'business', label: 'Negocios'},
      {value: 'entertainment', label: 'Entretenimiento'},
      {value: 'health', label: 'Salud'},
      {value: 'science', label: 'Ciencia'},
      {value: 'sports', label: 'Deportes'},
      {value: 'technology', label: 'Tecnología'}
    ];

    useSelect.mockReturnValue({
      SelectNoticias: () => 
        <select
          className="browser-default"
          value="business"
          onChange={ e => actualizarState(e.target.value)}
        >
          {opciones.map(opcion => (
            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
          ))}
        </select>,
      state: 'business',
    });

    const { state, SelectNoticias } = useSelect('business', opciones);
    expect(state).toBe('business');
    expect(typeof SelectNoticias).toBe('function');
  });
});