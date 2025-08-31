import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Input, Textarea, Button, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Contact = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      addToast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        color: "success",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Email",
      value: "tamangpratik0102@gamil.com",
      link: "mailto:tamangpratik0102@gamil.com",
    },
    {
      icon: "lucide:phone",
      title: "Phone",
      value: "9863896222",
      link: "tel:+ 977 9863896222",
    },
    {
      icon: "lucide:map-pin",
      title: "Location",
      value: "kathmandu",
      link: "https://maps.app.goo.gl/NYrTjjfxz4cS4Ayf7",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-content2/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto text-pretty">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Card className="h-full">
                  <CardBody className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                      <div className="space-y-6">
                        {contactInfo.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 group"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon icon={item.icon} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{item.title}</h4>
                              <p className="text-foreground/70 group-hover:text-primary transition-colors">
                                {item.value}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                      <div className="flex gap-4">
                       
                        <motion.a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Icon icon="logos:linkedin-icon" className="w-5 h-5" />
                          <span className="sr-only">LinkedIn</span>
                        </motion.a>
                        <motion.a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Icon icon="logos:instagram-icon" className="w-5 h-5" />
                          <span className="sr-only">Instagram</span>
                        </motion.a>
                        <motion.a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Icon icon="logos:twitter" className="w-5 h-5" />
                          <span className="sr-only">X (Twitter)</span>
                        </motion.a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card>
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          type="text"
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="bordered"
                          isRequired
                        />
                        <Input
                          type="email"
                          label="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="bordered"
                          isRequired
                        />
                      </div>
                      <Input
                        type="text"
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="bordered"
                        isRequired
                      />
                      <Textarea
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="bordered"
                        minRows={5}
                        isRequired
                      />
                      <Button
                        type="submit"
                        color="primary"
                        className="w-full md:w-auto"
                        isLoading={isSubmitting}
                        startContent={!isSubmitting && <Icon icon="lucide:send" />}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};