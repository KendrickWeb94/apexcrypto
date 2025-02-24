import { SignIn } from "@clerk/nextjs";
import AuthBg from "@/public/imgs/auth-bg.png";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PrimaryText from "@/components/ui/primary-text";
import Link from "next/link";

export { AuthBg };

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="w-full h-screen mt-24 flex items-center justify-center">
        <Image
          src={AuthBg}
          alt=""
          className="w-full h-full object-cover fixed top-0 z-10"
        />
           <div className="relative space-y-5 z-30">
          <SignIn />
          <div className="flex items-center gap-2">
            Don't have an account? don't worry you can
            <PrimaryText>
                <Link href={"/sign-up"}>
                    create an account?
                </Link>
            </PrimaryText>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
