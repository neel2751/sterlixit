"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/sterlixit",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sales@sterlixit.co.uk", label: "Email" },
  {
    icon: Phone,
    href: "tel:+441234567890",
    label: "Phone",
  },
];

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function MaintenanceFooter() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="w-full border-t border-border/50 bg-card/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            >
              <span className="text-primary-foreground font-bold text-sm">
                S
              </span>
            </motion.div>
            <span className="font-semibold text-foreground">Sterlixit</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-right flex flex-col items-center md:items-end gap-2"
          >
            <motion.a
              href="tel:020 8004 3327"
              whileHover={{ color: "var(--primary)" }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              020 8004 3327
            </motion.a>
            <motion.a
              href="mailto:sales@sterlixit.co.uk"
              whileHover={{ color: "var(--primary)" }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              sales@sterlixit.co.uk
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-border/30 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Sterlixit. All rights reserved.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center justify-center gap-4 mt-2"
          >
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-muted-foreground/50">·</span>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.footer>
  );
}
