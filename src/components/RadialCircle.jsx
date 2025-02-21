const RadialCircle = ({ size = 200 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle, #7ed957 0%, rgba(32, 30, 38, 0) 30%)",
        borderRadius: "50%",
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    ></div>
  );
};

export default RadialCircle;