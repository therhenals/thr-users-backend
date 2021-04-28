import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

import { PostModel } from '../models/post.model';
import { NedbModule } from '@hungtcs-box/nest-nedb';

@Module({
  imports: [
    NedbModule.forFeature([
      {
        model: PostModel,
        filename: 'Posts.db',
      },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule { }
