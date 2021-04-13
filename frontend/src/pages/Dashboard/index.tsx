import { useEffect, useState } from 'react';
import { CarList } from './styles';
import api from '../../services/api';

interface Cars {
  _id: number;
  thumbnail: string;
  thumbnail_url: string;
  model: string;
  category: string;
  brand: string;
  price: number;
  options: [string];
}

export default function Dashboard() {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    async function loadCars() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });

      setCars(response.data);
    }
    loadCars();
  }, []);
  return (
    <CarList>
      {cars.map(car => (
        <li key={car._id}>
          <header style={{ backgroundImage: `url(${car.thumbnail_url})` }} />
          <strong>{car.category}</strong>
          <span>{car.price ? `R$${car.price}/dia` : 'CONSULTE'}</span>
        </li>
      ))}
    </CarList>
  );
}
