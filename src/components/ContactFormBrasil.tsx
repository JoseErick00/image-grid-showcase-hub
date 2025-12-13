import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactFormBrasil = () => {
  const { toast } = useToast();
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
        title: "Mensagem Enviada!",
        description: "Obrigado pela sua mensagem. Retornaremos em breve.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erro",
        description: "Falha ao enviar mensagem. Por favor, tente novamente.",
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
        placeholder="Seu Nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="font-omne-regular"
      />
      
      <Input
        type="email"
        name="email"
        placeholder="Seu E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="font-omne-regular"
      />
      
      <Textarea
        name="message"
        placeholder="Sua Mensagem"
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
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
};

export default ContactFormBrasil;
