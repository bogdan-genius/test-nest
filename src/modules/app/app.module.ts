import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config/dist'
import configurations from 'src/configurations'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../user/modeles/user.model'
import { UserModule } from '../user/user.module'
import { AuthModule } from './../auth/auth.module'
import { TokenModule } from '../token/token.module'
import { Watchlist } from '../watchlist/models/watchlist.model'
import { WatchlistModule } from '../watchlist/watchlist.module'
import { AistaModule } from "../aista/aista.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configurations],
		}),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				dialect: 'postgres',
				host: configService.get('db_host'),
				port: configService.get('db_port'),
				username: configService.get('db_user'),
				password: configService.get('db_password'),
				database: configService.get('db_name'),
				synchronize: true,
				autoLoadModels: true,
				models: [User, Watchlist],
			}),
		}),
		UserModule,
		AuthModule,
		AistaModule,
		TokenModule,
		WatchlistModule,
	],

	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
