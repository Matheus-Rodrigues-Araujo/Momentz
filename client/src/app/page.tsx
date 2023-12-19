'use client'
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'
import Login from "@/components/loginForm";

export default function Home() {
  return (
    <Login/>
  )
}