import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";

export default function SocialLinkItem({ socialName, socialUrl }) {
  const icons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
  };

  const icon = icons[socialName?.toLowerCase()] || (
    <Globe className="w-5 h-5" />
  );

  return (
    <Link
      href={socialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {icon}
    </Link>
  );
}
