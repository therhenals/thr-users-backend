import { Injectable, HttpService } from '@nestjs/common';
import { InjectDatastore } from '@hungtcs-box/nest-nedb';
import DataStore from 'nedb';
import { PostModel } from '../models/post.model';

@Injectable()
export class PostsService {
    constructor(
        private httpService: HttpService,
        @InjectDatastore(PostModel) private readonly dataStore: DataStore<PostModel>
    ) { }

    async initialData() {
        try {
            const posts = (await this.httpService.get('https://jsonplaceholder.typicode.com/posts').toPromise()).data;
            const newPosts = posts.map((post: any) => {
                const { id, ...data } = post;
                return { _id: id, ...data };
            });
            this.dataStore.insert(newPosts);
        } catch (error) {

        }
    }

    getByUserId(userId: string) {
        return this.dataStore.find({ userId: userId });
    }
}
