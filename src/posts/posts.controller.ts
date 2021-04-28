import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) { }

    @Get('initial')
    async initialData() {
        return await this.postsService.initialData();
    }

    @Get(':userId')
    getByUserId(@Param('userId') userId: string) {
        this.postsService.getByUserId(userId);
    }
}
