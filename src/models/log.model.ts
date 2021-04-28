import { Model } from '@hungtcs-box/nest-nedb';

export class LogModel extends Model {
  date: string;
  ip: string;
  type: string;
}