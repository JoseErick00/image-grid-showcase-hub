import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const location = useLocation();
  const isBrasilPage = location.pathname.startsWith('/brasil');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (error) throw error;
      
      toast({
        title: isBrasilPage ? "Mensagem Enviada!" : "Message Sent!",
        description: isBrasilPage 
          ? "Obrigado pela sua mensagem. Entraremos em contato em breve."
          : "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: isBrasilPage ? "Erro" : "Error",
        description: isBrasilPage 
          ? "Falha ao enviar mensagem. Tente novamente."
          : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        type="text"
        name="name"
        placeholder={isBrasilPage ? "Seu Nome" : "Your Name"}
        value={formData.name}
        onChange={handleChange}
        required
        className="font-omne-regular"
      />
      
      <Input
        type="email"
        name="email"
        placeholder={isBrasilPage ? "Seu Email" : "Your Email"}
        value={formData.email}
        onChange={handleChange}
        required
        className="font-omne-regular"
      />
      
      <Textarea
        name="message"
        placeholder={isBrasilPage ? "Sua Mensagem" : "Your Message"}
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="font-omne-regular resize-none"
      />
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full font-omne-medium"
      >
        {isSubmitting 
          ? (isBrasilPage ? "Enviando..." : "Sending...") 
          : (isBrasilPage ? "Enviar Mensagem" : "Send Message")}
      </Button>
    </form>
  );
};

export default ContactForm;