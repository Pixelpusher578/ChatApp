const z=require("zod")
const createUserschema= z.object({
    FirstName:z.string({
        required_error:"FirstName is required",
        invalid_type_error:'FirstName should be a string'

    }).min(2,"FirstName should be more than 2 character").max(20),

    LastName:z.string({
        required_error:"LastName is required",
        invalid_type_error:'LastName should be a string'

    }).min(2,"LastName should be more than 2 character").max(20),

    PhoneNum: z.string({
        required_error: "PhoneNum is required",
        invalid_type_error: "PhoneNum should be a string"
    })
        .min(6, "PhoneNum should be at least 6 digits")
        .max(20, "PhoneNum should be at most 20 digits")
        .regex(/^\d+$/, "PhoneNum should only contain digits"),



    e_mail:z.string().min(6,{message:"email must be more than 6 caractere"}).max(40,{message:"email must be less than 40 caractere"}).email(),
    Password:z.string().min(6,{message:"Password must be more than 6 caractere"}).max(40,{message:"Password must be less than 40 caractere"})
})
const loginschema= z.object({
    e_mail:z.string().min(6,{message:"email must be more than 6 caractere"}).max(40,{message:"email must be less than 40 caractere"}).email(),
    Password:z.string().min(6,{message:"Password must be more than 6 caractere"}).max(40,{message:"Password must be less than 40 caractere"})

})



module.exports = { createUserschema ,loginschema,productschema};
