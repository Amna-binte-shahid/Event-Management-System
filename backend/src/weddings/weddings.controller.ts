import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete,
  Query,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@Controller('weddings')
export class WeddingsController {
  constructor(private readonly weddingsService: WeddingsService) {}

  // POST /weddings - Create a new wedding
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createWeddingDto: CreateWeddingDto) {
    return this.weddingsService.create(createWeddingDto);
  }

  // GET /weddings - Get all weddings
  @Get()
  findAll(@Query('status') status?: string) {
    if (status) {
      return this.weddingsService.findByStatus(status);
    }
    return this.weddingsService.findAll();
  }

  // GET /weddings/upcoming - Get upcoming weddings
  @Get('upcoming')
  findUpcoming() {
    return this.weddingsService.findUpcoming();
  }

  // GET /weddings/:id - Get a single wedding
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weddingsService.findOne(id);
  }

  // PATCH /weddings/:id - Update a wedding
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateWeddingDto: UpdateWeddingDto
  ) {
    return this.weddingsService.update(id, updateWeddingDto);
  }

  // DELETE /weddings/:id - Delete a wedding
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.weddingsService.remove(id);
  }
}
