const Tag = ({ text, color = "bg-blue-500/20 text-blue-200" }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium ${color} border border-white/10`}>
    {text}
  </span>
);

export default Tag;