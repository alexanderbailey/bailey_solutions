import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Bailey Solutions Logo" width={200} height={48} />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-primary text-primary-foreground py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)]">
            Design. Deploy. Deliver.
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Expert software development to transform your ideas into powerful, scalable solutions.
          </p>
          <a href="#contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your software project to life? Send us a message and we'll get back to you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-[family-name:var(--font-space-grotesk)]">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Tell us about your project and let's discuss how we can help
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action="https://api.web3forms.com/submit" method="POST">
                  <Input type="hidden" name="access_key" value="b0a93e8c-3310-4344-a37f-fe2432257902" />
                  <Input type="hidden" name="subject" value="New Project Inquiry" />
                  <Input type="text" name="name" placeholder="Your Name" className="h-12 w-full" required />
                  <Input type="email" name="email" placeholder="Your Email" className="h-12 w-full" required />
                  <Input type="text" name="company" placeholder="Your Company (optional)" className="h-12 w-full" />
                  <Textarea name="message" placeholder="Tell us about your project, timeline, and goals..." className="h-12 min-h-[140px] resize-none" required></Textarea>
                  <Input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  <Input type="hidden" name="redirect" value="https://bailey.je" />
                  <div className="h-captcha" data-captcha="true"></div>
                  <div className="pt-2">
                    <Button type="submit" className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      Send Message
                    </Button>
                  </div>
                </form>
                <script src="https://web3forms.com/client/script.js" async defer></script>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image src="/logo.png" alt="Bailey Solutions Logo" width={200} height={48} />
            </div>
            <p className="text-muted-foreground mb-6">Design. Deploy. Deliver.</p>
            <div className="text-sm text-muted-foreground">© 2024 Bailey Solutions. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
