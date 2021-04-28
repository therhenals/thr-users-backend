import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) { }

    @Get(':userId')
    async getByUserId(@Param('userId') userId: string) {
        return await this.postsService.getByUserId(userId);
    }
}
