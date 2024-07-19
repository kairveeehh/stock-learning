
"use client";
import React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


const Learn: React.FC = () =>{
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background px-4 py-3 shadow md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="text-lg font-bold">Stock Learning Platform</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Concepts
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Resources
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              About
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-background py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Unlock the Power of Stock Trading
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Discover the secrets of successful stock trading with our comprehensive learning platform. Master
                techniques like Monte Carlo simulation and gain the confidence to make informed investment decisions.
              </p>
              <div className="flex gap-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div>
              <img
                src="/1.webp"
                width="800"
                height="500"
                alt="Hero Image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div>
              <img
                src="/2.webp"
                width="800"
                height="500"
                alt="Monte Carlo Simulation"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Mastering Monte Carlo Simulation
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Dive deep into the world of Monte Carlo simulation, a powerful technique for modeling and analyzing
                stock market scenarios. Learn how to leverage this tool to make informed investment decisions and
                minimize risk.
              </p>
              <div className="flex gap-4">
                <Button>Explore Simulation</Button>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <span>Learn More</span>
                  {/* <ArrowRightIcon className="h-4 w-4" /> */}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Comprehensive Stock Trading Concepts
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Explore a wide range of stock trading concepts, from fundamental analysis to technical indicators. Our
                platform provides in-depth explanations, interactive visualizations, and real-world examples to help you
                develop a deep understanding of the stock market.
              </p>
              <div className="flex gap-4">
                <Button>Explore Concepts</Button>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <span>Learn More</span>
                  {/* <ArrowRightIcon className="h-4 w-4" /> */}
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/3.jpg"
                width="800"
                height="500"
                alt="Stock Trading Concepts"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div>
              <img
                src="/4.jpeg"
                width="800"
                height="500"
                alt="Educational Resources"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Comprehensive Educational Resources
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Enhance your stock trading knowledge with our extensive educational resources. Explore video tutorials,
                in-depth articles, and interactive webinars to stay ahead of the curve.
              </p>
              <div className="flex gap-4">
                <Button>Explore Resources</Button>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <span>Learn More</span>
                  {/* <ArrowRightIcon className="h-4 w-4" /> */}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Stay Up-to-Date with Our Newsletter
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Subscribe to our newsletter to receive the latest updates, exclusive offers, and valuable insights from
                our experts.
              </p>
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Subscribe to our newsletter</CardTitle>
                  <CardDescription>Stay up to date with our latest news, offers, and updates.</CardDescription>
                </CardHeader>
                <CardContent className="py-0">
                  <form className="flex flex-col gap-4">
                    <Input type="email" placeholder="Enter your email" required />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="promotions" defaultChecked />
                      <Label htmlFor="promotions" className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to receive promotional emails.
                      </Label>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-row justify-between">
                  <Button type="submit" variant="outline">
                    Back
                  </Button>
                  <Button type="submit">Subscribe</Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <img
                src="/5.jpeg"
                width="800"
                height="500"
                alt="Newsletter"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="text-lg font-bold">Stock Learning Platform</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Concepts
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Resources
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Terms
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">&copy; 2024 Stock Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
export default Learn

// function ArrowRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   )
// }


// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }
