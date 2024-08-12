const StreamKey = ({ streamKey }) => {
  return (
    <div className="p-2 flex gap-2">
      <div className="font-bold text-white">Stream Key:</div>
      <span className="text-white">{streamKey}</span>
    </div>
  );
};

export default StreamKey;
