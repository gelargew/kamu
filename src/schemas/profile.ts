import { z } from "zod";

const Profile = z.object({
	username: z.string().nullable(),
	email: z.string().email(),
  name: z.string().optional(),
  birthday: z.string().nullable().transform((value) => value ? new Date(value) : null),
  horoscope: z.string().optional(),
  zodiac: z.string().optional(),
  height: z.number().or(z.string().transform((value) => value ? parseInt(value) : null)).nullable(),
  weight: z.number().or(z.string().transform((value) => value ? parseInt(value) : null)).nullable(),
	interests: z.array(z.string()).catch([]),
  gender: z.enum(['male', 'female']).catch('male'),
});

const UpdateProfile = Profile.omit({ username: true, email: true })

type Profile = z.infer<typeof Profile>;
type UpdateProfile = z.infer<typeof UpdateProfile>;

export { Profile, UpdateProfile }