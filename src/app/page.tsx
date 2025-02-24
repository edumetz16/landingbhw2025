
import Image from "next/image"
import Link from "next/link"
import { Form } from "@/components/form"
import { GuessForm } from "@/components/guess_form"

export default function Home() {

  

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div></div>
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
              <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="#22488b" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              <svg role="img" fill="#22488b" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Redefining the way you shop online <br/> for the planet.</h1>
            <p className="mt-6 text-2xl font-light">
            Something new is coming… What do you think it is?
            </p>
              <GuessForm />
            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Body care", "Facial care", "Decoration", "Bags", "Cleaning"].map((category) => (
                <Button key={category} variant="secondary" className="rounded-full bg-white/80">
                  {category}
                </Button>
              ))}
            </div> */}
          </div>
        </section>

        {/* <section className="py-20">
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
        </section> */}

        <section className="py-8">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Become a Vendor</h2>
              <p className="mt-4 text-lg font-light max-w-md mx-auto">
              Join our network of conscious products and reach people who care about sustainability.
              </p>
            </div>
            <Form />
          </div>
        </section>
      </main>
      <footer className="py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">Copyright © 2025 Bluehouse World</p>
          {/* <nav className="flex gap-4 text-sm">
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
          </nav> */}
        </div>
      </footer>
    </div>
  )
}

