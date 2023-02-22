// import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[ TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456a@',
        database: 'tbl_movies',
        entities: [],
        synchronize: true,})],
    
})
export class AppModule{

}