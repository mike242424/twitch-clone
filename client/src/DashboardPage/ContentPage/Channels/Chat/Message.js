const Message = ({ author, content }) => {
  return (
    <div>
      <span className="font-bold text-sm text-slate-600">{author}:</span>
      <span className="mx-1 text-sm">{content}</span>
    </div>
  );
};

export default Message;
