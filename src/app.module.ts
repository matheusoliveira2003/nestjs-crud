import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
