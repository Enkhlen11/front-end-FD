"use client";

import { CloudinaryUpload } from "@/components/CloudinaryUpload";
import { useState } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  const [currentSlide, setcurrentSlide] = useState(0);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
