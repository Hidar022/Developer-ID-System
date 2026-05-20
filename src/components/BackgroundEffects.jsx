function BackgroundEffects() {
  return (
    <>

      {/* MAIN DARK BG */}
      <div className="fixed inset-0 bg-[#020817] -z-50"></div>

      {/* BLUE GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full -z-40"></div>

      {/* YELLOW GLOW */}
      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full -z-40"></div>

      {/* GRID */}
      <div className="fixed inset-0 opacity-[0.04] -z-30 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* RADIAL LIGHT */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)] -z-20"></div>

    {/* FLOATING LIGHT */}
    <div className="fixed top-[20%] left-[10%] w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full animate-pulse -z-10"></div>

    <div className="fixed bottom-[10%] right-[10%] w-[250px] h-[250px] bg-yellow-400/10 blur-3xl rounded-full animate-pulse -z-10"></div>
        </>
  );
}

export default BackgroundEffects;