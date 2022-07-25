import { UserModel } from './user.model';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
	imports: [SequelizeModule.forFeature([UserModel])],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
