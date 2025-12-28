/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_email_key" ON "Post"("email");
