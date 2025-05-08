// import React from "react";

// export default function TaskModal({ isOpen, onClose, onSubmit, newTask, onChange }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">New Task</h2>
//         <input
//           name="title"
//           placeholder="Title"
//           value={newTask.title}
//           onChange={onChange}
//           className="w-full border p-2 mb-3"
//         />
//         <input
//           name="description"
//           placeholder="Description"
//           value={newTask.description}
//           onChange={onChange}
//           className="w-full border p-2 mb-3"
//         />
//         <input
//           name="assignee"
//           placeholder="Assignee"
//           value={newTask.assignee}
//           onChange={onChange}
//           className="w-full border p-2 mb-3"
//         />
//         <div className="flex justify-end gap-2">
//           <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onSubmit}>Add</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function TaskModal({ isOpen, onClose, onSubmit, newTask, onChange }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Add New Task</h2>

        <input
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={onChange}
          className="w-full border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-100 rounded-md px-4 py-2 mb-4 outline-none"
        />
        <input
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={onChange}
          className="w-full border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-100 rounded-md px-4 py-2 mb-4 outline-none"
        />
        <input
          name="assignee"
          placeholder="Assign to"
          value={newTask.assignee}
          onChange={onChange}
          className="w-full border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-100 rounded-md px-4 py-2 mb-6 outline-none"
        />

        <div className="flex justify-end gap-3">
          <button
            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            onClick={onSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
