import { z } from "zod";

const Profile = z.object({
	username: z.string(),
	email: z.string().email(),
  name: z.string().optional(),
  birthday: z.string().transform((value) => new Date(value)).optional(),
  horoscope: z.string().optional(),
  zodiac: z.string().optional(),
  height: z.string().transform((value) => parseInt(value.toString())).or(z.number()).optional(),
  weight: z.string().transform((value) => parseInt(value.toString())).or(z.number()).optional(),
	interests: z.array(z.string()).catch([]),
  gender: z.enum(['male', 'female']).catch('male'),
});

const UpdateProfile = Profile.omit({ username: true, email: true })

type Profile = z.infer<typeof Profile>;
type UpdateProfile = z.infer<typeof UpdateProfile>;

export { Profile, UpdateProfile }