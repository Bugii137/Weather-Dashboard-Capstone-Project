export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4">
      ⚠️ {message}
    </div>
  );
}

