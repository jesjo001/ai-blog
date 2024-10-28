'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const teamMembers = [
  { name: "Jane Doe", role: "Founder & Editor-in-Chief", image: "/placeholder.svg?height=300&width=300" },
  { name: "John Smith", role: "Senior Tech Writer", image: "/placeholder.svg?height=300&width=300" },
  { name: "Emily Johnson", role: "UX/UI Specialist", image: "/placeholder.svg?height=300&width=300" },
  { name: "Michael Brown", role: "Data Science Contributor", image: "/placeholder.svg?height=300&width=300" },
]

const timeline = [
  { year: 2020, event: "TechBlog founded" },
  { year: 2021, event: "Reached 100,000 monthly readers" },
  { year: 2022, event: "Launched podcast series" },
  { year: 2023, event: "Opened community forum" },
  { year: 2024, event: "Celebrating 4 years of tech insights" },
]

export default function AboutUs() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold">TechBlog</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/categories" className="hover:underline">Categories</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="space-y-16">
        {/* Hero Section with Parallax */}
        <section className="relative h-[60vh] overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Team working together"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">About TechBlog</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Empowering the tech community with cutting-edge insights and knowledge since 2020.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl mb-8">
              At TechBlog, we're passionate about demystifying technology and making it accessible to everyone. 
              Our goal is to inspire, educate, and empower our readers to embrace the digital future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  Staying at the forefront of technological advancements and sharing cutting-edge insights.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  Breaking down complex topics into understandable content for tech enthusiasts of all levels.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  Fostering a vibrant community of learners, creators, and innovators in the tech space.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Animated Timeline */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center mb-8"
              >
                <div className="w-24 text-right mr-4 font-bold">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex-1 ml-4 p-4 bg-muted rounded-lg">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="mb-8">Subscribe to our newsletter for weekly tech insights and updates.</p>
              <form className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground text-primary flex-grow"
                />
                <Button type="submit" variant="secondary">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">© 2024 TechBlog. All rights reserved.</p>
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
      </footer>
    </div>
  )
}