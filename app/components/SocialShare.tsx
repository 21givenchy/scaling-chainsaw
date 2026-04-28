import type React from "react";

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex space-x-4 mt-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.46 6c-.78.35-1.6.58-2.46.69.89-.53 1.58-1.37 1.91-2.38-.84.5-1.78.85-2.76 1.05-.8-.85-1.95-1.38-3.2-1.38-2.42 0-4.37 1.95 4.37 4.37 0 .32 0 .63-.04.93-3.62-.18-6.83-1.92-8.95-4.55-.38.66-.6 1.44-.6 2.28 0 1.58.8 2.99 2 3.78-.74 0-1.44-.23-2.05-.63v.06c0 2.2 1.56 4.03 3.63 4.44-.67.2-1.37.33-2.1.33-.52 0-1.04-.05-1.54-.18.54 1.66 2.1 2.87 3.96 2.89-1.43 1.12-3.24 1.79-5.22 1.79-.34 0-.68-.02-1.02-.06 1.9 1.22 4.15 1.92 6.58 1.92 7.88 0 12.11-6.5 12.11-12.11 0-.18 0-.36-.01-.54.83-.6 1.56-1.36 2.14-2.23z"/>
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.21 24 24 23.227 24 22.271V1.729C24 .774 23.21 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialShare;

