import Link from "next/link";
import NotFoundImg from "@/public/imgs/404-2.png";
import Image from "next/image";
import ArrowedButton from "@/components/ui/arrowed-button";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src={NotFoundImg} alt="404 Image" width={400} height={400} />
        <h2 className="text-8xl bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50 text-transparent">
          404
        </h2>
        <h1 className="text-primary text-center text-5xl">
          We’ve lost this page
        </h1>
        <p className="text-white/60 text-center">
          Sorry, this page you are looking for doesn’t exist or has been removed
        </p>
        <Link href={"/"}>
          <ArrowedButton>Back to home</ArrowedButton>
        </Link>
      </div>
      <Footer />
    </div>
  );
}