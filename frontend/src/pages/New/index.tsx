import { useState, useMemo, FormEvent } from 'react';
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import { ThumbnailStyle } from './styles';

export default function New({ history }: any) {
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState<any>(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('category', category);
    data.append('price', price);
    data.append('options', options);

    await api.post('/cars', data, {
      headers: { user_id },
    });

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <ThumbnailStyle>
        <label style={{ backgroundImage: `url(${preview})` }}>
          <input
            type="file"
            onChange={event => setThumbnail(event.target.files?.[0])}
          />
          <img src={camera} alt="Upload de imagem" />
        </label>
      </ThumbnailStyle>

      <label htmlFor="category">CATEGORIA *</label>
      <input
        id="category"
        placeholder="Qual a categoria do veículo ?"
        value={category}
        onChange={event => setCategory(event.target.value)}
      />
      <label htmlFor="options">
        OPCIONAIS * <span>(separadas por vírgula)</span>
      </label>
      <input
        id="options"
        placeholder="Qual os opcionais do veículo ? Ex: Automático, Airbag..."
        value={options}
        onChange={event => setOptions(event.target.value)}
      />
      <label htmlFor="price">
        VALOR DA DIÁRIA *
        <span> (em branco para CONSULTE com o proprietário)</span>
      </label>
      <input
        id="price"
        placeholder="Qual o valor cobrado por dia ? "
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
