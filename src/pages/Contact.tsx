import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Formspree endpoint - Update to info@wieldi.org form when Zoho Mail is activated
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgwlrqv";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization || "Not provided",
          subject: formData.subject,
          message: formData.message,
          _subject: `Contact Form: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });

        setFormData({
          fullName: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-gold-soft font-semibold text-sm uppercase tracking-wider mb-4 block">
              Contact Us
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
              We welcome partnerships, collaborations, and inquiries from individuals, 
              organizations, and institutions committed to advancing women's inclusion 
              and leadership in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container-narrow mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Information */}
            <div>
              <div className="bg-primary text-primary-foreground rounded-lg px-6 py-4 mb-8">
                <h2 className="font-heading text-2xl font-semibold">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-8">
                {/* Office Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                    <address className="not-italic text-muted-foreground leading-relaxed">
                      Ridds Plaza, Suite 38, Plot 740<br />
                      Agunwa Anaekwe Street<br />
                      Off Olusegun Obasanjo Way, Wuye<br />
                      Abuja, Nigeria
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:wieldinitiative22@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      wieldinitiative22@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+2348161206990" 
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +234 816 120 6990
                      </a>
                      <a 
                        href="tel:+2347087361193" 
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        +234 708 736 1193
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday – Friday | 9:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-xl p-5 md:p-8">
                <div className="bg-primary text-primary-foreground rounded-lg px-6 py-4 mb-6">
                  <h2 className="font-heading text-2xl font-semibold">
                    Send Us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam protection - hidden from users */}
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      maxLength={150}
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Enter your organization name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      maxLength={200}
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter the subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="navy" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
