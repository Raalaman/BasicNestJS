import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1623064742983 implements MigrationInterface {
    name = 'SchemaSync1623064742983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "description" TO "Example"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "Example" TO "description"`);
    }

}
