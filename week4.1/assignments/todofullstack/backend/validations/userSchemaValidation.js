const {z} = require("zod");

const userSignUpSchema = z.object({
    email : z.email(),
    password: z.string().min(3),
    username: z.string().min(5).max(50)
})

const userSignInSchema = z.object({
    email : z.email(),
    password: z.string().min(5)
})

module.exports = {
    userSignInSchema,
    userSignUpSchema
}