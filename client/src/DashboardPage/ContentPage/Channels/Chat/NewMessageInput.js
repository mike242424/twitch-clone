const NewMessageInput = () => {
  return (
    <div className="flex lg:flex-col gap-2 w-full pt-4">
      <input
        className="p-2 rounded w-full"
        type="text"
        placeholder="Send a message"
      />
      <button className="bg-slate-800 text-white p-2 rounded">Send</button>
    </div>
  );
};

export default NewMessageInput;
