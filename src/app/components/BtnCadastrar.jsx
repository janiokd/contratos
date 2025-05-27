export default function BtnCadastrar({ children, href }) {
  return (
    <a
      href={href}
      className="w-[179px] h-[48px] rounded-xl bg-[#0990BA] text-white
                 flex items-center justify-center px-16 py-3 hover:bg-[#087ca2] transition"
    >
      {children}
    </a>
  );
}
