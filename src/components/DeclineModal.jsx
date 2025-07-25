export default function DeclineModal({ visible, onClose, onSave, noteInput, setNoteInput }) {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // Close on background click
      }}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md animate-scale-in">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Decline Reason</h2>
        <label htmlFor="decline-note" className="sr-only">Decline Reason</label>
        <textarea
          id="decline-note"
          rows={4}
          autoFocus
          className="w-full border dark:border-gray-700 p-2 rounded dark:bg-gray-700 dark:text-white"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Enter reason for declining"
        />
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={!noteInput.trim()}
            className={`px-4 py-2 rounded transition text-white ${
              noteInput.trim() ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
