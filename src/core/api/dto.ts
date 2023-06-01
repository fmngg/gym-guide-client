export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  img?: any;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  comments: CommentDto[];
  createdAt: string;
  email: string;
  favourites: { id: number; userId: number };
  id: number;
  img: string | null;
  name: string;
  password: string;
  rating: { createdAt: string; exerciseId: number; id: number; rate: number; userId: number }[];
  role: 'USER' | 'ADMIN';
  updatedAt: string;
}

export interface PostsDto {
  [index: number]: PostDto;
  [x: string]: any;
  posts: PostDto[];
}

export interface PostDto {
  id: number;
  title: string;
  text: string;
  image: string;
  views: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  comments: CommentDto[];
  category: Сharacteristic;
}

export interface PostCreationDto {
  title: string;
  text: string;
  image: string | null;
  categoryId: number;
}

export interface CommentDto {
  id: number;
  text: string;
  userId: number;
  userName: string;
  userImage: string;
  postId: number;
  createdAt: string;
}

export interface ExercisesDto {
  [index: number]: ExerciseDto;
  [x: string]: any;
  exercises: ExerciseDto[];
}

export interface ExerciseDto {
  id: number;
  name: string;
  description: string;
  image: string;
  avgRating: number;
  views: number;
  recommended: string;
  difficultyId: number;
  equipmentId: number;
  muscleGroupId: number;
  createdAt: string;
  updatedAt: string;
  difficulty: Сharacteristic;
  equipment: Сharacteristic;
  muscleGroup: Сharacteristic;
  rating: { id: number; rate: number; userId: number; exerciseId: number; createdAt: string }[];
}

export interface ExerciseCreationDto {
  name: string;
  description: string;
  image: string | null;
  equipmentId: number;
  difficultyId: number;
  muscleGroupId: number;
}

export interface Сharacteristic {
  [index: number]: ExerciseDto;
  [x: string]: any;
  id: number;
  name: string;
}
