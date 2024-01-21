import { z } from "zod";

const Login = z.object({
  username: z.string().min(4, { message: 'Username is required' }),
  email: z.string().email().min(4, { message: 'Email is required' }),
  password: z.string().min(8, { message: 'Password must be more than 8 characters' }),
});

const Register = z.object({
  username: z.string().min(4, { message: 'Username/email is required' }),
  email: z.string().email().min(4, { message: 'Email is required' }),
  password: z.string().min(8, { message: 'Password must be more than 8 characters' }),
  confirm_password: z.string().min(8, { message: 'Password must be more than 8 characters' })
}).superRefine(({ confirm_password, password }, ctx) => {
  if (confirm_password !== password) {
    ctx.addIssue({
      code: 'custom',
      message: 'Password does not match!',
      path: ['confirm_password']
    })
  }
})


type Login = z.infer<typeof Login>;
type Register = z.infer<typeof Register>;

export { Login, Register }