import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(
        private httpService: HttpService
    ) { }

    async initialData() {
        try {
            const users = (await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise()).data;
            return users;
        } catch (error) {

        }
    }

    async getAll() {
        const users = (await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise()).data;
        return users;
    }

    async getById(id: string) {
        const user = (await this.httpService.get(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise()).data;
        return user;

    }
}
