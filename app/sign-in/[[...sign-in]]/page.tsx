import {  SignIn } from "@clerk/nextjs";
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
      <div className="w-full  mt-20 h-screen flex items-center justify-center">
       
        <div className="relative   items-center justify-center flex flex-col h-screen space-y-5 z-30">
          <SignIn />
          <div className="flex text-center justify-center flex-wrap items-center gap-2">
            Don&apos;t have an account? don&apos;t worry 
            <PrimaryText>
                <Link href={"/sign-up"}>
                    create an account
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
