import { userProfile, userUpdateInterest } from "@/app/actions";
import { BackButton } from "@/components/ui/button";
import { CreatableInput } from "@/components/ui/creatableInput";

export default async function Page() {
  const {interests, ...profile} = await userProfile()
  const formAction = userUpdateInterest.bind(null, profile)
  return (
    <main className="ybg-radial container min-h-[100dvh] py-9" >
      <form action={formAction} >
        <div className="flex justify-between items-center mb-20">
          <BackButton />
          <button className="ybg-radial-dark text-sm font-semibold">Save</button>
        </div>
        <h2 className="ybg-radial-golden font-bold text-sm mb-3" >Tell everyone about yourself</h2>
        <h1 className="font-bold text-xl mb-9" >What interest you?</h1>
        <CreatableInput name='interests' defaultValues={interests.map(int => ({value: int, label: int}))} />
      </form>
    </main>
  )
}