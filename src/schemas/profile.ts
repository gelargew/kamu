import { z } from "zod";

const Profile = z.object({
	username: z.string(),
	email: z.string().email(),
  name: z.string(),
  birthday: z.string().optional(),
  horoscope: z.string().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
	interests: z.array(z.string()),
});

type Profile = z.infer<typeof Profile>;

export { Profile }