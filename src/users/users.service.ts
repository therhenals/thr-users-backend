import { HttpService, Injectable } from '@nestjs/common';
import { InjectDatastore } from '@hungtcs-box/nest-nedb';
import DataStore from 'nedb';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
    constructor(
        private httpService: HttpService,
        @InjectDatastore(UserModel) private readonly dataStore: DataStore<UserModel>
    ) { }

    async initialData() {
        try {
            const users = (await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise()).data;
            const newUsers = users.map((user: any) => {
                const { id, ...data } = user;
                return { _id: id, ...data };
            });
            this.dataStore.insert(newUsers);
        } catch (error) {

        }
    }

    getAll() {
        return this.dataStore.find({});
    }

    getById(id: string) {
        return this.dataStore.find({ _id: id });
    }
}
