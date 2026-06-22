import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('weddings')
export class Wedding {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brideName: string;

  @Column()
  groomName: string;

  @Column({ type: 'date' })
  weddingDate: Date;

  @Column({ nullable: true })
  venue: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  estimatedGuests: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  budget: number;

  @Column({ 
    type: 'enum', 
    enum: ['planning', 'confirmed', 'completed', 'cancelled'],
    default: 'planning'
  })
  status: string;

  @Column({ nullable: true })
  contactEmail: string;

  @Column({ nullable: true })
  contactPhone: string;

  @Column({ type: 'text', nullable: true })
  specialRequests: string;

  @Column({ nullable: true })
  Superior: string;

  @Column({ type: 'simple-array', nullable: true })
  services: string[]; // e.g., ['photography', 'catering', 'decoration']

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}