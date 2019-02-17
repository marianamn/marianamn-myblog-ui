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
