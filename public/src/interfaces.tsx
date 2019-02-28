export interface SocialMediaLinks {
  readonly facebook: string;
  readonly twitter: string;
  readonly instagram: string;
}

export interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: string;
  readonly picture: string;
  readonly isDeleted: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface Comment {
  readonly author: User;
  readonly content: string;
  readonly createdAt: string;
}

export interface Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly category: string;
  readonly tags: ReadonlyArray<string>;
  readonly author: User;
  readonly likes: number;
  readonly dislikes: number;
  readonly picture: string;
  readonly pictures: ReadonlyArray<string>;
  readonly isDeleted: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
}
