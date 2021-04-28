import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class PostsService {
    constructor(
        private httpService: HttpService
    ) { }

    async getByUserId(userId: string) {
        const posts = (await this.httpService.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).toPromise()).data;
        return posts;
    }
}
