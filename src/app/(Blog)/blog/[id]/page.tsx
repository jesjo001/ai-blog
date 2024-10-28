'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// Mock data for the blog post
const post = {
  title: "The Future of Artificial Intelligence in Web Development",
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Tech enthusiast and AI specialist with over 10 years of experience in the industry."
  },
  date: "May 15, 2024",
  readingTime: "8 min read",
  image: "/placeholder.svg?height=600&width=1200",
  content: `
    <h2>Introduction</h2>
    <p>Artificial Intelligence (AI) is rapidly transforming various industries, and web development is no exception. As we move towards more intelligent and adaptive websites, AI is playing a crucial role in shaping the future of how we build and interact with web applications.</p>

    <h2>The Impact of AI on Personalization</h2>
    <p>One of the most significant impacts of AI in web development is in the area of personalization. AI algorithms can analyze user behavior, preferences, and interactions to create highly tailored experiences. This level of customization goes beyond simple A/B testing, allowing websites to dynamically adjust their content, layout, and functionality based on individual user needs.</p>

    <h2>AI-Powered Chatbots and Virtual Assistants</h2>
    <p>Another exciting application of AI is in the realm of chatbots and virtual assistants. These AI-powered tools are becoming increasingly sophisticated, capable of handling complex queries and providing human-like interactions. As natural language processing continues to improve, we can expect to see chatbots that are nearly indistinguishable from human customer service representatives.</p>

    <h2>Revolutionizing Web Design with AI</h2>
    <p>AI is also revolutionizing the way we approach web design. Generative AI tools can now create entire layouts, color schemes, and even write copy based on a few input parameters. While these tools won't replace human designers, they can significantly speed up the design process and provide inspiration for unique layouts.</p>

    <h2>Code Example: Implementing an AI Chatbot</h2>
    <pre><code>
import { useState } from 'react';
import { OpenAI } from 'openai';

const AIChatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const openai = new OpenAI({ apiKey: 'your-api-key' });
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: input }],
      model: 'gpt-3.5-turbo',
    });
    setResponse(completion.choices[0].message.content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default AIChatbot;
    </code></pre>

    <h2>Conclusion</h2>
    <p>The future of web development is intrinsically linked with the advancements in AI. As these technologies continue to evolve, we can expect to see websites that are more intelligent, adaptive, and user-centric than ever before. The key for web developers will be to stay ahead of the curve, continually learning and adapting to these new AI-driven paradigms.</p>
  `,
  tags: ["Artificial Intelligence", "Web Development", "Future Tech"],
  relatedPosts: [
    { title: "10 AI Tools Every Web Developer Should Know", slug: "ai-tools-for-developers" },
    { title: "The Rise of AI-Generated Content in Web Design", slug: "ai-generated-content" },
    { title: "How Machine Learning is Changing UX Design", slug: "machine-learning-ux-design" },
  ],
  comments: [
    {
      id: 1,
      author: "John Smith",
      avatar: "/placeholder.svg?height=50&width=50",
      content: "Great article! I'm excited to see how AI will continue to shape the web development landscape.",
      date: "May 16, 2024",
      replies: [
        {
          id: 2,
          author: "Jane Doe",
          avatar: "/placeholder.svg?height=50&width=50",
          content: "Thanks, John! I agree, the potential is truly exciting.",
          date: "May 16, 2024",
        }
      ]
    },
    {
      id: 3,
      author: "Alice Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      content: "I'd love to see more concrete examples of how AI is being used in web development today. Any specific case studies you can share?",
      date: "May 17, 2024",
      replies: []
    }
  ]
}

export default function SinglePost() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />

      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold">TechBlog</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-[60vh] object-cover rounded-lg mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav>
                      <ul className="space-y-2">
                        <li><a href="#introduction" className="hover:underline">Introduction</a></li>
                        <li><a href="#personalization" className="hover:underline">AI and Personalization</a></li>
                        <li><a href="#chatbots" className="hover:underline">AI-Powered Chatbots</a></li>
                        <li><a href="#web-design" className="hover:underline">AI in Web Design</a></li>
                        <li><a href="#code-example" className="hover:underline">Code Example</a></li>
                        <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
                      </ul>
                    </nav>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Share</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button size="icon" variant="outline">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">About the Author</h2>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{post.author.name}</h3>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{relatedPost.title}</CardTitle>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" asChild>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <div className="space-y-8">
                  {post.comments.map((comment) => (
                    <Card key={comment.id}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={comment.avatar} alt={comment.author} />
                            <AvatarFallback>{comment.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{comment.author}</CardTitle>
                            <p className="text-sm text-muted-foreground">{comment.date}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{comment.content}</p>
                        {comment.replies.length > 0 && (
                          <div className="mt-4 ml-8 space-y-4">
                            {comment.replies.map((reply) => (
                              <Card key={reply.id}>
                                <CardHeader>
                                  <div className="flex items-center space-x-4">
                                    <Avatar>
                                      <AvatarImage src={reply.avatar} alt={reply.author} />
                                      <AvatarFallback>{reply.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <CardTitle>{reply.author}</CardTitle>
                                      <p className="text-sm text-muted-foreground">{reply.date}</p>
                                    </div>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <p>{reply.content}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Reply
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Leave a Comment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                      </div>
                      <Textarea placeholder="Your comment" rows={4} />
                      <Button type="submit">Post Comment</Button>
                    </form>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-muted  mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-4">Stay updated with our latest tech insights and tips.</p>
            <form className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          <Separator className="my-8" />
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">© 2024 TechBlog. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}