import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wedding } from './entity/wedding.entity';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@Injectable()
export class WeddingsService {
  constructor(
    @InjectRepository(Wedding)
    private weddingsRepository: Repository<Wedding>,
  ) {}

  // Create a new wedding
  async create(createWeddingDto: CreateWeddingDto): Promise<Wedding> {
    const wedding = this.weddingsRepository.create(createWeddingDto);
    return await this.weddingsRepository.save(wedding);
  }

  // Get all weddings
  async findAll(): Promise<Wedding[]> {
    return await this.weddingsRepository.find({
      order: { weddingDate: 'ASC' }
    });
  }

  // Get a single wedding by ID
  async findOne(id: string): Promise<Wedding> {
    const wedding = await this.weddingsRepository.findOne({ 
      where: { id } 
    });
    
    if (!wedding) {
      throw new NotFoundException(`Wedding with ID ${id} not found`);
    }
    
    return wedding;
  }

  // Update a wedding
  async update(id: string, updateWeddingDto: UpdateWeddingDto): Promise<Wedding> {
    const wedding = await this.findOne(id);
    
    Object.assign(wedding, updateWeddingDto);
    
    return await this.weddingsRepository.save(wedding);
  }

  // Delete a wedding
  async remove(id: string): Promise<void> {
    const wedding = await this.findOne(id);
    await this.weddingsRepository.remove(wedding);
  }

  // Get weddings by status
  async findByStatus(status: string): Promise<Wedding[]> {
    return await this.weddingsRepository.find({
      where: { status },
      order: { weddingDate: 'ASC' }
    });
  }

  // Get upcoming weddings
  async findUpcoming(): Promise<Wedding[]> {
    const today = new Date();
    return await this.weddingsRepository
      .createQueryBuilder('wedding')
      .where('wedding.weddingDate >= :today', { today })
      .orderBy('wedding.weddingDate', 'ASC')
      .getMany();
  }
}