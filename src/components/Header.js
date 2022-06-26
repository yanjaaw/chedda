import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className="px-4 py-2">
      <nav className="max-w-7xl mx-auto px-4" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
          <img
              src="chedda.png"
              width='50'
              alt="Chedda"
            />
          </a>
          <div className="ml-10 space-x-4"><ConnectButton /></div>
        </div>
      </nav>
    </header>
  );
}
