import { HttpModule, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UserModel } from '../models/user.model';
import { NedbModule } from '@hungtcs-box/nest-nedb';

@Module({
  imports: [
    HttpModule,
    NedbModule.forFeature([
      {
        model: UserModel,
        filename: 'Users.db',
        indexes: {
          username: {
            unique: true,
          },
          email: {
            unique: true,
          }
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
