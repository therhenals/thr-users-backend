import { Injectable } from '@nestjs/common';
import { InjectDatastore } from '@hungtcs-box/nest-nedb';
import DataStore from 'nedb';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectDatastore(UserModel) private readonly dataStore: DataStore<UserModel>
    ) { }

    getAll() { }

    getById() { }
}
