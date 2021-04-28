import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NedbModule } from '@hungtcs-box/nest-nedb';
import { PostsModule } from './posts/posts.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    NedbModule.forRoot('./db'),
    UsersModule,
    PostsModule,
    LogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
