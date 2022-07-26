import { MovieDto } from './movie.dto';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get()
	async findAll(@Query('searchTerm') searchTerm?: string) {
		return this.movieService.findAll(searchTerm);
	}

	@Get(':id')
	async findOneById(@Param('id') id: string) {
		return this.movieService.findOneById(+id);
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return this.movieService.create();
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Param('id') id: string, @Body() dto: MovieDto) {
		return this.movieService.update(+id, dto);
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.movieService.delete(+id);
	}
}
