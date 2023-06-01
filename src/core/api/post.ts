import { AxiosInstance } from 'axios';
import { PostCreationDto } from './dto';

export const PostApi = (instance: AxiosInstance) => ({
  async getAll(
    sort?: string,
    title?: string,
    // category?: string,
    currentPage?: number,
    pageLimit?: string,
  ) {
    const { data, headers } = await instance.get(
      `/posts?sort=${sort}&title=${title}&page=${currentPage}`,
    );

    return { data, headers };
  },
  async getOne(id: number) {
    const { data } = await instance.get(`/posts/${id}`);
    return data;
  },
  async getRecommended(categoryId: number) {
    const { data } = await instance.get(`/posts/recommended`, {
      params: { categoryId: categoryId },
    });
    return data;
  },
  async createComment(id: number, text: string) {
    const { data } = await instance.post(`/posts/${id}`, { text: text });
    return data;
  },
  async deleteComment(id: number) {
    const { data } = await instance.delete(`/posts/comment/${id}`);
    return data;
  },
  async getCategories() {
    const { data } = await instance.get(`/categories`);
    return data;
  },
  async createPost(dto: PostCreationDto) {
    const formData = new FormData();
    formData.append('image', dto.image ? dto.image : '');
    formData.append('title', dto.title);
    formData.append('text', dto.text);
    formData.append('categoryId', String(dto.categoryId));

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await instance.post('/posts', formData, config);
    return data;
  },
  async updatePost(dto: PostCreationDto, id: string) {
    const formData = new FormData();
    dto.image && formData.append('image', dto.image);
    dto.title && formData.append('title', dto.title);
    dto.text && formData.append('text', dto.text);
    dto.categoryId && formData.append('categoryId', String(dto.categoryId));

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await instance.patch(`/posts/${id}`, formData, config);
    return data;
  },
  async deletePost(id: string) {
    await instance.delete(`posts/${id}`);
  },
});
