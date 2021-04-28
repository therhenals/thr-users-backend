import { HttpModule, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule { }
