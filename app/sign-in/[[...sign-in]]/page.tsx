import { SignIn } from "@clerk/nextjs";

import PrimaryText from "@/components/ui/primary-text";
import Link from "next/link";
import GoBackButton from "@/components/ui/go-back";

const Page: React.FC = () => {
  return (
    <main>

      <div className="w-full h-screen relative flex items-center justify-center">
        <GoBackButton />
        <div className="relative ds:mt-[20rem] sm:mt-24 items-center justify-center flex flex-col h-screen space-y-5 z-30">
        <div className="flex text-center justify-center flex-wrap items-center gap-2">
            Don&apos;t have an account? simply
            <PrimaryText>
              <Link href={"/sign-up"}>
                create an account
              </Link>
            </PrimaryText>
          </div>
          <SignIn afterSignOutUrl={"/"} afterSignInUrl="/dashboard" />
        
        </div>
      </div>
    
    </main>
  );
};

export default Page;
