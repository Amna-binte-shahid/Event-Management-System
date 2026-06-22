import { 
  IsString, 
  IsNotEmpty, 
  IsEmail, 
  IsOptional, 
  IsNumber, 
  IsEnum, 
  IsArray, 
  IsDateString 
} from 'class-validator';

export class CreateWeddingDto {
  @IsString()
  @IsNotEmpty()
  brideName: string;

  @IsString()
  @IsNotEmpty()
  groomName: string;

  @IsDateString()
  @IsNotEmpty()
  weddingDate: Date;

  @IsString()
  @IsOptional()
  venue?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  estimatedGuests?: number;

  @IsNumber()
  @IsOptional()
  budget?: number;

  @IsEnum(['planning', 'confirmed', 'completed', 'cancelled'])
  @IsOptional()
  status?: string;

  @IsEmail()
  @IsOptional()
  contactEmail?: string;

  @IsString()
  @IsOptional()
  contactPhone?: string;

  @IsString()
  @IsOptional()
  specialRequests?: string;

  @IsString()
  @IsOptional()
  Superior?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  services?: string[];
}