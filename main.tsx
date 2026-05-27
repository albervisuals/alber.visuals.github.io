@import "tailwindcss";

* {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0a0a;
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #f59e0b;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #fbbf24;
}

/* Image hover brightness */
.gallery-img {
  transition: filter 0.4s ease;
}
.gallery-img:hover {
  filter: brightness(1.05);
}

