import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wedding } from './entity/wedding.entity';
import { WeddingsService } from './weddings.service';
import { WeddingsController } from './weddings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Wedding])],
  controllers: [WeddingsController],
  providers: [WeddingsService],
})
export class WeddingsModule {}