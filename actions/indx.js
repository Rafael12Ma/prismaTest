'use server'

import { db } from "@/lib/db"
import { Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache"

//this code it just seeded the data i want to already exist on my database , it is used for display. I can avoid it

export async function seedDb() {
    await db.post.createMany({
        data: [
            { email: "rafaelmaroufidis@yahoo.com" },
            { email: "aspasula@gmail.com" },
            { email: "example@hotmail.com" }
        ],
        skipDuplicates: true,
    })
    console.log("[indx] Data seeded successfully✅")
}



export async function createPost(prevState, formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        await db.post.create({
            data: { email, password }
        });

        console.log("Data inserted successfully");
        revalidatePath("/prism", "layout");
        return { success: true, message: "Post created sucessfully✅" };

    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return {
                success: false,
                message: "This email is already registered!"
            };
        }

        return {
            success: false,
            message: "An unexpected error occurred. Please try again."
        };
    }
}


export async function getPosts() {
    const posts = await db.post.findMany();
    return posts
}

export async function getPost(prevState, formData) {
    const email = formData.get("one")
    const post = await db.post.findUnique({
        where: {
            email: email
        }
    });
    if (post) {
        return { success: true, message: "Found!", post }
    } else {
        return { success: false, message: "Post not found." }
    }
}

export async function DeletePost(prevState, formData) {
    const id = Number(formData.get("id"))

    try {
        await db.post.delete({
            where: { id }
        });
        console.log("Post deleted successfully!")
        revalidatePath("/prism", "layout");
        return { type: 'delete', success: true, message: "Post deleted successfully✅" };

    } catch (error) {
        return { success: false, message: "Error deleting post. It may not exist." };
    } finally {

    }
}



