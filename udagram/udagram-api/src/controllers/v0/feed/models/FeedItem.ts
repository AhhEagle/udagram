// import { UpdatedAt } from "sequelize-typescript";

import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType
} from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table
export class FeedItem extends Model<FeedItem> {
  @Column({
    type: DataType.STRING
  })
  public caption: string;

  @Column({
    type: DataType.STRING
  })
  public url: string;

  @Column({
    type: DataType.DATE
  })
  @CreatedAt
  public createdAt: Date = new Date();

  @Column({
    type: DataType.DATE
  })
  @UpdatedAt
  public updatedAt: Date = new Date();
}
// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// const User = sequelize.define(
//   "User",
//   {
//     // Model attributes are defined here
//     caption: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     url: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     },
//     createdAt: {
//       type: DataTypes.DATE
//       // allowNull defaults to true
//     },
//     updatedAt: {
//       type: DataTypes.DATE
//       // allowNull defaults to true
//     }
//   },
//   {
//     // Other model options go here
//   }
// );

// module.exports = User;
