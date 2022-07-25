import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const getSequelizeConfig = async (
	configService: ConfigService,
): Promise<SequelizeModuleOptions> => ({
	dialect: 'postgres',
	host: 'localhost',
	port: configService.get('DB_PORT'),
	database: configService.get('DB_NAME'),
	username: configService.get('DB_USERNAME'),
	password: configService.get('DB_PASSWORD'),
	autoLoadModels: true,
	synchronize: true,
	logging: false,
});
