import { useEffect, useState } from 'react';
export const loadImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfM615QbY86zRUSKdxwIvuX3t_KW6g2Dsgw&s';
export interface Address {
  street: string;
  suite: string;
  city: string;
}
export interface Company {
  name: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  company: Company;
}
const API_URL = 'https://jsonplaceholder.typicode.com';
function getUserApiUrl(userId?: string | number): string {
  return userId ? `${API_URL}/users/${userId}` : `${API_URL}/users`;
}
function useFetch<T>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Error');
        return res.json() as Promise<T>;
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
}
export const useUsers = () => {
  const { data, loading, error } = useFetch<User[]>(getUserApiUrl());
  return { users: data ?? [], loading, error };
};
export const useUser = (userId: string | number) => {
  const url = userId ? getUserApiUrl(userId) : null;
  const { data, loading, error } = useFetch<User>(url);
  return { user: data, loading, error };
};
