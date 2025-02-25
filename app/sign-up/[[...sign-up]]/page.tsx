import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PrimaryText from "@/components/ui/primary-text";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="w-full  mt-52 h-screen flex items-center justify-center">
        <div className="relative   items-center justify-center flex flex-col h-screen space-y-5 z-30">
          <div className="flex text-center justify-center flex-wrap items-center gap-2">
            Already have an account? easy peasy just
            <PrimaryText>
              <Link href={"/sign-in"}>login in instead</Link>
            </PrimaryText>
          </div>
          <SignUp afterSignOutUrl={"/"} afterSignInUrl="/dashboard" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
