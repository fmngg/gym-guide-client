import { AxiosInstance } from 'axios';
import { ExerciseCreationDto } from './dto';

export const ExerciseApi = (instance: AxiosInstance) => ({
  async getAll(
    sort?: string,
    name?: string,
    difficulty?: number | string,
    equipment?: number | string,
    muscleGroup?: number | string,
    currentPage?: number,
    pageLimit?: string,
  ) {
    const { data, headers } = await instance.get(
      `/exercises?sort=${typeof sort === 'undefined' ? '' : sort}&name=${
        typeof name === 'undefined' ? '' : name
      }&difficulty=${difficulty === 0 ? '' : difficulty}&equipment=${
        equipment === 0 ? '' : equipment
      }&muscleGroup=${muscleGroup === 0 ? '' : muscleGroup}&page=${currentPage}`,
    );

    return { data, headers };
  },
  async getOne(id: number) {
    const { data } = await instance.get(`/exercises/${id}`);
    return data;
  },
  async getFilters() {
    const { data } = await instance.get(`/exercises/filters`);
    return data;
  },
  async addToFavourites(id: number) {
    const { data } = await instance.post(`exercises/${id}/favourite`);
    return data;
  },
  async deleteFromFavourites(id: number) {
    const { data } = await instance.delete(`exercises/${id}/favourite`);
    return data;
  },
  async rate(id: number, rating: number) {
    const { data } = await instance.post(`exercises/${id}/rate`, { rating: rating });
    return data;
  },
  async getEquipments() {
    const { data } = await instance.get(`/equipment`);
    return data;
  },
  async getDifficulties() {
    const { data } = await instance.get(`/difficulty`);
    return data;
  },
  async getMuscles() {
    const { data } = await instance.get(`/muscle-group`);
    return data;
  },
  async createExercise(dto: ExerciseCreationDto) {
    const formData = new FormData();
    formData.append('image', dto.image ? dto.image : '');
    formData.append('name', dto.name);
    formData.append('description', dto.description);
    formData.append('equipmentId', String(dto.equipmentId));
    formData.append('difficultyId', String(dto.difficultyId));
    formData.append('muscleGroupId', String(dto.muscleGroupId));

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await instance.post('/exercises', formData, config);
    return data;
  },
  async updateExercise(dto: ExerciseCreationDto, id: string) {
    const formData = new FormData();
    dto.image && formData.append('image', dto.image);
    dto.name && formData.append('name', dto.name);
    dto.description && formData.append('description', dto.description);
    dto.equipmentId && formData.append('equipmentId', String(dto.equipmentId));
    dto.difficultyId && formData.append('difficultyId', String(dto.difficultyId));
    dto.muscleGroupId && formData.append('muscleGroupId', String(dto.muscleGroupId));

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await instance.patch(`/exercises/${id}`, formData, config);
    return data;
  },
  async deleteExercise(id: string) {
    await instance.delete(`exercises/${id}`);
  },
});
