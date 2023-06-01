import { AxiosInstance } from 'axios';
import { AuthResponse, LoginDto, RegisterDto } from './dto';

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: RegisterDto) {
    const formData = new FormData();
    formData.append('img', dto.img);
    formData.append('name', dto.name);
    formData.append('email', dto.email);
    formData.append('password', dto.password);

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await instance.post('/auth/register', formData, config);
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },
  async getMe() {
    const { data } = await instance.get('/users/me');
    return data;
  },
  async getFavourites() {
    const { data } = await instance.get('/users/me/favourites');
    return data;
  },
});
