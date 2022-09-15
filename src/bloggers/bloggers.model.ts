import { Column, DataType, Model, Table } from "sequelize-typescript";

interface BloggersCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: "bloggers" })
export class Blogger extends Model<Blogger, BloggersCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: true})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}