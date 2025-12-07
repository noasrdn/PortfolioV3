"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully! ✨",
          description: "Thank you for reaching out. I'll get back to you soon!",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        e.currentTarget.reset()
      } else {
        toast({
          title: "Oops! Something went wrong",
          description: result.error || "Failed to send message. Please try again or contact me directly.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Connection error",
        description: "Unable to send message. Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-brand-rose/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/10 to-brand-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-zinc-900/50 border-zinc-700 focus:border-brand-rose focus:ring-brand-rose/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-zinc-900/50 border-zinc-700 focus:border-brand-rose focus:ring-brand-rose/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-zinc-900/50 border-zinc-700 focus:border-brand-rose focus:ring-brand-rose/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-zinc-900/50 border-zinc-700 focus:border-brand-rose focus:ring-brand-rose/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-blue to-brand-rose hover:from-brand-rose hover:to-brand-blue border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
