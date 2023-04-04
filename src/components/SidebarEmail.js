const SidebarEmail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position:"sticky",
        top:"0",
      }}
    >
      <span
      className="email"
        style={{
          color: "#ccd6f6",
          textAlign: "center",
          writingMode: "vertical-rl",
        }}
      >
        paul2001vel@gmail.com
      </span>
    </div>

  );
};

export default SidebarEmail;
