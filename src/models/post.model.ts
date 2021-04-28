import { Model } from '@hungtcs-box/nest-nedb';

export class PostModel extends Model {
  userId: string;
  title: string;
  body: string;
}