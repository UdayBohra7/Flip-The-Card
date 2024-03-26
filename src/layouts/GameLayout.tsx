const GameLayout = ({ children, tittle }: any) => {
  return (
    <div className="container">
      <h2 className="font-bold text-center text-2xl">{tittle}</h2>
      {children}
    </div>
  );
};

export default GameLayout;
