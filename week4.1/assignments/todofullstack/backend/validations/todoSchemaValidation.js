const {z} = require("zod");

const todoPostSchema = z.object({
    title: z.string().min(4).max(50),
    description: z.string().min(5).max(200)
})

module.exports = todoPostSchema;