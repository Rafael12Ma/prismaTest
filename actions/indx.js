'use server'

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function seedDb() {
    await prisma.post.createMany({
        data: [
            { email: "rafaelmaroufidis@yahoo.com" },
            { email: "aspasula@gmail.com" },
            { email: "example@hotmail.com" }
        ]
    })
    console.log("[indx] Data seeded successfully✅")
}



export async function createPost(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    await prisma.post.create({
        data: {
            email: email,
            password: password
        }
    })
    console.log("Data inserted successfully✅")
    revalidatePath("/prism", "layout")
}


export async function getPosts() {
    const posts = await prisma.post.findMany();
    return posts
}

export async function DeletePost(postid) {

}