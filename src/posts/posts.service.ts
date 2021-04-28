import { Injectable } from '@nestjs/common';
import { InjectDatastore } from '@hungtcs-box/nest-nedb';
import DataStore from 'nedb';
import { PostModel } from '../models/post.model';

@Injectable()
export class PostsService {
    constructor(
        @InjectDatastore(PostModel) private readonly dataStore: DataStore<PostModel>
    ) { }

    getAll() { }

    getById() { }
}
