import { getJwtConfig } from '../config/jwt.config';
import { JwtStrategy } from './strategies/auth.strategy';
import { UserModel } from './user.model';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig,
		}),
		SequelizeModule.forFeature([UserModel]),
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
})
export class UserModule {}
