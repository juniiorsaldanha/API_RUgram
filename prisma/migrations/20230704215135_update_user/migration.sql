/*
  Warnings:

  - Added the required column `urlAvatar` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "urlAvatar" TEXT NOT NULL;
