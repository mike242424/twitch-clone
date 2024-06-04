const StreamKey = ({ streamKey }) => {
  return (
    <div className="p-2 flex gap-2">
      <div className="font-bold text-slate-800">Stream Key:</div>
      <span>{streamKey}</span>
    </div>
  );
};

export default StreamKey;
