"use client"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Mock data - in a real application, this would come from an API or database
const featuredPost = {
  title: "The Future of Web Development: Trends to Watch in 2024",
  excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development. From AI-driven design to WebAssembly, discover what's next in our ever-evolving digital landscape.",
  image: "/placeholder.svg?height=600&width=1200",
  author: "Alex Johnson",
  date: "May 15, 2024",
  category: "Technology"
}

const recentPosts = [
  { title: "10 Essential VS Code Extensions for Productivity", image: "/placeholder.svg?height=400&width=600", category: "Tools" },
  { title: "Understanding the JAMstack Architecture", image: "/placeholder.svg?height=400&width=600", category: "Web Development" },
  { title: "The Rise of Headless CMS in Modern Web Design", image: "/placeholder.svg?height=400&width=600", category: "CMS" },
  { title: "Mastering CSS Grid: Advanced Layout Techniques", image: "/placeholder.svg?height=400&width=600", category: "CSS" },
  { title: "Optimizing React Applications for Performance", image: "/placeholder.svg?height=400&width=600", category: "React" },
  { title: "Introduction to Web Accessibility (A11y)", image: "/placeholder.svg?height=400&width=600", category: "Accessibility" },
]

const categories = [
  { name: "Technology", icon: "💻" },
  { name: "Design", icon: "🎨" },
  { name: "Development", icon: "⚙️" },
  { name: "Career", icon: "💼" },
]

export default function BlogHomepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold">TechBlog</Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/categories" className="hover:underline">Categories</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section with Featured Post */}
        <section className="relative rounded-xl overflow-hidden">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={1200}
            height={600}
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <p className="text-sm font-medium mb-2">{featuredPost.category}</p>
            <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
            <p className="mb-4 max-w-2xl">{featuredPost.excerpt}</p>
            <Button asChild>
              <Link href="/blog/featured-post">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                      Read <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <span className="text-4xl mb-2 block">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost" asChild>
                    <Link href={`/category/${category.name.toLowerCase()}`}>
                      View Posts
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary text-primary-foreground rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest tech insights and tips.</p>
            <form className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary"
              />
              <Button type="submit" variant="secondary">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About TechBlog</h3>
              <p className="text-muted-foreground">
                Bringing you the latest in technology, web development, and design. Our mission is to educate and inspire the next generation of tech innovators.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            © 2024 TechBlog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}