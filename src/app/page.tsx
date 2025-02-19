import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Globe2, User } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Bluehouse Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              <Globe2 className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              <User className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 relative">
          <div className="w-full h-full absolute top-0 left-0 -z-[1]">
            <Image fill src={`/hero.jpg`} layout="fill" objectFit="cover" alt="Hero Image" />
          </div>
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Redefining the way you shop online <br/> for the planet.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
            Something new is coming… What do you think it is?
            </p>
            <div className="mx-auto mt-8 flex max-w-md items-center space-x-2">
              <Input placeholder="Make a guess..." className="h-12 rounded-full bg-white" />
              <Button size="icon" className="h-12 px-12 rounded-3xl">
                Submit
              </Button>
            </div>
            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Body care", "Facial care", "Decoration", "Bags", "Cleaning"].map((category) => (
                <Button key={category} variant="secondary" className="rounded-full bg-white/80">
                  {category}
                </Button>
              ))}
            </div> */}
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-center text-3xl font-bold">How it works</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Curation of Vendors",
                  description: "Explore ethical items: Vegan, Fair, Cruelty-free, curated Sustainability Statements.",
                },
                {
                  title: "Discover and Explore",
                  description: "Discover European products online. Browse categories or search for personalized finds.",
                },
                {
                  title: "Filter and Evaluate",
                  description: "Refine searches for informed choices: price, brands, sustainability labels.",
                },
                {
                  title: "Secure Shopping",
                  description: "Safe buying, monitor shipping, create account for feedback and community.",
                },
              ].map((step, index) => (
                <Card key={index} className="border-none bg-[#FFF5EB]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F0FF] text-lg font-semibold">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E6F0FF] py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Become a Vendor</h2>
              <p className="mt-4 text-muted-foreground">
                Join our marketplace of conscious products and reach customers who care about sustainability
              </p>
            </div>
            <form className="mx-auto mt-8 max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Business Name</Label>
                <Input id="name" placeholder="Your business name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="https://" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Tell us about your products</Label>
                <Textarea id="description" placeholder="Describe your products and their sustainable aspects" />
              </div>
              <Button className="w-full">Apply to Sell</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 Bluehouse. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

