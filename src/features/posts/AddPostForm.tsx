// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { postAdded } from "./post.slice";
// import { selectAllUsers } from "../users/users.slice";

// const AddPostForm = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [userId, setUserId] = useState("");
//   const dispatch = useDispatch();
//   const users = useSelector(selectAllUsers);

//   const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setTitle(e.target.value);
//   const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
//     setContent(e.target.value);

//   const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) =>
//     setUserId(e.target.value);

//   const onSavePostClicked = () => {
//     if (title && content) {
//       dispatch(postAdded(title, content, userId));
//       setTitle("");
//       setContent("");
//     }
//   };

//   const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

//   const usersOptions = users.map((user) => (
//     <option key={user.id} value={user.id}>
//       {user.name}
//     </option>
//   ));

//   return (
//     <section className="flex flex-col align-middle items-center">
//       <h2 className="text-2xl font-bold m-6">Add a New Post</h2>
//       <form className="flex flex-col border min-w-96 p-4">
//         <label className="font-bold text-lg mb-4" htmlFor="postTitle">
//           Post Title
//         </label>
//         <input
//           type="text"
//           id="postTitle"
//           name="postTitle"
//           value={title}
//           onChange={onTitleChanged}
//           className="mb-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//         <label className="font-bold text-lg mb-4" htmlFor="postAuther"></label>
//         <select
//           className="mb-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           id="postAuther"
//           value={userId}
//           onChange={onAuthorChanged}
//         >
//           <option value="">Select Author</option>
//           {usersOptions}
//         </select>

//         <label className="font-bold text-lg mb-4" htmlFor="postContent">
//           Content
//         </label>
//         <textarea
//           id="postContent"
//           name="postContent"
//           value={content}
//           onChange={onContentChanged}
//           className="mb-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//         <button
//           className="btn btn-outline"
//           onClick={onSavePostClicked}
//           disabled={!canSave}
//           type="button"
//         >
//           Save Post
//         </button>
//       </form>
//     </section>
//   );
// };

// export default AddPostForm;
