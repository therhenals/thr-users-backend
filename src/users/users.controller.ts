import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
        return await this.usersService.getById(id);
    }


    @Get('initial')
    async initialData() {
        return await this.usersService.initialData();

    }
}
