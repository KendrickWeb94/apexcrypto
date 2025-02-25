import { SignUp } from "@clerk/nextjs";
import PrimaryText from "@/components/ui/primary-text";
import Link from "next/link";
import GoBackButton from "@/components/ui/go-back";

export default function Page() {
  return (
    <main>
      <div className="w-full relative h-screen flex items-center justify-center">
        <GoBackButton />
        <div className="relative  ds:pt-[40rem] sm:pt-64   items-center justify-center flex flex-col h-screen space-y-5 z-30">
          <div className="flex text-center justify-center flex-wrap items-center gap-2">
            Already have an account? please
            <PrimaryText>
              <Link href={"/sign-in"}>login in instead</Link>
            </PrimaryText>
          </div>
          <div className="">
            <SignUp afterSignOutUrl={"/"} afterSignInUrl="/dashboard" />
          </div>
        </div>
      </div>
    </main>
  );
}
