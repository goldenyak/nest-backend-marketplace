import { Inject, Injectable } from "@nestjs/common";
import { CreateBloggersDto } from "../users/dto/create-bloggers.dto";
import { Blogger } from "./bloggers.model";

@Injectable()
export class BloggersService {
//   constructor(@Inject(Blogger) private readonly userRepository: typeof Blogger) {
//   }
//
//   async createBloggers(dto: CreateBloggersDto) {
// const user = this.userRepository.create(dto)
//   }
//
//   async getAllUsers() {
//
//   }

}
