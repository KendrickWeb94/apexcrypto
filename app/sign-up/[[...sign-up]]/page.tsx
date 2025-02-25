import {  SignUp } from "@clerk/nextjs";
import AuthBg from "@/public/imgs/auth-bg.png";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PrimaryText from "@/components/ui/primary-text";
import Link from "next/link";

export { AuthBg };

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="w-full  mt-52 h-screen flex items-center justify-center">
   
        <div className="relative   items-center justify-center flex flex-col h-screen space-y-5 z-30">
          <SignUp afterSignOutUrl={"/"} afterSignInUrl="/dashboard" />
          <div className="flex text-center justify-center flex-wrap items-center gap-2">
            Already have an account? easy peasy just 
            <PrimaryText>
                <Link href={"/sign-in"}>
                    login in instead
                </Link>
            </PrimaryText>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
}
