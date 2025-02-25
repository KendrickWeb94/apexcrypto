import { SignIn } from "@clerk/nextjs";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PrimaryText from "@/components/ui/primary-text";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div className="w-full mt-16 h-screen flex items-center justify-center">
        <div className="relative items-center justify-center flex flex-col h-screen space-y-5 z-30">
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
      <Footer />
    </main>
  );
};

export default Page;
