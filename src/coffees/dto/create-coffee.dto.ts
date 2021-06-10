import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/* CreateCoffeeDto */
export class CreateCoffeeDto {
  @IsString()
  @ApiProperty({ description: 'The name of a coffee.' })
  readonly name: string;
  @IsString()
  @ApiProperty({ description: 'The brand of a coffee.' })
  readonly brand: string;
  @IsString({ each: true })
  @ApiProperty({ description: 'The flavors of a coffee.' })
  readonly flavors: string[];
}
